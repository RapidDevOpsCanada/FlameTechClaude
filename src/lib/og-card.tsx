/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from "react";

export const OG_SIZE = { width: 1200, height: 630 };

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

const COLORS = {
  ink900: "#26262C",
  ink800: "#2F2F36",
  ink700: "#3C3C44",
  cream50: "#F8F5F0",
  primary: "#FB923C",
  emergency: "#17C3B0",
};

/**
 * Shared social-share card. 1200×630, dark ink background, teal eyebrow,
 * cream display title, FlameTech logo bottom-left, brand stripe at the
 * bottom edge. Designed to render via `next/og` ImageResponse — only
 * inline styles, no Tailwind, no external CSS.
 */
export function OgCard({
  eyebrow,
  title,
  meta,
}: {
  eyebrow?: string;
  title: string;
  meta?: string;
}): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: COLORS.ink900,
        position: "relative",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Soft glows in the corners */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -150,
          width: 600,
          height: 600,
          background: COLORS.emergency,
          opacity: 0.15,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -150,
          width: 500,
          height: 500,
          background: COLORS.primary,
          opacity: 0.1,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "72px 80px 56px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`${SITE_URL}/images/FT-LOGO-DARK8.png`}
            alt=""
            width={264}
            height={88}
            style={{ height: 88, width: "auto" }}
          />
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Eyebrow */}
        {eyebrow && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 3,
                background: COLORS.primary,
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: COLORS.emergency,
              }}
            >
              {eyebrow}
            </div>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: clampFontSize(title),
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: COLORS.cream50,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        {/* Meta */}
        {meta && (
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 26,
              fontWeight: 500,
              color: "rgba(248, 245, 240, 0.7)",
            }}
          >
            {meta}
          </div>
        )}
      </div>

      {/* Bottom brand stripe */}
      <div
        style={{
          width: "100%",
          height: 8,
          display: "flex",
          background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.emergency} 50%, ${COLORS.primary} 100%)`,
        }}
      />
    </div>
  );
}

function clampFontSize(title: string): number {
  // Headline scales down a touch for very long titles so they don't wrap
  // into too many lines on a 1200×630 frame.
  if (title.length > 80) return 56;
  if (title.length > 55) return 64;
  if (title.length > 35) return 72;
  return 84;
}
