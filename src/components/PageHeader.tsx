export default function PageHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** Use tighter vertical padding (py-12 mobile, py-16 desktop) on
   *  pages where the hero is purely an entry banner and the next
   *  section is the real content. Default keeps the standard py-24
   *  used by /about, /privacy, /blog. */
  compact?: boolean;
}) {
  return (
    <>
      <section
        className={`relative bg-ink-900 text-cream-50 overflow-hidden ${
          compact ? "py-12 md:py-16" : "py-24"
        }`}
      >
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative">
          <span className="eyebrow mb-6">{eyebrow}</span>
          <h1
            className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mt-6 max-w-3xl ${
              compact ? "mb-4" : "mb-6"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className="text-lg text-cream-50/80 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </section>
      <div aria-hidden="true" className="section-rule" />
    </>
  );
}
