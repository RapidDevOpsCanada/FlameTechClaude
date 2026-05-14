import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Tag taxonomy helpers. Tags themselves live in each article's
 * frontmatter (the source of truth); this module derives the
 * deduplicated tag list and reverse-slug lookups on demand.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** URL-safe slug for a display tag. "Water Softeners" -> "water-softeners". */
export function tagSlug(displayTag: string): string {
  return displayTag
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function collectAllTags(): string[] {
  let files: string[];
  try {
    files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/i.test(f));
  } catch {
    return [];
  }
  const set = new Set<string>();
  for (const f of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
    const { data } = matter(raw);
    const tags = (data as { tags?: unknown }).tags;
    if (Array.isArray(tags)) {
      for (const t of tags) if (typeof t === "string") set.add(t);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

/** Every distinct display tag, sorted alphabetically. */
export function getAllTags(): string[] {
  return collectAllTags();
}

/** Reverse-lookup: find a display tag from its slug. */
export function tagFromSlug(slug: string): string | null {
  for (const t of collectAllTags()) {
    if (tagSlug(t) === slug) return t;
  }
  return null;
}
