import Icon from "@/components/Icon";
import { getAuthorBio } from "@/lib/authors";

export default function AuthorBioCard({ authorName }: { authorName: string }) {
  const author = getAuthorBio(authorName);
  if (!author) return null;

  const paragraphs = author.bio.split(/\n\n+/);

  return (
    <aside className="mt-16 mb-4 rounded-2xl bg-white border border-line-light p-7 md:p-9 soft-shadow">
      <div className="flex items-start gap-5 mb-6">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emergency/15 text-emergency flex items-center justify-center font-display font-extrabold text-lg md:text-xl shrink-0">
          {author.initials}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
            About the author
          </p>
          <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight leading-tight text-ink-900">
            {author.name}
          </h3>
          <p className="text-sm text-ink-500 mt-1 leading-snug">{author.role}</p>
        </div>
      </div>

      <div className="space-y-4 text-[16px] md:text-[17px] text-ink-700 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {author.credentials && author.credentials.length > 0 && (
        <div className="mt-6 pt-6 border-t border-line-light flex flex-wrap gap-2">
          {author.credentials.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full bg-cream-50 border border-line-light px-3 py-1.5 text-[12px] font-semibold text-ink-700"
            >
              <Icon name="verified" className="text-primary text-base" />
              {c}
            </span>
          ))}
        </div>
      )}
    </aside>
  );
}
