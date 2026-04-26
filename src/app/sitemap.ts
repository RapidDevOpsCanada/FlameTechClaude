import type { MetadataRoute } from "next";
import { services, type ServicePage } from "@/lib/services";
import { getAllArticles } from "@/lib/articles";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

/**
 * Stable per-entry "lastModified" derived from the entry's content
 * fingerprint. Avoids the noisy `new Date()`-on-every-build pattern
 * that made every sitemap row look freshly modified.
 *
 * The hash is mapped onto a fixed window (last 90 days from a stable
 * epoch) so identical content produces identical timestamps build over
 * build, but new/edited entries naturally shift forward when their
 * fingerprint changes.
 */
function fingerprintLastMod(content: string): Date {
  let h = 5381;
  for (let i = 0; i < content.length; i++) {
    h = ((h << 5) + h) ^ content.charCodeAt(i);
  }
  // Map to days [0, 90)
  const days = Math.abs(h) % 90;
  // Stable epoch — bumps once a year
  const epoch = new Date(Date.UTC(new Date().getUTCFullYear(), 0, 1));
  return new Date(epoch.getTime() + days * 24 * 60 * 60 * 1000);
}

function serviceFingerprint(s: ServicePage): string {
  return [
    s.slug,
    s.title,
    s.lead,
    s.intro,
    s.seoTitle ?? "",
    s.seoDescription ?? "",
    JSON.stringify(s.features ?? []),
    JSON.stringify(s.bullets ?? []),
  ].join("|");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/financing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: fingerprintLastMod(serviceFingerprint(s)),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Article URLs — `created_at` from Postgres gives a real lastmod.
  // Fail open if the DB isn't reachable (sitemap should still build).
  let articleUrls: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    articleUrls = articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      lastModified: new Date(a.created_at),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  } catch {
    articleUrls = [];
  }

  return [...staticUrls, ...serviceUrls, ...articleUrls];
}
