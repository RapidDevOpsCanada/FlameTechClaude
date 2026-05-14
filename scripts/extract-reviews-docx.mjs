#!/usr/bin/env node
/**
 * One-shot extractor: pulls every review out of "Flame Tech Reviews -
 * May 13th copy.docx", saves each author's avatar image to
 * public/images/reviews/<slug>.png, categorises each quote into the
 * site's service taxonomy, and writes the result to
 * content/reviews.yaml.
 *
 * Run with no args. Re-runnable: overwrites the YAML and any avatars
 * with the same slug. Skip-safe for owner-reply blocks.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const docxRoot = "/tmp/ft-reviews"; // already unzipped
const avatarOutDir = path.join(repoRoot, "public", "images", "reviews");
const yamlOut = path.join(repoRoot, "content", "reviews.yaml");

// The Google export's relative dates ("5 days ago", "10 weeks ago"…)
// are anchored to the day the document was generated. Used to convert
// each phrase to an absolute posted_at YYYY-MM-DD so the displayed
// "X time ago" string can be re-derived at render time and stay
// correct as months pass. Bump this whenever you re-export.
const EXPORT_DATE_ISO = "2026-05-13";

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function relativeToPostedAt(phrase, baselineIso) {
  if (!phrase) return null;
  const raw = phrase.trim();
  const p = raw.toLowerCase();
  const base = new Date(`${baselineIso}T00:00:00Z`);
  function shift(days) {
    const d = new Date(base.getTime() - days * 86_400_000);
    return d.toISOString().slice(0, 10);
  }
  if (p === "yesterday") return shift(1);
  if (p === "today" || p === "just now" || /^a few seconds ago$/.test(p)) {
    return shift(0);
  }
  if (/^an? hour ago$|^\d+ hours? ago$/.test(p)) return shift(0);
  if (/^an? day ago$/.test(p)) return shift(1);
  let m;
  if ((m = /^a week ago$/.exec(p))) return shift(7);
  if ((m = /^a month ago$/.exec(p))) return shift(30);
  if ((m = /^a year ago$/.exec(p))) return shift(365);
  if ((m = /^(\d+)\s+days?\s+ago$/.exec(p))) return shift(Number(m[1]));
  if ((m = /^(\d+)\s+weeks?\s+ago$/.exec(p))) return shift(Number(m[1]) * 7);
  if ((m = /^(\d+)\s+months?\s+ago$/.exec(p))) return shift(Number(m[1]) * 30);
  if ((m = /^(\d+)\s+years?\s+ago$/.exec(p))) return shift(Number(m[1]) * 365);
  // Absolute "May 12, 2025" or "Apr 23, 2025" — Google switches from
  // relative to absolute once a review is older than ~1 year.
  if ((m = /^([a-z]{3,})\s+(\d{1,2}),?\s+(\d{4})$/i.exec(raw))) {
    const mon = MONTHS[m[1].slice(0, 3).toLowerCase()];
    if (mon !== undefined) {
      const day = String(Number(m[2])).padStart(2, "0");
      return `${m[3]}-${String(mon + 1).padStart(2, "0")}-${day}`;
    }
  }
  return null;
}

// --- 1. Parse the .rels file → rId map ----------------------------

const relsXml = await fs.readFile(
  path.join(docxRoot, "word", "_rels", "document.xml.rels"),
  "utf8",
);
const rIdToImage = new Map();
for (const m of relsXml.matchAll(
  /<Relationship\s+Id="([^"]+)"[^>]*Type="[^"]*image"[^>]*Target="([^"]+)"/g,
)) {
  rIdToImage.set(m[1], m[2]); // rId21 → media/image10.png
}

// --- 2. Walk paragraphs from document.xml --------------------------

const docXml = await fs.readFile(
  path.join(docxRoot, "word", "document.xml"),
  "utf8",
);

/** Each paragraph collapses to { text, imageRIds[] }. */
function paragraphsFromDoc(xml) {
  const out = [];
  for (const pMatch of xml.matchAll(/<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g)) {
    const inner = pMatch[1];
    // Concatenate every <w:t>...</w:t> run to recover the paragraph text.
    const text = [...inner.matchAll(/<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g)]
      .map((m) => m[1])
      .join("")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    const imageRIds = [
      ...inner.matchAll(/<a:blip\b[^>]*r:embed="([^"]+)"/g),
    ].map((m) => m[1]);
    if (text || imageRIds.length > 0) out.push({ text, imageRIds });
  }
  return out;
}

const paras = paragraphsFromDoc(docXml);
console.log(`Parsed ${paras.length} non-empty paragraphs`);

// --- 3. Group into reviews -----------------------------------------

/**
 * The Google export has a consistent block per review:
 *   [paragraph with avatar image] (sometimes the author name follows
 *     in the same paragraph, sometimes in the next)
 *   Author Name
 *   "N reviews" or "N reviews • M photos" or "Local Guide • N reviews"
 *   "starstarstarstarstar [date] [New|Edited]?"
 *   Quote paragraph(s)
 *   ...
 *   "FlameTech Plumbing & Heating Ltd."          ← owner reply marker
 *   "Owner"
 *   "[time ago]"
 *   "[reply text]"
 *
 * Strategy: scan for paragraphs containing the star block as the
 * anchor. The author is the most-recent non-empty text paragraph
 * before that block (skipping image-only paragraphs and the
 * "N reviews" line). The avatar is the most-recent imageRId before
 * that point. The quote is everything between the star line and the
 * "FlameTech Plumbing & Heating Ltd." marker (or the next anchor,
 * whichever comes first).
 */

const STAR_RE = /^starstarstarstarstar\b/i;
const REVIEWS_LINE_RE = /^(Local Guide|[\d,]+ reviews?)/i;
const OWNER_MARKER = "FlameTech Plumbing & Heating Ltd.";

function findAnchorIndices(paras) {
  const anchors = [];
  for (let i = 0; i < paras.length; i++) {
    if (STAR_RE.test(paras[i].text)) anchors.push(i);
  }
  return anchors;
}

const anchors = findAnchorIndices(paras);
console.log(`Found ${anchors.length} star anchors`);

function lookbackForAuthor(idx, paras) {
  // Walk up: skip the "N reviews" line if present; the next non-empty
  // text line is the author name.
  let imageRId = null;
  for (let j = idx - 1; j >= Math.max(0, idx - 6); j--) {
    const p = paras[j];
    if (!imageRId && p.imageRIds.length > 0) imageRId = p.imageRIds[0];
  }
  let i = idx - 1;
  while (i >= 0) {
    const t = paras[i].text;
    if (!t) {
      i--;
      continue;
    }
    if (REVIEWS_LINE_RE.test(t)) {
      i--;
      continue;
    }
    return { author: t, imageRId };
  }
  return { author: "Anonymous", imageRId };
}

function captureQuote(starIdx, paras, nextAnchorIdx) {
  // Star line carries the date inline ("starstarstarstarstar 4 days ago New").
  const starText = paras[starIdx].text;
  const dateMatch = starText.replace(STAR_RE, "").trim();
  // Strip trailing "New" / "Edited" / "Edited New" suffixes.
  const relativeDate = dateMatch
    .replace(/\b(New|Edited)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // Walk forward; collect text until we hit a stop signal:
  //   - the owner-reply marker
  //   - the next reviewer's avatar (image-only paragraph)
  //   - the next reviewer's "N reviews" / "Local Guide" intro line
  //     (means we ran past the quote into the next entry, which can
  //     happen when there's no owner reply)
  //   - the next star anchor (defensive backstop)
  const stopAt = nextAnchorIdx ?? paras.length;
  const parts = [];
  for (let j = starIdx + 1; j < stopAt; j++) {
    const p = paras[j];
    if (p.text.startsWith(OWNER_MARKER)) break;
    if (REVIEWS_LINE_RE.test(p.text)) break;
    // An image-only paragraph after at least one captured quote line
    // means we hit the next reviewer's avatar.
    if (!p.text && p.imageRIds.length > 0 && parts.length > 0) break;
    if (!p.text) continue;
    parts.push(p.text.replace(/\s*View full review\s*$/i, "").trim());
  }
  return { quote: parts.join(" ").trim(), relativeDate };
}

const reviews = [];
for (let a = 0; a < anchors.length; a++) {
  const idx = anchors[a];
  const next = anchors[a + 1];
  const { author, imageRId } = lookbackForAuthor(idx, paras);
  const { quote, relativeDate } = captureQuote(idx, paras, next);
  if (!quote) continue;
  reviews.push({
    author,
    relativeDate,
    quote,
    imageRId,
    rating: 5, // every star anchor in this doc is 5 stars; verified.
  });
}

console.log(`Extracted ${reviews.length} reviews`);

// --- 4. Initials, slug, category -----------------------------------

function initialsFor(name) {
  const parts = name.split(/\s+/).filter((p) => /^[A-Za-z]/.test(p));
  if (parts.length === 0) return "FT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function slugFor(name) {
  const base = name
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "anonymous";
}

// Service taxonomy, keyword-driven. A review can match multiple tags;
// most reviews collapse to one. Keywords are lower-cased and matched
// against the lower-cased quote.
const TAG_KEYWORDS = {
  Plumbing: [
    "plumb",
    "leak",
    "faucet",
    "drain",
    "toilet",
    "sink",
    "pipe",
    "polyb",
    "poly-b",
    "bathroom",
    "shower",
    "kitchen",
    "tap",
    "fixture",
  ],
  Boilers: ["boiler", "hydronic", "radiant"],
  Furnaces: ["furnace"],
  "Heat Pumps": ["heat pump", "heat-pump"],
  AC: ["air condition", "a/c ", " ac ", "cooling", "condenser"],
  "Water Heaters": ["hot water", "tankless", "water heater", "water-heater"],
  "Water Softeners": ["softener"],
  Emergency: ["emergency", "burst", "flood", "after hours"],
  Maintenance: ["maintenance", "tune-up", "tune up", "service call", "annual"],
  Install: ["install", "replacement", "replaced", "new "],
};

function tagsFor(quote) {
  const q = ` ${quote.toLowerCase()} `;
  const out = new Set();
  for (const [tag, words] of Object.entries(TAG_KEYWORDS)) {
    for (const w of words) {
      if (q.includes(w)) {
        out.add(tag);
        break;
      }
    }
  }
  return [...out];
}

// --- 5. Save avatars -----------------------------------------------

await fs.mkdir(avatarOutDir, { recursive: true });

const slugCounts = new Map();
const finalReviews = [];
let avatarsSaved = 0;
for (let i = 0; i < reviews.length; i++) {
  const r = reviews[i];
  let slug = slugFor(r.author);
  // Disambiguate if two reviewers share a name.
  const used = slugCounts.get(slug) ?? 0;
  slugCounts.set(slug, used + 1);
  if (used > 0) slug = `${slug}-${used + 1}`;

  let avatar = null;
  if (r.imageRId && rIdToImage.has(r.imageRId)) {
    const mediaRel = rIdToImage.get(r.imageRId); // "media/image10.png"
    const src = path.join(docxRoot, "word", mediaRel);
    const ext = path.extname(mediaRel).toLowerCase() || ".png";
    const dest = path.join(avatarOutDir, `${slug}${ext}`);
    try {
      await fs.copyFile(src, dest);
      avatar = `/images/reviews/${slug}${ext}`;
      avatarsSaved++;
    } catch (e) {
      console.warn(`  (no avatar for ${r.author}: ${e.message})`);
    }
  }

  finalReviews.push({
    author: r.author,
    initials: initialsFor(r.author),
    area: "Calgary", // not in the doc; site-level default
    rating: r.rating,
    relative_date: r.relativeDate,
    posted_at: relativeToPostedAt(r.relativeDate, EXPORT_DATE_ISO),
    quote: r.quote,
    featured: i === 0, // first one in the doc → featured
    sort_order: i + 1,
    avatar,
    tags: tagsFor(r.quote),
  });
}

console.log(`Saved ${avatarsSaved} avatars to ${path.relative(repoRoot, avatarOutDir)}`);

// --- 6. Write YAML -------------------------------------------------

function yamlEscape(s) {
  if (s === null || s === undefined) return '""';
  const safe = String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ");
  return `"${safe}"`;
}

// Preserve total_reviews / average_rating if the YAML already has them
// (those are the Google-reported headlines, not the extracted count).
let preservedTotal = null;
let preservedAverage = null;
try {
  const existing = await fs.readFile(yamlOut, "utf8");
  const tm = existing.match(/^total_reviews:\s*(\d+)\s*$/m);
  if (tm) preservedTotal = Number(tm[1]);
  const am = existing.match(/^average_rating:\s*([\d.]+)\s*$/m);
  if (am) preservedAverage = Number(am[1]);
} catch {
  /* first run; nothing to preserve */
}

const lines = [
  "# Customer reviews. Source of truth for the homepage Reviews section",
  "# and the LocalBusiness JSON-LD review nodes. Order in this file does",
  "# not matter — sort_order controls render position.",
  "",
  "# Total Google review count — drives the homepage rating badge and",
  "# aggregateRating.reviewCount in LocalBusiness JSON-LD. Bump when",
  "# Google reports more reviews than are imported below.",
  `total_reviews: ${preservedTotal ?? finalReviews.length}`,
  `average_rating: ${preservedAverage ?? "5.0"}`,
  "",
  "reviews:",
];
for (const r of finalReviews) {
  lines.push(`  - author: ${yamlEscape(r.author)}`);
  lines.push(`    initials: ${yamlEscape(r.initials)}`);
  lines.push(`    area: ${yamlEscape(r.area)}`);
  lines.push(`    rating: ${r.rating}`);
  lines.push(`    relative_date: ${yamlEscape(r.relative_date)}`);
  if (r.posted_at) lines.push(`    posted_at: ${yamlEscape(r.posted_at)}`);
  lines.push(`    quote: ${yamlEscape(r.quote)}`);
  lines.push(`    featured: ${r.featured ? "true" : "false"}`);
  lines.push(`    sort_order: ${r.sort_order}`);
  if (r.avatar) lines.push(`    avatar: ${yamlEscape(r.avatar)}`);
  if (r.tags.length > 0) {
    lines.push(`    tags:`);
    for (const t of r.tags) lines.push(`      - ${yamlEscape(t)}`);
  }
}
await fs.writeFile(yamlOut, lines.join("\n") + "\n", "utf8");
console.log(`Wrote ${path.relative(repoRoot, yamlOut)}`);

// Summary by tag
const tagCounts = new Map();
for (const r of finalReviews) {
  for (const t of r.tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
}
console.log(`\nBy service:`);
for (const [t, c] of [...tagCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${c.toString().padStart(3)} ${t}`);
}
