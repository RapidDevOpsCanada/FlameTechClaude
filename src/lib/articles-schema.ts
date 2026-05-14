import { z } from "zod";

/**
 * Frontmatter schema for every file under content/blog/*.mdx. The
 * filesystem loader in src/lib/articles.ts runs every frontmatter
 * block through this — invalid input throws at build time with the
 * offending filename so the breakage is impossible to miss.
 */
export const articleFrontmatterSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  category: z.string().min(1),
  category_slug: z.string().min(1),
  author: z.string().min(1),
  read_time: z.number().int().positive(),
  share_count: z.number().int().nonnegative().default(0),
  featured_image: z.string().optional(),
  // YYYY-MM-DD; left optional so a draft without a publish date can
  // still parse, but the loader sorts these to the bottom.
  published_at: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD")
    .optional(),
  updated_at: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD")
    .optional(),
  tags: z.array(z.string()).default([]),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;
