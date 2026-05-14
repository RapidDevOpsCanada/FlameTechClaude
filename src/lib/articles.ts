import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { articleFrontmatterSchema } from "@/lib/articles-schema";

/**
 * Filesystem-backed article store. Source of truth is one MDX file per
 * article under content/blog/<slug>.mdx. Frontmatter is validated via
 * Zod (src/lib/articles-schema.ts). Build-time failure here means a
 * bad article — fix the file, don't loosen the schema.
 */

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Raw MDX body (not HTML). Render with next-mdx-remote/rsc. */
  body: string;
  category: string;
  category_slug: string;
  author: string;
  read_time: number;
  share_count: number;
  featured_image: string | null;
  tags: string[];
  /** ISO 8601 publish time. Articles without a published_at sort last. */
  created_at: string;
  /** ISO 8601 last-modified time, or null if never edited. */
  updated_at: string | null;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const MISSING_DATE = "1970-01-01T00:00:00.000Z";

function toIsoDate(yyyyMmDd: string | undefined): string | null {
  if (!yyyyMmDd) return null;
  return new Date(`${yyyyMmDd}T00:00:00Z`).toISOString();
}

function loadArticleFile(file: string): Article {
  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const parsed = articleFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in content/blog/${file}: ${parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; ")}`,
    );
  }
  const slug = file.replace(/\.mdx?$/i, "");
  return {
    id: slug,
    slug,
    title: parsed.data.title,
    excerpt: parsed.data.excerpt,
    body: content.trim() + "\n",
    category: parsed.data.category,
    category_slug: parsed.data.category_slug,
    author: parsed.data.author,
    read_time: parsed.data.read_time,
    share_count: parsed.data.share_count,
    featured_image: parsed.data.featured_image ?? null,
    tags: parsed.data.tags,
    created_at: toIsoDate(parsed.data.published_at) ?? MISSING_DATE,
    updated_at: toIsoDate(parsed.data.updated_at),
  };
}

function loadAll(): Article[] {
  let entries: string[];
  try {
    entries = fs
      .readdirSync(BLOG_DIR)
      .filter((f) => /\.mdx?$/i.test(f))
      .sort();
  } catch {
    return [];
  }
  const articles = entries.map(loadArticleFile);
  // Sort by published_at desc; missing dates land at the bottom because
  // they were normalised to MISSING_DATE above.
  articles.sort((a, b) => b.created_at.localeCompare(a.created_at));
  return articles;
}

export async function getAllArticles(): Promise<Article[]> {
  return loadAll();
}

export async function getArticlesByCategory(
  categorySlug: string,
): Promise<Article[]> {
  return loadAll().filter((a) => a.category_slug === categorySlug);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Direct file read so a single-article request doesn't pay the cost
  // of validating every file in the directory.
  for (const ext of [".mdx", ".md"]) {
    const file = `${slug}${ext}`;
    const filePath = path.join(BLOG_DIR, file);
    if (fs.existsSync(filePath)) return loadArticleFile(file);
  }
  return null;
}

export async function getCategories(): Promise<
  { name: string; slug: string }[]
> {
  const seen = new Map<string, string>();
  for (const a of loadAll()) {
    if (!seen.has(a.category_slug)) seen.set(a.category_slug, a.category);
  }
  return [...seen.entries()]
    .map(([slug, name]) => ({ name, slug }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Articles tagged with the given display tag (case-sensitive match
 * against the frontmatter `tags` array).
 */
export async function getArticlesByTag(displayTag: string): Promise<Article[]> {
  return loadAll().filter((a) => a.tags.includes(displayTag));
}

/**
 * Build-time enumeration helper for generateStaticParams. Avoids
 * paying the body-read cost when only slugs are needed.
 */
export function getAllArticleSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => /\.mdx?$/i.test(f))
      .map((f) => f.replace(/\.mdx?$/i, ""))
      .sort();
  } catch {
    return [];
  }
}
