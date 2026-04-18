import { sql, type Review } from "@/lib/db";

export async function getReviews(): Promise<Review[]> {
  try {
    const rows = await sql`
      SELECT id, author, initials, area, rating, relative_date, quote,
             featured, sort_order, created_at
      FROM reviews
      ORDER BY sort_order ASC, created_at DESC
    `;
    return rows as Review[];
  } catch {
    return [];
  }
}
