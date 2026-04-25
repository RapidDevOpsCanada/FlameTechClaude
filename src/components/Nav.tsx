"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";
import SiteSearch from "@/components/SiteSearch";
import { getService } from "@/lib/services";

/**
 * Resolve the active mega-menu category from the current pathname.
 * Returns one of "Plumbing" | "Heating" | "Air" | "Water" | null.
 */
function activeCategoryFromPath(pathname: string): string | null {
  if (!pathname || pathname === "/") return null;
  // Service pages: look up the slug in services.ts and use its category.
  const slug = pathname.replace(/^\//, "").split("/")[0];
  if (slug) {
    const service = getService(slug);
    if (service) return service.category;
  }
  return null;
}

type MegaItem = {
  label: string;
  href: string;
  icon: string;
  desc?: string;
};

type MegaGroup = {
  heading: string;
  items: MegaItem[];
};

type Promo = {
  image: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  mega?: {
    groups: MegaGroup[];
    promo?: Promo;
  };
};

const menu: NavItem[] = [
  {
    label: "Plumbing",
    href: "/#services",
    mega: {
      groups: [
        {
          heading: "Residential Plumbing",
          items: [
            {
              label: "Bathroom Plumbing",
              href: "/bathroom-plumbing-calgary",
              icon: "bathroom",
              desc: "Sinks, toilets, full bathroom retrofits.",
            },
            {
              label: "Shower Plumbing",
              href: "/shower-plumbing-calgary",
              icon: "shower",
              desc: "Shower installs, valve replacements.",
            },
            {
              label: "Drain Cleaning",
              href: "/drain-cleaning-calgary",
              icon: "water_damage",
              desc: "Clogs, slow drains, camera inspection.",
            },
          ],
        },
        {
          heading: "Emergency & Repairs",
          items: [
            {
              label: "Emergency Plumbing",
              href: "/emergency-plumber-calgary",
              icon: "contact_emergency",
              desc: "Leaks, burst pipes, urgent fixes.",
            },
            {
              label: "PolyB Plumbing",
              href: "/polyb-plumbing-calgary",
              icon: "swap_horiz",
              desc: "Full replacement for 80s/90s homes.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/FTVAN1.jpg",
        title: "Book a free plumbing estimate",
        body: "Upfront pricing, no surprises.",
        cta: "Call 587-834-3668",
        href: "tel:5878343668",
      },
    },
  },
  {
    label: "Heating",
    href: "/#services",
    mega: {
      groups: [
        {
          heading: "Boilers",
          items: [
            {
              label: "Boiler Installation",
              href: "/boiler-installation-calgary",
              icon: "build",
              desc: "New high-efficiency boilers.",
            },
            {
              label: "Boiler Repair",
              href: "/boiler-repair-calgary",
              icon: "handyman",
              desc: "Diagnosis and fast repairs.",
            },
            {
              label: "Boiler Service",
              href: "/boiler-service-calgary",
              icon: "tune",
              desc: "Annual maintenance & tune-ups.",
            },
          ],
        },
        {
          heading: "Furnaces & More",
          items: [
            {
              label: "Calgary Furnaces",
              href: "/furnaces",
              icon: "local_fire_department",
              desc: "Install, repair, and maintenance for every major brand.",
            },
            {
              label: "High-Efficiency Furnaces",
              href: "/high-efficiency-furnaces-calgary",
              icon: "local_fire_department",
              desc: "95–98% AFUE installs.",
            },
            {
              label: "Garage Heaters",
              href: "/garage-heaters-calgary",
              icon: "garage",
              desc: "Warm, code-compliant garages.",
            },
            {
              label: "Heat Pumps",
              href: "/heat-pumps-calgary",
              icon: "ac_unit",
              desc: "Cold-climate dual-fuel setups.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/navine-boiler.png",
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
    mega: {
      groups: [
        {
          heading: "Air Comfort",
          items: [
            {
              label: "Air Conditioning",
              href: "/air-conditioning",
              icon: "ac_unit",
              desc: "Central AC installs & service.",
            },
            {
              label: "Humidifiers",
              href: "/humidifiers-calgary",
              icon: "water_drop",
              desc: "Whole-home humidification.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/air-ease-ac.png",
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
    mega: {
      groups: [
        {
          heading: "Water Heating",
          items: [
            {
              label: "Hot Water Tanks",
              href: "/hot-water-tanks",
              icon: "propane_tank",
              desc: "Service, repair, and new installs.",
            },
            {
              label: "Hot Water Tank Replacement",
              href: "/hot-water-tank-replacement-calgary",
              icon: "sync",
              desc: "Same-day tank swaps when possible.",
            },
            {
              label: "Tankless Water Heaters",
              href: "/tankless-water-heaters",
              icon: "whatshot",
              desc: "Endless hot water, lower running costs.",
            },
          ],
        },
        {
          heading: "Water Treatment",
          items: [
            {
              label: "Water Softeners",
              href: "/water-softener",
              icon: "science",
              desc: "Protect fixtures from Alberta hard water.",
            },
          ],
        },
      ],
      promo: {
        image: "/images/graident-tankless-water-heater.png",
        title: "Upgrade your hot water",
        body: "Tankless, tanks, softeners — honest advice.",
        cta: "Book a water consult",
        href: "#quote",
      },
    },
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeCategory = activeCategoryFromPath(pathname ?? "");

  return (
    <nav className="sticky top-0 w-full z-50 bg-ink-900/95 backdrop-blur-lg border-b border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6 h-[92px] md:h-[100px]">
        {/* Logo — prominent */}
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
            className="h-[68px] md:h-[77px] lg:h-[88px] w-auto object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {menu.map((item) => {
            const isActive = item.label === activeCategory;
            return (
              <li
                key={item.label}
                className="relative group h-full flex items-stretch"
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-1.5 px-4 h-full text-[19px] font-extrabold tracking-tight uppercase transition-colors relative ${
                    isActive
                      ? "text-emergency"
                      : "text-cream-50 group-hover:text-emergency"
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <Icon
                      name="expand_more"
                      className="text-lg transition-transform group-hover:rotate-180"
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3 right-3 bottom-3 h-[2px] bg-emergency rounded-full"
                    />
                  )}
                </Link>
                {item.mega && <MegaPanel mega={item.mega} />}
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <SiteSearch variant="compact" />
          <a
            href="tel:5878343668"
            className="hidden xl:flex items-center gap-2 text-[19px] font-extrabold text-cream-50 hover:text-emergency transition-colors"
          >
            <Icon name="call" className="text-xl text-emergency" />
            587-834-3668
          </a>
          <Link
            href="/contact"
            className="cta-animated-border inline-flex items-center rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3 text-[15px] hover:bg-emergency-deep transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-line-dark text-cream-50"
        >
          <Icon name={open ? "close" : "menu"} className="text-xl" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-dark bg-ink-900 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            <div className="mb-3">
              <SiteSearch
                variant="inline"
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
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[19px] font-extrabold text-cream-50 hover:text-emergency transition-colors"
            >
              Contact
            </Link>
            <div className="pt-4 mt-4 border-t border-line-dark flex flex-col gap-3">
              <a
                href="tel:5878343668"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-dark text-cream-50 font-semibold py-3 text-sm"
              >
                <Icon name="call" className="text-base text-emergency" />
                587-834-3668
              </a>
              <Link
                href="/contact"
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

function MegaPanel({ mega }: { mega: NonNullable<NavItem["mega"]> }) {
  const hasPromo = !!mega.promo;
  return (
    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div
        className={`rounded-2xl bg-ink-800 border border-line-dark soft-shadow overflow-hidden ${
          hasPromo ? "w-[820px]" : "w-[520px]"
        }`}
      >
        <div
          className={`grid ${
            hasPromo ? "grid-cols-[1fr_300px]" : "grid-cols-1"
          }`}
        >
          <div className="p-7 grid grid-cols-2 gap-x-6 gap-y-7">
            {mega.groups.map((group) => (
              <div key={group.heading} className="col-span-2 md:col-span-1">
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-primary mb-4">
                  {group.heading}
                </h4>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-ink-700 transition-colors group/item"
                      >
                        <Icon
                          name={item.icon}
                          className="text-2xl text-primary mt-0.5"
                        />
                        <span className="flex-1">
                          <span className="block font-bold text-[16px] text-cream-50 group-hover/item:text-emergency transition-colors">
                            {item.label}
                          </span>
                          {item.desc && (
                            <span className="block text-[13px] text-cream-50/60 mt-0.5 leading-snug">
                              {item.desc}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {mega.promo && (
            <div className="relative bg-ink-900 border-l border-line-dark flex flex-col">
              <div className="relative h-36 overflow-hidden bg-cream-50 flex items-center justify-center">
                <Image
                  src={mega.promo.image}
                  alt=""
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
                <p className="text-sm text-cream-50/70 leading-relaxed mb-5 flex-grow">
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
              <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary px-3 mb-2 mt-2">
                {group.heading}
              </h5>
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
