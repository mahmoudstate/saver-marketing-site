import { ui, defaultLang, type Lang } from "./ui";

// Translator for a given language, with English fallback.
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

export const dirFor = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");

// The same page in the other language — used by the language switcher + hreflang.
export function altLangPath(pathname: string, to: Lang): string {
  const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  return `/${to}${rest || "/"}`;
}

// All locale variants of a path, for <link rel="alternate" hreflang>.
export function hreflangs(pathname: string) {
  return [
    { lang: "en", href: altLangPath(pathname, "en") },
    { lang: "ar", href: altLangPath(pathname, "ar") },
    { lang: "x-default", href: altLangPath(pathname, "en") },
  ];
}

export const locales: Lang[] = ["en", "ar"];
