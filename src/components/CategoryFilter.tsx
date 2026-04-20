import Link from "next/link";

export default function CategoryFilter({
  categories,
  active,
}: {
  categories: { name: string; slug: string }[];
  active?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      <Link
        href="/articles"
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
          !active
            ? "bg-white text-ink-900"
            : "bg-white text-ink-700 border border-line-light hover:border-emergency hover:text-emergency-deep"
        }`}
      >
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/categories/${c.slug}`}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
            active === c.slug
              ? "bg-white text-ink-900"
              : "bg-white text-ink-700 border border-line-light hover:border-emergency hover:text-emergency-deep"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
