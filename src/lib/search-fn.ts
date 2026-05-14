/**
 * Pure (data-agnostic) search matcher used by SiteSearch. The data half
 * — building the index from services.ts plus static pages — lives in
 * search-index.ts which is marked server-only. SiteSearch receives the
 * built index as a prop (passed via RSC payload from the server-side
 * Nav wrapper) and calls searchEntries with it. This split keeps the
 * 500 KB services module out of the client bundle.
 */

export type SearchEntry = {
  title: string;
  /** Short hint shown under the title in results. */
  meta: string;
  /** Concatenated text used for substring matching (lowercased). */
  haystack: string;
  href: string;
  /** Display category — drives a small label chip in results. */
  kind: "Service" | "Page" | "Resource";
};

export function searchEntries(
  index: SearchEntry[],
  query: string,
  limit = 8,
): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  type Scored = { entry: SearchEntry; score: number };
  const scored: Scored[] = [];

  for (const entry of index) {
    let score = 0;
    let matchedAll = true;
    for (const t of tokens) {
      if (entry.title.toLowerCase().includes(t)) {
        score += 6;
      } else if (entry.haystack.includes(t)) {
        score += 1;
      } else {
        matchedAll = false;
        break;
      }
    }
    if (!matchedAll) continue;

    // Tiny boost so static pages and service-area landings rank above
    // long-tail neighbourhood pages on ambiguous queries like "boiler".
    if (entry.kind === "Page") score += 2;
    if (
      entry.kind === "Service" &&
      /-plumbers?-(calgary|airdrie)/.test(entry.href)
    ) {
      score -= 1;
    }

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
