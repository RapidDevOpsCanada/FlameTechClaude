import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

const steps = [
  {
    n: "01",
    icon: "call",
    title: "Call or request a quote",
    body: "Tell us what's going on. We listen first and ask the right questions before we schedule anything.",
  },
  {
    n: "02",
    icon: "request_quote",
    title: "Free upfront estimate",
    body: "We assess the job and give you a written, all-in price. No pressure, no surprise add-ons.",
  },
  {
    n: "03",
    icon: "event_available",
    title: "Schedule at your convenience",
    body: "Pick a day and window that works for your home — we'll confirm dispatch and arrival time.",
  },
  {
    n: "04",
    icon: "verified",
    title: "Clean, code-compliant service",
    body: "Licensed technicians complete the work to Alberta code, clean up, and walk you through what we did.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream-50 text-ink-900 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow-light mb-4">How it works</span>
              <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-[-0.025em] mt-4 max-w-2xl leading-[1.02]">
                Simple, honest, and on your schedule.
              </h2>
            </div>
            <p className="text-ink-500 max-w-sm">
              Every job follows the same clear process. No high-pressure
              sales, no surprise charges — just the right work done well.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 100}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="relative rounded-2xl bg-white border border-line-light p-7 h-full lift">
                <div className="font-display text-[56px] font-extrabold leading-none text-ink-900/10 mb-2">
                  {s.n}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name={s.icon} className="text-2xl" />
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:5878343668"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink-900 font-bold px-7 py-3.5 text-sm hover:bg-emergency hover:text-ink-900 transition-colors"
            >
              <Icon name="call" className="text-base" />
              Start with a call
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-sm font-bold text-emergency-deep hover:text-emergency transition-colors"
            >
              Or request a written quote
              <Icon name="arrow_right_alt" className="text-base" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
