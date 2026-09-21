import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0c0b0a",
          surface: "#12100e",
          card: "#171512",
          cardHover: "#1e1b17",
          gold: "#c5a059",
          goldLight: "#dfbe7d",
          goldHover: "#d4af65",
          goldDark: "#aa8954",
          text: "#ded7ce",
          textWhite: "#f5f0eb",
          textMuted: "#c4bbb0",
          textDim: "#9e9385",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderColor: {
        'brand-gold-subtle': "rgba(197, 160, 89, 0.18)",
        'brand-gold-accent': "rgba(197, 160, 89, 0.45)",
      },
      boxShadow: {
        'gold-glow': "0 0 25px rgba(197, 160, 89, 0.2)",
        'gold-glow-lg': "0 0 50px rgba(197, 160, 89, 0.3)",
      }
    },
  },
  plugins: [],
};

export default config;
