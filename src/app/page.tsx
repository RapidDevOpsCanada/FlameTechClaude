import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ReviewsSection from "@/components/ReviewsSection";
import HowItWorks from "@/components/HowItWorks";
import BlogStrip from "@/components/BlogStrip";
import Reveal from "@/components/Reveal";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-ink-900 text-cream-50">
        {/* HERO — tighter vertical rhythm */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 dotgrid opacity-60 pointer-events-none"></div>
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-emergency/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 -left-32 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-14 md:pb-16 relative">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-12 lg:col-span-6 reveal">
                <span className="eyebrow mb-5">Get To Know Us</span>
                <h1 className="font-display text-[38px] md:text-[52px] xl:text-[62px] font-extrabold leading-[1.0] tracking-[-0.025em] mt-4 mb-6">
                  Calgary Plumbers —{" "}
                  <span className="text-emergency">
                    Trusted Plumbing Services
                  </span>
                  .
                </h1>
                <p className="text-lg text-cream-50/70 max-w-xl mb-8 leading-relaxed">
                  At Flame Tech, we pride ourselves on delivering top-notch
                  plumbing and heating services tailored to meet the unique
                  needs of our residential plumbing &amp; heating clients in
                  Calgary and the surrounding areas.
                </p>

                <div className="flex flex-wrap gap-4 mb-5">
                  <a
                    href="tel:5878343668"
                    className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-7 py-4 text-[14px] hover:bg-emergency-deep transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      contact_emergency
                    </span>
                    Call 587-834-3668
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-7 py-4 text-[14px] hover:border-emergency hover:text-emergency transition-colors"
                  >
                    Free estimate
                    <span className="material-symbols-outlined text-base">
                      arrow_right_alt
                    </span>
                  </a>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-ink-800 border border-line-dark px-4 py-2 text-xs text-cream-50/80 font-semibold">
                  <span className="material-symbols-outlined text-primary text-base">
                    verified
                  </span>
                  Free estimate · No service charge for quotes
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 relative reveal reveal-delay-200">
                <div className="relative rounded-3xl overflow-hidden border border-line-dark soft-shadow bg-cream-50">
                  <img
                    src="/images/FTVAN.jpg"
                    alt="FlameTech service van across Calgary"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-line-dark bg-ink-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <Stat number="45+" label="Years combined experience" />
            <Stat number="2,000+" label="Jobs completed" />
            <Stat number="5.0★" label="Google rated" />
            <Stat number="60–90" label="Min typical response" />
          </div>
        </section>

        {/* SERVICES — cream */}
        <section id="services" className="bg-cream-50 text-ink-900 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <span className="eyebrow-light mb-4">Services</span>
                  <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 max-w-2xl leading-[1.02]">
                    Complete plumbing, heating &amp; water solutions for
                    Calgary homes.
                  </h2>
                </div>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 font-bold px-6 py-3 text-sm hover:bg-emergency hover:text-cream-50 transition-colors self-start"
                >
                  Get a free quote
                  <span className="material-symbols-outlined text-base">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7 rounded-3xl overflow-hidden bg-ink-900 text-cream-50 border border-ink-900 relative group lift">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/images/FTVAN1.jpg"
                    alt="FlameTech plumbing service van"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div className="absolute top-5 left-5 rounded-full bg-primary text-ink-900 text-xs font-extrabold uppercase tracking-widest px-3 py-1.5">
                    Most Requested
                  </div>
                </div>
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                      Plumbing
                    </h3>
                    <p className="text-cream-50/75 text-base leading-relaxed mb-6">
                      Bathroom &amp; shower plumbing, drain cleaning, PolyB
                      replacement for older Calgary homes, and fast emergency
                      repairs.
                    </p>
                    <a
                      href="tel:5878343668"
                      className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-5 py-3 text-[13px] hover:bg-emergency-deep transition-colors"
                    >
                      Book a free estimate
                      <span className="material-symbols-outlined text-base">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                  <ul className="md:col-span-2 space-y-2 text-sm">
                    {[
                      "Drain cleaning",
                      "PolyB replacement",
                      "Bathroom & shower",
                      "Emergency leaks",
                      "Water line repair",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-cream-50/80"
                      >
                        <span className="material-symbols-outlined text-primary text-base">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                {[
                  {
                    icon: "local_fire_department",
                    title: "Heating",
                    body: "High-efficiency furnaces, boilers, garage heaters, and cold-climate heat pumps built for Calgary winters.",
                    items: ["Furnaces", "Boilers", "Garage heaters", "Heat pumps"],
                  },
                  {
                    icon: "water_drop",
                    title: "Air & Water",
                    body: "AC, humidifiers, hot water tanks, tankless heaters, and water softeners for Alberta hard water.",
                    items: [
                      "Air conditioning",
                      "Tankless heaters",
                      "Hot water tanks",
                      "Water softeners",
                    ],
                  },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="flex-1 rounded-2xl bg-white border border-line-light p-7 flex gap-5 lift"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">
                        {s.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-extrabold tracking-tight mb-2">
                        {s.title}
                      </h3>
                      <p className="text-ink-500 text-sm leading-relaxed mb-4">
                        {s.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.items.map((i) => (
                          <span
                            key={i}
                            className="rounded-full bg-cream-50 text-ink-700 text-xs font-semibold px-3 py-1 border border-line-light"
                          >
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY CALLOUT — ink-900, teal glow center */}
        <section className="relative bg-ink-900 py-16 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[640px] h-[320px] bg-emergency/25 blur-3xl rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emergency to-emergency-deep text-cream-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 soft-shadow">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-cream-50/10 blur-2xl pointer-events-none" />
                <div className="relative flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-ink-900/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cream-50 animate-pulse" />
                    Emergency Response
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] leading-[1.05]">
                    Burst pipe? No heat? Call now.
                  </h2>
                  <p className="text-cream-50/85 mt-3 max-w-lg">
                    Fast on-site response across Calgary and surrounding
                    communities when you need it most.
                  </p>
                </div>
                <a
                  href="tel:5878343668"
                  className="relative inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 font-extrabold uppercase tracking-tight px-7 py-4 text-[14px] hover:bg-ink-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    call
                  </span>
                  Call 587-834-3668
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS — cream */}
        <HowItWorks />

        {/* WHY US — ink-800, orange glow bottom-right */}
        <section
          id="why-us"
          className="relative bg-ink-800 text-cream-50 py-20 overflow-hidden"
        >
          <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-12 items-stretch">
              <Reveal className="col-span-12 lg:col-span-6">
                <div className="rounded-3xl bg-ink-900 border border-line-dark overflow-hidden h-full flex flex-col soft-shadow">
                  <div className="p-8 md:p-10 pb-6">
                    <span className="eyebrow mb-4">Founders</span>
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mt-4 mb-6 leading-tight">
                      Red Seal journeypersons. 45+ years combined.
                    </h3>
                  </div>
                  <div className="relative mx-6 md:mx-8 mb-6 rounded-2xl overflow-hidden border border-line-dark">
                    <img
                      src="/images/FTVAN1.jpg"
                      alt="FlameTech service van"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-ink-900/85 backdrop-blur-md text-cream-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] flex items-center gap-2 border border-cream-50/10">
                      <span className="material-symbols-outlined text-sm text-primary">
                        verified
                      </span>
                      Red Seal · Alberta Licensed
                    </div>
                  </div>
                  <div className="p-8 md:p-10 pt-2 flex flex-col justify-between flex-1">
                    <p className="text-cream-50/70 leading-relaxed mb-8">
                      FlameTech is owned and run by Shaun Kristoff and Jason
                      Mounsey — Red Seal–certified plumbers who built this
                      company around honest advice, upfront pricing, and
                      doing things right the first time.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-line-dark">
                      <div>
                        <div className="font-display text-3xl font-extrabold text-primary mb-1">
                          25+
                        </div>
                        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-cream-50/60">
                          Shaun — years in trade
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-3xl font-extrabold text-primary mb-1">
                          20+
                        </div>
                        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-cream-50/60">
                          Jason — years in trade
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120} className="col-span-12 lg:col-span-6">
                <span className="eyebrow mb-4">Why Calgary chooses us</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 mb-8 leading-[1.02]">
                  Local experts, upfront pricing, work you can{" "}
                  <span className="text-emergency">trust</span>.
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      t: "Local certified technicians",
                      d: "Skilled and certified plumbers who live and work in Calgary — deep experience with our climate and infrastructure.",
                    },
                    {
                      t: "Upfront, transparent pricing",
                      d: "Competitive pricing, free estimates, no surprises. You approve the quote before we start work — every time.",
                    },
                    {
                      t: "Licensed, insured & bonded",
                      d: "Fully compliant with Alberta's plumbing codes. BBB accredited and 5-star rated on Google.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="flex gap-4 p-5 rounded-xl bg-ink-900 border border-line-dark lift"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl mt-1">
                        check_circle
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-lg mb-1">
                          {x.t}
                        </h4>
                        <p className="text-cream-50/70 text-sm leading-relaxed">
                          {x.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* POPULAR SERVICES — cream marquee */}
        <section className="bg-cream-50 text-ink-900 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <Reveal>
              <div className="text-center mb-12">
                <span className="eyebrow-light justify-center mb-4 mx-auto">
                  Popular Services
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.025em] max-w-2xl mx-auto mt-4 leading-[1.02]">
                  Most-requested by Calgary homeowners
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-50 to-transparent z-10" />
            <div className="marquee">
              {[...brandTiles, ...brandTiles].map((item, i) => (
                <div
                  key={`${item.label}-${i}`}
                  className="shrink-0 w-56 rounded-2xl bg-white border border-line-light p-6 flex flex-col items-center justify-between h-44"
                >
                  <div className="flex-1 w-full flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500 mt-3 text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-center gap-10 mt-14 pt-10 border-t border-line-light">
              <img
                src="/images/REVIEWS1.png"
                alt="5-star customer reviews"
                className="h-14 object-contain"
              />
              <img
                src="/images/blue-ceip-225x300.png"
                alt="BBB accredited"
                className="h-14 object-contain"
              />
              <img
                src="/images/financeit.png"
                alt="Financing via Financeit"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </section>

        {/* SERVICE AREA — ink-900, teal glow top-left */}
        <section
          id="service-area"
          className="relative bg-ink-900 text-cream-50 py-24 overflow-hidden"
        >
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <div>
                  <span className="eyebrow mb-4">Service Area</span>
                  <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] max-w-2xl mt-4 leading-[1.02]">
                    Serving Calgary and surrounding communities.
                  </h2>
                </div>
                <p className="text-cream-50/70 max-w-sm">
                  Fast response across Calgary and southern Alberta. If
                  you&apos;re in the grid, we&apos;re on the way.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden border border-line-dark bg-cream-50 p-4">
                <img
                  src="/images/Service-map.png"
                  alt="FlameTech Calgary service area map"
                  className="w-full object-contain"
                />
              </div>
              <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3">
                {[
                  "Calgary NE",
                  "Calgary NW",
                  "Calgary SE",
                  "Calgary SW",
                  "Airdrie",
                  "Chestermere",
                  "Cochrane",
                  "Okotoks",
                  "Carstairs",
                  "Cooper's Crossing",
                  "Evergreen",
                  "Signal Hill",
                ].map((area) => (
                  <div
                    key={area}
                    className="rounded-xl bg-ink-800 border border-line-dark p-4 flex items-center gap-2 lift"
                  >
                    <span className="material-symbols-outlined text-primary text-base">
                      location_on
                    </span>
                    <span className="text-sm font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS — cream */}
        <ReviewsSection />

        {/* FAQ — cream */}
        <FAQ />

        {/* QUOTE FORM — ink-900, teal glow right */}
        <section
          id="quote"
          className="relative bg-ink-900 text-cream-50 py-20 overflow-hidden"
        >
          <div className="absolute inset-0 dotgrid opacity-30 pointer-events-none"></div>
          <div className="absolute top-10 -right-40 w-[520px] h-[520px] rounded-full bg-emergency/20 blur-3xl pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-10">
              <Reveal className="col-span-12 md:col-span-5">
                <span className="eyebrow mb-4">Request Service</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 mb-6 leading-[1.02]">
                  Get a free estimate.
                </h2>
                <p className="text-cream-50/70 leading-relaxed mb-8">
                  Tell us what&apos;s going on and our dispatch team will
                  call you back with pricing and availability. For urgent
                  issues, call directly.
                </p>
                <div className="space-y-3">
                  <InfoRow icon="call" text="587-834-3668" emphasize />
                  <InfoRow icon="schedule" text="Priority emergency response" />
                  <InfoRow
                    icon="verified"
                    text="Licensed · Insured · BBB Accredited"
                  />
                  <InfoRow
                    icon="location_on"
                    text="Calgary, AB & surrounding communities"
                  />
                </div>
              </Reveal>
              <Reveal
                delay={120}
                className="col-span-12 md:col-span-7"
              >
                <div className="rounded-3xl bg-cream-50 text-ink-900 p-8 md:p-10 border border-line-dark">
                  <QuoteForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BLOG STRIP — cream-100 */}
        <BlogStrip />

        {/* FINAL CTA — ink-800, orange glow */}
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

const brandTiles = [
  { src: "/images/navine-boiler.png", label: "Boilers" },
  { src: "/images/air-ease-furnace.png", label: "Furnaces" },
  { src: "/images/air-ease-ac.png", label: "AC Units" },
  { src: "/images/bradford-white-hot-water-tank.png", label: "Hot Water Tanks" },
  { src: "/images/graident-tankless-water-heater.png", label: "Tankless" },
  { src: "/images/water-softener-calgary.png", label: "Water Softeners" },
];

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-cream-50">
        {number}
      </div>
      <div className="text-xs uppercase tracking-[0.16em] text-cream-50/60 font-semibold mt-2">
        {label}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  text,
  emphasize,
}: {
  icon: string;
  text: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-base">
        {icon}
      </span>
      <span
        className={
          emphasize
            ? "font-bold text-lg text-cream-50"
            : "text-sm text-cream-50/70"
        }
      >
        {text}
      </span>
    </div>
  );
}
