# Saver — Marketing Site

Bilingual (English default + Arabic RTL), SEO-first marketing site for the **Saver** app.
Built with **Astro + Tailwind**. Identity mirrors the app (Mint accent `#5FE3C0`, Inter + Cairo).

> Full plan & brief: [`docs/MARKETING_SITE_PLAN.md`](docs/MARKETING_SITE_PLAN.md)

## Status

Foundation scaffold (Phase 1). Section content + the **Calm Premium** visual design
(from Claude Design, "Saver" design system) get dropped into the section placeholders next.

## Stack

- **Astro** static site, built-in i18n (`/en` default + `/ar` RTL, `hreflang`).
- **Tailwind** with Saver brand tokens (`tailwind.config.mjs` + `src/styles/tokens.css`).
- **@astrojs/sitemap** + `robots.txt` + JSON-LD (`SoftwareApplication`) for SEO.
- Self-hosted fonts (Inter + Cairo) in `public/fonts/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview
```

## Structure

```
src/
├── layouts/Base.astro        # <html lang/dir>, fonts, SEO head, nav + footer
├── components/               # Seo, Navbar, Footer, LangSwitch
├── i18n/                     # ui.ts (dictionary) + utils.ts (t, hreflang, lang switch)
├── styles/                   # tokens.css (brand) + global.css
└── pages/
    ├── index.astro           # → /en/
    └── [lang]/               # en + ar via getStaticPaths
        ├── index.astro       # landing (section placeholders, §6)
        ├── pricing.astro     # §8 (price/trial TBD)
        ├── about.astro       # §9
        ├── privacy-policy.astro  # §10 (canonical — the app links here)
        └── download.astro    # PWA install
```

## To do (next)

- [ ] Drop the Calm Premium design + real copy into the landing sections.
- [ ] Real app screenshots in phone mockups (light/dark, AR/EN).
- [ ] Final price + trial length on `/pricing`.
- [ ] Deploy (Vercel / Netlify / Cloudflare Pages) + point `savertrack.app`.
- [ ] Phase 2: feature pages + `/guides` blog (SEO, periodic).

## Deploy

Static output (`dist/`). Recommended: Vercel / Netlify / Cloudflare Pages.
Set the production domain to `savertrack.app` and update `site` in `astro.config.mjs` if it changes.
