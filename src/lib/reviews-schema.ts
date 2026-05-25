import { z } from "zod";

/**
 * Schema for content/reviews.yaml. One file, one root `reviews` key,
 * a list of review entries. Validated at build/request time by the
 * loader in src/lib/reviews.ts.
 */
export const reviewSchema = z.object({
  author: z.string().min(1),
  initials: z.string().min(1).max(4),
  area: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  relative_date: z.string().min(1),
  /** Absolute posting date (YYYY-MM-DD). When present, the runtime
   *  recomputes the "X time ago" display string from this instead of
   *  showing the stale `relative_date` field. */
  posted_at: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD")
    .optional(),
  quote: z.string().min(1),
  /** Optional per-page quote replacements. Map of service slug ->
   *  trimmed quote, used when the full review covers multiple
   *  services and only one is relevant on a given page. The full
   *  `quote` is still the canonical version (used everywhere else
   *  and in the Schema.org Review nodes). */
  quote_overrides: z.record(z.string(), z.string()).optional(),
  featured: z.boolean().default(false),
  sort_order: z.number().int().nonnegative().default(0),
  /** Path to the reviewer's avatar (e.g. "/images/reviews/jane.png").
   *  Omitted = render the initials chip instead. */
  avatar: z.string().optional(),
  /** Service categories the review is relevant to. Used to surface
   *  topical reviews on service pages. */
  tags: z.array(z.string()).default([]),
});

export const reviewsFileSchema = z.object({
  /** Total number of Google reviews the business has — including any
   *  not imported into this file. Drives the rating badge on the
   *  homepage and aggregateRating.reviewCount in LocalBusiness JSON-LD.
   *  Defaults to the count of entries when omitted. */
  total_reviews: z.number().int().positive().optional(),
  /** Display rating (e.g. 5.0). Defaults to 5.0. */
  average_rating: z.number().min(0).max(5).optional(),
  reviews: z.array(reviewSchema),
});

export type ReviewEntry = z.infer<typeof reviewSchema>;
