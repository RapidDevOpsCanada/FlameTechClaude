import "server-only";
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { reviewsFileSchema, type ReviewEntry } from "@/lib/reviews-schema";

/**
 * Filesystem-backed reviews. Source of truth: content/reviews.yaml,
 * validated through Zod on every read. Returns in sort_order order
 * (lowest first) so the homepage Reviews section is deterministic.
 */

export type Review = {
  id: string;
  author: string;
  initials: string;
  area: string;
  rating: number;
  relative_date: string;
  quote: string;
  featured: boolean;
  sort_order: number;
  /** Synthetic to keep call sites that expect created_at working. */
  created_at: string;
};

const REVIEWS_FILE = path.join(process.cwd(), "content", "reviews.yaml");

function loadReviewsFile(): ReviewEntry[] {
  let raw: string;
  try {
    raw = fs.readFileSync(REVIEWS_FILE, "utf8");
  } catch {
    return [];
  }
  const parsed = yaml.load(raw);
  const validated = reviewsFileSchema.safeParse(parsed);
  if (!validated.success) {
    throw new Error(
      `Invalid content/reviews.yaml: ${validated.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; ")}`,
    );
  }
  return validated.data.reviews;
}

export async function getReviews(): Promise<Review[]> {
  const entries = loadReviewsFile();
  const now = new Date().toISOString();
  return entries
    .map((r, i) => ({
      id: `r${r.sort_order || i + 1}`,
      author: r.author,
      initials: r.initials,
      area: r.area,
      rating: r.rating,
      relative_date: r.relative_date,
      quote: r.quote,
      featured: r.featured,
      sort_order: r.sort_order,
      created_at: now,
    }))
    .sort((a, b) => a.sort_order - b.sort_order);
}
