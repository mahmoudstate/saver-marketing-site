// Saver marketing — landing page copy (EN + simplified MSA Arabic).
// Tone: calm, friendly, confident — no guilt. Arabic is clean Modern Standard
// (works across the Gulf + Egypt + wider region), not colloquial.
// Price + trial are variables so they're trivial to change later.
import type { Lang } from "./ui";

export const PRICE = "$5";
export const TRIAL = "14";

export interface Feature { icon: string; tint: string; t: string; d: string; }
export interface Step { t: string; d: string; }
export interface Testimonial { name: string; role: string; av: string; tint: string; quote: string; }
export interface Faq { q: string; a: string; }
export interface GalleryItem { screen: string; cap: string; }

interface LandingCopy {
  hero: { eyebrow: string; h1a: string; h1b: string; h1c: string; lead: string; cta1: string; cta2: string; b1: string; b2: string; b3: string; };
  trust: string[];
  problem: { eyebrow: string; prob1: string; strike: string; prob2: string; solHead: string; sol: { t: string; d: string }[]; };
  features: { eyebrow: string; head: string; sub: string; link: string; items: Feature[]; };
  how: { eyebrow: string; head: string; steps: Step[]; };
  privacy: { eyebrow: string; head: string; sub: string; items: { t: string; d: string }[]; };
  bilingual: { eyebrow: string; head: string; sub: string; };
  gallery: { eyebrow: string; head: string; dark: string; light: string; items: GalleryItem[]; };
  testimonials: { eyebrow: string; head: string; items: Testimonial[]; };
  pricing: { eyebrow: string; head: string; per: string; anchor: string; trial: string; cta: string; feats: string[]; };
  faq: { eyebrow: string; head: string; items: Faq[]; };
  cta: { head: string; sub: string; btn1: string; btn2: string; };
  // strings rendered inside the phone mockups
  screen: Record<string, string>;
}

const fill = (s: string) => s.replace(/\[PRICE\]/g, PRICE).replace(/\[TRIAL\]/g, TRIAL);

const en: LandingCopy = {
  hero: {
    eyebrow: "Personal budgeting · Offline · Private",
    h1a: "See what's ", h1b: "safe to spend", h1c: " — and save calmly.",
    lead: "100% offline. No account, no sign-up, no tracking. Saver shows the real amount you can spend today — not just a balance.",
    cta1: "Try free", cta2: "See how it works",
    b1: "Works offline", b2: "No sign-up", b3: "Fully private",
  },
  trust: ["Offline", "No tracking", "No ads", "Your device only", "Pay once"],
  problem: {
    eyebrow: "The problem",
    prob1: "Most money apps leave you feeling ", strike: "guilty",
    prob2: " — buried dashboards, anxious alerts, and a balance that lies about what you can actually spend.",
    solHead: "Saver does the opposite.",
    sol: [
      { t: "One honest number", d: "After bills, goals and frozen savings — the amount that's genuinely safe to spend today." },
      { t: "Calm, never guilt", d: "A quiet companion, not a strict accountant. No shaming, no noise." },
      { t: "Yours, on your device", d: "Everything stays on your phone. No cloud, no account, no eyes on your money." },
    ],
  },
  features: {
    eyebrow: "Everything in one calm app", head: "Built for real money, real life.",
    sub: "Every part of Saver in one quiet place — track it, budget it, and reach your goals without the noise.",
    link: "Learn more",
    items: [
      { icon: "check", tint: "tint-ac", t: "Safe to spend", d: "The real amount you can spend today — after bills, budgets and savings are accounted for. Not just a balance." },
      { icon: "bill", tint: "tint-rose", t: "Bills & installments", d: "Track recurring bills from weekly to yearly, with reminders and logos so nothing slips past you again." },
      { icon: "goal", tint: "tint-blue", t: "Savings goals", d: "Freeze money toward a goal, watch it grow, and celebrate when you arrive — then spend it when you're ready." },
      { icon: "budget", tint: "tint-purple", t: "Budgets & projects", d: "Set monthly limits or project pots, start from any date, and keep your spending inside clear lines." },
      { icon: "grid", tint: "tint-yellow", t: "Categories", d: "Organise spending visually with custom coloured icons you can reorder to match how you think." },
      { icon: "chart", tint: "tint-sage", t: "Breakdown", d: "See exactly where your money goes with clean coloured bars — by category, at a glance." },
    ],
  },
  how: {
    eyebrow: "How it works", head: "Up and running in seconds.",
    steps: [
      { t: "Install", d: "Add Saver to your home screen — it opens full-screen like a real app. No store, no account." },
      { t: "Add", d: "Log income, an expense or savings with a quick number pad. Pick a category and account in seconds." },
      { t: "Track", d: "Watch your safe-to-spend update live, follow goals and bills, and stay calmly in control." },
    ],
  },
  privacy: {
    eyebrow: "Privacy by design", head: "Your money is nobody's business but yours.",
    sub: "Saver was built offline-first on purpose. There's no server to hack, no account to leak, and nothing to sell — because your data never leaves your device.",
    items: [
      { t: "100% offline", d: "Works anywhere, even in airplane mode. No connection is ever required." },
      { t: "Zero collection", d: "No analytics, no ads, no trackers. We literally can't see your numbers." },
      { t: "On-device only", d: "Everything lives in your phone's storage — never a cloud you don't control." },
      { t: "Backup & restore", d: "Export and restore your data as a JSON file whenever you want. It's yours." },
    ],
  },
  bilingual: {
    eyebrow: "Bilingual · Multi-currency", head: "In your language, in your currency.",
    sub: "Full English and Arabic — including complete right-to-left layout — with numbers that always stay crisp. Track in the currency you actually live in.",
  },
  gallery: {
    eyebrow: "A look inside", head: "Quiet, confident, and yours.",
    dark: "Dark", light: "Light",
    items: [
      { screen: "home", cap: "Home · Safe to spend" },
      { screen: "bills", cap: "Bills & installments" },
      { screen: "goal", cap: "Savings goals" },
      { screen: "budget", cap: "Budgets & ring" },
      { screen: "breakdown", cap: "Breakdown" },
    ],
  },
  testimonials: {
    eyebrow: "Loved by calm spenders", head: "Money, finally on your side.",
    items: [
      { name: "Sarah Kelly", role: "Product designer · London", av: "SK", tint: "tint-ac",
        quote: "I've tried every budgeting app going. Saver is the first one I actually kept — that one \"safe to spend\" number is all I check now, and I finally trust it." },
      { name: "Omar Al-Rashid", role: "Software engineer · Dubai", av: "OA", tint: "tint-blue",
        quote: "No account, no cloud, and it still works on the plane. Knowing my numbers never leave my phone is the whole reason I switched." },
      { name: "Mona Hassan", role: "Teacher · Cairo", av: "MH", tint: "tint-rose",
        quote: "I paid once and that was it — no subscription nagging me every month. The Arabic layout feels native too, not bolted on." },
    ],
  },
  pricing: {
    eyebrow: "Simple pricing", head: "Pay once. Use it for life.",
    per: "one time", anchor: "No monthly subscription quietly draining your account — ever.",
    trial: "Try free for [TRIAL] days — no card needed", cta: "See full pricing",
    feats: ["Lifetime access on your account", "Every future update included", "All features, no add-ons", "Your data stays yours, even after"],
  },
  faq: {
    eyebrow: "Questions", head: "Good to know.",
    items: [
      { q: "Does Saver really work offline?", a: "Yes — 100%. Saver never needs a connection. Everything is calculated and stored right on your device, so it works on a plane, in a tunnel, anywhere." },
      { q: "Is my financial data safe?", a: "Completely. There's no server, no account and no cloud. Your data physically lives in your phone's storage and is never transmitted, so there's nothing to leak or sell." },
      { q: "Can I back up or move my data?", a: "Anytime. Export everything to a JSON file and restore it on the same or a new device. Your data is fully portable and fully yours." },
      { q: "Can I change the currency?", a: "Yes. Saver supports EGP, GBP, USD, EUR, SAR, AED and KWD, and you can switch anytime — numbers always stay clear and readable." },
      { q: "How much does it cost?", a: "Saver is a one-time payment of [PRICE] for lifetime use. No subscriptions, no hidden fees — and there's a free trial so you can try before you buy." },
      { q: "Do I need to create an account?", a: "No. There's no sign-up at all. Install Saver and start tracking immediately — no email, no password, nothing to remember." },
    ],
  },
  cta: {
    head: "Add Saver to your home screen.",
    sub: "Calm, private budgeting that works the moment you open it. No account, no subscription — just clarity.",
    btn1: "Try free", btn2: "How to install",
  },
  screen: {
    hi: "Good morning", name: "Mahmoud", sts: "Safe to spend", balance: "Total balance",
    month: "This month", left: "left to spend", spent: "spent", recent: "Recent activity",
    t1: "Groceries", t1c: "Today", t2: "Salary", t2c: "Yesterday", t3: "Coffee", t3c: "Yesterday",
    billsTitle: "Bills & installments", bill1: "Netflix", bill1c: "Due in 3 days", bill2: "Phone plan", bill2c: "Due in 8 days", bill3: "Car installment", bill3c: "Due in 21 days",
    goalTitle: "Vacation fund", goalSaved: "saved of", goalOf: "£3,000", goalGo: "78% there",
    budgetTitle: "Monthly budget", budgetLeft: "left", budgetSpent: "spent of £2,000",
    bdTitle: "Where it goes", bd1: "Housing", bd2: "Food", bd3: "Transport", bd4: "Fun",
    install: "Add to Home Screen", addPad: "Add transaction", trackLive: "Live updates",
    enTag: "EN · LTR", arTag: "AR · RTL",
  },
};

const ar: LandingCopy = {
  hero: {
    eyebrow: "ميزانية شخصية · بلا إنترنت · خصوصية تامة",
    h1a: "اعرف ", h1b: "القابل للصرف", h1c: " فعلاً — وادّخر بهدوء.",
    lead: "يعمل بلا إنترنت 100%. بلا حساب، بلا تسجيل، بلا تتبّع. يعرض لك Saver المبلغ الحقيقي الذي يمكنك صرفه اليوم — وليس مجرد رصيد.",
    cta1: "جرّب مجانًا", cta2: "شاهد كيف يعمل",
    b1: "يعمل بلا إنترنت", b2: "بلا تسجيل", b3: "خصوصية تامة",
  },
  trust: ["بلا إنترنت", "بلا تتبّع", "بلا إعلانات", "على جهازك فقط", "ادفع مرة"],
  problem: {
    eyebrow: "المشكلة",
    prob1: "معظم تطبيقات المال تجعلك تشعر بأنك ", strike: "مُخطئ",
    prob2: " — لوحات معقّدة، تنبيهات مقلقة، ورصيد يخدعك بشأن ما يمكنك صرفه فعلاً.",
    solHead: "أمّا Saver فيفعل العكس.",
    sol: [
      { t: "رقم واحد صادق", d: "بعد الفواتير والأهداف والمدّخرات المجمّدة — المبلغ القابل للصرف فعلاً اليوم." },
      { t: "هدوء بلا شعور بالذنب", d: "رفيق هادئ، لا محاسب صارم. بلا توبيخ ولا ضجيج." },
      { t: "ملكك، على جهازك", d: "كل شيء يبقى على هاتفك. بلا سحابة، بلا حساب، ولا عين على أموالك." },
    ],
  },
  features: {
    eyebrow: "كل شيء في تطبيق هادئ واحد", head: "مصمَّم لمالٍ حقيقي وحياة حقيقية.",
    sub: "كل جزء من Saver في مكان واحد هادئ — تابِع، خطّط، وحقّق أهدافك بلا ضجيج.",
    link: "اعرف المزيد",
    items: [
      { icon: "check", tint: "tint-ac", t: "القابل للصرف", d: "المبلغ الحقيقي الذي يمكنك صرفه اليوم — بعد حساب الفواتير والميزانيات والادّخار. وليس مجرد رصيد." },
      { icon: "bill", tint: "tint-rose", t: "الفواتير والأقساط", d: "تابِع الفواتير المتكرّرة من أسبوعية إلى سنوية، مع تذكيرات وشعارات حتى لا يفوتك شيء." },
      { icon: "goal", tint: "tint-blue", t: "أهداف الادّخار", d: "جمّد المال نحو هدف، وشاهده ينمو، واحتفل عند الوصول — ثم اصرف منه عندما تكون جاهزًا." },
      { icon: "budget", tint: "tint-purple", t: "الميزانيات والمشاريع", d: "حدّد حدودًا شهرية أو أوعية مشاريع، ابدأ من أي تاريخ، وأبقِ صرفك داخل خطوط واضحة." },
      { icon: "grid", tint: "tint-yellow", t: "الفئات", d: "نظّم إنفاقك بصريًا بأيقونات ملوّنة مخصّصة يمكنك إعادة ترتيبها لتناسب طريقة تفكيرك." },
      { icon: "chart", tint: "tint-sage", t: "التحليل", d: "اعرف أين تذهب أموالك بالضبط عبر أشرطة ملوّنة واضحة — حسب الفئة، بنظرة واحدة." },
    ],
  },
  how: {
    eyebrow: "كيف يعمل", head: "جاهز للعمل في ثوانٍ.",
    steps: [
      { t: "ثبّت", d: "أضِف Saver إلى شاشتك الرئيسية — يفتح بملء الشاشة كتطبيق حقيقي. بلا متجر، بلا حساب." },
      { t: "أضِف", d: "سجّل دخلاً أو مصروفًا أو ادّخارًا بلوحة أرقام سريعة. اختر فئة وحسابًا في ثوانٍ." },
      { t: "تابِع", d: "شاهد القابل للصرف يتحدّث مباشرة، تابِع أهدافك وفواتيرك، وابقَ متحكّمًا بهدوء." },
    ],
  },
  privacy: {
    eyebrow: "الخصوصية بالتصميم", head: "أموالك تخصّك أنت وحدك.",
    sub: "صُمّم Saver ليعمل بلا إنترنت أولاً عن قصد. لا خادم يُخترق، ولا حساب يتسرّب، ولا شيء يُباع — لأن بياناتك لا تغادر جهازك أبدًا.",
    items: [
      { t: "بلا إنترنت 100%", d: "يعمل في أي مكان، حتى في وضع الطيران. لا حاجة إلى اتصال أبدًا." },
      { t: "بلا جمع بيانات", d: "بلا تحليلات، بلا إعلانات، بلا متتبّعات. نحن حرفيًا لا نرى أرقامك." },
      { t: "على الجهاز فقط", d: "كل شيء في تخزين هاتفك — وليس سحابة لا تتحكّم بها." },
      { t: "نسخ واستعادة", d: "صدّر بياناتك واستعدها كملف JSON متى شئت. إنها ملكك." },
    ],
  },
  bilingual: {
    eyebrow: "لغتان · عملات متعددة", head: "بلغتك، وبعملتك.",
    sub: "عربية وإنجليزية بالكامل — بما في ذلك تخطيط كامل من اليمين إلى اليسار — مع أرقام تبقى واضحة دائمًا. تابِع بالعملة التي تعيش بها فعلاً.",
  },
  gallery: {
    eyebrow: "نظرة من الداخل", head: "هادئ، واثق، وملكك.",
    dark: "داكن", light: "فاتح",
    items: [
      { screen: "home", cap: "الرئيسية · القابل للصرف" },
      { screen: "bills", cap: "الفواتير والأقساط" },
      { screen: "goal", cap: "أهداف الادّخار" },
      { screen: "budget", cap: "الميزانيات والحلقة" },
      { screen: "breakdown", cap: "التحليل" },
    ],
  },
  testimonials: {
    eyebrow: "محبوب من المدّخرين الهادئين", head: "أموالك أخيرًا في صفّك.",
    items: [
      { name: "سارة كيلي", role: "مصمّمة منتجات · لندن", av: "SK", tint: "tint-ac",
        quote: "جرّبت كل تطبيقات الميزانية تقريبًا، وSaver أول واحد التزمت به فعلاً. رقم «القابل للصرف» هو كل ما أفتحه الآن — وأخيرًا أثق به." },
      { name: "عمر الراشد", role: "مهندس برمجيات · دبي", av: "OA", tint: "tint-blue",
        quote: "بلا حساب، بلا سحابة، ويعمل في الطائرة. أن أعرف أن أرقامي لا تغادر هاتفي أبدًا هو سبب انتقالي بالكامل." },
      { name: "منى حسن", role: "معلّمة · القاهرة", av: "MH", tint: "tint-rose",
        quote: "دفعت مرة واحدة وانتهى الأمر — بلا اشتراك يزعجني كل شهر. والتخطيط العربي يبدو أصيلاً، وليس مُضافًا في آخر لحظة." },
    ],
  },
  pricing: {
    eyebrow: "تسعير بسيط", head: "ادفع مرة. استخدمه مدى الحياة.",
    per: "دفعة واحدة", anchor: "بلا اشتراك شهري يستنزف حسابك بهدوء — أبدًا.",
    trial: "جرّب مجانًا [TRIAL] يومًا — بلا بطاقة", cta: "شاهد كل الأسعار",
    feats: ["استخدام مدى الحياة على حسابك", "كل التحديثات القادمة مشمولة", "كل المميزات، بلا إضافات", "بياناتك تبقى ملكك، حتى بعد ذلك"],
  },
  faq: {
    eyebrow: "أسئلة", head: "معلومات مفيدة.",
    items: [
      { q: "هل يعمل Saver فعلاً بلا إنترنت؟", a: "نعم — 100%. لا يحتاج Saver إلى أي اتصال. كل شيء يُحسب ويُخزَّن على جهازك مباشرة، فيعمل في الطائرة، في النفق، في أي مكان." },
      { q: "هل بياناتي المالية آمنة؟", a: "تمامًا. لا خادم ولا حساب ولا سحابة. بياناتك موجودة فعليًا في تخزين هاتفك ولا تُرسل أبدًا، فلا شيء يتسرّب أو يُباع." },
      { q: "هل يمكنني نسخ بياناتي أو نقلها؟", a: "في أي وقت. صدّر كل شيء كملف JSON واستعِده على الجهاز نفسه أو جهاز جديد. بياناتك قابلة للنقل بالكامل وملكك بالكامل." },
      { q: "هل يمكنني تغيير العملة؟", a: "نعم. يدعم Saver الجنيه المصري والإسترليني والدولار واليورو والريال والدرهم والدينار، ويمكنك التبديل في أي وقت — وتبقى الأرقام واضحة ومقروءة دائمًا." },
      { q: "كم يكلّف؟", a: "Saver دفعة واحدة بقيمة [PRICE] للاستخدام مدى الحياة. بلا اشتراكات ولا رسوم خفية — وهناك فترة تجربة مجانية لتجرّبه قبل الشراء." },
      { q: "هل أحتاج إلى إنشاء حساب؟", a: "لا. لا يوجد تسجيل إطلاقًا. ثبّت Saver وابدأ المتابعة فورًا — بلا بريد، بلا كلمة مرور، ولا شيء تحفظه." },
    ],
  },
  cta: {
    head: "أضِف Saver إلى شاشتك الرئيسية.",
    sub: "ميزانية هادئة وخاصة تعمل لحظة فتحها. بلا حساب، بلا اشتراك — مجرّد وضوح.",
    btn1: "جرّب مجانًا", btn2: "كيفية التثبيت",
  },
  screen: {
    hi: "صباح الخير", name: "محمود", sts: "القابل للصرف", balance: "الرصيد الكلي",
    month: "هذا الشهر", left: "متبقٍّ للصرف", spent: "مصروف", recent: "النشاط الأخير",
    t1: "بقالة", t1c: "اليوم", t2: "الراتب", t2c: "أمس", t3: "قهوة", t3c: "أمس",
    billsTitle: "الفواتير والأقساط", bill1: "نتفليكس", bill1c: "خلال 3 أيام", bill2: "باقة الهاتف", bill2c: "خلال 8 أيام", bill3: "قسط السيارة", bill3c: "خلال 21 يومًا",
    goalTitle: "صندوق الإجازة", goalSaved: "مُدّخر من", goalOf: "£٣٬٠٠٠", goalGo: "78% للهدف",
    budgetTitle: "ميزانية الشهر", budgetLeft: "متبقٍّ", budgetSpent: "مصروف من £٢٬٠٠٠",
    bdTitle: "أين تذهب", bd1: "السكن", bd2: "الطعام", bd3: "المواصلات", bd4: "ترفيه",
    install: "أضِف إلى الشاشة الرئيسية", addPad: "أضِف عملية", trackLive: "تحديث مباشر",
    enTag: "EN · LTR", arTag: "AR · RTL",
  },
};

export function landing(lang: Lang): LandingCopy {
  const copy = lang === "ar" ? ar : en;
  return JSON.parse(JSON.stringify(copy), (_k, v) => (typeof v === "string" ? fill(v) : v));
}
