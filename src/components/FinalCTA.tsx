import Icon from "@/components/Icon";

export default function FinalCTA() {
  return (
    <section className="relative bg-cream-50 text-ink-900 py-20 md:py-28 overflow-hidden border-t border-line-light">
      <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative text-center">
        <span className="eyebrow justify-center mb-4 mx-auto">
          Ready when you are
        </span>
        <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.03em] mt-6 mb-5 leading-[1.02]">
          Book Calgary&apos;s most trusted plumbers.
        </h2>
        <p className="text-ink-700 max-w-xl mx-auto text-lg leading-relaxed mb-10">
          Free estimates, upfront pricing, and a satisfaction guarantee — local
          technicians who treat your home like their own.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5878343668"
            className="inline-flex items-center gap-2 rounded-full bg-emergency text-ink-900 font-bold px-8 py-4 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
          >
            <Icon name="call" className="text-base" />
            Call 587-834-3668
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 text-ink-900 font-semibold px-8 py-4 text-sm hover:border-emergency hover:text-emergency transition-colors"
          >
            Request free estimate
            <Icon name="arrow_right_alt" className="text-base" />
          </a>
        </div>
        <p className="mt-6 text-xs text-ink-500 uppercase tracking-[0.18em] font-semibold">
          Free estimate · No service charge for quotes · BBB Accredited
        </p>
      </div>
    </section>
  );
}
