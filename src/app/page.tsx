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
import Icon from "@/components/Icon";

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
                    <Icon name="call" className="text-lg" />
                    Call 587-834-3668
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold uppercase tracking-tight px-7 py-4 text-[14px] hover:border-emergency hover:text-emergency transition-colors"
                  >
                    Free estimate
                    <Icon name="arrow_right_alt" className="text-base" />
                  </a>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-ink-800 border border-line-dark px-4 py-2 text-xs text-cream-50/80 font-semibold">
                  <Icon name="verified" className="text-primary text-base" />
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
                <div className="mt-5 flex justify-center">
                  <img
                    src="/images/REVIEWS1.png"
                    alt="5-star customer reviews"
                    className="h-14 md:h-16 object-contain"
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
            <Stat number="100%" label="Satisfaction guaranteed" />
          </div>
        </section>

        {/* WHY US — cream, light mode */}
        <section
          id="why-us"
          className="relative bg-cream-50 text-ink-900 py-20 overflow-hidden"
        >
          <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-12 items-stretch">
              <Reveal className="col-span-12 lg:col-span-6">
                <div className="rounded-3xl bg-white border border-line-light overflow-hidden h-full flex flex-col soft-shadow">
                  <div className="p-8 md:p-10 pb-6">
                    <span className="eyebrow-light mb-4">Founders</span>
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mt-4 mb-6 leading-tight">
                      Red Seal journeypersons. 45+ years combined.
                    </h3>
                  </div>
                  <div className="relative mx-6 md:mx-8 mb-6 rounded-2xl overflow-hidden border border-line-light">
                    <img
                      src="/images/FTVAN1.jpg"
                      alt="Jason Mounsey and Shaun Kristoff — FlameTech founders — standing in front of the service van"
                      className="w-full aspect-[4/5] object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-ink-900/90 backdrop-blur-md text-cream-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] flex items-center gap-2 border border-cream-50/10">
                      <Icon name="verified" className="text-sm text-primary" />
                      Red Seal · Alberta Licensed
                    </div>
                  </div>
                  <div className="p-8 md:p-10 pt-2 flex flex-col justify-between flex-1">
                    <p className="text-ink-500 leading-relaxed mb-8">
                      FlameTech is owned and run by Jason Mounsey and Shaun
                      Kristoff — Red Seal–certified plumbers who built this
                      company around honest advice, upfront pricing, and
                      doing things right the first time.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-line-light">
                      <div>
                        <div className="font-display text-3xl font-extrabold text-primary-deep mb-1">
                          20+
                        </div>
                        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-ink-500">
                          Jason — years in trade
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-3xl font-extrabold text-primary-deep mb-1">
                          25+
                        </div>
                        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-ink-500">
                          Shaun — years in trade
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120} className="col-span-12 lg:col-span-6">
                <span className="eyebrow-light mb-4">Why Calgary chooses us</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 mb-6 leading-[1.02]">
                  Local experts, upfront pricing, work you can{" "}
                  <span className="text-emergency">trust</span>.
                </h2>

                <blockquote className="relative rounded-3xl bg-ink-900 text-cream-50 p-8 md:p-10 mb-8 overflow-hidden soft-shadow">
                  <span className="absolute -top-4 right-6 text-primary/25 text-[180px] font-display font-extrabold leading-none select-none pointer-events-none">
                    &ldquo;
                  </span>
                  <div className="relative">
                    <p className="font-display text-xl md:text-2xl font-semibold leading-snug tracking-[-0.015em] mb-4">
                      When you need reliable and professional Calgary
                      plumbers, look no further than Flame Tech Plumbing &amp;
                      Heating.
                    </p>
                    <p className="text-cream-50/80 leading-relaxed mb-3">
                      We are your local experts, dedicated to providing
                      top-notch plumbing services throughout Calgary and the
                      surrounding areas.
                    </p>
                    <p className="text-cream-50/80 leading-relaxed mb-6">
                      From routine maintenance to emergency repairs, our team
                      of certified plumbers is ready to handle all your
                      plumbing needs with efficiency and expertise.
                    </p>
                    <div className="flex items-center gap-3 pt-5 border-t border-line-dark">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="verified" className="text-primary text-base" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-cream-50 leading-tight">
                          Jason Mounsey &amp; Shaun Kristoff
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-primary mt-0.5">
                          Co-founders, FlameTech
                        </p>
                      </div>
                    </div>
                  </div>
                </blockquote>

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
                      className="flex gap-4 p-5 rounded-xl bg-white border border-line-light lift"
                    >
                      <Icon name="check_circle" className="text-primary text-2xl mt-1" />
                      <div>
                        <h4 className="font-display font-bold text-lg mb-1">
                          {x.t}
                        </h4>
                        <p className="text-ink-500 text-sm leading-relaxed">
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

        </section>

        {/* EMERGENCY CALLOUT — split alert panel */}
        <section className="relative bg-ink-900 py-16 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[260px] bg-emergency/25 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[220px] bg-primary/15 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <Reveal>
              <div className="relative rounded-3xl border border-line-dark bg-ink-800 overflow-hidden soft-shadow">
                {/* Caution stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emergency via-primary to-emergency" />

                <div className="grid grid-cols-12">
                  {/* LEFT — message */}
                  <div className="col-span-12 md:col-span-7 p-8 md:p-12 relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emergency/15 text-emergency border border-emergency/30 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-6">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency" />
                      </span>
                      Emergency Response
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.025em] leading-[1.02] text-cream-50">
                      Burst pipe? No heat?
                      <br />
                      <span className="text-emergency">Call now.</span>
                    </h2>
                    <p className="text-cream-50/70 mt-4 max-w-md text-base leading-relaxed">
                      Fast on-site response across Calgary and surrounding
                      communities when you need it most.
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream-50/70 font-semibold">
                      <li className="flex items-center gap-1.5">
                        <Icon name="check_circle" className="text-emergency text-base" />
                        Burst &amp; frozen pipes
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Icon name="check_circle" className="text-emergency text-base" />
                        No-heat repairs
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Icon name="check_circle" className="text-emergency text-base" />
                        Water-heater failures
                      </li>
                    </ul>
                  </div>

                  {/* RIGHT — tap-to-call block */}
                  <a
                    href="tel:5878343668"
                    className="relative col-span-12 md:col-span-5 bg-gradient-to-br from-emergency to-emergency-deep text-cream-50 p-8 md:p-12 flex flex-col justify-center group overflow-hidden"
                  >
                    <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-cream-50/10 blur-2xl pointer-events-none" />
                    <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-cream-50/10 flex items-center justify-center group-hover:translate-x-1 transition-transform pointer-events-none">
                      <Icon name="arrow_right_alt" className="text-xl" />
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-cream-50/80 mb-3 flex items-center gap-2">
                      <Icon name="call" className="text-base" />
                      Tap to dial dispatch
                    </span>
                    <span className="font-display text-4xl md:text-[44px] font-extrabold tracking-[-0.02em] leading-none">
                      587-834-3668
                    </span>
                    <span className="text-xs text-cream-50/80 mt-3 font-semibold">
                      Available for urgent residential calls
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
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
                  <Icon name="arrow_right_alt" className="text-base" />
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
                      <Icon name="arrow_right_alt" className="text-base" />
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
                        <Icon name="check_circle" className="text-primary text-base" />
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
                      <Icon name={s.icon} className="text-2xl" />
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

        {/* HOW IT WORKS — cream */}
        <HowItWorks />

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
                    <Icon name="location_on" className="text-primary text-base" />
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

                <div className="mt-8 pt-6 border-t border-line-dark">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
                    Monthly Financing Available
                  </p>
                  <div className="flex items-center gap-4 rounded-2xl bg-cream-50 p-4">
                    <img
                      src="/images/financeit.png"
                      alt="Financing via Financeit"
                      className="h-7 object-contain"
                    />
                    <p className="text-xs text-ink-700 leading-snug">
                      Flexible monthly payments on larger installs via our
                      Financeit partner.
                    </p>
                  </div>
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
      <Icon name={icon} className="text-primary text-base" />
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
