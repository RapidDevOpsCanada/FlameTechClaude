import Link from "next/link";
import Image from "next/image";
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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Financing", href: "/financing" },
  { label: "Resources", href: "/articles" },
  { label: "Get a Quote", href: "/contact#quote" },
];

const airdrieLinks = [
  { label: "Airdrie Plumbers", href: "/airdrie-plumbers" },
  { label: "Airdrie Furnace Repair", href: "/airdrie-furnace-repairs" },
  { label: "Boilers Airdrie", href: "/boilers-airdrie" },
  { label: "Boiler Installation", href: "/boiler-installation-airdrie" },
  { label: "Heat Pumps Airdrie", href: "/heat-pumps-airdrie" },
  { label: "Hot Water Tanks", href: "/hot-water-tanks-airdrie" },
  { label: "Water Softener", href: "/water-softener-airdrie" },
  { label: "Coopers Crossing", href: "/coopers-crossing-plumbers" },
  { label: "Ravenswood Plumbers", href: "/ravenswood-plumbers-airdrie" },
  { label: "Reunion Plumbers", href: "/reunion-plumbers-airdrie" },
];

const serviceAreas: { label: string; href?: string }[] = [
  { label: "Calgary NE" },
  { label: "Calgary NW", href: "/calgary-plumbers-nw" },
  { label: "Calgary SE", href: "/calgary-plumbers-se" },
  { label: "Calgary SW", href: "/calgary-plumbers-sw" },
  { label: "Airdrie", href: "/airdrie-plumbers" },
  { label: "Chestermere" },
  { label: "Cochrane" },
  { label: "Okotoks" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50 border-t border-line-dark">
      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="inline-flex items-center mb-5">
            <Image
              src="/images/FT-LOGO-DARK8.png"
              alt="FlameTech"
              width={291}
              height={97}
              className="h-[97px] w-auto object-contain"
            />
          </Link>
          <p className="text-cream-50/70 leading-relaxed text-[15px] max-w-xs mb-6">
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

      {/* Airdrie service pages */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <h5 className="text-[13px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Airdrie Services
          </h5>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3">
            {airdrieLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-cream-50/75 hover:text-emergency transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trust + service area */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-5">
            <Image
              src="/images/blue-ceip-225x300.png"
              alt="BBB accredited"
              width={48}
              height={64}
              className="h-16 w-auto object-contain rounded-lg bg-white/5 p-1"
            />
            <div>
              <p className="font-bold text-[15px] leading-tight">BBB Accredited</p>
              <p className="text-[13px] text-cream-50/65 mt-1">
                Red Seal · Alberta Licensed · Insured &amp; Bonded
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-primary mb-3">
              Service Area
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) =>
                area.href ? (
                  <Link
                    key={area.label}
                    href={area.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 border border-line-dark px-3.5 py-1.5 text-[13px] text-cream-50/85 hover:border-emergency hover:text-emergency transition-colors"
                  >
                    <Icon name="location_on" className="text-primary text-base" />
                    {area.label}
                  </Link>
                ) : (
                  <span
                    key={area.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 border border-line-dark px-3.5 py-1.5 text-[13px] text-cream-50/85"
                  >
                    <Icon name="location_on" className="text-primary text-base" />
                    {area.label}
                  </span>
                ),
              )}
              <span className="inline-flex items-center rounded-full bg-ink-800 border border-line-dark px-3.5 py-1.5 text-[13px] text-cream-50/65">
                + surrounding communities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-cream-50/60">
          <p>
            © {new Date().getFullYear()} FlameTech Plumbing &amp; Heating Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="hover:text-cream-50 transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emergency animate-pulse"></span>
              <span className="font-semibold text-emergency">
                Emergency Dispatch
              </span>
            </div>
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
      <h5 className="text-[13px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
        {title}
      </h5>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[15px] text-cream-50/75 hover:text-emergency transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
