import { ImageResponse } from "next/og";
import { getService, services } from "@/lib/services";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "FlameTech Plumbing & Heating service";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return new ImageResponse(
      (
        <OgCard
          eyebrow="FlameTech Plumbing & Heating"
          title="Calgary's trusted plumbing & heating team."
        />
      ),
      size,
    );
  }
  const title =
    service.title.replace(/\s*[—|].*$/, "").trim() || service.title;
  return new ImageResponse(
    (
      <OgCard
        eyebrow={service.category}
        title={title}
        meta={`${service.location ?? "Calgary"}  ·  flametechplumbing.ca`}
      />
    ),
    size,
  );
}
