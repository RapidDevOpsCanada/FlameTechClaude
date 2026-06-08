/**
 * Slug → category lookup for the Nav mega-menu.
 *
 * This file exists ONLY so Nav.tsx can resolve the active mega-menu
 * category without importing the full src/lib/services.ts. That module
 * carries every service page's prose, FAQ entries, image references and
 * before/after slides — ~500 KB of data the client doesn't need.
 *
 * Maintenance: when adding or removing a service in services.ts, update
 * this map too. src/lib/services.ts runs a module-load assertion that
 * throws at build time if the two ever drift, so forgetting is a loud
 * failure rather than a silent broken active state.
 */
export type ServiceCategory = "Plumbing" | "Heating" | "Air" | "Water";

export const SERVICE_CATEGORIES: Record<string, ServiceCategory> = {
  "bathroom-plumbing-calgary": "Plumbing",
  "shower-plumbing-calgary": "Plumbing",
  "toilet-installation-calgary": "Plumbing",
  "drain-cleaning-calgary": "Plumbing",
  "emergency-plumber-calgary": "Plumbing",
  "polyb-plumbing-calgary": "Plumbing",
  "sump-pump-installation-calgary": "Plumbing",
  "boiler-installation-calgary": "Heating",
  "boiler-repair-calgary": "Heating",
  "boiler-service-calgary": "Heating",
  furnaces: "Heating",
  "high-efficiency-furnaces-calgary": "Heating",
  "furnace-blower-issues-calgary": "Heating",
  "no-heat-issues-calgary": "Heating",
  "garage-heaters-calgary": "Heating",
  "heat-pumps-calgary": "Heating",
  "air-conditioning": "Air",
  "humidifiers-calgary": "Air",
  "hot-water-tanks": "Water",
  "hot-water-tank-replacement-calgary": "Water",
  "tankless-water-heaters": "Water",
  "hot-water-issues-calgary": "Water",
  "water-softener": "Water",
  "reverse-osmosis-calgary": "Water",
  "airdrie-plumbers": "Plumbing",
  "airdrie-furnace-repairs": "Heating",
  "boiler-installation-airdrie": "Heating",
  "boilers-airdrie": "Heating",
  "heat-pumps-airdrie": "Heating",
  "hot-water-tanks-airdrie": "Water",
  "water-softener-airdrie": "Water",
  "ravenswood-plumbers-airdrie": "Plumbing",
  "reunion-plumbers-airdrie": "Plumbing",
  "altadore-plumbers-calgary": "Plumbing",
  "aspen-woods-plumbers-calgary": "Plumbing",
  "bel-aire-plumbers-calgary": "Plumbing",
  "auburn-bay-plumber-calgary": "Plumbing",
  "bowness-plumbers-calgary": "Plumbing",
  "bridlewood-plumbers-calgary": "Plumbing",
  "calgary-plumbers-nw": "Plumbing",
  "calgary-plumbers-se": "Plumbing",
  "calgary-plumbers-sw": "Plumbing",
  "chaparral-plumbers-calgary": "Plumbing",
  "copperfield-plumbers-calgary": "Plumbing",
  "cranston-plumber-calgary": "Plumbing",
  "edgemont-plumbers-calgary": "Plumbing",
  "evanston-plumbers-calgary": "Plumbing",
  "evergreen-plumbers-calgary": "Plumbing",
  "huntington-hills-plumbers-calgary": "Plumbing",
  "killarney-plumbers-calgary": "Plumbing",
  "mahogany-plumbers-calgary": "Plumbing",
  "marda-loop-plumbers-calgary": "Plumbing",
  "mckenzie-lake-plumbers-calgary": "Plumbing",
  "mckenzie-towne-plumbers-calgary": "Plumbing",
  "mount-royal-plumbers-calgary": "Plumbing",
  "new-brighton-plumbers-calgary": "Plumbing",
  "panorama-hills-plumbers-calgary": "Plumbing",
  "signal-hill-plumbers-calgary": "Plumbing",
  "tuscany-plumbers-calgary": "Plumbing",
  "varsity-plumbers-calgary": "Plumbing",
  "west-springs-plumbers-calgary": "Plumbing",
  "woodbine-plumber": "Plumbing",
  "coopers-crossing-plumbers": "Plumbing",
  boilers: "Heating",
  "water-heater-installation-calgary": "Water",
  "air-ease-furnaces-calgary": "Heating",
  "chestermere-plumbers": "Plumbing",
  "bearspaw-plumbers": "Plumbing",
  "cochrane-plumbers": "Plumbing",
  "okotoks-plumbers": "Plumbing",
  "carstairs-plumbers": "Plumbing",
};

export function getServiceCategory(slug: string): ServiceCategory | null {
  return SERVICE_CATEGORIES[slug] ?? null;
}
