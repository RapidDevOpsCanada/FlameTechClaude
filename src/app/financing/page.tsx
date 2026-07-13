import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import StickyCallBar from "@/components/StickyCallBar";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://flametechplumbing.ca";
const FINANCEIT_APPLY_URL = "https://www.financeit.io/consumer/products?merchant_id=flametech";

export const metadata: Metadata = {
  title: "Financing — Monthly Payments via Financeit | FlameTech Plumbing & Heating",
  description:
    "Spread the cost of a new boiler, furnace, AC, or water heater install into flexible monthly payments via our Financeit partner. Quick online application, soft credit check, no prepayment penalty.",
  alternates: { canonical: `${SITE_URL}/financing/` },
  openGraph: {
    type: "website",
    title: "FlameTech Financing — Monthly Payments via Financeit",
    description:
      "Flexible monthly payments on bigger Calgary installs via Financeit. Quick application, fast decision, start the work right away.",
    url: `${SITE_URL}/financing/`,
    siteName: "FlameTech Plumbing & Heating",
    locale: "en_CA",
  },
};

const steps = [
  {
    icon: "request_quote",
    title: "Get a written quote",
    body: "Book a free assessment. We come out, scope the job, and put an all-in price in writing — financing is optional, the quote is yours either way.",
  },
  {
    icon: "build",
    title: "Apply online with Financeit",
    body: "If you want to spread it out, the Financeit application takes a few minutes. Soft credit check, instant decision in most cases, no impact on your credit score to apply.",
  },
  {
    icon: "event_available",
    title: "We start the work",
    body: "Once approved, we book your install. Work starts on your normal schedule — financing doesn't slow down dispatch or delivery.",
  },
  {
    icon: "verified",
    title: "Pay monthly, no surprises",
    body: "Fixed monthly payments at the agreed rate. No prepayment penalty if you want to pay it off early, no balloon at the end.",
  },
];

const paymentFactors = [
  {
    kicker: "The job",
    label: "What the work actually costs",
    body: "Everything starts from your written quote. We price the specific job on-site first — the financing conversation only happens after you know the real number, never before.",
  },
  {
    kicker: "The term",
    label: "How long you spread it over",
    body: "Terms typically run from a few months out to several years. A longer term means a smaller monthly payment and more interest paid overall; a shorter one is the reverse. You pick the trade-off that fits your budget.",
  },
  {
    kicker: "The rate",
    label: "Your rate, not our markup",
    body: "Financeit sets the rate from the loan amount, the term, and your credit profile. We don't add anything on top — the rate they offer you is the rate you get, and you see it before you accept.",
  },
  {
    kicker: "No penalty",
    label: "Pay it off whenever you want",
    body: "Fixed monthly payments, no balloon at the end, and no prepayment penalty. If your situation changes and you want to clear the balance early, you can.",
  },
];

const qualifyingServices: { label: string; href: string; icon: string }[] = [
  { label: "Boiler installation", href: "/boiler-installation-calgary/", icon: "build" },
  { label: "High-efficiency furnaces", href: "/high-efficiency-furnaces-calgary/", icon: "local_fire_department" },
  { label: "AirEase furnaces", href: "/air-ease-furnaces-calgary/", icon: "local_fire_department" },
  { label: "Air conditioning", href: "/air-conditioning/", icon: "ac_unit" },
  { label: "Heat pumps", href: "/heat-pumps-calgary/", icon: "ac_unit" },
  { label: "Tankless water heaters", href: "/tankless-water-heaters/", icon: "whatshot" },
  { label: "Hot water tank replacement", href: "/hot-water-tank-replacement-calgary/", icon: "sync" },
  { label: "Water softener install", href: "/water-softener/", icon: "science" },
  { label: "PolyB plumbing replacement", href: "/polyb-plumbing-calgary/", icon: "swap_horiz" },
];

const faq = [
  {
    q: "Will applying affect my credit score?",
    a: "No — Financeit uses a soft credit check for the initial application, which doesn't affect your score. A hard pull only happens if you accept and proceed with a loan, the same as any other lender.",
  },
  {
    q: "How quickly do I get a decision?",
    a: "Most applications get an instant decision online. If something needs review, Financeit usually comes back within one business day.",
  },
  {
    q: "Is there a prepayment penalty?",
    a: "No. You can pay the loan off early at any time with no penalty.",
  },
  {
    q: "Do I have to use Financeit?",
    a: "Not at all. The financing is optional — every quote we provide is the same price whether you pay outright, finance through Financeit, or use your own bank.",
  },
  {
    q: "What's the interest rate?",
    a: "Rates depend on the loan amount, term length, and your credit profile. The Financeit application shows your specific rate before you accept anything. We don't add markup — the rate Financeit offers is the rate you get.",
  },
  {
    q: "Can I finance a repair, not just an install?",
    a: "Larger repairs generally qualify. Smaller service calls usually don't make sense to finance — the interest and the paperwork aren't worth it on a job that size, and we'll tell you straight which side of that line yours falls on.",
  },
  {
    q: "What if I'm a Calgary renter or landlord?",
    a: "Financing is for the property owner. If you're a renter, the homeowner needs to apply. We handle both single-family installs and small multi-unit work in Calgary and Airdrie.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Financing"
        title="Spread it across monthly payments — without surprises."
        description="Bigger installs (boiler, furnace, AC, water heater, repipe) qualify for flexible monthly financing through our Financeit partner. Soft credit check to apply, fast decision, no prepayment penalty."
      />

      {/* Financeit logo strip */}
      <section className="bg-cream-50 text-ink-900 py-12 border-t border-line-light light-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-5">
            In partnership with
          </p>
          <Image
            src="/images/financeit.png"
            alt="Financeit — financing partner"
            width={220}
            height={56}
            className="h-10 md:h-12 w-auto object-contain mx-auto"
          />
          <p className="text-[15px] md:text-base text-ink-700 leading-relaxed max-w-2xl mx-auto mt-6">
            Financeit is one of Canada&apos;s largest home-improvement
            financing platforms — used by 9,000+ contractors across the
            country. We&apos;ve partnered with them so qualified Calgary
            customers can take on a needed install without putting the whole
            cost on a credit card.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white text-ink-900 py-20 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow-light mb-4">How it works</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Four steps from quote to first payment.
            </h2>
            <p className="text-[17px] text-ink-700 leading-relaxed mt-5 max-w-2xl">
              Whether you finance or pay outright, the quote and the work are
              the same. Financing is just a payment option you can choose at
              the end if it makes sense for your budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl bg-cream-50 border border-line-light p-7"
              >
                <div className="font-display text-5xl md:text-6xl font-extrabold leading-none text-ink-900/10 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center mb-4">
                  <Icon name={s.icon} className="text-lg" />
                </div>
                <h3 className="font-display font-extrabold text-lg tracking-tight mb-2.5 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-ink-700 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What decides your payment */}
      <section className="bg-cream-100 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-4">What it looks like</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              What decides your monthly payment.
            </h2>
            <p className="text-[17px] text-ink-700 leading-relaxed mt-5 max-w-2xl">
              We don&apos;t publish sample payment tables, because no two
              installs are identical and a number pulled off a web page is a
              number that changes when we actually see your mechanical room.
              Here&apos;s what your real payment is built from instead — and
              you see all of it, in writing, before you commit to anything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentFactors.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl bg-white border border-line-light p-7 md:p-8"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3">
                  {f.kicker}
                </p>
                <p className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-4 leading-tight">
                  {f.label}
                </p>
                <p className="text-[15px] text-ink-700 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-ink-500 mt-8 max-w-3xl leading-relaxed">
            *Actual rates and terms depend on the loan amount, term length,
            and your credit profile. Financeit terms and conditions apply.
          </p>
        </div>
      </section>

      {/* Qualifying services */}
      <section className="bg-white text-ink-900 py-20 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-4">What qualifies</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Best fit for bigger jobs.
            </h2>
            <p className="text-[17px] text-ink-700 leading-relaxed mt-5 max-w-2xl">
              Financing is worth it on bigger-ticket work — the services below
              are the ones we most often help finance. Smaller service calls
              and minor repairs aren&apos;t worth the paperwork; we&apos;ll
              tell you straight which side of the line your job falls on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualifyingServices.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="lift group rounded-2xl bg-cream-50 border border-line-light p-6 hover:border-emergency flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center shrink-0">
                  <Icon name={s.icon} className="text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-extrabold text-[16px] tracking-tight group-hover:text-emergency-deep transition-colors leading-tight">
                    {s.label}
                  </p>
                </div>
                <Icon
                  name="arrow_right_alt"
                  className="text-base text-ink-500 group-hover:text-emergency-deep transition-colors shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <span className="eyebrow-light mb-4">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.015em] mt-4 leading-[1.1]">
              Common financing questions.
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white border border-line-light open:border-primary open:border-l-4 transition-colors"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center gap-4 font-semibold text-base md:text-lg">
                  <span className="flex-1">{item.q}</span>
                  <Icon
                    name="add"
                    className="text-primary text-xl transition-transform group-open:rotate-45 shrink-0"
                  />
                </summary>
                <p className="px-6 pb-6 text-[15px] text-ink-700 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-white text-ink-900 py-20 border-t border-line-light">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="rounded-3xl bg-ink-900 text-cream-50 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 dotgrid opacity-25 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-emergency/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-4 block">
                Ready to start
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05] mb-5 max-w-xl">
                Get a written quote first — finance after if it fits.
              </h2>
              <p className="text-cream-50/75 leading-relaxed mb-8 max-w-xl text-[16px] md:text-[17px]">
                Book a free, no-obligation assessment. We&apos;ll quote your
                specific job upfront, and you can decide whether to pay
                outright, apply through Financeit, or use your own bank — no
                pressure either way.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Link
                  href="/contact#quote"
                  className="cta-animated-border inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-7 py-4 text-[14px] hover:bg-emergency-deep transition-colors"
                >
                  Request free estimate
                  <Icon name="arrow_right_alt" className="text-base" />
                </Link>
                <a
                  href={FINANCEIT_APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-7 py-4 text-[14px] hover:border-emergency hover:text-emergency transition-colors"
                >
                  Apply with Financeit
                  <Icon name="open_in_new" className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}
