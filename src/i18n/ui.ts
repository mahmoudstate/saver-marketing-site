// Saver marketing — i18n dictionary (site chrome + page meta).
// Section copy gets filled in during the content phase; this is the skeleton.
export const languages = { en: "English", ar: "العربية" } as const;
export const defaultLang = "en";
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "site.name": "Saver",
    "site.tagline": "See what's safe to spend — and save calmly.",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.download": "Download",
    "cta.try": "Try free",
    "dir": "ltr",
    // page <title> / meta description
    "home.title": "Saver — Offline budgeting & expense tracker",
    "home.desc": "Know what's safe to spend, track bills and goals — 100% offline, no sign-up, fully private. Pay once, use it for life.",
    "pricing.title": "Pricing — Saver",
    "pricing.desc": "Pay once, use Saver for life. Free trial, no monthly subscription.",
    "about.title": "About — Saver",
    "about.desc": "Why we built Saver: a calm, private way to manage your money.",
    "privacy.title": "Privacy Policy — Saver",
    "privacy.desc": "How Saver handles your data: everything stays on your device. No tracking, no ads.",
    "download.title": "Download Saver",
    "download.desc": "Add Saver to your home screen and open it like a real app.",
    "footer.rights": "Offline & private · Powered by Mahmoud",
  },
  ar: {
    "site.name": "Saver",
    "site.tagline": "اعرف القابل للصرف فعلاً — وادّخر بهدوء.",
    "nav.features": "المميزات",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.download": "تحميل",
    "cta.try": "جرّب مجانًا",
    "dir": "rtl",
    "home.title": "Saver — تطبيق ميزانية ومصاريف بلا إنترنت",
    "home.desc": "اعرف القابل للصرف، تابع فواتيرك وأهدافك — بلا إنترنت، بلا تسجيل، خصوصية تامة. ادفع مرة واستخدمه مدى الحياة.",
    "pricing.title": "الأسعار — Saver",
    "pricing.desc": "ادفع مرة واستخدم Saver مدى الحياة. فترة تجربة مجانية، بلا اشتراك شهري.",
    "about.title": "من نحن — Saver",
    "about.desc": "ليه عملنا Saver: طريقة هادئة وخاصة لإدارة أموالك.",
    "privacy.title": "سياسة الخصوصية — Saver",
    "privacy.desc": "كيف يتعامل Saver مع بياناتك: كل شيء يبقى على جهازك. بلا تتبّع ولا إعلانات.",
    "download.title": "تحميل Saver",
    "download.desc": "أضِف Saver إلى شاشتك الرئيسية وافتحه كتطبيق حقيقي.",
    "footer.rights": "بلا إنترنت · خصوصية تامة · تطوير محمود",
  },
} as const;
