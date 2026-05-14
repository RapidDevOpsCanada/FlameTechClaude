import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import StickyCallBar from "@/components/StickyCallBar";
import AuthorBioCard from "@/components/AuthorBioCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { getAuthorBio } from "@/lib/authors";
import { getFeaturedImageDimensions } from "@/lib/featured-image-dimensions";
import { getArticleHowTo } from "@/lib/article-how-to";
import Icon from "@/components/Icon";
import type { Metadata } from "next";

// Author display name → /about anchor slug. Used to link bylines to
// the founder bio on /about so the Person ↔ Article ↔ Organization
// hop is explicit for Google's E-E-A-T systems.
const AUTHOR_ABOUT_ANCHORS: Record<string, string> = {
  "Shaun Kristoff": "/about#shaun-kristoff",
  "Jason Mounsey": "/about#jason-mounsey",
};

const SITE_URL = "https://flametechplumbing.ca";

export const dynamic = "force-dynamic";

function cleanExcerpt(excerpt: string): string {
  return excerpt.replace(/^📖\s*\d+\s*min read\s*·\s*Last updated[^·]*?\s+/i, "").trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    return { title: "Article" };
  }
  if (!article) return { title: "Article" };
  const url = `${SITE_URL}/blog/${article.slug}`;
  const description = cleanExcerpt(article.excerpt).slice(0, 160);
  // Per-article OG image: prefer the featured image so social previews
  // show the post's hero. Falls through to the layout's FTVAN.jpg
  // default when the article has no featured_image.
  const ogDims = getFeaturedImageDimensions(article.featured_image);
  const ogImages = article.featured_image
    ? [
        {
          url: article.featured_image,
          alt: article.title,
          ...(ogDims ? { width: ogDims.w, height: ogDims.h } : {}),
        },
      ]
    : undefined;
  return {
    title: article.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description,
      publishedTime: new Date(article.created_at).toISOString(),
      modifiedTime: new Date(
        article.updated_at ?? article.created_at,
      ).toISOString(),
      authors: [article.author],
      section: article.category,
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      ...(ogImages ? { images: ogImages } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }
  if (!article) notFound();

  let related: Awaited<ReturnType<typeof getAllArticles>> = [];
  try {
    const all = await getAllArticles();
    related = all.filter((a) => a.slug !== article!.slug).slice(0, 3);
  } catch {
    related = [];
  }

  const url = `${SITE_URL}/blog/${article.slug}`;
  const heroImg = article.featured_image
    ? `${SITE_URL}${article.featured_image}`
    : `${SITE_URL}/images/FT-LOGO-DARK8.png`;
  const heroDims = getFeaturedImageDimensions(article.featured_image);
  const authorBio = getAuthorBio(article.author);
  const authorAnchor = AUTHOR_ABOUT_ANCHORS[article.author];
  const howTo = getArticleHowTo(article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.excerpt,
        image: {
          "@type": "ImageObject",
          url: heroImg,
          ...(heroDims ? { width: heroDims.w, height: heroDims.h } : {}),
        },
        datePublished: new Date(article.created_at).toISOString(),
        dateModified: new Date(
          article.updated_at ?? article.created_at,
        ).toISOString(),
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        articleSection: article.category,
        // Speakable spec — points voice assistants at the article lead
        // (first paragraph) so the page is eligible for voice answers.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".prose-article p:first-of-type", "h1"],
        },
        author: {
          "@type": "Person",
          "@id": authorAnchor
            ? `${SITE_URL}${authorAnchor}`
            : `${SITE_URL}#author-${article.author.replace(/\s+/g, "-").toLowerCase()}`,
          name: article.author,
          ...(authorAnchor ? { url: `${SITE_URL}${authorAnchor}` } : {}),
          ...(authorBio
            ? {
                jobTitle: authorBio.role,
                description: authorBio.bio.split(/\n\n+/)[0],
                image: authorBio.avatar
                  ? `${SITE_URL}${authorBio.avatar}`
                  : undefined,
                worksFor: { "@id": `${SITE_URL}#business` },
              }
            : {}),
        },
        publisher: { "@id": `${SITE_URL}#business` },
        wordCount: article.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category,
            item: `${SITE_URL}/blog/categories/${article.category_slug}`,
          },
          { "@type": "ListItem", position: 4, name: article.title, item: url },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: article.title,
        description: article.excerpt,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: heroImg,
          ...(heroDims ? { width: heroDims.w, height: heroDims.h } : {}),
        },
        datePublished: new Date(article.created_at).toISOString(),
        dateModified: new Date(
          article.updated_at ?? article.created_at,
        ).toISOString(),
        inLanguage: "en-CA",
      },
      ...(howTo
        ? [
            {
              "@type": "HowTo",
              "@id": `${url}#howto`,
              name: howTo.name ?? article.title,
              description: howTo.description ?? cleanExcerpt(article.excerpt),
              image: {
                "@type": "ImageObject",
                url: heroImg,
                ...(heroDims
                  ? { width: heroDims.w, height: heroDims.h }
                  : {}),
              },
              ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
              ...(howTo.tool && howTo.tool.length > 0
                ? {
                    tool: howTo.tool.map((name) => ({
                      "@type": "HowToTool",
                      name,
                    })),
                  }
                : {}),
              ...(howTo.supply && howTo.supply.length > 0
                ? {
                    supply: howTo.supply.map((name) => ({
                      "@type": "HowToSupply",
                      name,
                    })),
                  }
                : {}),
              step: howTo.steps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.name,
                text: s.text,
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <section className="relative bg-ink-900 text-cream-50 py-24 overflow-hidden">
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none"></div>
        <div className="hidden md:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emergency/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-10 w-full relative">
          <div className="mb-5">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label: article.category,
                  href: `/blog/categories/${article.category_slug}`,
                },
                { label: article.title },
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href={`/blog/categories/${article.category_slug}`}
              className="rounded-full bg-emergency/15 text-emergency px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-emergency hover:text-ink-900 transition-colors"
            >
              {article.category}
            </Link>
            <span className="text-xs font-semibold text-cream-50/60 uppercase tracking-wider">
              {article.read_time} min read
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-cream-50/70 max-w-3xl leading-relaxed mb-10">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-line-dark">
            {(() => {
              const authorByline = (
                <>
                  {authorBio?.avatar ? (
                    <Image
                      src={authorBio.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-line-dark"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-emergency/20 flex items-center justify-center font-bold text-emergency text-sm">
                      {initials(article.author)}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm">{article.author}</p>
                    <p className="text-xs text-cream-50/60">
                      {new Date(article.created_at).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "2-digit", year: "numeric" },
                      )}
                      {article.updated_at &&
                      new Date(article.updated_at).getTime() >
                        new Date(article.created_at).getTime() + 86_400_000 ? (
                        <>
                          {" · Updated "}
                          {new Date(article.updated_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "2-digit",
                              year: "numeric",
                            },
                          )}
                        </>
                      ) : null}
                    </p>
                  </div>
                </>
              );
              return authorAnchor ? (
                <Link
                  href={authorAnchor}
                  className="flex items-center gap-3 hover:text-emergency transition-colors"
                >
                  {authorByline}
                </Link>
              ) : (
                <div className="flex items-center gap-3">{authorByline}</div>
              );
            })()}
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="section-rule" />

      <main className="bg-cream-50 text-ink-900 py-20 light-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: article.body.replace(/^\s*<p>\s*📖[^<]*?Last updated[^<]*?<\/p>\s*/i, "") }}
          />
          <AuthorBioCard authorName={article.author} />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .prose-article p { font-size: 1.1875rem; line-height: 1.8; color: #334155; margin-bottom: 1.6rem; }
              .prose-article h2 { font-weight: 800; letter-spacing: -0.02em; font-size: 2.125rem; margin: 3rem 0 1.25rem; color: #26262C; line-height: 1.15; }
              .prose-article h3 { font-weight: 700; letter-spacing: -0.01em; font-size: 1.5rem; margin: 2.4rem 0 1rem; color: #26262C; line-height: 1.25; }
              .prose-article ul { margin: 1.1rem 0 1.6rem; padding-left: 1.4rem; list-style: disc; color: #334155; }
              .prose-article ol { margin: 1.1rem 0 1.6rem; padding-left: 1.6rem; list-style: decimal; color: #334155; }
              .prose-article li { font-size: 1.1875rem; margin-bottom: 0.6rem; line-height: 1.75; }
              .prose-article blockquote { border-left: 3px solid #FB923C; padding: 0.6rem 0 0.6rem 1.75rem; margin: 2rem 0; color: #26262C; font-weight: 500; font-size: 1.25rem; line-height: 1.7; }
              .prose-article strong { color: #26262C; font-weight: 700; }
              .prose-article code { background: #F1ECE3; padding: 0.1rem 0.4rem; font-size: 0.9em; border-radius: 6px; }
              .prose-article a { color: #167f86; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(22, 127, 134, 0.4); }
              .prose-article a:hover { text-decoration-color: #167f86; }
              .prose-article img { border-radius: 0.75rem; margin: 2rem auto; display: block; max-width: 100%; height: auto; }
              .prose-article figure { margin: 2rem 0; }
              .prose-article figure img { margin: 0 auto; }
              .prose-article figcaption { text-align: center; font-size: 0.95rem; color: #64748b; margin-top: 0.6rem; }
              .prose-article table { border-collapse: collapse; width: 100%; margin: 2rem 0; font-size: 1.0625rem; }
              .prose-article th, .prose-article td { border: 1px solid #E5E0D4; padding: 0.75rem 1rem; text-align: left; }
              .prose-article th { background: #F1ECE3; font-weight: 700; color: #26262C; }
            `,
          }}
        />
      </main>

      {related.length > 0 && (
        <section className="bg-cream-100 text-ink-900 py-20 border-t border-line-light light-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow mb-4">Keep reading</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
                  Related articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-emergency-deep"
              >
                All articles
                <Icon name="arrow_right_alt" className="text-base" />
              </Link>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {related.map((a) => (
                <Link
                  key={a.id}
                  href={`/blog/${a.slug}`}
                  className="group col-span-12 md:col-span-4 rounded-2xl bg-white border border-line-light p-7 hover:border-emergency transition-colors"
                >
                  <span className="rounded-full bg-emergency/10 text-emergency-deep px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-5">
                    {a.category}
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight group-hover:text-emergency-deep transition-colors">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
