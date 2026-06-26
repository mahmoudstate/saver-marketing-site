import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Saver marketing site — bilingual (EN default + AR), static, SEO-first.
// Update `site` to the live domain when DNS is ready.
export default defineConfig({
  site: "https://savertrack.app",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: {
      prefixDefaultLocale: true, // both /en and /ar are explicit
    },
  },
  integrations: [tailwind()],
});
