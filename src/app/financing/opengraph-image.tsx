import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "FlameTech Financing — Monthly Payments via Financeit";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Financing"
        title="Spread it across monthly payments — without surprises."
        meta="Financeit partner  ·  Soft credit check  ·  Fast decision"
      />
    ),
    size,
  );
}
