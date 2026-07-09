import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0B",
        charcoal: "#141416",
        line: "#232326",
        "line-light": "#E4E4E1",
        white: "#FFFFFF",
        offwhite: "#F7F6F3",
        ink: "#111112",
        gray: {
          400: "#9A9A9F",
          500: "#7A7A80",
          600: "#5C5C61",
        },
        gold: {
          light: "#D9BC80",
          DEFAULT: "#B8934A",
          dark: "#8F7038",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        "cube-spin": {
          "0%": { transform: "rotateX(-18deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(-18deg) rotateY(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "cube-spin": "cube-spin 22s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "pulse-line": "pulse-line 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
