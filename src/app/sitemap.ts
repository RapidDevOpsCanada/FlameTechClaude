import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
  const serviceUrls = services.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticUrls, ...serviceUrls];
}
