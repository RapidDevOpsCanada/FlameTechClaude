import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

function getConnectionString(): string {
  const cs =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING;
  if (!cs) {
    throw new Error(
      "No database connection string found. Set DATABASE_URL, POSTGRES_URL, or POSTGRES_URL_NON_POOLING in Vercel env vars."
    );
  }
  return cs;
}

let _sql: NeonQueryFunction<false, false> | null = null;

function getSql(): NeonQueryFunction<false, false> {
  if (!_sql) _sql = neon(getConnectionString());
  return _sql;
}

export const sql: NeonQueryFunction<false, false> = new Proxy(
  (() => {}) as unknown as NeonQueryFunction<false, false>,
  {
    apply(_target, _thisArg, args: unknown[]) {
      const fn = getSql() as unknown as (...a: unknown[]) => unknown;
      return fn(...args);
    },
    get(_target, prop: string | symbol) {
      const fn = getSql() as unknown as Record<string | symbol, unknown>;
      return fn[prop];
    },
  }
);

// Article and Review types moved to their respective lib modules
// (src/lib/articles.ts, src/lib/reviews.ts) when content shifted from
// Postgres to the filesystem. db.ts now exports only `sql` for the
// leads table (and any future DB-backed feature).
