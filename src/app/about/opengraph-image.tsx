import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "About FlameTech Plumbing & Heating";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="About FlameTech"
        title="Calgary's locally owned plumbing & heating team."
        meta="45+ years combined  ·  Red Seal certified"
      />
    ),
    size,
  );
}
