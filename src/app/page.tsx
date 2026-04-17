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
                  Standard: ISO-TC138
                </span>
                <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none mb-8">
                PRECISION <span className="text-primary">FLUID</span>
                <br />
                DYNAMICS.
              </h1>
              <p className="text-xl text-technical-label max-w-xl mb-12 font-normal leading-relaxed">
                Ultra-modern plumbing infrastructure engineered for technical
                performance. Utilizing high-key diagnostics and high-pressure
                teal polymer systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emergency text-white px-8 py-5 font-technical font-bold flex items-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-emergency/20">
                  24/7 EMERGENCY UNIT
                  <span className="material-symbols-outlined text-lg">
                    contact_emergency
                  </span>
                </button>
                <button className="px-8 py-5 font-technical font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  SYSTEM SPECS
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-square bg-white border border-blueprint-grid p-4 shadow-2xl rotate-2">
                <img
                  className="w-full h-full object-cover grayscale brightness-125 contrast-75"
                  alt="High-key architectural photography of minimalist teal plumbing conduits in a bright white environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDanF3lNZ40nzevbN20tvuTF-AVP8Xm3NCcHS9pU0cBrfwH1qPGQaifUJ0ZLAf64jj2-mm8UFz7ygZIfW_TaQ_f_MJJFpWRr8QqgIEMvnM_xMhpG2TGiwXOry7HXOfuYE7g33i8Q8o4_ei0t___UiTqoyg7r5_eLaDYYr0Sxe36FA3kXzyJP2YjJuTQz4dlXBZK10rKMPzIDseuHBDXz83PJQ5-p4TXXVJLzRbJzSVNMQkpfQIB9EqwsQ_U0d2PR1MtlstRo_1wko-2"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border border-blueprint-grid p-4 shadow-lg w-48">
                  <p className="mono-label text-[8px] text-technical-label mb-2">
                    Tolerance Audit
                  </p>
                  <div className="h-1 w-full bg-slate-100 mb-2">
                    <div className="h-full bg-primary w-[94%]"></div>
                  </div>
                  <p className="font-technical text-xs font-bold">
                    CALIBRATED 94.8%
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
                  Deployment Modules
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  TECHNICAL SERVICES
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:text-right">
                <p className="text-technical-label font-normal max-w-sm ml-auto">
                  Systematic approach to thermal and hydraulic residential
                  infrastructure.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-0 border-t border-l border-blueprint-grid">
              {[
                {
                  n: "01",
                  icon: "water_damage",
                  title: "Leak Mapping",
                  body: "Non-invasive sonic analysis and digital mapping of structural vulnerabilities within the thermal shell.",
                },
                {
                  n: "02",
                  icon: "precision_manufacturing",
                  title: "Pipe Engineering",
                  body: "Precision installation of teal-spec industrial polymers and medical-grade copper arrays.",
                },
                {
                  n: "03",
                  icon: "thermostat",
                  title: "Thermal Control",
                  body: "Optimized climate control arrays featuring high-key digital diagnostic integration.",
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
                  <h3 className="text-xl font-bold mb-4 font-headline uppercase tracking-tight">
                    {m.title}
                  </h3>
                  <p className="text-technical-label text-sm leading-relaxed mb-8">
                    {m.body}
                  </p>
                  <a
                    className="font-technical text-[10px] font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
                    href="#"
                  >
                    VIEW PROTOCOL{" "}
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
                  Priority Unit
                </span>
                <div className="h-[1px] w-20 bg-white/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter uppercase">
                Rapid Crisis Deployment
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <button className="w-full md:w-auto bg-white text-emergency font-technical font-bold px-10 py-6 text-sm uppercase tracking-widest hover:bg-blueprint-bg transition-all shadow-2xl">
                LAUNCH EMERGENCY CALL
              </button>
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
                    alt="High-key photo of an orange digital diagnostic tool measuring pressure on a teal pipe fitting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZmfPIPGnrKQz5n3SY4xVXBVUs5JeVC1ogYe_x-fqheqCFUkO2SQy9Yuxx7obyG1qC9lgTSop8k_trp8KlgbJd033dNnhzpTrbHkHtSeeuhfSzefaQVwq3SMTC3QBQvsCd3hlagXD6SOCEc4ZCDbQe_icuySHMo_Oq7ggJf9qunCM1ChYvsw2ZfmSZrYqVnzDV9G1FID0N7moZ4yhDlsdf_mpy7ld09HYIFxV1nGnxt2womcBkDFo7m2zlF-K5igEDUGmOAzuC6y4"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 font-technical text-[10px] text-primary bg-white/90 px-2 py-1 border border-blueprint-grid">
                    LIVE_DIAGNOSTIC_FEED
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-10">
                THE PRECISION
                <br />
                <span className="text-primary">STANDARD.</span>
              </h2>
              <div className="space-y-10">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-technical text-2xl font-bold text-primary/20">
                    01
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Laser-Aligned Installation
                    </h4>
                    <p className="text-technical-label text-sm">
                      Every conduit is surveyed using laser precision to ensure
                      zero-stress mounting and maximum fluid laminar flow.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-technical text-2xl font-bold text-primary/20">
                    02
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-technical text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Integrated Telemetry
                    </h4>
                    <p className="text-technical-label text-sm">
                      Smart sensors embedded in high-pressure nodes provide
                      real-time thermal data directly to your infrastructure
                      hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50 border-b border-blueprint-grid">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12">
                <span className="mono-label text-primary mb-4 block">
                  Field Feedback
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                  CLIENT AUDITS
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 bg-white border border-blueprint-grid p-12">
                <p className="text-2xl font-light leading-snug mb-12">
                  &ldquo;FlameTech operates more like a surgical engineering firm
                  than a plumbing company. The blueprinting phase alone
                  identified energy leaks we never knew existed.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary">
                    JS
                  </div>
                  <div>
                    <p className="font-bold font-headline uppercase text-xs">
                      Julian Sterling
                    </p>
                    <p className="mono-label text-technical-label">
                      Director, Sterling Estates
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 bg-white border border-blueprint-grid p-12">
                <p className="text-2xl font-light leading-snug mb-12">
                  &ldquo;The emergency response was deployed within 40 minutes of
                  the sensor alert. Their technical precision prevented what
                  would have been a catastrophic failure.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center font-technical font-bold text-primary">
                    ET
                  </div>
                  <div>
                    <p className="font-bold font-headline uppercase text-xs">
                      Elena Thorne
                    </p>
                    <p className="mono-label text-technical-label">
                      Facilities Manager
                    </p>
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
                Ready for deployment
              </span>
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-12">
                SYSTEM UPGRADE REQUIRED?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-primary text-white px-12 py-6 font-technical font-bold text-sm tracking-widest hover:bg-accent transition-all uppercase">
                  Request Diagnostic
                </button>
                <button className="bg-emergency text-white px-12 py-6 font-technical font-bold text-sm tracking-widest hover:brightness-110 transition-all uppercase">
                  Emergency 24/7
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
