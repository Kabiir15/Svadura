import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1B1310",
        cream: "#F6EFE3",
        parchment: "#EFE6D4",
        gold: "#B98A2E",
        "gold-light": "#D9B15C",
        // per-collection accents, sourced from the packaging itself
        ghee: { DEFAULT: "#C9A34E", dark: "#4A2E12", bg: "#F3E7C4" },
        cheesy: { DEFAULT: "#D9713C", dark: "#8C3A1A", bg: "#F3D9BE" },
        imli: { DEFAULT: "#5B2A4D", dark: "#3A1830", bg: "#E9D9E4" },
        seoul: { DEFAULT: "#7A1F2B", dark: "#4A1119", bg: "#EFD3D3" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "floral-line": "url('/images/pattern-floral.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
