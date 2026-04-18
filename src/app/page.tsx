import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-ink-900 text-cream-50">
        {/* HERO — oversize photo, bigger display type */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 dotgrid opacity-60 pointer-events-none"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-20 relative">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-12 lg:col-span-6">
                <span className="eyebrow mb-8">
                  Calgary · Licensed · Insured · BBB Accredited
                </span>
                <h1 className="font-display text-[52px] md:text-[72px] xl:text-[88px] font-extrabold leading-[0.95] tracking-[-0.03em] mt-6 mb-8">
                  Calgary&apos;s most trusted{" "}
                  <span className="italic font-medium text-emergency">
                    plumbing &amp; heating
                  </span>{" "}
                  experts.
                </h1>
                <p className="text-lg text-cream-50/70 max-w-xl mb-10 leading-relaxed">
                  Local, certified technicians handling every plumbing,
                  heating, AC, and water system for Calgary homes. Upfront
                  pricing, free estimates, and a satisfaction guarantee.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:5878343668"
                    className="inline-flex items-center gap-2 rounded-full bg-emergency text-ink-900 font-bold px-7 py-4 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      contact_emergency
                    </span>
                    Call 587-834-3668
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-semibold px-7 py-4 text-sm hover:border-emergency hover:text-emergency transition-colors"
                  >
                    Free estimate
                    <span className="material-symbols-outlined text-base">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              </div>

              {/* Oversize hero photo — show the full van */}
              <div className="col-span-12 lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border border-line-dark soft-shadow bg-cream-50">
                  <img
                    src="/images/FTVAN.jpg"
                    alt="FlameTech service van across Calgary"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Floating rating card */}
                <div className="absolute -top-4 -left-4 md:top-6 md:left-6 rounded-2xl bg-cream-50 text-ink-900 px-5 py-4 flex items-center gap-4 soft-shadow border border-line-light">
                  <div className="text-emergency text-2xl">★★★★★</div>
                  <div>
                    <div className="text-lg font-black leading-none font-display">
                      5.0
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500 mt-1">
                      Google Reviews
                    </div>
                  </div>
                </div>
                {/* Floating call chip */}
                <div className="absolute -bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-full bg-ink-900/90 backdrop-blur-md text-cream-50 px-4 py-2 text-xs font-semibold flex items-center gap-2 border border-cream-50/10 soft-shadow">
                    <span className="w-2 h-2 rounded-full bg-emergency animate-pulse" />
                    Emergency Dispatch
                  </div>
                  <a
                    href="tel:5878343668"
                    className="rounded-full bg-emergency text-ink-900 font-bold px-4 py-2 text-xs hover:bg-emergency-deep hover:text-white transition-colors soft-shadow"
                  >
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-line-dark bg-ink-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <Stat number="12+" label="Years serving Calgary" />
            <Stat number="2,000+" label="Jobs completed" />
            <Stat number="5.0★" label="Google rated" />
            <Stat number="60–90" label="Min typical response" />
          </div>
        </section>

        {/* SERVICES — one featured, two smaller */}
        <section id="services" className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow-light mb-4">Services</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 max-w-2xl leading-[1.02]">
                  Complete plumbing, heating &amp; water solutions for Calgary
                  homes.
                </h2>
              </div>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 font-semibold px-6 py-3 text-sm hover:bg-emergency hover:text-ink-900 transition-colors self-start"
              >
                Get a free quote
                <span className="material-symbols-outlined text-base">
                  arrow_right_alt
                </span>
              </a>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* FEATURED: Plumbing */}
              <div className="col-span-12 lg:col-span-7 rounded-3xl overflow-hidden bg-ink-900 text-cream-50 border border-ink-900 relative group">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/images/FTVAN1.jpg"
                    alt="FlameTech plumbing service van"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div className="absolute top-5 left-5 rounded-full bg-emergency text-ink-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5">
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
                      repairs — day or night.
                    </p>
                    <a
                      href="tel:5878343668"
                      className="inline-flex items-center gap-2 rounded-full bg-emergency text-ink-900 font-bold px-5 py-2.5 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
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

              {/* Stacked: Heating + Air & Water */}
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
                    className="flex-1 rounded-2xl bg-white border border-line-light p-7 flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
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

        {/* EMERGENCY STRIP */}
        <section className="bg-emergency text-ink-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Emergency Response
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
                Fast on-site response across Calgary.
              </h2>
            </div>
            <a
              href="tel:5878343668"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 font-bold px-8 py-4 text-sm hover:bg-ink-700 transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Call 587-834-3668
            </a>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="relative bg-ink-900 text-cream-50 py-24">
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-line-dark soft-shadow">
                  <img
                    src="/images/air-ease-pro-team-e1764790049321.png"
                    alt="FlameTech Pro Team"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <span className="eyebrow mb-4">Why Calgary chooses us</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 mb-8 leading-[1.02]">
                  Local experts, upfront pricing, and work you can{" "}
                  <span className="italic font-medium text-emergency">
                    trust
                  </span>
                  .
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      t: "Local certified technicians",
                      d: "Our skilled and certified plumbers live and work right here in Calgary — deep experience with our climate and infrastructure.",
                    },
                    {
                      t: "Upfront, transparent pricing",
                      d: "Competitive pricing, free estimates, no surprises. You approve the quote before we start work — every time.",
                    },
                    {
                      t: "Licensed, insured & bonded",
                      d: "Fully compliant with Alberta's strict plumbing codes and regulations. BBB accredited and 5-star rated on Google.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="flex gap-4 p-5 rounded-xl bg-ink-800 border border-line-dark"
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
              </div>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
              <span className="eyebrow-light justify-center mb-4 mx-auto">
                Certified Equipment
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.025em] max-w-2xl mx-auto mt-4 leading-[1.02]">
                Trusted brands we install
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { src: "/images/navine-boiler.png", label: "Boilers" },
                { src: "/images/air-ease-furnace.png", label: "Furnaces" },
                { src: "/images/air-ease-ac.png", label: "AC Units" },
                {
                  src: "/images/bradford-white-hot-water-tank.png",
                  label: "Hot Water Tanks",
                },
                {
                  src: "/images/graident-tankless-water-heater.png",
                  label: "Tankless",
                },
                {
                  src: "/images/water-softener-calgary.png",
                  label: "Water Softeners",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white border border-line-light p-6 flex flex-col items-center justify-between h-44 hover:border-primary transition-colors"
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
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-10 border-t border-line-light">
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

        {/* SERVICE AREA */}
        <section
          id="service-area"
          className="relative bg-ink-900 text-cream-50 py-24"
        >
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
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
                    className="rounded-xl bg-ink-800 border border-line-dark p-4 flex items-center gap-2"
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

        {/* REVIEWS — featured + grid */}
        <section className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow-light mb-4">Google Reviews</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] max-w-2xl mt-4 leading-[1.02]">
                  What Calgary homeowners say.
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white border border-line-light px-5 py-3">
                <span className="text-emergency text-lg">★★★★★</span>
                <span className="font-bold">5.0</span>
                <span className="text-sm text-ink-500">
                  · hundreds of reviews
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* FEATURED TESTIMONIAL */}
              <div className="col-span-12 lg:col-span-5 rounded-3xl bg-ink-900 text-cream-50 p-10 md:p-12 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="rounded-full bg-cream-50 text-ink-900 text-xs font-bold px-3 py-1.5 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    via Google
                  </div>
                  <div className="text-emergency text-xl tracking-wider">
                    ★★★★★
                  </div>
                </div>
                <p className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.015em] leading-[1.25] mb-8 flex-grow">
                  &ldquo;Called FlameTech after hours for a burst pipe. A
                  technician was at our door within the hour, shut the water
                  off, and had the leak fixed before midnight. Fair price, clean
                  work, genuinely kind people.&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-line-dark">
                  <div className="w-12 h-12 rounded-full bg-emergency/15 flex items-center justify-center font-bold text-emergency text-base">
                    JM
                  </div>
                  <div>
                    <p className="font-bold">Jennifer M.</p>
                    <p className="text-xs text-cream-50/60">
                      Calgary SW · 2 weeks ago
                    </p>
                  </div>
                </div>
              </div>

              {/* GRID OF SMALLER REVIEWS */}
              <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    initials: "RT",
                    name: "Ryan T.",
                    area: "Airdrie",
                    date: "1 month ago",
                    quote:
                      "Replaced our ancient boiler with a high-efficiency unit. Quote was upfront, install took exactly as long as promised, and the heating bill is noticeably lower.",
                  },
                  {
                    initials: "SK",
                    name: "Sarah K.",
                    area: "Calgary NW",
                    date: "3 months ago",
                    quote:
                      "Full PolyB replacement in our 1980s home. FlameTech walked us through the whole process and left the house cleaner than they found it.",
                  },
                  {
                    initials: "DL",
                    name: "David L.",
                    area: "Calgary NE",
                    date: "2 months ago",
                    quote:
                      "Tankless water heater install. Showed up on time, explained everything, and the price matched the quote exactly. Would absolutely hire again.",
                  },
                  {
                    initials: "MP",
                    name: "Megan P.",
                    area: "Cochrane",
                    date: "5 weeks ago",
                    quote:
                      "Water softener install in our new home — night-and-day difference in the quality. Professional crew, quick turnaround.",
                  },
                ].map((r) => (
                  <div
                    key={r.name}
                    className="rounded-2xl bg-white border border-line-light p-6 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-emergency text-sm tracking-wider">
                        ★★★★★
                      </div>
                      <span className="text-xs text-ink-500">{r.date}</span>
                    </div>
                    <p className="text-sm text-ink-700 leading-relaxed mb-6 flex-grow">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-line-light">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                        {r.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-tight">
                          {r.name}
                        </p>
                        <p className="text-xs text-ink-500">{r.area}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section
          id="quote"
          className="relative bg-ink-900 text-cream-50 py-24"
        >
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
          <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 md:col-span-5">
                <span className="eyebrow mb-4">Request Service</span>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 mb-6 leading-[1.02]">
                  Get a free estimate.
                </h2>
                <p className="text-cream-50/70 leading-relaxed mb-8">
                  Tell us what&apos;s going on and our dispatch team will call
                  you back with pricing and availability. For urgent issues,
                  call directly.
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
              </div>
              <div className="col-span-12 md:col-span-7 rounded-3xl bg-cream-50 text-ink-900 p-8 md:p-10 border border-line-dark">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

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
