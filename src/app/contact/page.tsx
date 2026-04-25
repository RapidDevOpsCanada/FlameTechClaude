import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import StickyCallBar from "@/components/StickyCallBar";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icon";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";
const PHONE_DISPLAY = "(587) 834-3668";
const PHONE_TEL = "+15878343668";
const EMAIL = "info@flametechplumbing.ca";
const ADDRESS = "Woodbine Blvd, Calgary, AB";

export const metadata: Metadata = {
  title: "Contact FlameTech Plumbing & Heating | Calgary, Airdrie, & Surrounding Areas",
  description:
    "Call (587) 834-3668 or request a free quote online. Real people answer the phone. Priority emergency dispatch across Calgary, Airdrie, Cochrane, Chestermere, and Okotoks.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    title: "Contact FlameTech Plumbing & Heating",
    description:
      "Call, email, or request a free quote online. Real people answer the phone — priority dispatch for emergencies.",
    url: `${SITE_URL}/contact`,
    siteName: "FlameTech Plumbing & Heating",
    locale: "en_CA",
  },
};

const serviceAreas: { city: string; href?: string; note?: string }[] = [
  { city: "Calgary NE" },
  { city: "Calgary NW", href: "/calgary-plumbers-nw" },
  { city: "Calgary SE", href: "/calgary-plumbers-se" },
  { city: "Calgary SW", href: "/calgary-plumbers-sw" },
  { city: "Airdrie", href: "/airdrie-plumbers" },
  { city: "Chestermere" },
  { city: "Cochrane" },
  { city: "Okotoks" },
  { city: "Carstairs" },
];

export default function ContactPage() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: "FlameTech Plumbing & Heating Ltd.",
    telephone: PHONE_TEL,
    email: EMAIL,
    url: `${SITE_URL}/contact`,
    image: `${SITE_URL}/images/FT-LOGO-DARK8.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Woodbine Blvd",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      "Calgary",
      "Airdrie",
      "Chestermere",
      "Cochrane",
      "Okotoks",
      "Carstairs",
    ].map((name) => ({ "@type": "City", name })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Nav />
      <PageHeader
        eyebrow="Contact FlameTech"
        title="A real plumber answers — every call, every time."
        description="Call, text, or send a quote request. We respond fast — priority dispatch for emergencies, and free written estimates on planned work."
      />

      {/* Quick contact strip */}
      <section className="bg-cream-50 text-ink-900 py-16 border-t border-line-light light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="lift group rounded-2xl bg-white border border-line-light p-7 hover:border-emergency"
            >
              <div className="w-12 h-12 rounded-xl bg-emergency/15 text-emergency flex items-center justify-center mb-4">
                <Icon name="call" className="text-xl" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                Phone
              </p>
              <p className="font-display font-extrabold text-xl tracking-tight text-ink-900 group-hover:text-emergency-deep transition-colors">
                {PHONE_DISPLAY}
              </p>
              <p className="text-sm text-ink-500 mt-2">
                Real person answers — priority for emergencies.
              </p>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="lift group rounded-2xl bg-white border border-line-light p-7 hover:border-emergency"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center mb-4">
                <Icon name="share" className="text-xl" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                Email
              </p>
              <p className="font-display font-extrabold text-[15px] md:text-base tracking-tight text-ink-900 group-hover:text-emergency-deep transition-colors break-all">
                {EMAIL}
              </p>
              <p className="text-sm text-ink-500 mt-2">
                Replies within one business day.
              </p>
            </a>

            <div className="rounded-2xl bg-white border border-line-light p-7">
              <div className="w-12 h-12 rounded-xl bg-emergency/15 text-emergency flex items-center justify-center mb-4">
                <Icon name="schedule" className="text-xl" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                Hours
              </p>
              <p className="font-display font-extrabold text-lg tracking-tight text-ink-900 leading-tight">
                Mon – Sat
                <br />
                8:00 AM – 6:00 PM
              </p>
              <p className="text-sm text-ink-500 mt-2">
                Priority emergency response outside hours.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-line-light p-7">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center mb-4">
                <Icon name="location_on" className="text-xl" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                Based in
              </p>
              <p className="font-display font-extrabold text-lg tracking-tight text-ink-900 leading-tight">
                {ADDRESS}
              </p>
              <p className="text-sm text-ink-500 mt-2">
                Trucks dispatched from Calgary SW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form + side info */}
      <section
        id="quote"
        className="bg-white text-ink-900 py-20 border-t border-line-light"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow-light mb-4">Request a free quote</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 mb-5 leading-[1.1]">
                Tell us what's going on — we'll get back fast.
              </h2>
              <p className="text-[17px] text-ink-700 leading-relaxed mb-8 max-w-2xl">
                Free estimates, upfront pricing, and a satisfaction guarantee.
                Add as much detail as you can — type of system, age, what
                you're noticing — and we'll come back with a clear plan.
              </p>
              <div className="rounded-3xl bg-cream-50 text-ink-900 p-6 md:p-8 border border-line-light">
                <QuoteForm
                  issuePlaceholder="e.g. boiler losing pressure, water heater leaking, planning a bathroom reno…"
                />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-2xl bg-ink-900 text-cream-50 p-7 overflow-hidden">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
                    Need it solved tonight?
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight leading-tight mb-3">
                    Burst pipe, no heat, sewer backup?
                  </h3>
                  <p className="text-[14px] text-cream-50/70 leading-relaxed mb-5">
                    Skip the form — call directly for priority emergency
                    dispatch. Real person answers, plumber on the way.
                  </p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="cta-animated-border w-full inline-flex items-center justify-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-5 py-3.5 text-[13px] hover:bg-emergency-deep transition-colors"
                  >
                    <Icon name="call" className="text-base" />
                    Call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="rounded-2xl bg-cream-50 border border-line-light p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
                    What to expect
                  </span>
                  <ul className="space-y-3 text-[15px] text-ink-700 leading-snug">
                    {[
                      "Reply within one business day on form submissions",
                      "Free written estimate before any work starts",
                      "Honest repair-vs-replace recommendations",
                      "Permits, gas + electrical handled by us",
                      "Workmanship + manufacturer warranties on every install",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <Icon
                          name="check_circle"
                          className="text-primary text-lg shrink-0 mt-0.5"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-cream-100 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-4">Where we work</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Serving Calgary and surrounding communities.
            </h2>
            <p className="text-[17px] text-ink-700 leading-relaxed mt-5 max-w-2xl">
              Calgary is our home base. We also dispatch trucks daily to
              Airdrie, Cochrane, Chestermere, Okotoks, and Carstairs — same
              honest pricing, same workmanship, regardless of postal code.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) =>
              area.href ? (
                <Link
                  key={area.city}
                  href={area.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-line-light px-4 py-2.5 text-[14px] text-ink-700 font-semibold hover:border-emergency hover:text-emergency-deep transition-colors"
                >
                  <Icon name="location_on" className="text-primary text-base" />
                  {area.city}
                </Link>
              ) : (
                <span
                  key={area.city}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-line-light px-4 py-2.5 text-[14px] text-ink-700 font-semibold"
                >
                  <Icon name="location_on" className="text-primary text-base" />
                  {area.city}
                </span>
              ),
            )}
            <span className="inline-flex items-center rounded-full bg-white border border-line-light px-4 py-2.5 text-[14px] text-ink-500">
              + surrounding communities
            </span>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}
