import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #26262C 0%, #2F2F36 60%, #1c1c20 100%)",
          color: "#FB923C",
          fontWeight: 800,
          fontSize: 110,
          letterSpacing: -4,
          fontFamily: "sans-serif",
        }}
      >
        FT
      </div>
    ),
    size,
  );
}
