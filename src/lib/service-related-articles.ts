/**
 * Hand-curated mapping from service-page slug to relevant blog article
 * slugs. Drives the "Related guides" block on service pages.
 *
 * Pre-fix audit finding: zero service pages linked to blog articles,
 * leaving 8 of 12 articles as full orphans (only reachable from the
 * blog index). Each mapping below puts those articles within one click
 * of the right trade-service page, which is also where Google sends
 * informational-intent traffic.
 *
 * Add a service↔article pair here when:
 *   - the article answers a question someone on this service page is
 *     likely to have ("why is my AC humid?" on /air-conditioning)
 *   - OR the article and service share a system (boiler, furnace, etc.)
 *
 * Mapping is intentionally NOT bidirectional. Articles already cross-
 * link to services in their own bodies; this file is only for
 * service → article.
 */
export const SERVICE_TO_ARTICLES: Record<string, string[]> = {
  // Plumbing — Water Softeners
  "water-softener": [
    "what-do-water-softeners-remove",
    "why-does-my-water-softener-have-water-in-it",
  ],
  "water-softener-airdrie": [
    "what-do-water-softeners-remove",
    "why-does-my-water-softener-have-water-in-it",
  ],

  // Water — Hot water tanks + tankless
  "hot-water-tanks": ["tankless-vs-tank-water-heaters-calgary"],
  "hot-water-tank-replacement-calgary": [
    "tankless-vs-tank-water-heaters-calgary",
  ],
  "water-heater-installation-calgary": [
    "tankless-vs-tank-water-heaters-calgary",
  ],
  "tankless-water-heaters": ["tankless-vs-tank-water-heaters-calgary"],

  // Heating — Boilers
  boilers: [
    "why-does-my-boiler-keep-turning-off",
    "boiler-popping-noises",
    "boiler-losing-pressure-causes",
  ],
  "boiler-installation-calgary": [
    "why-does-my-boiler-keep-turning-off",
    "boiler-popping-noises",
  ],
  "boiler-installation-airdrie": [
    "why-does-my-boiler-keep-turning-off",
  ],
  "boiler-repair-calgary": [
    "boiler-popping-noises",
    "boiler-losing-pressure-causes",
    "why-does-my-boiler-keep-turning-off",
  ],
  "boiler-service-calgary": [
    "boiler-popping-noises",
    "boiler-losing-pressure-causes",
    "why-does-my-boiler-keep-turning-off",
  ],
  "boilers-airdrie": ["why-does-my-boiler-keep-turning-off"],

  // Heating — Furnaces
  furnaces: [
    "new-furnace-cost-calgary-2026",
    "heat-pump-vs-furnace-calgary",
    "furnace-fuse-keeps-blowing",
  ],
  "high-efficiency-furnaces-calgary": [
    "new-furnace-cost-calgary-2026",
    "heat-pump-vs-furnace-calgary",
    "furnace-smell-like-burning-plastic",
  ],
  "air-ease-furnaces-calgary": [
    "new-furnace-cost-calgary-2026",
    "furnace-fuse-keeps-blowing",
  ],
  "airdrie-furnace-repairs": [
    "furnace-fuse-keeps-blowing",
    "furnace-smell-like-gas",
  ],

  // Air — Heat Pumps + AC
  "heat-pumps-calgary": [
    "heat-pump-vs-furnace-calgary",
    "how-to-clean-heat-pump-coils",
  ],
  "heat-pumps-airdrie": [
    "heat-pump-vs-furnace-calgary",
    "how-to-clean-heat-pump-coils",
  ],
  "air-conditioning": [
    "ac-drip-pan-filling-up",
    "why-does-my-ac-compressor-shut-off-after-30-minutes",
    "why-does-my-ac-feel-humid-understanding-your-air-conditioning-system",
  ],
};

export function getRelatedArticleSlugs(serviceSlug: string): string[] {
  return SERVICE_TO_ARTICLES[serviceSlug] ?? [];
}
