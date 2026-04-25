import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import StickyCallBar from "@/components/StickyCallBar";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { authors } from "@/lib/authors";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

export const metadata: Metadata = {
  title: "About FlameTech Plumbing & Heating | Calgary's Trusted Trade Team",
  description:
    "Locally owned and operated by Red Seal–certified Shaun Kristoff and Jason Mounsey. 45+ years combined experience serving Calgary and surrounding areas with honest, quality plumbing and heating work.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    title: "About FlameTech Plumbing & Heating",
    description:
      "Meet Shaun and Jason — Red Seal–certified plumbers with 45+ years of combined experience serving Calgary homes.",
    url: `${SITE_URL}/about`,
    siteName: "FlameTech Plumbing & Heating",
    locale: "en_CA",
  },
};

const values = [
  {
    icon: "verified",
    title: "Red Seal craftsmanship",
    body: "Both founders are Red Seal–certified journeymen. Every install, repair, and tune-up meets Alberta code and is done to last — not patched to fit a quote.",
  },
  {
    icon: "request_quote",
    title: "Honest, upfront pricing",
    body: "Free written estimates before anything starts. No surprise add-ons, no service charge for quotes, no pressure if a repair makes more sense than replacement.",
  },
  {
    icon: "schedule",
    title: "Real people, fast response",
    body: "When you call, you talk to a plumber — not a call centre. Priority dispatch for emergencies, and most service trucks arrive within the hour anywhere in Calgary.",
  },
  {
    icon: "handyman",
    title: "Solutions that last",
    body: "We size systems for Calgary's −40 °C design temperature, factor in our hard water, and explain the trade-offs so you can make the call with full information.",
  },
];

const credentials = [
  "Red Seal certified journeymen",
  "Alberta Licensed",
  "BBB Accredited",
  "Insured & Bonded",
  "B2 Gas Fitting",
  "Hydronics Design Certificate",
  "AirEase Pro Team member",
  "Manufacturer-trained: Viessmann · Navien · IBC · Carrier · Lennox",
];

export default function AboutPage() {
  const shaun = authors["Shaun Kristoff"];
  const jason = authors["Jason Mounsey"];

  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="About FlameTech"
        title="Calgary's locally owned plumbing and heating team."
        description="Founded and run by two Red Seal–certified journeymen with 45+ years of combined experience. We do honest residential plumbing, heating, AC, and water-systems work — and we treat every home like it's our own."
      />

      {/* Mission / company overview */}
      <section className="bg-cream-50 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <span className="eyebrow-light mb-4">Our story</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 mb-6 leading-[1.1]">
            Built around quality craftsmanship — not the next sales target.
          </h2>
          <div className="space-y-6 text-[17px] md:text-[18px] text-ink-700 leading-relaxed">
            <p>
              FlameTech Plumbing &amp; Heating is a locally owned and operated
              Calgary company. We started this business because too many
              homeowners were stuck choosing between fast-but-sloppy big shops
              and friendly-but-overworked one-person operations. We wanted to
              be the third option — fast and dependable, but with the
              craftsmanship and honesty of a small team that actually answers
              the phone.
            </p>
            <p>
              Today we serve residential and commercial clients across Calgary
              and surrounding areas — from leaky faucets and emergency boiler
              repairs through to full plumbing and HVAC system installs. Every
              job, big or small, gets the same Red Seal–level care, the same
              upfront pricing, and the same direct line to the person doing
              the work.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white text-ink-900 py-20 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow-light mb-4">Meet the founders</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Two Red Seal journeymen, 45+ years combined.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[shaun, jason].map((person) => (
              <article
                key={person.name}
                className="rounded-2xl bg-cream-50 border border-line-light p-8 md:p-10 soft-shadow"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emergency/15 text-emergency flex items-center justify-center font-display font-extrabold text-xl md:text-2xl shrink-0">
                    {person.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-ink-900">
                      {person.name}
                    </h3>
                    <p className="text-sm text-ink-500 mt-1.5 leading-snug">
                      {person.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-[17px] text-ink-700 leading-relaxed">
                  {person.bio.split(/\n\n+/).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {person.credentials && (
                  <div className="mt-6 pt-6 border-t border-line-light flex flex-wrap gap-2">
                    {person.credentials.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line-light px-3 py-1.5 text-[13px] font-semibold text-ink-700"
                      >
                        <Icon name="verified" className="text-primary text-base" />
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values / how we work */}
      <section className="bg-cream-100 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow-light mb-4">What we stand for</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Four things every job gets, every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white border border-line-light p-7 md:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center mb-5">
                  <Icon name={v.icon} className="text-xl" />
                </div>
                <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="text-[16px] md:text-[17px] text-ink-700 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-cream-50 text-ink-900 py-16 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow-light mb-3">Credentials</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-4 leading-tight">
              Licensed, certified, and trained on the brands we install.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line-light px-4 py-2 text-[14px] font-semibold text-ink-700"
              >
                <Icon name="verified" className="text-primary text-base" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service snapshot — links to home services anchor */}
      <section className="bg-white text-ink-900 py-20 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-4">What we offer</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              From a leaky faucet to a full mechanical room.
            </h2>
            <p className="text-[17px] text-ink-700 leading-relaxed mt-5 max-w-2xl">
              Plumbing, heating, air conditioning, and water-systems work for
              homes and small commercial spaces across Calgary, Airdrie, and
              the surrounding communities. Every job is quoted upfront, done
              to code, and backed by our workmanship guarantee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Plumbing", href: "/#services", icon: "plumbing" },
              { label: "Heating & Boilers", href: "/boiler-installation-calgary", icon: "local_fire_department" },
              { label: "Air Conditioning", href: "/air-conditioning", icon: "ac_unit" },
              { label: "Water Systems", href: "/water-softener", icon: "water_drop" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group rounded-2xl bg-cream-50 border border-line-light p-6 hover:border-emergency transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center mb-4">
                  <Icon name={s.icon} className="text-lg" />
                </div>
                <p className="font-display font-extrabold text-lg tracking-tight group-hover:text-emergency-deep transition-colors">
                  {s.label}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-sm font-bold text-emergency-deep">
                  See services
                  <Icon name="arrow_right_alt" className="text-base" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}
