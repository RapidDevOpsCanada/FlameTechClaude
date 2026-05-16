import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import Icon from "@/components/Icon";
import { getAuthorBio } from "@/lib/authors";

export default function ArticleCard({ article }: { article: Article }) {
  const publishedDate = new Date(article.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const authorBio = getAuthorBio(article.author);
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="lift group col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white border border-line-light overflow-hidden flex flex-col hover:border-emergency"
    >
      {article.featured_image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-cream-100">
          <Image
            src={article.featured_image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
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
          {article.excerpt.replace(/^📖\s*\d+\s*min read\s*·\s*Last updated[^·]*?\s+/i, "").trim()}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-line-light gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {authorBio?.avatar ? (
              <Image
                src={authorBio.avatar}
                alt={`${article.author} — FlameTech author`}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover border border-line-light shrink-0"
              />
            ) : (
              <span className="w-8 h-8 rounded-full bg-emergency/15 text-emergency flex items-center justify-center font-bold text-[11px] shrink-0">
                {authorBio?.initials ?? article.author.charAt(0)}
              </span>
            )}
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-ink-900 font-bold leading-tight truncate">
                {article.author}
              </span>
              <span className="text-[11px] text-ink-500 font-semibold">
                {publishedDate}
              </span>
            </div>
          </div>
          <span className="text-xs text-emergency-deep font-bold flex items-center gap-1 shrink-0">
            Read
            <Icon name="arrow_right_alt" className="text-base" />
          </span>
        </div>
      </div>
    </Link>
  );
}
