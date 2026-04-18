"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";

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
              href: "/bathroom-plumbing",
              icon: "bathroom",
              desc: "Sinks, toilets, full bathroom retrofits.",
            },
            {
              label: "Shower Plumbing",
              href: "/shower-plumbing",
              icon: "shower",
              desc: "Shower installs, valve replacements.",
            },
            {
              label: "Drain Cleaning",
              href: "/drain-cleaning",
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
              href: "/emergency-plumbing",
              icon: "contact_emergency",
              desc: "Leaks, burst pipes, urgent fixes.",
            },
            {
              label: "PolyB Plumbing",
              href: "/polyb-plumbing",
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
              href: "/boiler-installation",
              icon: "build",
              desc: "New high-efficiency boilers.",
            },
            {
              label: "Boiler Repair",
              href: "/boiler-repair",
              icon: "handyman",
              desc: "Diagnosis and fast repairs.",
            },
            {
              label: "Boiler Service",
              href: "/boiler-service",
              icon: "tune",
              desc: "Annual maintenance & tune-ups.",
            },
          ],
        },
        {
          heading: "Furnaces & More",
          items: [
            {
              label: "High-Efficiency Furnaces",
              href: "/high-efficiency-furnaces",
              icon: "local_fire_department",
              desc: "95–98% AFUE installs.",
            },
            {
              label: "Garage Heaters",
              href: "/garage-heaters",
              icon: "garage",
              desc: "Warm, code-compliant garages.",
            },
            {
              label: "Heat Pumps",
              href: "/heat-pumps",
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
              href: "/humidifiers",
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
              href: "/hot-water-tank-replacement",
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
              href: "/water-softeners",
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

  return (
    <nav className="sticky top-0 w-full z-50 bg-ink-900/95 backdrop-blur-lg border-b border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6 h-[84px] md:h-[92px]">
        {/* Logo — prominent */}
        <Link
          href="/"
          className="flex items-center text-cream-50 shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/FT-LOGO-DARK8.png"
            alt="FlameTech"
            className="h-14 md:h-16 lg:h-[72px] w-auto object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {menu.map((item) => (
            <li key={item.label} className="relative group h-full flex items-stretch">
              <Link
                href={item.href}
                className="flex items-center gap-1.5 px-4 h-full text-[17px] font-extrabold tracking-tight uppercase text-cream-50 group-hover:text-emergency transition-colors"
              >
                {item.label}
                {item.mega && (
                  <Icon name="expand_more" className="text-lg transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {item.mega && <MegaPanel mega={item.mega} />}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:5878343668"
            className="hidden xl:flex items-center gap-2 text-[17px] font-extrabold text-cream-50 hover:text-emergency transition-colors"
          >
            <Icon name="call" className="text-xl text-emergency" />
            587-834-3668
          </a>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3 text-[15px] hover:bg-emergency-deep transition-colors"
          >
            Contact Us
          </a>
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
            {menu.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <div className="pt-4 mt-4 border-t border-line-dark flex flex-col gap-3">
              <a
                href="tel:5878343668"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-dark text-cream-50 font-semibold py-3 text-sm"
              >
                <Icon name="call" className="text-base text-emergency" />
                587-834-3668
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-emergency text-ink-900 font-bold py-3 text-sm"
              >
                Contact Us
              </a>
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
                <img
                  src={mega.promo.image}
                  alt=""
                  className="w-full h-full object-cover"
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
