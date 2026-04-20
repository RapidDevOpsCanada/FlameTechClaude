import Link from "next/link";
import type { Article } from "@/lib/db";
import Icon from "@/components/Icon";

export default function ArticleCard({ article }: { article: Article }) {
  const publishedDate = new Date(article.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white border border-line-light overflow-hidden flex flex-col hover:border-emergency transition-colors"
    >
      {article.featured_image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-cream-50">
          <img
            src={article.featured_image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-5">
          <span className="rounded-full bg-primary/15 text-primary-deep px-3 py-1 text-xs font-bold uppercase tracking-wider">
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
          <div className="flex flex-col">
            <span className="text-xs text-ink-900 font-bold leading-tight">
              {article.author}
            </span>
            <span className="text-[11px] text-ink-500 font-semibold">
              {publishedDate}
            </span>
          </div>
          <span className="text-xs text-emergency-deep font-bold flex items-center gap-1">
            Read
            <Icon name="arrow_right_alt" className="text-base" />
          </span>
        </div>
      </div>
    </Link>
  );
}
