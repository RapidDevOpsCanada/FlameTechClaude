import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
  throw new Error(
    "No database connection string found. Set DATABASE_URL, POSTGRES_URL, or POSTGRES_URL_NON_POOLING."
  );
}

export const sql = neon(connectionString);

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  category_slug: string;
  author: string;
  read_time: number;
  share_count: number;
  created_at: string;
};
