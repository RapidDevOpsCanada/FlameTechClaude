import { sql, type Article } from "@/lib/db";

export async function getAllArticles(): Promise<Article[]> {
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, category_slug,
           author, read_time, share_count, created_at
    FROM articles
    ORDER BY created_at DESC
  `;
  return rows as Article[];
}

export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, category_slug,
           author, read_time, share_count, created_at
    FROM articles
    WHERE category_slug = ${categorySlug}
    ORDER BY created_at DESC
  `;
  return rows as Article[];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, category_slug,
           author, read_time, share_count, created_at
    FROM articles
    WHERE slug = ${slug}
    LIMIT 1
  `;
  return (rows[0] as Article) || null;
}

export async function getCategories(): Promise<
  { name: string; slug: string }[]
> {
  const rows = await sql`
    SELECT DISTINCT category AS name, category_slug AS slug
    FROM articles
    ORDER BY category
  `;
  return rows as { name: string; slug: string }[];
}
