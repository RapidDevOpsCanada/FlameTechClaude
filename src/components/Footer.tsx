import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blueprint-grid py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="text-xl font-bold tracking-tighter text-blueprint-text font-headline mb-6 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary text-white flex items-center justify-center text-[10px] font-technical">
              FT
            </span>
            FLAMETECH
          </div>
          <p className="mono-label text-technical-label leading-loose">
            Precision Plumbing &amp; Thermal Infrastructure Engineering. ISO-9001
            Certified Deployment.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-wrap md:justify-end gap-12">
          <div>
            <h5 className="mono-label text-primary mb-6">Navigation</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  className="font-technical text-[10px] text-technical-label hover:text-primary"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="font-technical text-[10px] text-technical-label hover:text-primary"
                  href="/articles"
                >
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  className="font-technical text-[10px] text-technical-label hover:text-primary"
                  href="/articles"
                >
                  Protocols
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mono-label text-primary mb-6">Support</h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="font-technical text-[10px] text-emergency font-bold"
                  href="#"
                >
                  Emergency Unit
                </a>
              </li>
              <li>
                <Link
                  className="font-technical text-[10px] text-technical-label hover:text-primary"
                  href="/articles"
                >
                  Tech Docs
                </Link>
              </li>
              <li>
                <a
                  className="font-technical text-[10px] text-technical-label hover:text-primary"
                  href="#"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-blueprint-grid flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-technical text-[10px] text-technical-label">
          © 2024 FLAMETECH MODULE V.4.0. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="font-technical text-[10px] text-primary">
            SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
