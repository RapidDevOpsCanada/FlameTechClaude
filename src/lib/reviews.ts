import "server-only";
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { reviewsFileSchema, type ReviewEntry } from "@/lib/reviews-schema";
import { relativeDateFromIso } from "@/lib/relative-date";

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
  /** Optional per-page quote replacements keyed by service slug. Used
   *  when a multi-topic review is overweight for a single-service page
   *  (e.g. a boiler + furnace review trimmed to just the furnace
   *  portion on /high-efficiency-furnaces-calgary). */
  quote_overrides?: Record<string, string>;
  featured: boolean;
  sort_order: number;
  avatar: string | null;
  tags: string[];
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

/** Headline numbers for the rating badge + LocalBusiness JSON-LD. */
export type ReviewsSummary = {
  total: number;
  average: number;
};

export function getReviewsSummary(): ReviewsSummary {
  let raw: string;
  try {
    raw = fs.readFileSync(REVIEWS_FILE, "utf8");
  } catch {
    return { total: 0, average: 5 };
  }
  const parsed = yaml.load(raw);
  const validated = reviewsFileSchema.safeParse(parsed);
  if (!validated.success) return { total: 0, average: 5 };
  const data = validated.data;
  return {
    total: data.total_reviews ?? data.reviews.length,
    average: data.average_rating ?? 5,
  };
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
      // Prefer the live-computed phrase when posted_at is set so the
      // displayed age stays correct as time passes; fall back to the
      // YAML's static relative_date for any entry without posted_at.
      relative_date:
        (r.posted_at && relativeDateFromIso(r.posted_at)) ?? r.relative_date,
      quote: r.quote,
      quote_overrides: r.quote_overrides,
      featured: r.featured,
      sort_order: r.sort_order,
      avatar: r.avatar ?? null,
      tags: r.tags,
      created_at: r.posted_at
        ? new Date(`${r.posted_at}T00:00:00Z`).toISOString()
        : now,
    }))
    .sort((a, b) => a.sort_order - b.sort_order);
}
