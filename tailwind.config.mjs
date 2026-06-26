/** @type {import('tailwindcss').Config} */
// Saver brand tokens — mirrored from the app (saver-ui.css). Calm Premium, dark-first.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Brand accent (Mint) — primary CTA / active / positive
        ac: { DEFAULT: "#5FE3C0", 2: "#8af0d6", on: "#06251F" },
        // Semantic (match the app)
        brand: {
          blue: "#2563EB",
          purple: "#7C3AED",
          orange: "#EA580C",
          yellow: "#D97706",
          red: "#E5544E",
          green: "#0E9F6E",
        },
        // Surfaces resolve via CSS vars so light/dark both work (see tokens.css)
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        card: "var(--card)",
        line: "var(--line)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
      },
      fontFamily: {
        // Inter for Latin + numbers, Cairo for Arabic (both self-hosted)
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
        ar: ["Cairo", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "14px", "2xl": "18px", "3xl": "22px" },
      boxShadow: { soft: "0 12px 34px rgba(20,22,40,.13)" },
    },
  },
  plugins: [],
};
