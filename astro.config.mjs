import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Saver marketing site – bilingual (EN default + AR), static, SEO-first.
// Update `site` to the live domain when DNS is ready.
export default defineConfig({
  site: "https://savertrack.app",
  trailingSlash: "ignore",
  // "/" is handled by src/pages/index.astro instead (detects the visitor's
  // browser language client-side and sends them to /en/ or /ar/ — a static
  // redirect here can only ever pick one fixed language).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: {
      prefixDefaultLocale: true, // both /en and /ar are explicit
      redirectToDefaultLocale: false, // don't let Astro auto-redirect "/" to /en/ — src/pages/index.astro handles it with real language detection
    },
  },
  integrations: [tailwind()],
});
