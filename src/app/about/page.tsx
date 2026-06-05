import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import StickyCallBar from "@/components/StickyCallBar";
import Icon from "@/components/Icon";
import IconBadge from "@/components/IconBadge";
import { authors } from "@/lib/authors";
import Image from "next/image";
import type { Metadata } from "next";

const SITE_URL = "https://flametechplumbing.ca";

export const metadata: Metadata = {
  title: "About FlameTech Plumbing & Heating | Calgary's Trusted Trade Team",
  description:
    "Locally owned and operated by Red Seal–certified Shaun Kristoff and Jason Mounsey. 45+ years combined experience serving Calgary and surrounding areas with honest, quality plumbing and heating work.",
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    type: "website",
    title: "About FlameTech Plumbing & Heating",
    description:
      "Meet Shaun and Jason — Red Seal–certified plumbers with 45+ years of combined experience serving Calgary homes.",
    url: `${SITE_URL}/about/`,
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
  const ben = authors["Ben Driedger"];

  // Per-founder Person JSON-LD anchored to the about page so the founder
  // entries in the homepage business schema's `founder` array resolve to
  // a real, indexable Person profile (the E-E-A-T signal Aspen Mountain
  // Plumbing leans on).
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#webpage`,
        url: `${SITE_URL}/about/`,
        name: "About FlameTech Plumbing & Heating",
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}#business` },
        inLanguage: "en-CA",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about/#shaun-kristoff`,
        name: shaun.name,
        jobTitle: shaun.role,
        description: shaun.bio.split("\n\n")[0],
        image: shaun.avatar ? `${SITE_URL}${shaun.avatar}` : undefined,
        worksFor: { "@id": `${SITE_URL}#business` },
        knowsAbout: shaun.credentials,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about/#jason-mounsey`,
        name: jason.name,
        jobTitle: jason.role,
        description: jason.bio.split("\n\n")[0],
        image: jason.avatar ? `${SITE_URL}${jason.avatar}` : undefined,
        worksFor: { "@id": `${SITE_URL}#business` },
        knowsAbout: jason.credentials,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about/#ben-driedger`,
        name: ben.name,
        jobTitle: ben.role,
        description: ben.bio.split("\n\n")[0],
        image: ben.avatar ? `${SITE_URL}${ben.avatar}` : undefined,
        worksFor: { "@id": `${SITE_URL}#business` },
        knowsAbout: ben.credentials,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Nav />
      <section className="relative bg-ink-900 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative pt-12 md:pt-16 pb-12 md:pb-14">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <span className="eyebrow mb-4">About FlameTech</span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4 mb-5 max-w-3xl">
                Calgary&apos;s locally owned plumbing and heating team.
              </h1>
              <p className="text-lg text-cream-50/80 max-w-2xl leading-relaxed">
                Founded and run by two Red Seal–certified journeymen with 45+
                years of combined experience. We do honest residential
                plumbing, heating, AC, and water-systems work — and we treat
                every home like it&apos;s our own.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-line-dark soft-shadow aspect-[4/5] max-w-sm mx-auto">
                <Image
                  src="/images/FTVAN2.jpg"
                  alt="Jason Mounsey and Shaun Kristoff — FlameTech founders — standing in front of the service van"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="section-rule" />

      {/* Mission / company overview */}
      <section className="bg-cream-50 text-ink-900 py-14 md:py-16 border-t border-line-light light-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <span className="eyebrow-light mb-3">Our story</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.015em] mt-3 mb-5 leading-[1.1]">
            Built around craftsmanship — not the next sales target.
          </h2>
          <div className="space-y-4 text-[17px] text-ink-700 leading-relaxed">
            <p>
              FlameTech is a locally owned and operated Calgary company. We
              started it because too many homeowners were stuck choosing
              between fast-but-sloppy big shops and friendly-but-overworked
              one-person operations. We wanted to be the third option — fast
              and dependable, with the craftsmanship and honesty of a small
              team that actually answers the phone.
            </p>
            <p>
              Today we serve homes and small commercial spaces across Calgary
              and surrounding areas — from leaky faucets and emergency boiler
              calls through to full mechanical-room installs. Every job, big
              or small, gets the same Red Seal–level care, the same upfront
              pricing, and the same direct line to the person doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white text-ink-900 py-14 md:py-16 border-t border-line-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-3">Meet the team</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.015em] mt-3 leading-[1.1]">
              Red Seal certified. Owner-operated. Calgary local.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[shaun, jason, ben].map((person) => (
              <article
                key={person.name}
                className="rounded-2xl bg-cream-50 border border-line-light p-6 md:p-7 soft-shadow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-5">
                  {person.avatar ? (
                    <Image
                      src={person.avatar}
                      alt={`${person.name} headshot`}
                      width={96}
                      height={96}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-line-light shrink-0"
                    />
                  ) : (
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emergency/15 text-emergency flex items-center justify-center font-display font-extrabold text-2xl shrink-0">
                      {person.initials}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight leading-tight text-ink-900">
                      {person.name}
                    </h3>
                    <p className="text-[13px] text-ink-500 mt-1 leading-snug">
                      {person.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-[15px] md:text-[16px] text-ink-700 leading-relaxed flex-1">
                  {person.bio.split(/\n\n+/).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {person.credentials && (
                  <div className="mt-5 pt-5 border-t border-line-light flex flex-wrap gap-1.5">
                    {person.credentials.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 rounded-full bg-white border border-line-light px-2.5 py-1 text-[12px] font-semibold text-ink-700"
                      >
                        <Icon name="verified" className="text-primary text-sm" />
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

      {/* Values + credentials merged — single section for "what we stand
          for / who we are" so the bottom of the page doesn't pile section
          on section. Credentials chip-strip sits under the values grid
          inside the same surface, sharing the section header. */}
      <section className="bg-cream-100 text-ink-900 py-14 md:py-16 border-t border-line-light light-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-light mb-3">What we stand for</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.015em] mt-3 leading-[1.1]">
              Four things every job gets, every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="lift group rounded-2xl bg-white border border-line-light p-6 md:p-7"
              >
                <div className="mb-4">
                  <IconBadge name={v.icon} tone="neutral" size="md" />
                </div>
                <h3 className="font-display font-extrabold text-lg md:text-xl tracking-tight mb-2 leading-tight">
                  {v.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-ink-700 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          {/* Credentials chip-strip — same section to avoid a fourth-from-
              bottom section just for a chip row. */}
          <div className="mt-10 pt-8 border-t border-line-light/70">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-deep mb-4">
              Licensed, certified, manufacturer-trained
            </p>
            <div className="flex flex-wrap gap-1.5">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full bg-white border border-line-light px-3 py-1.5 text-[13px] font-semibold text-ink-700"
                >
                  <Icon name="verified" className="text-primary text-sm" />
                  {c}
                </span>
              ))}
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
