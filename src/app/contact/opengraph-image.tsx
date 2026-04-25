import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "Contact FlameTech Plumbing & Heating";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Contact FlameTech"
        title="A real plumber answers — every call, every time."
        meta="(587) 834-3668  ·  Mon – Sat 8 AM – 6 PM"
      />
    ),
    size,
  );
}
