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
  quote: z.string().min(1),
  featured: z.boolean().default(false),
  sort_order: z.number().int().nonnegative().default(0),
});

export const reviewsFileSchema = z.object({
  reviews: z.array(reviewSchema),
});

export type ReviewEntry = z.infer<typeof reviewSchema>;
