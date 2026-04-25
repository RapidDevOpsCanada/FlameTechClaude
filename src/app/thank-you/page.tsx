import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import Icon from "@/components/Icon";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";
const PHONE_DISPLAY = "(587) 834-3668";
const PHONE_TEL = "+15878343668";

export const metadata: Metadata = {
  title: "Thanks — we'll be in touch | FlameTech Plumbing & Heating",
  description:
    "Your quote request landed safely. A real plumber will respond within one business day.",
  alternates: { canonical: `${SITE_URL}/thank-you` },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink-900 text-cream-50 min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none" />
        <div className="hidden md:block absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
          <div className="w-20 h-20 rounded-full bg-emergency/15 text-emergency flex items-center justify-center mb-8">
            <Icon name="check_circle" className="text-4xl" />
          </div>
          <span className="eyebrow mb-5">Thanks for reaching out</span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.02em] leading-[1.05] mt-6 mb-6">
            Got it — we'll be in touch.
          </h1>
          <p className="text-lg md:text-xl text-cream-50/75 leading-relaxed mb-10 max-w-xl">
            Your request landed safely. A real FlameTech plumber will reach
            out within one business day to confirm details, ask any
            follow-ups, and book your visit.
          </p>

          <div className="rounded-2xl bg-ink-800 border border-line-dark p-6 md:p-7 mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-3">
              Need help right now?
            </p>
            <p className="font-display text-xl md:text-2xl font-extrabold tracking-tight leading-tight mb-3">
              Burst pipe, no heat, sewer backup?
            </p>
            <p className="text-cream-50/70 leading-relaxed mb-5 text-[15px]">
              Skip the queue — call directly for priority emergency dispatch.
              Real person answers, plumber on the way.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="cta-animated-border inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold uppercase tracking-tight px-6 py-3.5 text-[14px] hover:bg-emergency-deep transition-colors"
            >
              <Icon name="call" className="text-base" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold px-6 py-3 text-sm hover:border-emergency hover:text-emergency transition-colors"
            >
              <Icon name="arrow_right_alt" className="text-base rotate-180" />
              Back to home
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 text-cream-50 font-bold px-6 py-3 text-sm hover:border-emergency hover:text-emergency transition-colors"
            >
              Read our maintenance guides
              <Icon name="arrow_right_alt" className="text-base" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
