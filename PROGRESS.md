# Saver Marketing Site — Progress & Working Reference

> ملف مرجعي للمهمة. نسجّل فيه آخر شغل اتعمل + القرارات الثابتة + المتبقّي،
> عشان نكمل من غير ما نعيد الكلام كل جلسة.
> Working reference for the site. Records what's done, the locked decisions,
> and what's next — so any session can pick up without re-deriving context.

- **Repo:** https://github.com/mahmoudstate/saver-marketing-site (branch `main`)
- **Stack:** Astro 4 + Tailwind 3, static, bilingual (`/en` default + `/ar` RTL), SEO-first.
- **Full brief:** `docs/MARKETING_SITE_PLAN.md`
- **Run locally:** `npm install` → `npm run dev` (or `npm run build` + `npm run preview`).

---

## ✅ آخر مهمة اتعملت (Last task done) — 2026-06-30

**بنينا صفحة الهبوط "Calm Premium" كاملة ورفعناها على `main`** (commit `0f3c45a`).

قبلها كان الريبو سكافولد Astro بس وصفحة الهبوط فاضية (placeholders). اللي اتعمل:

- **شاشات موبايل حقيقية** مرسومة بـ HTML/CSS بدل المربعات المخططة:
  الرئيسية / الفواتير / الأهداف / حلقة الميزانية / التحليل.
- **محتوى كامل EN + عربي فصحى مبسّطة** في `src/i18n/landing.ts` (سعر/تجربة كمتغيرات).
- **إصلاح لون الأكسنت** على الـ light (تفاصيل تحت في "القرارات").
- **تقييمات بصوت إنساني** بأسماء حقيقية.
- **GSAP self-hosted** (npm dependency، مش CDN) + theme toggle + تبديل لغة كرابط.
- **SEO:** canonical، hreflang، Open Graph، Twitter، schema (`SoftwareApplication` بسعر + `FAQPage`).
- شِلنا الـ `noindex` → الموقع بقى قابل للأرشفة.
- **متحقق بصريًا:** dark / light / عربي RTL / موبايل، بدون أخطاء console، والـ FAQ والمعرض شغّالين.

---

## 🧱 خريطة المشروع (Architecture map)

```
src/
├── pages/[lang]/
│   ├── index.astro          ← صفحة الهبوط (تجمّع الأقسام + FAQPage schema)
│   ├── pricing.astro        ← أساسي (محدّث بالسعر $5 / 14 يوم)
│   ├── about.astro          ← سكافولد بسيط (لسه محتاج تطوير)
│   ├── privacy-policy.astro ← سكافولد بسيط (canonical — التطبيق بيلينك لها)
│   └── download.astro       ← سكافولد بسيط (Add to Home Screen)
├── layouts/Base.astro       ← <html> + theme bootstrap + SEO + Navbar/Footer + script
├── components/
│   ├── Navbar.astro · Footer.astro · Seo.astro · LangSwitch.astro
│   └── landing/
│       ├── Icon.astro       ← مكتبة أيقونات SVG مركزية (by name)
│       ├── Phone.astro      ← إطار الموبايل
│       ├── Mock.astro       ← يختار الشاشة المناسبة جوّا الإطار
│       ├── screens/         ← Home/Bills/Goal/Budget/Breakdown + ScreenNav
│       └── sections/        ← Hero, TrustBar, ProblemSolution, Features, HowItWorks,
│                              Privacy, Bilingual, Gallery, Testimonials,
│                              PricingTeaser, Faq, FinalCta
├── i18n/
│   ├── ui.ts                ← نصوص الـ chrome + ميتا الصفحات
│   ├── landing.ts           ← كل محتوى صفحة الهبوط (EN + AR) + PRICE/TRIAL
│   └── utils.ts             ← المترجم + hreflang + altLangPath
├── scripts/site.ts          ← theme toggle, nav, FAQ, gallery, GSAP motion
└── styles/
    ├── tokens.css           ← متغيرات الهوية (لازم تتحمّل قبل tailwind)
    ├── global.css           ← @import tokens ثم @tailwind
    └── landing.css          ← كل ستايل Calm Premium
```

---

## 🔒 قرارات ثابتة + قواعد لازم نلتزم بيها (Locked decisions & conventions)

1. **السعر = $5 دفعة واحدة، التجربة = 14 يوم.** متغيرات `PRICE`/`TRIAL` في
   `src/i18n/landing.ts`. أي تغيير من هناك (+ ينعكس على pricing.astro و schema في Seo.astro).
2. **نبرة العربي = فصحى مبسّطة** تناسب كل الدول العربية (مش عامية مصرية). تنطبق على أي محتوى جديد.
3. **لون الأكسنت — مهم:** المنت `#5FE3C0` غير مقروء على الفاتح (تباين 1.59). فيه توكنين:
   - `--ac` = المنت للتعبئة (أزرار/تدرّجات/أشرطة) مع نص `--on-ac`.
   - `--ac-ink` = الحبر للنصوص/الروابط/الأيقونات → تيل غامق `#0A7D68` على الفاتح / منت على الداكن.
   - **استخدم `text-ac-ink` مش `text-ac`** لأي نص أكسنت.
4. **Gotcha:** في `global.css` لازم `@import "./tokens.css"` **قبل** `@tailwind`، وإلا متغيرات الـ CSS ما بتتحمّلش (الـ utilities زي `bg-bg` بترجع فاضية).
5. **تبديل اللغة = رابط حقيقي** (`/en` ↔ `/ar`) مش toggle جافاسكربت — أحسن للـ SEO/الكراولر.
6. **GSAP self-hosted** (npm)، **مفيش CDN** — يحترم رسالة offline/private.
7. **الموبايل/الشاشات** كلها مرسومة بالكود (مفيش لقطات حقيقية لسه). البريف يفضّل لقطات حقيقية لاحقًا.
8. **prefers-reduced-motion** محترم في `site.ts` (الحركة بتتلغى).
9. الدومين: `savertrack.app`. الـ `/`→`/en/` redirect بيطلع "صفحة بيضا بتحوّل" — ده سلوك Astro طبيعي مش عطل.

---

## 📌 المتبقّي / مهام مفتوحة (Backlog)

- [ ] تطوير صفحات `about` / `privacy-policy` / `download` لنفس مستوى الـ landing (لسه سكافولد بسيط).
- [ ] صفحة `pricing` كاملة (anchor مقارنة، جدول مميزات، FAQ تسعير) — حاليًا بطاقة مختصرة.
- [ ] لقطات حقيقية من التطبيق داخل الموكب (بدل الشاشات المرسومة) — light+dark، AR+EN.
- [ ] صورة OG مخصّصة (حاليًا `icon.png`).
- [ ] تفاصيل "مدى الحياة": على كام جهاز؟ سياسة الاسترجاع؟
- [ ] روابط المتاجر/التثبيت النهائية.
- [ ] تقييمات حقيقية لما تتوفّر (الحالية مبدئية).
- [ ] المرحلة 2 (SEO تراكمي): صفحات ميزات + بلوج/أدلة (القسم 5 من البريف).

---

## 📝 ملاحظات الجلسة القادمة (Next-session notes)

> هنا نسجّل ملاحظاتك على الموقع عشان نشتغل عليها. (نملأها قبل ما نبدأ الجلسة الجاية.)

- _(فاضي — في انتظار ملاحظات محمود)_

---

*آخر تحديث: 2026-06-30 — بعد رفع صفحة الهبوط (commit `0f3c45a`).*
