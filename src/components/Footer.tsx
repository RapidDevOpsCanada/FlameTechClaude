import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50 border-t border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-5 text-cream-50"
          >
            <img
              src="/images/FT-LOGO-DARK8.png"
              alt="FlameTech"
              className="h-9 w-auto object-contain"
            />
            <span className="font-display text-xl font-extrabold tracking-tight">
              FlameTech
            </span>
          </Link>
          <p className="text-cream-50/70 leading-relaxed max-w-sm mb-6">
            Calgary&apos;s trusted residential plumbing and heating experts.
            Licensed, insured, bonded, and BBB accredited.
          </p>
          <a
            href="tel:5878343668"
            className="inline-flex items-center gap-2 text-lg font-bold text-emergency hover:text-cream-50 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            587-834-3668
          </a>
        </div>

        <div className="col-span-6 md:col-span-3">
          <h5 className="text-xs font-bold uppercase tracking-[0.18em] text-cream-50/60 mb-5">
            Services
          </h5>
          <ul className="space-y-3 text-sm text-cream-50/70">
            <li>
              <Link href="/#services" className="hover:text-cream-50">
                Plumbing
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-cream-50">
                Heating
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-cream-50">
                Air &amp; Water
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-cream-50">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h5 className="text-xs font-bold uppercase tracking-[0.18em] text-cream-50/60 mb-5">
            Contact
          </h5>
          <ul className="space-y-3 text-sm text-cream-50/70">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-primary">
                location_on
              </span>
              Calgary, AB &amp; surrounding communities
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-primary">
                schedule
              </span>
              24/7 Emergency Dispatch
            </li>
            <li>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-emergency text-ink-900 font-bold px-4 py-2 text-xs hover:bg-emergency-deep hover:text-white transition-colors mt-2"
              >
                Request a free estimate
                <span className="material-symbols-outlined text-sm">
                  arrow_right_alt
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream-50/50">
          <p>
            © {new Date().getFullYear()} FlameTech Plumbing &amp; Heating Ltd.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emergency animate-pulse"></span>
            <span className="font-semibold text-emergency">
              24/7 Dispatch Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
