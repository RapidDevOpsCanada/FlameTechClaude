export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <>
      <section className="relative bg-ink-900 text-cream-50 py-24 overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative">
          <span className="eyebrow mb-6">{eyebrow}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mt-6 mb-6 max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-cream-50/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </section>
      <div aria-hidden="true" className="section-rule" />
    </>
  );
}
