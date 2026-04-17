import Link from "next/link";
import type { Article } from "@/lib/db";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-blueprint-grid p-8 flex flex-col hover:border-primary transition-colors"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="mono-label text-primary bg-primary/5 px-2 py-1">
          {article.category}
        </span>
        <div className="h-[1px] flex-grow bg-blueprint-grid"></div>
        <span className="mono-label text-technical-label">
          {article.read_time} MIN
        </span>
      </div>
      <h3 className="text-2xl font-headline font-bold tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight">
        {article.title}
      </h3>
      <p className="text-technical-label text-sm leading-relaxed mb-8 flex-grow">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-blueprint-grid">
        <span className="mono-label text-technical-label">
          {article.author}
        </span>
        <span className="mono-label text-primary flex items-center gap-1">
          READ <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
        </span>
      </div>
    </Link>
  );
}
