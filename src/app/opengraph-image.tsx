import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "FlameTech Plumbing & Heating — Calgary's Trusted Team";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Calgary Plumbing & Heating"
        title="Trusted plumbers, heating, AC & water systems."
        meta="Red Seal certified  ·  45+ years combined  ·  (587) 834-3668"
      />
    ),
    size,
  );
}
