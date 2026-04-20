import Icon from "@/components/Icon";

export default function FinalCTA() {
  return (
    <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden border-t border-white/15">
      <div className="absolute inset-0 dotgrid opacity-30 pointer-events-none"></div>
      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative text-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 mb-4 mx-auto">
          <span className="block w-6 h-px bg-white/70" />
          Ready when you are
        </span>
        <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.03em] mt-6 mb-5 leading-[1.02]">
          Book Calgary&apos;s most trusted plumbers.
        </h2>
        <p className="text-white/85 max-w-xl mx-auto text-lg leading-relaxed mb-10">
          Free estimates, upfront pricing, and a satisfaction guarantee — local
          technicians who treat your home like their own.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5878343668"
            className="inline-flex items-center gap-2 rounded-full bg-emergency text-white font-bold px-8 py-4 text-sm hover:bg-emergency-deep transition-colors"
          >
            <Icon name="call" className="text-base" />
            Call 587-834-3668
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white font-semibold px-8 py-4 text-sm hover:border-white hover:bg-white/10 transition-colors"
          >
            Request free estimate
            <Icon name="arrow_right_alt" className="text-base" />
          </a>
        </div>
        <p className="mt-6 text-xs text-white/70 uppercase tracking-[0.18em] font-semibold">
          Free estimate · No service charge for quotes · BBB Accredited
        </p>
      </div>
    </section>
  );
}
