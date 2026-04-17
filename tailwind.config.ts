import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D9488",
        accent: "#0F766E",
        emergency: "#F97316",
        "blueprint-bg": "#FFFFFF",
        "blueprint-grid": "#E2E8F0",
        "blueprint-text": "#0F172A",
        "technical-label": "#64748B",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        lg: "0",
        xl: "0",
        full: "9999px",
      },
      fontFamily: {
        headline: ["var(--font-inter)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        technical: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
