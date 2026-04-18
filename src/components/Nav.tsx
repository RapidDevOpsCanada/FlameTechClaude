import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-ink-900/85 backdrop-blur-lg border-b border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center text-cream-50">
          <img
            src="/images/FT-LOGO-DARK8.png"
            alt="FlameTech"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link
            className="text-sm font-medium text-cream-50/75 hover:text-emergency transition-colors"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-cream-50/75 hover:text-emergency transition-colors"
            href="/#why-us"
          >
            Why Us
          </Link>
          <Link
            className="text-sm font-medium text-cream-50/75 hover:text-emergency transition-colors"
            href="/articles"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium text-cream-50/75 hover:text-emergency transition-colors"
            href="/#service-area"
          >
            Service Area
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:5878343668"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-cream-50 hover:text-emergency transition-colors"
          >
            <span className="material-symbols-outlined text-base text-emergency">
              call
            </span>
            587-834-3668
          </a>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-emergency text-ink-900 font-bold px-5 py-2.5 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </nav>
  );
}
