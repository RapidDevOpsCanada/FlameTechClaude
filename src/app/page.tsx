import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative min-h-[870px] flex items-center border-b border-blueprint-grid">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none grid-guide"></div>
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-8 items-center py-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="mono-label text-primary bg-primary/5 px-2 py-1">
                  Licensed · Insured · Bonded
                </span>
                <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none mb-8">
                CALGARY&apos;S <span className="text-primary">TRUSTED</span>
                <br />
                PLUMBERS.
              </h1>
              <p className="text-xl text-technical-label max-w-xl mb-12 font-normal leading-relaxed">
                At FlameTech, we deliver top-notch plumbing and heating services
                tailored to Calgary residents. 24/7 emergency response, upfront
                pricing, and a satisfaction guarantee — backed by certified
                local technicians.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:5878343668"
                  className="bg-emergency text-white px-8 py-5 font-technical font-bold flex items-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-emergency/20"
                >
                  CALL 587-834-3668
                  <span className="material-symbols-outlined text-lg">
                    contact_emergency
                  </span>
                </a>
                <a
                  href="#services"
                  className="px-8 py-5 font-technical font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  VIEW SERVICES
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-square bg-white border border-blueprint-grid p-4 shadow-2xl rotate-2">
                <img
                  className="w-full h-full object-cover grayscale brightness-125 contrast-75"
                  alt="Precision plumbing installation in a bright Calgary residence"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDanF3lNZ40nzevbN20tvuTF-AVP8Xm3NCcHS9pU0cBrfwH1qPGQaifUJ0ZLAf64jj2-mm8UFz7ygZIfW_TaQ_f_MJJFpWRr8QqgIEMvnM_xMhpG2TGiwXOry7HXOfuYE7g33i8Q8o4_ei0t___UiTqoyg7r5_eLaDYYr0Sxe36FA3kXzyJP2YjJuTQz4dlXBZK10rKMPzIDseuHBDXz83PJQ5-p4TXXVJLzRbJzSVNMQkpfQIB9EqwsQ_U0d2PR1MtlstRo_1wko-2"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border border-blueprint-grid p-4 shadow-lg w-48">
                  <p className="mono-label text-[8px] text-technical-label mb-2">
                    Customer Rating
                  </p>
                  <div className="h-1 w-full bg-slate-100 mb-2">
                    <div className="h-full bg-primary w-[100%]"></div>
                  </div>
                  <p className="font-technical text-xs font-bold">
                    ★★★★★ 5-STAR RATED
                  </p>
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
                CALL 587-834-3668
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
                    className="w-full h-full object-cover grayscale brightness-110"
                    alt="FlameTech technician performing a pressure diagnostic on a Calgary residential system"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZmfPIPGnrKQz5n3SY4xVXBVUs5JeVC1ogYe_x-fqheqCFUkO2SQy9Yuxx7obyG1qC9lgTSop8k_trp8KlgbJd033dNnhzpTrbHkHtSeeuhfSzefaQVwq3SMTC3QBQvsCd3hlagXD6SOCEc4ZCDbQe_icuySHMo_Oq7ggJf9qunCM1ChYvsw2ZfmSZrYqVnzDV9G1FID0N7moZ4yhDlsdf_mpy7ld09HYIFxV1nGnxt2womcBkDFo7m2zlF-K5igEDUGmOAzuC6y4"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 font-technical text-[10px] text-primary bg-white/90 px-2 py-1 border border-blueprint-grid">
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

        <section
          id="service-area"
          className="py-24 bg-slate-50 border-b border-blueprint-grid"
        >
          <div className="max-w-7xl mx-auto px-8">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-blueprint-grid bg-white">
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
                  className="border-r border-b border-blueprint-grid p-6 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-primary text-base">
                    location_on
                  </span>
                  <span className="font-technical text-xs font-bold">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-blueprint-grid">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12">
                <span className="mono-label text-primary mb-4 block">
                  Customer Feedback
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  5-STAR RATED
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 bg-white border border-blueprint-grid p-12">
                <div className="text-primary mb-6 font-technical text-lg">
                  ★★★★★
                </div>
                <p className="text-2xl font-light leading-snug mb-12">
                  &ldquo;Fast, professional, and fairly priced. They showed up
                  on time, quoted the job upfront, and handled our boiler
                  replacement without a hitch. Exactly what you want from a
                  Calgary plumber.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary">
                    JS
                  </div>
                  <div>
                    <p className="font-bold font-headline uppercase text-xs">
                      Verified Homeowner
                    </p>
                    <p className="mono-label text-technical-label">
                      Calgary SW
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 bg-white border border-blueprint-grid p-12">
                <div className="text-primary mb-6 font-technical text-lg">
                  ★★★★★
                </div>
                <p className="text-2xl font-light leading-snug mb-12">
                  &ldquo;Called them late on a Sunday with a burst line. They
                  arrived within the hour, contained the damage, and had us
                  running again the same night. Cannot recommend FlameTech
                  enough.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary">
                    ET
                  </div>
                  <div>
                    <p className="font-bold font-headline uppercase text-xs">
                      Verified Homeowner
                    </p>
                    <p className="mono-label text-technical-label">Airdrie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="mono-label text-primary mb-6 block">
                Free Estimates · Satisfaction Guaranteed
              </span>
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-12">
                READY TO BOOK YOUR CALGARY PLUMBER?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:5878343668"
                  className="bg-primary text-white px-12 py-6 font-technical font-bold text-sm tracking-widest hover:bg-accent transition-all uppercase"
                >
                  Request a Free Estimate
                </a>
                <a
                  href="tel:5878343668"
                  className="bg-emergency text-white px-12 py-6 font-technical font-bold text-sm tracking-widest hover:brightness-110 transition-all uppercase"
                >
                  24/7 Emergency Line
                </a>
              </div>
              <p className="mono-label text-technical-label mt-8">
                Call 587-834-3668 · Calgary, AB · BBB Accredited
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
