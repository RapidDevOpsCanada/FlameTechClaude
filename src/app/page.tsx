import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-ink-900 text-cream-50">
        {/* HERO — dark navy, warm accent */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 dotgrid opacity-60 pointer-events-none"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-20 relative">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-12 lg:col-span-7">
                <span className="eyebrow mb-8">
                  Calgary · Licensed · Insured · BBB Accredited
                </span>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02] tracking-tight mb-8">
                  Beat the cold with{" "}
                  <span className="text-emergency">reliable</span> plumbing &amp;
                  heating.
                </h1>
                <p className="text-lg text-cream-50/70 max-w-xl mb-10 leading-relaxed">
                  Calgary&apos;s trusted residential experts for plumbing,
                  heating, AC, and water systems. 24/7 emergency response,
                  upfront pricing, free estimates, and a satisfaction guarantee.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
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

                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-line-dark">
                  <Stat number="2,000+" label="Jobs completed" />
                  <div className="h-8 w-px bg-line-dark hidden md:block" />
                  <Stat number="24/7" label="Emergency response" />
                  <div className="h-8 w-px bg-line-dark hidden md:block" />
                  <Stat number="5.0★" label="Google rated" />
                </div>
              </div>

              {/* Hero image collage */}
              <div className="col-span-12 lg:col-span-5 relative">
                <div className="relative grid grid-cols-5 grid-rows-5 gap-3 h-[520px]">
                  <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden border border-line-dark soft-shadow">
                    <img
                      src="/images/FTVAN.jpg"
                      alt="FlameTech service van in Calgary"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden border border-line-dark bg-cream-50">
                    <img
                      src="/images/air-ease-pro-team-e1764790049321.png"
                      alt="FlameTech Pro Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 row-span-2 rounded-2xl bg-emergency p-4 flex flex-col justify-between text-ink-900">
                    <span className="material-symbols-outlined text-2xl">
                      verified
                    </span>
                    <div>
                      <div className="text-2xl font-black leading-none">
                        5.0★
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">
                        Google reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES — cream light section */}
        <section id="services" className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow mb-4">Services</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 max-w-xl">
                  Complete residential plumbing, heating &amp; water services
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
              {[
                {
                  icon: "plumbing",
                  title: "Plumbing",
                  body: "Bathroom & shower plumbing, drain cleaning, PolyB replacement for older homes, and fast emergency plumbing repairs.",
                  items: [
                    "Drain cleaning",
                    "PolyB replacement",
                    "Bathroom & shower",
                    "Emergency leaks",
                  ],
                },
                {
                  icon: "local_fire_department",
                  title: "Heating",
                  body: "Boiler installation & service, high-efficiency furnaces, garage heaters, and cold-climate heat pumps built for Calgary winters.",
                  items: [
                    "High-efficiency furnaces",
                    "Boilers",
                    "Garage heaters",
                    "Heat pumps",
                  ],
                },
                {
                  icon: "water_drop",
                  title: "Air & Water",
                  body: "Air conditioning, humidifiers, hot water tanks, tankless water heaters, and water softeners for Alberta hard water.",
                  items: [
                    "Air conditioning",
                    "Tankless heaters",
                    "Hot water tanks",
                    "Water softeners",
                  ],
                },
              ].map((s, i) => (
                <div
                  key={s.title}
                  className={`col-span-12 md:col-span-4 rounded-2xl p-8 border ${
                    i === 1
                      ? "bg-ink-900 text-cream-50 border-ink-900"
                      : "bg-white text-ink-900 border-line-light"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      i === 1
                        ? "bg-emergency text-ink-900"
                        : "bg-emergency/10 text-emergency-deep"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      i === 1 ? "text-cream-50/70" : "text-ink-500"
                    }`}
                  >
                    {s.body}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-2 text-sm ${
                          i === 1 ? "text-cream-50/80" : "text-ink-700"
                        }`}
                      >
                        <span className="material-symbols-outlined text-base text-emergency">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:5878343668"
                    className={`inline-flex items-center gap-2 text-sm font-bold ${
                      i === 1 ? "text-emergency" : "text-ink-900 hover:text-emergency-deep"
                    } transition-colors`}
                  >
                    Book a free estimate
                    <span className="material-symbols-outlined text-base">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMERGENCY STRIP */}
        <section className="bg-emergency text-ink-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3">
                24/7 Emergency
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                On-site in 60–90 minutes, anywhere in Calgary.
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

        {/* WHY US — dark navy */}
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
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-8">
                  Local experts, upfront pricing, and work you can{" "}
                  <span className="text-emergency">trust</span>.
                </h2>
                <div className="space-y-6">
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
                      <span className="material-symbols-outlined text-emergency text-2xl mt-1">
                        check_circle
                      </span>
                      <div>
                        <h4 className="font-bold mb-1">{x.t}</h4>
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

        {/* BRANDS — cream */}
        <section className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
              <span className="eyebrow justify-center mb-4 mx-auto">
                Certified Equipment
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto mt-4">
                Brands we install for Calgary homes
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
                  className="rounded-2xl bg-white border border-line-light p-6 flex flex-col items-center justify-between h-44 hover:border-emergency transition-colors"
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

        {/* SERVICE AREA — dark */}
        <section
          id="service-area"
          className="relative bg-ink-900 text-cream-50 py-24"
        >
          <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow mb-4">Service Area</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-xl mt-4">
                  Serving Calgary and surrounding communities
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
                    <span className="material-symbols-outlined text-emergency text-base">
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
        <section className="bg-cream-50 text-ink-900 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow mb-4">Google Reviews</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mt-4">
                  What Calgary homeowners say
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
              {[
                {
                  initials: "JM",
                  name: "Jennifer M.",
                  area: "Calgary SW",
                  date: "2 weeks ago",
                  quote:
                    "Called FlameTech after hours for a burst pipe. A technician was at our door within the hour, shut the water off, and had the leak fixed before midnight. Fair price, clean work, genuinely kind people.",
                },
                {
                  initials: "RT",
                  name: "Ryan T.",
                  area: "Airdrie",
                  date: "1 month ago",
                  quote:
                    "Replaced our ancient boiler with a high-efficiency unit. Quote was upfront, install took exactly as long as promised, and the heating bill is noticeably lower. Crew was tidy and thorough.",
                },
                {
                  initials: "SK",
                  name: "Sarah K.",
                  area: "Calgary NW",
                  date: "3 months ago",
                  quote:
                    "Full PolyB replacement in our 1980s home. FlameTech walked us through the whole process, worked around our schedule, and left the house cleaner than they found it.",
                },
              ].map((r) => (
                <div
                  key={r.name}
                  className="col-span-12 md:col-span-4 rounded-2xl bg-white border border-line-light p-7 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-emergency text-sm tracking-wider">
                      ★★★★★
                    </div>
                    <span className="text-xs text-ink-500">{r.date}</span>
                  </div>
                  <p className="text-base text-ink-900 leading-relaxed mb-8 flex-grow">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-line-light">
                    <div className="w-10 h-10 rounded-full bg-emergency/15 flex items-center justify-center font-bold text-emergency-deep text-sm">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{r.name}</p>
                      <p className="text-xs text-ink-500">{r.area}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE FORM — dark bg, light card */}
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
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">
                  Get a free estimate
                </h2>
                <p className="text-cream-50/70 leading-relaxed mb-8">
                  Tell us what&apos;s going on and our dispatch team will call
                  you back with pricing and availability. For 24/7 emergency
                  service, call directly.
                </p>
                <div className="space-y-3">
                  <InfoRow icon="call" text="587-834-3668" emphasize />
                  <InfoRow icon="schedule" text="24/7 emergency dispatch" />
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
      <div className="text-2xl md:text-3xl font-extrabold text-cream-50">
        {number}
      </div>
      <div className="text-xs uppercase tracking-[0.16em] text-cream-50/60 font-semibold mt-1">
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
      <span className="material-symbols-outlined text-emergency text-base">
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
