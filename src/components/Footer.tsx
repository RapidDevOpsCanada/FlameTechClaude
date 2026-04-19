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

const neighbourhoodGroups: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "SW Calgary",
    items: [
      { label: "Altadore", href: "/altadore-plumbers-calgary" },
      { label: "Aspen Woods", href: "/aspen-woods-plumbers-calgary" },
      { label: "Bridlewood", href: "/bridlewood-plumbers-calgary" },
      { label: "Evergreen", href: "/evergreen-plumbers-calgary" },
      { label: "Killarney", href: "/killarney-plumbers-calgary" },
      { label: "Marda Loop", href: "/marda-loop-plumbers-calgary" },
      { label: "Mount Royal", href: "/mount-royal-plumbers-calgary" },
      { label: "Signal Hill", href: "/signal-hill-plumbers-calgary" },
      { label: "West Springs", href: "/west-springs-plumbers-calgary" },
      { label: "Woodbine", href: "/woodbine-plumber" },
      { label: "All SW Calgary", href: "/calgary-plumbers-sw" },
    ],
  },
  {
    heading: "SE Calgary",
    items: [
      { label: "Auburn Bay", href: "/auburn-bay-plumber-calgary" },
      { label: "Chaparral", href: "/chaparral-plumbers-calgary" },
      { label: "Copperfield", href: "/copperfield-plumbers-calgary" },
      { label: "Cranston", href: "/cranston-plumber-calgary" },
      { label: "Mahogany", href: "/mahogany-plumbers-calgary" },
      { label: "McKenzie Lake", href: "/mckenzie-lake-plumbers-calgary" },
      { label: "McKenzie Towne", href: "/mckenzie-towne-plumbers-calgary" },
      { label: "New Brighton", href: "/new-brighton-plumbers-calgary" },
      { label: "All SE Calgary", href: "/calgary-plumbers-se" },
    ],
  },
  {
    heading: "NW Calgary",
    items: [
      { label: "Edgemont", href: "/edgemont-plumbers-calgary" },
      { label: "Evanston", href: "/evanston-plumbers-calgary" },
      { label: "Panorama Hills", href: "/panorama-hills-plumbers-calgary" },
      { label: "Tuscany", href: "/tuscany-plumbers-calgary" },
      { label: "Varsity", href: "/varsity-plumbers-calgary" },
      { label: "Huntington Hills", href: "/huntington-hills" },
      { label: "Bowness", href: "/bowness-plumbers-calgary" },
      { label: "All NW Calgary", href: "/calgary-plumbers-nw" },
    ],
  },
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
              className="h-[97px] w-auto object-contain"
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

      {/* Calgary neighbourhoods */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <h5 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Calgary Neighbourhoods
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighbourhoodGroups.map((g) => (
              <div key={g.heading}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cream-50/50 mb-3">
                  {g.heading}
                </p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
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
            ))}
          </div>
        </div>
      </div>

      {/* Airdrie service pages */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <h5 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Airdrie Services
          </h5>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-2.5">
            {airdrieLinks.map((item) => (
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
