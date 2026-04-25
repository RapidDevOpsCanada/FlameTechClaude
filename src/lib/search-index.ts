/**
 * Build a flat search index from services.ts plus the static trust pages.
 * Indexed at module load time on the server, serialized into the search
 * component as a JS array so search runs entirely client-side with zero
 * runtime fetch.
 */

import { services } from "@/lib/services";

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

const STATIC_PAGES: SearchEntry[] = [
  {
    title: "About FlameTech",
    meta: "Founders, story, credentials",
    haystack:
      "about flametech founders shaun kristoff jason mounsey red seal calgary plumbers heating story credentials",
    href: "/about",
    kind: "Page",
  },
  {
    title: "Contact",
    meta: "Phone, email, hours, service area",
    haystack:
      "contact phone email hours service area calgary airdrie chestermere cochrane okotoks carstairs",
    href: "/contact",
    kind: "Page",
  },
  {
    title: "Financing",
    meta: "Monthly payments via Financeit",
    haystack:
      "financing monthly payments financeit installment loan boiler furnace ac water heater finance",
    href: "/financing",
    kind: "Page",
  },
  {
    title: "Resources / Blog",
    meta: "Maintenance guides and how-tos",
    haystack:
      "resources blog articles guides maintenance how-to ac boiler furnace troubleshooting",
    href: "/articles",
    kind: "Resource",
  },
  {
    title: "Privacy Policy",
    meta: "How we handle your information",
    haystack: "privacy policy data information cookies pipeda alberta",
    href: "/privacy",
    kind: "Page",
  },
];

const SERVICE_ENTRIES: SearchEntry[] = services.map((s) => ({
  title: s.title.replace(/\s*[—|].*$/, "").trim() || s.slug,
  meta: [s.location ?? "Calgary", s.category].filter(Boolean).join(" · "),
  haystack: [
    s.slug,
    s.title,
    s.lead,
    s.intro,
    s.category,
    s.location ?? "Calgary",
    ...(s.features ?? []),
    ...(s.seoKeywords ?? []),
  ]
    .join(" ")
    .toLowerCase(),
  href: `/${s.slug}`,
  kind: "Service",
}));

export const searchIndex: SearchEntry[] = [
  ...STATIC_PAGES,
  ...SERVICE_ENTRIES,
];

export function searchEntries(
  query: string,
  limit = 8,
): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  type Scored = { entry: SearchEntry; score: number };
  const scored: Scored[] = [];

  for (const entry of searchIndex) {
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
    if (entry.kind === "Service" && /-plumbers?-(calgary|airdrie)/.test(entry.href)) {
      score -= 1;
    }

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
