import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "FlameTech Resources & Maintenance Guides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Resources"
        title="Practical advice from Calgary's trusted plumbers."
        meta="Maintenance guides  ·  Seasonal tips  ·  Plain-language explainers"
      />
    ),
    size,
  );
}
