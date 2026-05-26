/**
 * Server-only builder for the site search index. Imports the full
 * services module (≈500 KB of page prose, FAQ items, and image refs)
 * to derive a slim per-service haystack. The `server-only` import
 * trips a build error if any client component tries to import this
 * file, forcing the slim index to flow to the client via RSC props
 * (~12 KB) instead of being inlined into the JS bundle.
 *
 * The pure matching function lives in src/lib/search-fn.ts so client
 * components can call it without pulling services.ts in.
 */

import "server-only";
import { services } from "@/lib/services";
import type { SearchEntry } from "@/lib/search-fn";

const STATIC_PAGES: SearchEntry[] = [
  {
    title: "About FlameTech",
    meta: "Founders, story, credentials",
    haystack:
      "about flametech founders shaun kristoff jason mounsey red seal calgary plumbers heating story credentials",
    href: "/about/",
    kind: "Page",
  },
  {
    title: "Contact",
    meta: "Phone, email, hours, service area",
    haystack:
      "contact phone email hours service area calgary airdrie chestermere cochrane okotoks carstairs",
    href: "/contact/",
    kind: "Page",
  },
  {
    title: "Financing",
    meta: "Monthly payments via Financeit",
    haystack:
      "financing monthly payments financeit installment loan boiler furnace ac water heater finance",
    href: "/financing/",
    kind: "Page",
  },
  {
    title: "Resources / Blog",
    meta: "Maintenance guides and how-tos",
    haystack:
      "resources blog articles guides maintenance how-to ac boiler furnace troubleshooting",
    href: "/blog/",
    kind: "Resource",
  },
  {
    title: "Privacy Policy",
    meta: "How we handle your information",
    haystack: "privacy policy data information cookies pipeda alberta",
    href: "/privacy/",
    kind: "Page",
  },
];

export function buildSearchIndex(): SearchEntry[] {
  const serviceEntries: SearchEntry[] = services.map((s) => ({
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
  return [...STATIC_PAGES, ...serviceEntries];
}
