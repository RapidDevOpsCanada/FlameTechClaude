"use client";

import Link from "next/link";
import { useState } from "react";

type SubLink = { label: string; href: string };
type MenuItem = {
  label: string;
  href: string;
  children?: SubLink[];
};

const menu: MenuItem[] = [
  {
    label: "Plumbing",
    href: "/#services",
    children: [
      { label: "Bathroom Plumbing", href: "/#services" },
      { label: "Drain Cleaning", href: "/#services" },
      { label: "Emergency Plumbing", href: "/#services" },
      { label: "PolyB Plumbing", href: "/#services" },
      { label: "Shower Plumbing", href: "/#services" },
    ],
  },
  {
    label: "Heating",
    href: "/#services",
    children: [
      { label: "Boiler Installation", href: "/#services" },
      { label: "Boiler Repair", href: "/#services" },
      { label: "Boiler Service", href: "/#services" },
      { label: "High-Efficiency Furnaces", href: "/#services" },
      { label: "Garage Heaters", href: "/#services" },
      { label: "Heat Pumps", href: "/#services" },
    ],
  },
  {
    label: "Air",
    href: "/#services",
    children: [
      { label: "Air Conditioning", href: "/#services" },
      { label: "Humidifiers", href: "/#services" },
    ],
  },
  {
    label: "Water",
    href: "/#services",
    children: [
      { label: "Hot Water Tanks", href: "/#services" },
      { label: "Hot Water Tank Replacement", href: "/#services" },
      { label: "Tankless Water Heaters", href: "/#services" },
      { label: "Water Softeners", href: "/#services" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-ink-900/90 backdrop-blur-lg border-b border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-cream-50 shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/FT-LOGO-DARK8.png"
            alt="FlameTech"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-2">
          {menu.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-6 text-sm font-semibold text-cream-50/80 group-hover:text-emergency transition-colors"
              >
                {item.label}
                {item.children && (
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">
                    expand_more
                  </span>
                )}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="min-w-[260px] rounded-2xl bg-ink-800 border border-line-dark soft-shadow p-2">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-cream-50/80 hover:text-emergency hover:bg-ink-700 rounded-xl transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:5878343668"
            className="hidden xl:flex items-center gap-2 text-sm font-semibold text-cream-50 hover:text-emergency transition-colors"
          >
            <span className="material-symbols-outlined text-base text-emergency">
              call
            </span>
            587-834-3668
          </a>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-emergency text-ink-900 font-bold px-5 py-2.5 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
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
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line-dark bg-ink-900">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {menu.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <div className="pt-4 mt-4 border-t border-line-dark flex flex-col gap-3">
              <a
                href="tel:5878343668"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-dark text-cream-50 font-semibold py-3 text-sm"
              >
                <span className="material-symbols-outlined text-base text-emergency">
                  call
                </span>
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

function MobileMenuItem({
  item,
  onNavigate,
}: {
  item: MenuItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  if (!item.children) {
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
        <span
          className={`material-symbols-outlined transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {expanded && (
        <div className="pl-4 pb-2 space-y-1">
          {item.children.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              onClick={onNavigate}
              className="block px-3 py-2 text-sm text-cream-50/70 rounded-lg hover:text-emergency hover:bg-ink-800"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
