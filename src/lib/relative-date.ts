import "server-only";

/**
 * Format a YYYY-MM-DD date as a human-readable "X time ago" string,
 * relative to NOW. Mirrors Google's relative-date phrasing.
 *
 * Returns null if the input isn't a valid YYYY-MM-DD.
 */
export function relativeDateFromIso(iso: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const then = Date.UTC(
    Number(m[1]),
    Number(m[2]) - 1,
    Number(m[3]),
  );
  const now = Date.now();
  const diffDays = Math.max(0, Math.floor((now - then) / 86_400_000));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "1 month ago";
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  if (diffDays < 730) return "1 year ago";
  return `${Math.floor(diffDays / 365)} years ago`;
}
