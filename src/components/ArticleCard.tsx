import Link from "next/link";
import type { Article } from "@/lib/db";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white border border-line-light p-7 flex flex-col hover:border-emergency transition-colors"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="rounded-full bg-emergency/10 text-emergency-deep px-3 py-1 text-xs font-bold uppercase tracking-wider">
          {article.category}
        </span>
        <span className="text-xs text-ink-500 font-semibold">
          {article.read_time} min
        </span>
      </div>
      <h3 className="text-xl font-extrabold tracking-tight mb-3 text-ink-900 group-hover:text-emergency-deep transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-grow">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between pt-5 border-t border-line-light">
        <span className="text-xs text-ink-500 font-semibold">
          {article.author}
        </span>
        <span className="text-xs text-emergency-deep font-bold flex items-center gap-1">
          Read
          <span className="material-symbols-outlined text-base">
            arrow_right_alt
          </span>
        </span>
      </div>
    </Link>
  );
}
