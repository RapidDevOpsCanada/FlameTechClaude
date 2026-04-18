import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative border-b border-blueprint-grid overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none grid-guide"></div>
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-8 items-center py-16 md:py-24 relative">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="mono-label text-primary bg-primary/5 px-2 py-1">
                  Licensed · Insured · Bonded · BBB Accredited
                </span>
                <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-headline font-black tracking-tighter leading-[0.95] mb-8">
                CALGARY&apos;S <span className="text-primary">TRUSTED</span>
                <br />
                PLUMBERS.
              </h1>
              <p className="text-lg md:text-xl text-technical-label max-w-xl mb-10 font-normal leading-relaxed">
                At FlameTech, we deliver top-notch plumbing and heating
                services tailored to Calgary residents. 24/7 emergency
                response, upfront pricing, free estimates, and a satisfaction
                guarantee.
              </p>

              <div className="border border-blueprint-grid bg-white p-6 mb-8 max-w-md shadow-sm">
                <p className="mono-label text-technical-label mb-2">
                  Call Our 24/7 Dispatch
                </p>
                <a
                  href="tel:5878343668"
                  className="block font-headline text-4xl md:text-5xl font-black tracking-tighter text-blueprint-text hover:text-primary transition-colors"
                >
                  587-834-3668
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:5878343668"
                  className="bg-emergency text-white px-7 py-4 font-technical font-bold flex items-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-emergency/20 text-sm tracking-widest uppercase"
                >
                  <span className="material-symbols-outlined text-lg">
                    contact_emergency
                  </span>
                  24/7 Emergency
                </a>
                <a
                  href="#quote"
                  className="px-7 py-4 font-technical font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm tracking-widest uppercase"
                >
                  Free Estimate
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative">
              <div className="relative overflow-hidden border border-blueprint-grid bg-white shadow-xl">
                <img
                  className="w-full h-full object-cover aspect-[4/5]"
                  alt="FlameTech Plumbing & Heating service van in Calgary"
                  src="/images/FTVAN.jpg"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-2 border border-blueprint-grid">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-technical text-sm font-bold tracking-wider">
                      ★★★★★
                    </span>
                    <span className="font-technical text-[10px] text-technical-label">
                      5-STAR RATED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-24 border-b border-blueprint-grid bg-white"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 mb-20 items-end">
              <div className="col-span-12 md:col-span-6">
                <span className="mono-label text-primary mb-4 block">
                  Residential Services
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  WHAT WE DO
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:text-right">
                <p className="text-technical-label font-normal max-w-sm ml-auto">
                  Expert plumbing, heating, air conditioning, and specialty
                  solutions for Calgary homes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-0 border-t border-l border-blueprint-grid">
              {[
                {
                  n: "01",
                  icon: "plumbing",
                  title: "Plumbing",
                  body: "Bathroom &amp; shower plumbing, drain cleaning, PolyB replacement for older homes, and fast emergency plumbing repairs.",
                },
                {
                  n: "02",
                  icon: "local_fire_department",
                  title: "Heating",
                  body: "Boiler installation &amp; service, high-efficiency furnaces, garage heaters, and heat pumps built for Calgary winters.",
                },
                {
                  n: "03",
                  icon: "water_drop",
                  title: "Air &amp; Water",
                  body: "Air conditioning, humidifiers, hot water tanks, tankless water heaters, and water softeners for Alberta hard water.",
                },
              ].map((m) => (
                <div
                  key={m.n}
                  className="col-span-12 md:col-span-4 border-r border-b border-blueprint-grid p-10 group hover:bg-primary/[0.02] transition-colors"
                >
                  <div className="mono-label text-blueprint-grid text-4xl font-bold mb-8 group-hover:text-primary/20 transition-colors">
                    {m.n}
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                    {m.icon}
                  </span>
                  <h3
                    className="text-xl font-bold mb-4 font-headline uppercase tracking-tight"
                    dangerouslySetInnerHTML={{ __html: m.title }}
                  />
                  <p
                    className="text-technical-label text-sm leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: m.body }}
                  />
                  <a
                    className="font-technical text-[10px] font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
                    href="tel:5878343668"
                  >
                    GET A FREE ESTIMATE{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emergency py-16">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-white text-emergency px-2 py-0.5 font-technical text-[10px] font-bold uppercase">
                  24/7 Emergency
                </span>
                <div className="h-[1px] w-20 bg-white/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter uppercase">
                On-Site in 60–90 Minutes
              </h2>
              <p className="text-white/90 mt-4 max-w-xl">
                Plumbing emergencies don&apos;t wait for convenient hours. We
                aim to arrive at your Calgary property within 60–90 minutes of
                your call.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <a
                href="tel:5878343668"
                className="w-full md:w-auto bg-white text-emergency font-technical font-bold px-10 py-6 text-sm uppercase tracking-widest hover:bg-blueprint-bg transition-all shadow-2xl text-center"
              >
                Call 587-834-3668
              </a>
            </div>
          </div>
        </section>

        <section
          id="diagnostics"
          className="py-24 bg-white border-b border-blueprint-grid"
        >
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="border border-blueprint-grid p-2">
                <div className="relative bg-slate-50 aspect-video flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="FlameTech Pro Team serving Calgary"
                    src="/images/air-ease-pro-team-e1764790049321.png"
                  />
                  <div className="absolute top-4 left-4 font-technical text-[10px] text-primary bg-white/95 px-2 py-1 border border-blueprint-grid">
                    CALGARY · LICENSED · BONDED
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-10">
                WHY CALGARY
                <br />
                <span className="text-primary">CHOOSES US.</span>
              </h2>
              <div className="space-y-10">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-technical text-2xl font-bold text-primary/20">
                    01
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Local Certified Technicians
                    </h4>
                    <p className="text-technical-label text-sm">
                      Our highly skilled and certified plumbers live and work
                      right here in Calgary — with extensive experience in the
                      issues specific to our climate and infrastructure.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-technical text-2xl font-bold text-primary/20">
                    02
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Upfront, Transparent Pricing
                    </h4>
                    <p className="text-technical-label text-sm">
                      Competitive pricing with free estimates and no surprises.
                      You approve the quote before we start the work — every
                      time.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-technical text-2xl font-bold text-primary/20">
                    03
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Alberta Code Compliant
                    </h4>
                    <p className="text-technical-label text-sm">
                      Fully licensed, insured, and bonded technicians committed
                      to meeting Alberta&apos;s strict plumbing codes and
                      regulations. BBB accredited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-blueprint-grid">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 mb-16 items-end">
              <div className="col-span-12 md:col-span-6">
                <span className="mono-label text-primary mb-4 block">
                  Certified Equipment
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  BRANDS WE INSTALL
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:text-right">
                <p className="text-technical-label font-normal max-w-sm ml-auto">
                  Trusted manufacturer-approved equipment for Calgary homes,
                  installed to Alberta code.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-t border-l border-blueprint-grid">
              {[
                { src: "/images/navine-boiler.png", label: "Boilers" },
                {
                  src: "/images/air-ease-furnace.png",
                  label: "Furnaces",
                },
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
                  className="border-r border-b border-blueprint-grid bg-white flex flex-col items-center justify-between p-6 h-48"
                >
                  <div className="flex-1 w-full flex items-center justify-center px-2">
                    <img
                      className="max-h-20 max-w-full object-contain"
                      src={item.src}
                      alt={item.label}
                    />
                  </div>
                  <span className="mono-label text-technical-label text-center mt-3 block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-10 border-t border-blueprint-grid">
              <img
                src="/images/REVIEWS1.png"
                alt="5-star customer reviews"
                className="h-16 object-contain"
              />
              <img
                src="/images/blue-ceip-225x300.png"
                alt="BBB accredited"
                className="h-16 object-contain"
              />
              <img
                src="/images/financeit.png"
                alt="Financing available via Financeit"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="service-area"
          className="relative py-24 bg-slate-50 border-b border-blueprint-grid"
        >
          <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none grid-guide"></div>
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="grid grid-cols-12 gap-8 mb-16 items-end">
              <div className="col-span-12 md:col-span-6">
                <span className="mono-label text-primary mb-4 block">
                  Deployment Grid
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  SERVICE AREA
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:text-right">
                <p className="text-technical-label font-normal max-w-sm ml-auto">
                  Serving Calgary and surrounding communities across southern
                  Alberta.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7 border border-blueprint-grid p-2 bg-white">
                <img
                  src="/images/Service-map.png"
                  alt="FlameTech Calgary service area map"
                  className="w-full object-contain"
                />
              </div>
              <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-0 border-t border-l border-blueprint-grid bg-white">
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
                    className="border-r border-b border-blueprint-grid p-5 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-primary text-base">
                      location_on
                    </span>
                    <span className="font-technical text-[11px] font-bold">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-blueprint-grid">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 mb-12 items-end">
              <div className="col-span-12 md:col-span-8">
                <span className="mono-label text-primary mb-4 block">
                  Verified Google Reviews
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  WHAT CALGARY HOMEOWNERS SAY
                </h2>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <div className="inline-flex flex-col items-start md:items-end gap-1">
                  <div className="text-primary font-technical text-2xl font-bold tracking-wider">
                    ★★★★★
                  </div>
                  <p className="mono-label text-technical-label">
                    5.0 · Hundreds of reviews
                  </p>
                </div>
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
                    "Called FlameTech after hours for a burst pipe. A technician was at our door within the hour, shut the water off, and had the leak fixed before midnight. Fair price, clean work, and genuinely kind people. Already booked them for the spring furnace service.",
                },
                {
                  initials: "RT",
                  name: "Ryan T.",
                  area: "Airdrie",
                  date: "1 month ago",
                  quote:
                    "Replaced our ancient boiler with a high-efficiency unit. Quote was upfront, install took exactly as long as promised, and the heating bill is noticeably lower. Crew was tidy and explained the controls thoroughly. Highly recommend.",
                },
                {
                  initials: "SK",
                  name: "Sarah K.",
                  area: "Calgary NW",
                  date: "3 months ago",
                  quote:
                    "Full PolyB replacement in our 1980s home. FlameTech walked us through the whole process, worked around our family&rsquo;s schedule, and left the house cleaner than they found it. Insurance is happy and so are we.",
                },
              ].map((r) => (
                <div
                  key={r.name}
                  className="col-span-12 md:col-span-4 bg-white border border-blueprint-grid p-8 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-primary font-technical text-sm font-bold tracking-wider">
                      ★★★★★
                    </div>
                    <span className="mono-label text-technical-label">
                      {r.date}
                    </span>
                  </div>
                  <p
                    className="text-base leading-relaxed mb-8 flex-grow"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
                  />
                  <div className="flex items-center gap-4 pt-6 border-t border-blueprint-grid">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary text-sm">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-bold font-headline text-xs">
                        {r.name}
                      </p>
                      <p className="mono-label text-technical-label">
                        {r.area}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="quote"
          className="py-24 bg-slate-50 border-b border-blueprint-grid"
        >
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-12 md:col-span-5">
                <span className="mono-label text-primary mb-4 block">
                  Request Service
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6">
                  GET A FREE ESTIMATE
                </h2>
                <p className="text-technical-label leading-relaxed mb-8">
                  Tell us what&apos;s going on and our dispatch team will call
                  you back with pricing and availability. For 24/7 emergency
                  service, call directly.
                </p>
                <div className="border-t border-blueprint-grid pt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">
                      call
                    </span>
                    <a
                      href="tel:5878343668"
                      className="font-technical text-sm font-bold hover:text-primary transition-colors"
                    >
                      587-834-3668
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">
                      schedule
                    </span>
                    <span className="font-technical text-xs text-technical-label">
                      24/7 Emergency Dispatch
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-base">
                      verified
                    </span>
                    <span className="font-technical text-xs text-technical-label">
                      Licensed · Insured · BBB Accredited
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 bg-white border border-blueprint-grid p-8 md:p-10">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="mono-label text-primary mb-6 block">
                Free Estimates · Satisfaction Guaranteed
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter mb-10">
                READY TO BOOK YOUR CALGARY PLUMBER?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:5878343668"
                  className="bg-primary text-white px-10 py-5 font-technical font-bold text-sm tracking-widest hover:bg-accent transition-all uppercase"
                >
                  Call 587-834-3668
                </a>
                <a
                  href="#quote"
                  className="bg-emergency text-white px-10 py-5 font-technical font-bold text-sm tracking-widest hover:brightness-110 transition-all uppercase"
                >
                  Request a Free Estimate
                </a>
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
