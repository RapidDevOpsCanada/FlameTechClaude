import Link from "next/link";
import Icon from "@/components/Icon";

const plumbingLinks = [
  { label: "Bathroom Plumbing", href: "/bathroom-plumbing-calgary" },
  { label: "Shower Plumbing", href: "/shower-plumbing-calgary" },
  { label: "Drain Cleaning", href: "/drain-cleaning-calgary" },
  { label: "Emergency Plumbing", href: "/emergency-plumber-calgary" },
  { label: "PolyB Replacement", href: "/polyb-plumbing-calgary" },
];

const heatingLinks = [
  { label: "Boiler Installation", href: "/boiler-installation-calgary" },
  { label: "Boiler Repair", href: "/boiler-repair-calgary" },
  { label: "Boiler Service", href: "/boiler-service-calgary" },
  { label: "Furnaces", href: "/furnaces" },
  { label: "High-Efficiency Furnaces", href: "/high-efficiency-furnaces-calgary" },
  { label: "Garage Heaters", href: "/garage-heaters-calgary" },
  { label: "Heat Pumps", href: "/heat-pumps-calgary" },
];

const airWaterLinks = [
  { label: "Air Conditioning", href: "/air-conditioning" },
  { label: "Humidifiers", href: "/humidifiers-calgary" },
  { label: "Hot Water Tanks", href: "/hot-water-tanks" },
  { label: "Tankless Heaters", href: "/tankless-water-heaters" },
  { label: "Water Softener", href: "/water-softener" },
];

const companyLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Service Area", href: "/#service-area" },
  { label: "Resources", href: "/articles" },
  { label: "Get a Quote", href: "/#quote" },
];

const serviceAreas = [
  "Calgary NE",
  "Calgary NW",
  "Calgary SE",
  "Calgary SW",
  "Airdrie",
  "Chestermere",
  "Cochrane",
  "Okotoks",
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50 border-t border-line-dark">
      {/* Top CTA strip */}
      <div className="bg-ink-800 border-b border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
              Ready to book Calgary&apos;s trusted plumbers?
            </p>
            <p className="text-cream-50/65 mt-2 text-sm">
              Free estimates · Upfront pricing · Satisfaction guaranteed
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:5878343668"
              className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3 text-[13px] hover:bg-emergency-deep transition-colors"
            >
              <Icon name="call" className="text-base" />
              587-834-3668
            </a>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-6 py-3 text-[13px] hover:border-emergency hover:text-emergency transition-colors"
            >
              Free Estimate
              <Icon name="arrow_right_alt" className="text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="inline-flex items-center mb-5">
            <img
              src="/images/FT-LOGO-DARK8.png"
              alt="FlameTech"
              className="h-[88px] w-auto object-contain"
            />
          </Link>
          <p className="text-cream-50/70 leading-relaxed text-sm max-w-xs mb-6">
            Calgary&apos;s trusted residential plumbing, heating, AC, and
            water-systems experts. Licensed, insured, bonded.
          </p>
          <a
            href="tel:5878343668"
            className="inline-flex items-center gap-2 text-lg font-extrabold text-emergency hover:text-cream-50 transition-colors"
          >
            <Icon name="call" className="text-xl" />
            587-834-3668
          </a>
        </div>

        <FooterColumn title="Plumbing" items={plumbingLinks} />
        <FooterColumn title="Heating" items={heatingLinks} />
        <FooterColumn title="Air & Water" items={airWaterLinks} />
        <FooterColumn title="Company" items={companyLinks} />
      </div>

      {/* Trust + service area */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-5">
            <img
              src="/images/blue-ceip-225x300.png"
              alt="BBB accredited"
              className="h-16 w-auto object-contain rounded-lg bg-white/5 p-1"
            />
            <div>
              <p className="font-bold text-sm leading-tight">BBB Accredited</p>
              <p className="text-xs text-cream-50/60 mt-1">
                Red Seal · Alberta Licensed · Insured &amp; Bonded
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3">
              Service Area
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 border border-line-dark px-3 py-1 text-xs text-cream-50/80"
                >
                  <Icon name="location_on" className="text-primary text-sm" />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full bg-ink-800 border border-line-dark px-3 py-1 text-xs text-cream-50/60">
                + surrounding communities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-50/55">
          <p>
            © {new Date().getFullYear()} FlameTech Plumbing &amp; Heating Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emergency animate-pulse"></span>
            <span className="font-semibold text-emergency">
              Emergency Dispatch
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
        {title}
      </h5>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-cream-50/70 hover:text-emergency transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
