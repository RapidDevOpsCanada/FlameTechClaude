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
    <section className="relative border-b border-blueprint-grid py-24">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none grid-guide"></div>
      <div className="max-w-7xl mx-auto px-8 w-full relative">
        <div className="flex items-center gap-4 mb-8">
          <span className="mono-label text-primary bg-primary/5 px-2 py-1">
            {eyebrow}
          </span>
          <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-none mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-technical-label max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
