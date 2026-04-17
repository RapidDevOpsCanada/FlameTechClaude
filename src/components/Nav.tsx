import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blueprint-grid">
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-12 items-center">
        <div className="col-span-6 md:col-span-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-blueprint-text font-headline flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-primary text-white flex items-center justify-center font-technical">
              FT
            </span>
            FLAMETECH
          </Link>
        </div>
        <div className="col-span-6 hidden md:flex items-center justify-center gap-10">
          <Link
            className="mono-label hover:text-primary transition-colors"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="mono-label hover:text-primary transition-colors"
            href="/#diagnostics"
          >
            Why Us
          </Link>
          <Link
            className="mono-label hover:text-primary transition-colors"
            href="/articles"
          >
            Resources
          </Link>
          <Link
            className="mono-label hover:text-primary transition-colors"
            href="/#service-area"
          >
            Service Area
          </Link>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-end">
          <a
            href="tel:5878343668"
            className="bg-primary text-white font-technical font-bold px-6 py-2 text-xs uppercase tracking-widest hover:bg-accent transition-colors"
          >
            587-834-3668
          </a>
        </div>
      </div>
    </nav>
  );
}
