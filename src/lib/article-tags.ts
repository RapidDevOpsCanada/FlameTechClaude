/**
 * Per-article tag taxonomy keyed by slug. Used at seed time to populate
 * the articles.tags column, and at runtime to render tag chips +
 * /blog/tags/[slug] archive pages.
 *
 * Display vs slug:
 *  - Stored in the DB exactly as written here (mixed-case display).
 *  - URL slugs are derived via tagSlug() at runtime.
 *
 * Adding a new article: append a tags entry below.
 */

export const articleTags: Record<string, string[]> = {
  "ac-drip-pan-filling-up": ["AC", "Condensate", "Troubleshooting"],
  "why-does-my-ac-compressor-shut-off-after-30-minutes": [
    "AC",
    "Troubleshooting",
    "Compressor",
  ],
  "why-does-my-ac-feel-humid-understanding-your-air-conditioning-system": [
    "AC",
    "Humidity",
    "Troubleshooting",
  ],
  "furnace-smell-like-gas": ["Furnaces", "Safety", "Emergency"],
  "furnace-smell-like-burning-plastic": [
    "Furnaces",
    "Safety",
    "Troubleshooting",
  ],
  "boiler-popping-noises": ["Boilers", "Troubleshooting", "Kettling"],
  "why-does-my-water-softener-have-water-in-it": [
    "Water Softeners",
    "Maintenance",
  ],
  "how-to-clean-heat-pump-coils": ["Heat Pumps", "Maintenance", "DIY"],
  "what-do-water-softeners-remove": ["Water Softeners", "Hard Water"],
  "why-does-my-boiler-keep-turning-off": ["Boilers", "Troubleshooting"],
  "boiler-losing-pressure-causes": [
    "Boilers",
    "Troubleshooting",
    "Pressure",
  ],
  "furnace-fuse-keeps-blowing": ["Furnaces", "Troubleshooting", "DIY"],
};

export function getArticleTags(slug: string): string[] {
  return articleTags[slug] ?? [];
}

/** URL-safe slug for a display tag. "Water Softeners" -> "water-softeners". */
export function tagSlug(displayTag: string): string {
  return displayTag
    .toLowerCase()
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Reverse-lookup: find a display tag from its slug. */
export function tagFromSlug(slug: string): string | null {
  for (const tags of Object.values(articleTags)) {
    for (const t of tags) {
      if (tagSlug(t) === slug) return t;
    }
  }
  return null;
}

/** Every distinct display tag, sorted alphabetically. */
export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const tags of Object.values(articleTags)) {
    for (const t of tags) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
