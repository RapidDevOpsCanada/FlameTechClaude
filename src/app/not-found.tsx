import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SiteSearch from "@/components/SiteSearch";
import Icon from "@/components/Icon";
import Link from "next/link";

const TOP_PICKS: { label: string; href: string; meta: string; icon: string }[] = [
  { label: "Emergency Plumber", href: "/emergency-plumber-calgary", meta: "Burst pipes, leaks, sewer backups", icon: "contact_emergency" },
  { label: "Boiler Service", href: "/boiler-service-calgary", meta: "Repair, tune-ups, no-heat calls", icon: "build" },
  { label: "Furnace Install", href: "/furnaces", meta: "AirEase, Carrier, Lennox, more", icon: "local_fire_department" },
  { label: "Air Conditioning", href: "/air-conditioning", meta: "Central AC + heat pumps", icon: "ac_unit" },
  { label: "Hot Water Tanks", href: "/hot-water-tanks", meta: "Repair, replace, install", icon: "propane_tank" },
  { label: "Water Softener", href: "/water-softener", meta: "Calgary hard water solutions", icon: "science" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="bg-ink-900 text-cream-50 min-h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none" />
        <div className="hidden md:block absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-16 relative">
          <p className="font-display text-[80px] md:text-[120px] font-extrabold leading-none tracking-[-0.04em] text-cream-50/15">
            404
          </p>
          <span className="eyebrow mb-5">Page not found</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05] mt-6 mb-5">
            That page must&apos;ve sprung a leak.
          </h1>
          <p className="text-lg text-cream-50/75 leading-relaxed mb-10 max-w-xl">
            The link you followed is broken or the page has moved. Try a
            search, jump to one of our most-visited services below, or call
            us directly — we&apos;re here.
          </p>

          <SiteSearch variant="inline" />

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold px-6 py-3 text-sm hover:border-emergency hover:text-emergency transition-colors"
            >
              <Icon name="arrow_right_alt" className="text-base rotate-180" />
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold px-6 py-3 text-sm hover:border-emergency hover:text-emergency transition-colors"
            >
              Contact us
              <Icon name="arrow_right_alt" className="text-base" />
            </Link>
            <a
              href="tel:+15878343668"
              className="cta-animated-border inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3 text-[13px] hover:bg-emergency-deep transition-colors"
            >
              <Icon name="call" className="text-base" />
              Call (587) 834-3668
            </a>
          </div>
        </div>

        {/* Top picks */}
        <div className="bg-cream-50 text-ink-900 py-16 border-t border-line-dark relative">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-8">
              <span className="eyebrow-light mb-3">Most-visited services</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-4 leading-tight">
                Maybe one of these is what you&apos;re looking for.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOP_PICKS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-2xl bg-white border border-line-light p-6 hover:border-emergency transition-colors flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary-deep flex items-center justify-center shrink-0">
                    <Icon name={p.icon} className="text-lg" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-extrabold text-[16px] tracking-tight group-hover:text-emergency-deep transition-colors leading-tight">
                      {p.label}
                    </p>
                    <p className="text-[13px] text-ink-500 mt-0.5">{p.meta}</p>
                  </div>
                  <Icon
                    name="arrow_right_alt"
                    className="text-base text-ink-500 group-hover:text-emergency-deep transition-colors shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
