import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FlameTech Plumbing & Heating",
    short_name: "FlameTech",
    description:
      "Calgary's licensed plumbing, heating, AC, and water-systems experts.",
    start_url: "/",
    display: "standalone",
    background_color: "#26262C",
    theme_color: "#17C3B0",
    orientation: "portrait",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
