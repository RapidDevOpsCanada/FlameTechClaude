/**
 * One-shot converter: reads articles + reviews out of the legacy
 * src/app/api/seed/route.ts file and writes:
 *   - content/blog/<slug>.mdx for each article
 *   - content/reviews.yaml for the review array
 *
 * Run once before the seed route is deleted. After that the source of
 * truth is the filesystem.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const seedFile = path.join(repoRoot, "src/app/api/seed/route.ts");
const blogOut = path.join(repoRoot, "content/blog");
const reviewsOut = path.join(repoRoot, "content/reviews.yaml");
const tagsFile = path.join(repoRoot, "src/lib/article-tags.ts");

// --- 1. Pull the two literal arrays out of the legacy seed file ----

const seedSrc = await fs.readFile(seedFile, "utf8");

function sliceArrayLiteral(src, declaration) {
  const startIdx = src.indexOf(declaration);
  if (startIdx === -1) {
    throw new Error(`Could not find declaration: ${declaration}`);
  }
  // The type annotation may itself contain `[]` (e.g. SeedArticle[]),
  // so anchor on the `=` after the declaration and pick the first `[`
  // past it as the array start.
  const eqIdx = src.indexOf("=", startIdx);
  if (eqIdx === -1) throw new Error("No = after declaration");
  let i = src.indexOf("[", eqIdx);
  if (i === -1) throw new Error("No [ after declaration");
  const arrStart = i;
  let depth = 0;
  let inStr = null; // "'", '"', or '`' when inside a string literal
  let escape = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (inStr) {
      if (ch === "\\") {
        escape = true;
      } else if (ch === inStr) {
        inStr = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return src.slice(arrStart, i + 1);
    }
  }
  throw new Error("Unterminated array literal");
}

const articlesLiteral = sliceArrayLiteral(
  seedSrc,
  "const articles: SeedArticle[] =",
);
const reviewsLiteral = sliceArrayLiteral(seedSrc, "const reviews: Array<");

// Evaluate each in a CommonJS-ish sandbox. Template literals are valid
// JS so plain `new Function` works.
const articles = new Function(`return ${articlesLiteral};`)();
const reviews = new Function(`return ${reviewsLiteral};`)();

console.log(`Loaded ${articles.length} articles, ${reviews.length} reviews`);

// --- 2. Pull the per-slug tag map ----------------------------------

const tagsSrc = await fs.readFile(tagsFile, "utf8");
const tagsLiteral = sliceObjectLiteral(
  tagsSrc,
  "export const articleTags: Record<string, string[]> =",
);
function sliceObjectLiteral(src, declaration) {
  const startIdx = src.indexOf(declaration);
  if (startIdx === -1) throw new Error(`Missing: ${declaration}`);
  let i = src.indexOf("{", startIdx);
  const start = i;
  let depth = 0;
  let inStr = null;
  let escape = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (inStr) {
      if (ch === "\\") escape = true;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  throw new Error("Unterminated object literal");
}
const articleTags = new Function(`return ${tagsLiteral};`)();

// --- 3. HTML → Markdown converter ----------------------------------

function stripLeadingMetadata(html) {
  // Drop the "📖 X min read · Last updated …" paragraph that the WP
  // export leaves at the top of every body. The frontmatter already
  // carries read_time / published_at, and CLAUDE.md bans emojis.
  return html.replace(
    /^\s*<p[^>]*>\s*📖[^<]*?Last updated[^<]*?<\/p>\s*/i,
    "",
  );
}

function stripCalloutDivs(html) {
  // The seed bodies wrap "Quick Answer" / "Key Takeaways" callouts in
  // <div style="..."> blocks. CLAUDE.md says zero raw HTML in MDX, so
  // unwrap them — keep the content, drop the styled <div>.
  let s = html;
  let prev;
  do {
    prev = s;
    s = s.replace(/<div\b[^>]*>([\s\S]*?)<\/div>/g, (_, inner) => inner);
  } while (s !== prev);
  return s;
}

function htmlToMarkdown(html) {
  let s = stripLeadingMetadata(html);

  // Strip embedded JSON-LD <script> blocks. The page route emits fresh
  // structured data — these stale duplicates would just add noise.
  s = s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  // <figure><img .../><figcaption>...</figcaption></figure>
  // → Markdown image, optionally followed by a caption paragraph.
  s = s.replace(
    /<figure\b[^>]*>([\s\S]*?)<\/figure>/g,
    (_, inner) => {
      const imgMatch = inner.match(/<img\b[^>]*>/i);
      if (!imgMatch) return "";
      const imgTag = imgMatch[0];
      const src =
        imgTag.match(/\bsrc="([^"]+)"/)?.[1] ??
        imgTag.match(/\bsrc='([^']+)'/)?.[1] ??
        "";
      const alt =
        imgTag.match(/\balt="([^"]*)"/)?.[1] ??
        imgTag.match(/\balt='([^']*)'/)?.[1] ??
        "";
      if (!src) return "";
      const captionMatch = inner.match(
        /<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i,
      );
      const caption = captionMatch
        ? captionMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
        : "";
      const md = `![${alt}](${src})`;
      return caption ? `\n\n${md}\n\n*${caption}*\n\n` : `\n\n${md}\n\n`;
    },
  );

  // Standalone <img> outside <figure>.
  s = s.replace(/<img\b[^>]*>/gi, (tag) => {
    const src =
      tag.match(/\bsrc="([^"]+)"/)?.[1] ??
      tag.match(/\bsrc='([^']+)'/)?.[1] ??
      "";
    const alt =
      tag.match(/\balt="([^"]*)"/)?.[1] ??
      tag.match(/\balt='([^']*)'/)?.[1] ??
      "";
    if (!src) return "";
    return `\n\n![${alt}](${src})\n\n`;
  });

  // <hr> → thematic break.
  s = s.replace(/<hr\b[^>]*\/?\s*>/gi, "\n\n---\n\n");

  s = stripCalloutDivs(s);

  // Strip wp-block-* class attributes wholesale.
  s = s.replace(/\s+class="wp-block-[^"]*"/g, "");
  s = s.replace(/\s+class='wp-block-[^']*'/g, "");
  // Any remaining class attribute on h2/h3/p/ul/ol/li.
  s = s.replace(/\s+class="[^"]*"/g, "");

  // <strong> / <em>
  s = s.replace(/<strong>([\s\S]*?)<\/strong>/g, (_, t) => `**${t.trim()}**`);
  s = s.replace(/<em>([\s\S]*?)<\/em>/g, (_, t) => `*${t.trim()}*`);
  // <b>/<i> as fallback
  s = s.replace(/<b>([\s\S]*?)<\/b>/g, (_, t) => `**${t.trim()}**`);
  s = s.replace(/<i>([\s\S]*?)<\/i>/g, (_, t) => `*${t.trim()}*`);

  // Anchors. Preserve relative paths and absolute URLs.
  s = s.replace(
    /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,
    (_, href, text) => `[${text.trim()}](${href})`,
  );

  // <ul>/<ol> handled by extracting list items; we map each <li> to a
  // line, then strip the surrounding ul/ol tags. Lists are emitted as
  // a single chunk surrounded by blank lines (rather than each <li>
  // separated by blank lines, which Markdown renders as loose lists).
  s = s.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, inner) => {
    const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
      .map((m) => `- ${m[1].trim().replace(/\s+/g, " ")}`)
      .join("\n");
    return `\n\n${items}\n\n`;
  });
  s = s.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, inner) => {
    const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
      .map((m, i) => `${i + 1}. ${m[1].trim().replace(/\s+/g, " ")}`)
      .join("\n");
    return `\n\n${items}\n\n`;
  });

  // Headings.
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, t) => `## ${t.trim()}`);
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, t) => `### ${t.trim()}`);
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_, t) => `#### ${t.trim()}`);

  // <br> → space (we never want literal <br> in MDX prose).
  s = s.replace(/<br\s*\/?>/g, " ");

  // Paragraphs: drop the tags; trust blank lines as separators.
  s = s.replace(/<p[^>]*>/g, "");
  s = s.replace(/<\/p>/g, "\n\n");

  // Decode the small set of entities that appear in the seed bodies.
  const entities = {
    "&amp;": "&",
    "&nbsp;": " ",
    "&quot;": '"',
    "&#039;": "'",
    "&apos;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&mdash;": "—",
    "&ndash;": "–",
    "&hellip;": "…",
    "&rsquo;": "’",
    "&lsquo;": "‘",
    "&rdquo;": "”",
    "&ldquo;": "“",
  };
  s = s.replace(
    /&(?:amp|nbsp|quot|#039|apos|lt|gt|mdash|ndash|hellip|rsquo|lsquo|rdquo|ldquo);/g,
    (m) => entities[m] ?? m,
  );

  // Collapse runs of 3+ newlines.
  s = s.replace(/\n{3,}/g, "\n\n");

  // Trim trailing whitespace per line.
  s = s
    .split("\n")
    .map((l) => l.replace(/[ \t]+$/g, ""))
    .join("\n");

  return s.trim() + "\n";
}

// --- 4. Frontmatter writer -----------------------------------------

function escapeYamlString(s) {
  // Always quote with double quotes; escape embedded double quotes and
  // backslashes. Newlines aren't expected in frontmatter values, but
  // collapse just in case.
  const safe = s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
  return `"${safe}"`;
}

function dateOnly(ts) {
  // Accept "YYYY-MM-DD HH:MM:SS" or ISO; emit YYYY-MM-DD.
  if (!ts) return undefined;
  const m = String(ts).match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : undefined;
}

function cleanExcerpt(s) {
  // Format in the legacy seed: "📖 5 min read · Last updated April 2026 <real excerpt>"
  // The date might be a single month + year ("April 2026") or omitted.
  return s
    .replace(
      /^📖\s*\d+\s*min read\s*·\s*Last updated\s+(?:[A-Za-z]+\s+\d{4}\s+)?/i,
      "",
    )
    .trim();
}

function buildFrontmatter(article) {
  const lines = ["---"];
  lines.push(`title: ${escapeYamlString(article.title)}`);
  lines.push(`excerpt: ${escapeYamlString(cleanExcerpt(article.excerpt))}`);
  lines.push(`category: ${escapeYamlString(article.category)}`);
  lines.push(`category_slug: ${escapeYamlString(article.category_slug)}`);
  lines.push(`author: ${escapeYamlString(article.author)}`);
  lines.push(`read_time: ${article.read_time}`);
  if (typeof article.share_count === "number" && article.share_count > 0) {
    lines.push(`share_count: ${article.share_count}`);
  }
  if (article.featured_image) {
    lines.push(`featured_image: ${escapeYamlString(article.featured_image)}`);
  }
  const pub = dateOnly(article.published_at);
  if (pub) lines.push(`published_at: ${escapeYamlString(pub)}`);
  const tags = articleTags[article.slug];
  if (tags && tags.length > 0) {
    lines.push("tags:");
    for (const t of tags) lines.push(`  - ${escapeYamlString(t)}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

// --- 5. Write everything -------------------------------------------

await fs.mkdir(blogOut, { recursive: true });

let written = 0;
for (const a of articles) {
  const bodyMd = htmlToMarkdown(a.body);
  const fm = buildFrontmatter(a);
  const file = path.join(blogOut, `${a.slug}.mdx`);
  await fs.writeFile(file, fm + bodyMd, "utf8");
  written++;
  console.log(`wrote ${path.relative(repoRoot, file)}`);
}
console.log(`Wrote ${written} MDX files.`);

// --- 6. Reviews YAML -----------------------------------------------

function yamlEscape(s) {
  // Use double-quoted block strings to keep the syntax simple.
  return escapeYamlString(s);
}

const reviewsYaml = [
  "# Customer reviews. Source of truth for the homepage Reviews section",
  "# and the LocalBusiness JSON-LD review nodes. Order in this file does",
  "# not matter — sort_order controls render position.",
  "",
  "reviews:",
];
for (const r of reviews) {
  reviewsYaml.push(`  - author: ${yamlEscape(r.author)}`);
  reviewsYaml.push(`    initials: ${yamlEscape(r.initials)}`);
  reviewsYaml.push(`    area: ${yamlEscape(r.area)}`);
  reviewsYaml.push(`    rating: ${r.rating}`);
  reviewsYaml.push(`    relative_date: ${yamlEscape(r.relative_date)}`);
  reviewsYaml.push(`    quote: ${yamlEscape(r.quote)}`);
  reviewsYaml.push(`    featured: ${r.featured ? "true" : "false"}`);
  reviewsYaml.push(`    sort_order: ${r.sort_order}`);
}
await fs.writeFile(reviewsOut, reviewsYaml.join("\n") + "\n", "utf8");
console.log(`wrote ${path.relative(repoRoot, reviewsOut)}`);
