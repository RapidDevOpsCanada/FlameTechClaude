import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/articles";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "FlameTech blog post";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    article = null;
  }
  if (!article) {
    return new ImageResponse(
      (
        <OgCard
          eyebrow="FlameTech Resources"
          title="Practical plumbing & heating advice from Calgary's trusted team."
        />
      ),
      size,
    );
  }
  return new ImageResponse(
    (
      <OgCard
        eyebrow={article.category}
        title={article.title}
        meta={`By ${article.author}  ·  ${article.read_time} min read`}
      />
    ),
    size,
  );
}
