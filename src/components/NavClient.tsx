"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import IconBadge, { toneFromCategory } from "@/components/IconBadge";
import SiteSearch from "@/components/SiteSearch";
import { getServiceCategory } from "@/lib/service-categories";
import type { SearchEntry } from "@/lib/search-fn";

/**
 * Resolve the active mega-menu category from the current pathname.
 * Returns one of "Plumbing" | "Heating" | "Air" | "Water" | null.
 *
 * Uses the tiny service-categories map rather than pulling all of
 * src/lib/services.ts into the client bundle. Drift between the two
 * files is caught at build time by an assertion inside services.ts.
 */
function activeCategoryFromPath(pathname: string): string | null {
  if (!pathname || pathname === "/") return null;
  const slug = pathname.replace(/^\//, "").split("/")[0];
  return slug ? getServiceCategory(slug) : null;
}

type MegaItem = {
  label: string;
  href: string;
  icon: string;
  desc?: string;
};

type MegaGroup = {
  heading: string;
  headingHref?: string;
  items: MegaItem[];
};

type Promo = {
  image: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

/** Hairline divider between items in the teal trust rail. */
function RailSep() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-px h-4 bg-[#06231d]/25 align-middle"
    />
  );
}

type NavItem = {
  label: string;
  href: string;
  /** Small descriptor under the label on desktop. Hidden below 1180px
   *  and when the header condenses on scroll. */
  sub?: string;
  mega?: {
    groups: MegaGroup[];
    promo?: Promo;
  };
};

const menu: NavItem[] = [
  {
    label: "Plumbing",
    href: "/#services",
    sub: "Leaks, drains, fixtures",
    mega: {
      groups: [
        {
          heading: "Residential Plumbing",
          items: [
            {
              label: "Bathroom Plumbing",
              href: "/bathroom-plumbing-calgary/",
              icon: "bathroom",
              desc: "Sinks, toilets, full bathroom retrofits.",
            },
            {
              label: "Shower Plumbing",
              href: "/shower-plumbing-calgary/",
              icon: "shower",
              desc: "Shower installs, valve replacements.",
            },
            {
              label: "Toilet Installation",
              href: "/toilet-installation-calgary/",
              icon: "plumbing",
              desc: "Standard, comfort-height, wall-hung — every brand.",
            },
            {
              label: "Drain Cleaning",
              href: "/drain-cleaning-calgary/",
              icon: "drain_camera",
              desc: "Clogs, slow drains, camera inspection.",
            },
          ],
        },
        {
          heading: "Emergency & Repairs",
          items: [
            {
              label: "Emergency Plumbing",
              href: "/emergency-plumber-calgary/",
              icon: "contact_emergency",
              desc: "Leaks, burst pipes, urgent fixes.",
            },
            {
              label: "PolyB Plumbing",
              href: "/polyb-plumbing-calgary/",
              icon: "pipe_wrench",
              desc: "Full replacement for 80s/90s homes.",
            },
            {
              label: "Frozen Pipe Repair",
              href: "/frozen-pipe-repair-calgary/",
              icon: "ac_unit",
              desc: "Safe thawing, burst repair, prevention.",
            },
            {
              label: "Plumbing Repairs",
              href: "/plumbing-repairs-calgary/",
              icon: "build",
              desc: "Leaks, pipes, fixtures — diagnosis-first repair.",
            },
            {
              label: "Sump Pump Install",
              href: "/sump-pump-installation-calgary/",
              icon: "water_damage",
              desc: "Primary + backup, basement flood prevention.",
            },
            {
              label: "Backwater Valve Install",
              href: "/backwater-valve-installation-calgary/",
              icon: "water_damage",
              desc: "Sewer-backup protection for your basement.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/2026/04/Shower-Install.webp",
        title: "Book a free plumbing estimate",
        body: "Upfront pricing, no surprises.",
        cta: "Call 587-834-3668",
        href: "tel:+15878343668",
      },
    },
  },
  {
    label: "Heating",
    href: "/#services",
    sub: "Furnaces & boilers",
    mega: {
      groups: [
        {
          heading: "Boilers",
          headingHref: "/boilers",
          items: [
            {
              label: "Boiler Installation",
              href: "/boiler-installation-calgary/",
              icon: "boiler_unit",
              desc: "New high-efficiency boilers.",
            },
            {
              label: "Boiler Replacement",
              href: "/boiler-replacement-calgary/",
              icon: "swap_horiz",
              desc: "Repair or replace? Honest answers.",
            },
            {
              label: "Boiler Repair",
              href: "/boiler-repair-calgary/",
              icon: "gas_valve",
              desc: "Diagnosis and fast repairs.",
            },
            {
              label: "Boiler Service",
              href: "/boiler-service-calgary/",
              icon: "hydronic_loop",
              desc: "Annual maintenance & tune-ups.",
            },
          ],
        },
        {
          heading: "Furnaces & More",
          headingHref: "/furnaces",
          items: [
            {
              label: "Calgary Furnaces",
              href: "/furnaces/",
              icon: "local_fire_department",
              desc: "Install, repair, and maintenance for every major brand.",
            },
            {
              label: "Furnace Installation",
              href: "/furnace-installation-calgary/",
              icon: "local_fire_department",
              desc: "Sized, vented and commissioned properly.",
            },
            {
              label: "High-Efficiency Furnaces",
              href: "/high-efficiency-furnaces-calgary/",
              icon: "local_fire_department",
              desc: "95–98% AFUE installs.",
            },
            {
              label: "In-Floor Heating",
              href: "/in-floor-heating-calgary/",
              icon: "hydronic_loop",
              desc: "Hydronic radiant design & service.",
            },
            {
              label: "Garage Heaters",
              href: "/garage-heaters-calgary/",
              icon: "garage",
              desc: "Warm, code-compliant garages.",
            },
            {
              label: "Heat Pumps",
              href: "/heat-pumps-calgary/",
              icon: "ac_unit",
              desc: "Cold-climate dual-fuel setups.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/2026/04/Double-boiler.webp",
        title: "Winter-ready heating install",
        body: "Free quote on boilers, furnaces & heat pumps.",
        cta: "Request heating quote",
        href: "#quote",
      },
    },
  },
  {
    label: "Air",
    href: "/#services",
    sub: "AC & heat pumps",
    mega: {
      groups: [
        {
          heading: "Air Comfort",
          items: [
            {
              label: "Air Conditioning",
              href: "/air-conditioning/",
              icon: "ac_unit",
              desc: "Central AC installs & service.",
            },
            {
              label: "AC Repair",
              href: "/air-conditioning-repair-calgary/",
              icon: "handyman",
              desc: "Not cooling, short-cycling, no airflow.",
            },
            {
              // Also listed under Heating — a cold-climate heat pump
              // heats and cools from one system, so it belongs in both
              // menus. Copy differs per menu: cooling framing here,
              // dual-fuel heating framing under Heating. The active
              // mega-menu state resolves via SERVICE_CATEGORIES, which
              // maps this slug to "Heating" — so browsing to the page
              // highlights Heating, not Air. That's intentional; a slug
              // can only own one active category.
              label: "Heat Pumps",
              href: "/heat-pumps-calgary/",
              icon: "ac_unit",
              desc: "Heating and cooling from one system.",
            },
            {
              label: "Humidifiers",
              href: "/humidifiers-calgary/",
              icon: "water_drop",
              desc: "Whole-home humidification.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/2025/04/air-conditioning-calgary.png",
        title: "Stay cool all summer",
        body: "Efficient central AC tuned for Calgary homes.",
        cta: "Get an AC quote",
        href: "#quote",
      },
    },
  },
  {
    label: "Water",
    href: "/#services",
    sub: "Heaters & softeners",
    mega: {
      groups: [
        {
          heading: "Water Heating",
          headingHref: "/hot-water-tanks",
          items: [
            {
              label: "Hot Water Tanks",
              href: "/hot-water-tanks/",
              icon: "propane_tank",
              desc: "Service, repair, and new installs.",
            },
            {
              label: "Hot Water Tank Replacement",
              href: "/hot-water-tank-replacement-calgary/",
              icon: "sync",
              desc: "Same-day tank swaps when possible.",
            },
            {
              label: "Tankless Water Heaters",
              href: "/tankless-water-heaters/",
              icon: "whatshot",
              desc: "Endless hot water, lower running costs.",
            },
          ],
        },
        {
          heading: "Water Treatment",
          items: [
            {
              label: "Softener Repair",
              href: "/water-softener-repair-calgary/",
              icon: "softener_tank",
              desc: "Hard water back? Any brand serviced.",
            },
            {
              label: "Well Water Treatment",
              href: "/well-water-treatment-calgary/",
              icon: "science",
              desc: "Acreage iron, manganese + filtration.",
            },
            {
              label: "Water Softeners",
              href: "/water-softener/",
              icon: "softener_tank",
              desc: "Protect fixtures from Alberta hard water.",
            },
            {
              label: "Reverse Osmosis",
              href: "/reverse-osmosis-calgary/",
              icon: "water_drop",
              desc: "Under-sink + whole-home drinking-water filtration.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/2026/03/water-softener-installation.webp",
        title: "Upgrade your hot water",
        body: "Tankless, tanks, softeners — honest advice.",
        cta: "Book a water consult",
        href: "#quote",
      },
    },
  },
];

export default function NavClient({
  searchIndex,
  reviewsSummary,
}: {
  searchIndex: SearchEntry[];
  reviewsSummary: { totalLabel: string; average: number };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeCategory = activeCategoryFromPath(pathname ?? "");

  // Scroll-state shadow — when the user scrolls past the top, the
  // sticky nav grows a soft shadow + slightly more opaque bg so it
  // reads as "above content" instead of floating ambiguously over it.
  // Threshold is 8px so it triggers on the first scroll wheel tick.
  const [scrolled, setScrolled] = useState(false);
  // Separate, later threshold for the size change. `scrolled` (8px) adds
  // the shadow on the first wheel tick; `condensed` (80px) shrinks the
  // bar and drops the nav sub-labels, so the header doesn't visibly
  // resize on a tiny scroll nudge.
  const [condensed, setCondensed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setCondensed(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-ink-900 border-b border-line-dark transition-shadow duration-200 ${
        scrolled ? "shadow-lg shadow-ink-900/40" : ""
      }`}
    >
      {/* Skip-to-content — visually hidden until focused, then jumps
          a keyboard / screen-reader user past the nav into <main>. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-emergency focus:text-cream-50 focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      {/* Utility bar — thin top strip above the main nav. Surfaces the
          star rating + review count as a persistent trust signal across
          every page (travels with the user as they scroll, anchored at
          the very top). Hours + service area sit on the right at lg+
          as a complementary at-a-glance signal.

          No phone here — already in the main nav row below, would be
          redundant. Slightly darker bg than the main nav so the layered
          structure reads. */}
      <div className="hidden sm:block bg-emergency text-[#06231d]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 min-h-[38px] py-1.5 flex items-center flex-wrap gap-x-4 gap-y-1 text-[13px] font-semibold">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="tracking-[1px]">
              ★★★★★
            </span>
            <span className="font-extrabold">
              {reviewsSummary.average.toFixed(1)}
            </span>
            <span>from {reviewsSummary.totalLabel} Calgary neighbours</span>
          </span>
          <RailSep />
          <span>Red Seal journeymen</span>
          <RailSep />
          <span className="hidden md:inline">Licensed · Insured · Bonded</span>
          <span className="hidden md:inline">
            <RailSep />
          </span>
          <span className="hidden md:inline">BBB Accredited</span>
          <span className="ml-auto hidden lg:flex items-center gap-4">
            <span>Mon–Sat 8–6</span>
            <RailSep />
            <span>Calgary, Airdrie &amp; surrounding</span>
          </span>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between gap-3 lg:gap-8 transition-[height] duration-200 h-[72px] md:h-[88px] ${
          condensed ? "lg:h-[88px]" : "lg:h-[112px]"
        }`}
      >
        {/* Logo — prominent but slightly tighter than before so nav items
            get more breathing room (was h-48/64/72; now 44/56/60). */}
        <Link
          href="/"
          className="flex items-center text-cream-50 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/FT-LOGO-DARK8.png"
            alt="FlameTech"
            width={300}
            height={183}
            priority
            className={`w-auto object-contain transition-[height] duration-200 h-[44px] md:h-[56px] ${
              condensed ? "lg:h-[58px]" : "lg:h-[76px]"
            }`}
          />
        </Link>

        {/* Mobile CTA icons — call (red, primary) + quote request
            (cream, secondary). Swapped mail icon for request_quote
            since the contact page hosts a quote form, not an email
            inbox. Singular red CTA visually leads. */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <a
            href="tel:+15878343668"
            aria-label="Call 587-834-3668"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emergency text-cream-50 active:bg-emergency-deep transition-colors shadow-md shadow-emergency/30"
          >
            <Icon name="call" className="text-xl" />
          </a>
          <Link
            href="/contact/"
            aria-label="Contact us"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream-50 text-ink-900 active:bg-cream-100 transition-colors shadow-md"
          >
            <Icon name="mail" className="text-xl" />
          </Link>
        </div>

        {/* Desktop menu — active state upgraded from a thin under-line
            to a pill background (bg-ink-800 + border) for more presence.
            The active item now reads as visibly elevated from its
            neighbours, not just colored. */}
        {/* Nav pill group — the items sit inside one rounded, faintly
            lit container rather than floating on the bar. Each carries a
            sub-label that hides below 1180px and when the header
            condenses, which is what keeps the row from overflowing on
            laptop widths. */}
        <ul className="hidden lg:flex items-stretch gap-[3px] p-1.5 rounded-[22px] bg-cream-50/[0.04] border border-cream-50/[0.09] h-full my-auto max-h-[68px]">
          {menu.map((item) => {
            const isActive = item.label === activeCategory;
            return (
              <li key={item.label} className="group flex items-stretch">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2.5 px-4 xl:px-[18px] rounded-[15px] transition-colors ${
                    isActive
                      ? "bg-cream-50/[0.09]"
                      : "hover:bg-cream-50/[0.13] focus-visible:bg-cream-50/[0.13]"
                  }`}
                >
                  <span className="flex flex-col items-start gap-px">
                    <span
                      className={`text-[16.5px] font-semibold leading-[1.2] tracking-tight transition-colors ${
                        isActive
                          ? "text-emergency"
                          : "text-cream-50 group-hover:text-emergency"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.sub && !condensed && (
                      <span className="hidden xl:block text-[12px] leading-[1.2] text-muted">
                        {item.sub}
                      </span>
                    )}
                  </span>
                  {item.mega && (
                    <Icon
                      name="expand_more"
                      className="text-base text-muted transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>
                {item.mega && (
                  <MegaPanel
                    mega={item.mega}
                    pathname={pathname ?? ""}
                    category={item.label}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side — phone visibility bumped from xl-only to lg+
            (was hiding from most laptop viewports). Phone is conversion
            #1 for plumbers; should always be visible on desktop. */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          <SiteSearch searchIndex={searchIndex} variant="compact" />

          {/* Phone — a bordered block with a label above the number
              rather than a bare link. Phone is conversion #1, so it gets
              the visual weight of a control, not a text link. */}
          <a
            href="tel:+15878343668"
            className="hidden lg:flex items-center gap-3 h-[56px] px-5 xl:px-6 rounded-full border border-cream-50/[0.16] hover:border-emergency/65 hover:bg-emergency/[0.06] transition-colors"
          >
            <Icon name="call" className="text-xl text-emergency shrink-0" />
            <span className="flex flex-col gap-px">
              <span className="hidden xl:block font-technical text-[10.5px] uppercase tracking-[0.12em] text-muted leading-none">
                Talk to our team
              </span>
              <span className="text-[20px] xl:text-[21px] font-bold text-cream-50 tracking-[0.02em] leading-[1.15]">
                587 834 3668
              </span>
            </span>
          </a>

          <Link
            href="/contact/"
            className="cta-animated-border inline-flex items-center gap-2 h-[52px] lg:h-[56px] rounded-full bg-primary text-[#1b0d02] font-bold tracking-tight px-6 lg:px-7 text-[16px] lg:text-[17px] hover:bg-primary-soft transition-colors shadow-[0_10px_28px_rgba(251,146,60,0.2)]"
          >
            Free Quote
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile toggle — icon-only on small screens (the call + contact
            icons already sit beside it, so adding the "Menu" word here
            would push the row over on 360px viewports). Text re-appears
            at md+ where the right-side desktop cluster lives. */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 md:w-auto md:px-3 md:gap-2 rounded-full text-cream-50 hover:text-emergency border border-line-dark md:border-0 transition-colors"
        >
          <Icon name={open ? "close" : "menu"} className="text-2xl" />
          <span className="hidden md:inline text-[13px] font-extrabold uppercase tracking-[0.16em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-dark bg-ink-900 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            <div className="mb-3">
              <SiteSearch
                searchIndex={searchIndex}
                variant="inline"
                theme="dark"
                placeholder="Search services, neighbourhoods…"
              />
            </div>
            {menu.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[19px] font-extrabold text-cream-50 hover:text-emergency transition-colors"
            >
              Contact
            </Link>
            <div className="pt-4 mt-4 border-t border-line-dark flex flex-col gap-3">
              <a
                href="tel:+15878343668"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-dark text-cream-50 font-semibold py-3 text-sm"
              >
                <Icon name="call" className="text-base text-emergency" />
                587-834-3668
              </a>
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-emergency text-ink-900 font-bold py-3 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MegaPanel({
  mega,
  pathname,
  category,
}: {
  mega: NonNullable<NavItem["mega"]>;
  pathname: string;
  category: string;
}) {
  const hasPromo = !!mega.promo;
  const tone = toneFromCategory(category);
  // Column allocation across a 3-track grid. The panel now spans the full
  // site content width, so the aim is to spend that width horizontally
  // rather than stacking one tall column per group. The largest group
  // takes two tracks and lays its items out two-up, which roughly halves
  // the row count on the 6-item Plumbing and Heating menus.
  const widest = Math.max(...mega.groups.map((g) => g.items.length));
  const spanFor = (g: MegaGroup) =>
    mega.groups.length === 1 ? 3 : g.items.length === widest ? 2 : 1;
  return (
    <div className="absolute left-0 right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
      <div className="w-full rounded-2xl bg-ink-800 border border-line-dark soft-shadow overflow-hidden">
        <div
          className={`grid ${
            hasPromo ? "grid-cols-[1fr_280px]" : "grid-cols-1"
          }`}
        >
          <div className="p-6 grid grid-cols-3 gap-x-6 gap-y-6">
            {mega.groups.map((group) => (
              <div
                key={group.heading}
                className={
                  spanFor(group) === 3
                    ? "col-span-3"
                    : spanFor(group) === 2
                    ? "col-span-2"
                    : "col-span-1"
                }
              >
                {group.headingHref ? (
                  <Link
                    href={group.headingHref}
                    className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-primary hover:text-emergency mb-3 transition-colors group/heading"
                  >
                    {group.heading}
                    <Icon
                      name="arrow_right_alt"
                      className="text-base transition-transform group-hover/heading:translate-x-0.5"
                    />
                  </Link>
                ) : (
                  <h4 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-primary mb-3">
                    {group.heading}
                  </h4>
                )}
                <ul
                  className={
                    spanFor(group) >= 2
                      ? "grid grid-cols-2 gap-x-4 gap-y-0.5"
                      : "space-y-0.5"
                  }
                >
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors group/item ${
                            isActive ? "bg-ink-700" : "hover:bg-ink-700"
                          }`}
                        >
                          <IconBadge
                            name={item.icon}
                            tone={tone}
                            variant={isActive ? "filled" : "outline"}
                            size="sm"
                          />
                          <span className="flex-1">
                            <span
                              className={`block font-bold text-[16px] transition-colors ${
                                isActive
                                  ? "text-emergency"
                                  : "text-cream-50 group-hover/item:text-emergency"
                              }`}
                            >
                              {item.label}
                            </span>
                            {item.desc && (
                              <span className="block text-[13px] text-cream-50/75 mt-0.5 leading-snug">
                                {item.desc}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          {mega.promo && (
            <div className="relative bg-ink-900 border-l border-line-dark flex flex-col">
              <div className="relative h-36 overflow-hidden bg-cream-50 flex items-center justify-center">
                <Image
                  src={mega.promo.image}
                  alt={mega.promo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h5 className="font-display text-xl font-extrabold tracking-tight text-cream-50 mb-2">
                  {mega.promo.title}
                </h5>
                <p className="text-sm text-cream-50/80 leading-relaxed mb-5 flex-grow">
                  {mega.promo.body}
                </p>
                <a
                  href={mega.promo.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-4 py-3 text-[13px] hover:bg-emergency-deep transition-colors"
                >
                  {mega.promo.cta}
                  <Icon name="arrow_right_alt" className="text-base" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

function MobileMenuItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  if (!item.mega) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block px-3 py-3 text-base font-semibold text-cream-50/90 rounded-xl hover:bg-ink-800"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-cream-50/90 rounded-xl hover:bg-ink-800"
      >
        {item.label}
        <Icon
          name="expand_more"
          className={`text-xl transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {expanded && (
        <div className="pl-3 pb-2 space-y-4">
          {item.mega.groups.map((group) => (
            <div key={group.heading}>
              {group.headingHref ? (
                <Link
                  href={group.headingHref}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary px-3 mb-2 mt-2 hover:text-emergency transition-colors"
                >
                  {group.heading}
                  <Icon name="arrow_right_alt" className="text-sm" />
                </Link>
              ) : (
                <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary px-3 mb-2 mt-2">
                  {group.heading}
                </h5>
              )}
              <div className="space-y-1">
                {group.items.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink-800"
                  >
                    <Icon
                      name={sub.icon}
                      className="text-base text-primary"
                    />
                    <span className="text-sm text-cream-50/80">
                      {sub.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
