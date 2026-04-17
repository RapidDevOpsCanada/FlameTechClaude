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
        className={`mono-label px-4 py-2 border transition-colors ${
          !active
            ? "bg-primary text-white border-primary"
            : "text-technical-label border-blueprint-grid hover:border-primary hover:text-primary"
        }`}
      >
        All Protocols
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/categories/${c.slug}`}
          className={`mono-label px-4 py-2 border transition-colors ${
            active === c.slug
              ? "bg-primary text-white border-primary"
              : "text-technical-label border-blueprint-grid hover:border-primary hover:text-primary"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
