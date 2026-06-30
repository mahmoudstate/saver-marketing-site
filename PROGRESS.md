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

> ملاحظات محمود على النسخة الحالية — **للتسجيل فقط، التنفيذ في جلسة قادمة.**
> (Mahmoud's feedback on the current version — recorded only, to act on next session.)

### الاتجاه العام (Overall direction)
1. **النسخة الحالية ضعيفة ومش معبّرة عن مستوى التطبيق وإمكانياته.** عايزين موقع **"جبّار"** — ده الانطباع الأول لمستخدمين جايين من **إعلانات مدفوعة**؛ اللي يدخل مرة ومش يعجبه مش هيرجع تاني حتى لو ظهرله الإعلان. لازم الموقع **يخطف الانتباه من أول زيارة**، شرح **بسيط**، **مرتّب**، **مريح للعين**، وتجربة مستخدم **ذكية** توصّل العميل إنه ينزّل التطبيق.

### المحتوى والنبرة (Content & tone)
2. **محتوى أفضل من الحالي**، واللهجة تبقى **فريندلي وودودة أكتر**.
3. **النصوص تبان طبيعية مش AI:** شيل **الشرطة الكبيرة (—)** و**النقط/الـ ellipsis** اللي ملهاش داعي من العناوين والتكست. خلّيها طبيعية جدًا.

### الهوية البصرية (Brand & assets)
4. **اللوجو:** غيّره — حمّل واستخدم **اللوجو الأساسي الرسمي** بتاعنا.
5. **الأيقونات المستخدمة مختلفة عن اللي في التطبيق** — لازم نستخدم **نفس أيقونات التطبيق**.

### اللقطات / الموكب (Screenshots & mockups)
6. **أغلب/كل الشاشات في الموقع مش حقيقية ومش زي التطبيق** — مشكلة كبيرة. **أي شاشة سكرين في الموقع لازم تطابق التطبيق الحقيقي بالظبط.**
7. **الاستيكرز على أول موكب** (الكروت الطايرة): واحد **مغطّي الاسم**، والتاني **باين مقصوص من الحرف** وعربيه **مش بنفس الخط** — المكان غلط ومش حلوين. يتظبطوا أو يتشالوا.

### التخطيط والريسبونسف (Layout)
8. **مساحات الصفحة من اليمين والشمال مش مظبوطة** (مفيش gutters/حدود للصفحة) — تتصلح، **مع مراعاة إن أغلب الجمهور هيفتح من الموبايل** (mobile-first).

### التقييمات (Testimonials)
9. **من غير وظيفة الشخص**، ويكونوا **كُتار** في **شريط متحرّك (marquee)**.

### الرسالة/الموضعة (Positioning)
10. الموقع لتطبيق على **App Store + Android (تطبيق native)**، **مش تطبيق ويب** — إحنا في **مرحلة الويب للتجربة فقط**. الرسائل والـ CTA تعكس ده.

### الحركة (Motion)
11. **أنيميشن أكتر** — حركة **ناعمة وترندي** في كل الموقع (بحكم الخبرة كمصمّم).

### 🎯 أصول التطبيق الحقيقية — مصدرنا للتنفيذ (Real app assets to pull from)
> التطبيق نفسه موجود في مجلد العمل الأساسي
> `/Users/m.state/Downloads/Saver New Project/saver-test-claude-file-transfer-k1kui7`.
> **كل اللقطات/الأيقونات/اللوجو لازم تتاخد من هنا — مش نخترع.**
- **اللوجو الأساسي = `icon.png`** (في جذر التطبيق). بيُستخدم في `src/screens/Splash.jsx` و`Onboarding.jsx`. التاجلاين الرسمي: **"Save it the easy way"**. (اللي في النـاف حاليًا شكل ساعة مرسوم = غلط، يتشال.)
- **مجموعة الأيقونات الحقيقية = `src/ui/Ico.jsx`** — أسماء جاهزة (search, plus, wallet, card, target, home, activity, bills, shield, sparkles, palette, download, moon, sun, crown, bell, eye…). **نستبدل `src/components/landing/Icon.astro` بنفس مسارات Ico الحقيقية 1:1.**
- **الشاشات الحقيقية = `src/screens/*.jsx`**: `Home.jsx`, `Bills.jsx`, `Goals.jsx`, `GoalDetail.jsx`, `Budgets.jsx`, `BudgetDetail.jsx`, `Breakdown.jsx`, `Activity.jsx`, `Add.jsx`… نعيد بناء موكبات الموقع **مطابقة لها**.
- **مكوّنات نعيد استخدام شكلها:** `src/ui/BottomNav.jsx`, `BudgetRing.jsx`, `TxnRow.jsx`, `Money.jsx`, `CatTile.jsx`, `cats.js` (الفئات/الألوان)، ونظام التصميم `src/saver-ui.css`.
- **خيار أنضف للقطات الحقيقية:** بدل إعادة الرسم بإيد، ممكن نلتقط الشاشات فعليًا من التطبيق شغّال (light+dark, AR+EN) ونحطها كصور داخل الموكب — أضمن للتطابق.

### 💡 اقتراحات كلود (للنقاش — مش منفّذة)
1. **خط أصول موحّد:** ننسخ `icon.png` للموقع كلوجو، ونولّد `Icon.astro` آليًا من `Ico.jsx`، ونبني الموكبات من نسخة كود الشاشات الحقيقية — ده يحلّ نقاط اللوجو + الأيقونات + اللقطات (4,5,6) دفعة واحدة وبتطابق مضمون.
2. **Hero يخطف العين:** فايدة واحدة كبيرة + CTA أساسي واحد + لقطة حقيقية فوق الطية، وخلفية mesh متدرّجة ناعمة متحركة. تقليل الزحمة = قرار أسرع.
3. **موضعة المتجر (نقطة 10):** شارات **"قريبًا على App Store و Google Play"** + زر ثانوي **"جرّب نسخة الويب"**، وتوضيح إن الويب = مرحلة تجربة. CTA الأساسي يتحوّل من "Try free" لـ "نزّل التطبيق / انضم لقائمة الانتظار".
4. **قصة سكرول سينمائية (يخدم نقطة الأنيميشن 11):** قسم موبايل **مثبّت (pinned)** والشاشات بتتبدّل وانت بتنزل (safe-to-spend → bills → goals → breakdown) — إحساس premium حقيقي. + marquee، magnetic CTA، count-up، parallax خفيف. كله مع `prefers-reduced-motion`.
5. **التقييمات (نقطة 9):** اسم + دولة بس (بدون وظيفة)، 10–14 تقييم في **شريطين marquee** عكس بعض.
6. **الريسبونسف (نقطة 8):** container موحّد بـ gutter ثابت `clamp()` ومراجعة كل قسم على الموبايل أولًا — نمنع أي overflow أفقي ونظبّط الحواف.
7. **اللهجة (نقطة 2,3):** إعادة كتابة أدفأ وأقصر، بضمير المخاطب، **بدون em-dash (—) ولا ellipsis**، جُمل قصيرة قوية.
8. **الاستيكرز (نقطة 7):** يا إمّا نعيد تموضعهم بحيث ما يغطّوش الاسم وما يتقصّوش + Cairo للعربي، يا إمّا نستبدلهم بـ highlights جوّا الشاشة نفسها.
9. **صورة OG حقيقية:** تركيب hero فيه اللوجو + لقطة، بدل `icon.png` المجرّد — يحسّن المشاركة على السوشيال والإعلانات.

---

*آخر تحديث: 2026-06-30 — سُجّلت ملاحظات محمود (11 نقطة) + أصول التطبيق الحقيقية + اقتراحات كلود. آخر كود: صفحة الهبوط (commit `0f3c45a`).*
