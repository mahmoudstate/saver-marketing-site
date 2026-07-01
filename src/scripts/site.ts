// Saver marketing — client interactions: theme toggle, nav state, mobile menu,
// FAQ accordion, gallery theme switch, and GSAP scroll motion (self-hosted).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const root = document.documentElement;
root.classList.remove("no-js");

const sun =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5L19 19M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>';
const moon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function applyTheme(t: string) {
  root.setAttribute("data-theme", t);
  const icon = document.getElementById("themeIcon");
  if (icon) icon.innerHTML = t === "dark" ? sun : moon;
}
let theme = localStorage.getItem("saver-theme") || "dark";
applyTheme(theme);
document.getElementById("themeToggle")?.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("saver-theme", theme);
  applyTheme(theme);
});

// Mobile menu
const navLinks = document.getElementById("navLinks");
document.getElementById("burger")?.addEventListener("click", () => navLinks?.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Navbar scrolled state
const nav = document.getElementById("nav");
const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// FAQ accordion
document.querySelectorAll<HTMLElement>(".faq-q").forEach((q) => {
  const btn = q.querySelector("button");
  const a = q.querySelector<HTMLElement>(".faq-a");
  btn?.addEventListener("click", () => {
    const open = q.classList.toggle("open");
    if (a) a.style.maxHeight = open ? a.scrollHeight + "px" : "0";
  });
});

// Gallery theme switch
document.querySelectorAll<HTMLElement>(".gal-controls .seg").forEach((seg) => {
  seg.addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest("button");
    if (!b) return;
    seg.querySelectorAll("button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    const val = b.getAttribute("data-val")!;
    document
      .getElementById("galRail")
      ?.querySelectorAll(".phone-screen")
      .forEach((sc) => sc.setAttribute("data-ptheme", val));
  });
});

// ---------------- Motion ----------------
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
root.classList.add("js-ready");

function countUp(el: HTMLElement, to: number, dur: number) {
  let t0: number | null = null;
  function step(t: number) {
    if (!t0) t0 = t;
    const p = Math.min((t - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * e).toLocaleString("en-US");
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function clearReveals() {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
  const amt = document.getElementById("stsAmt");
  if (amt) amt.textContent = (1446).toLocaleString("en-US");
}

if (reduce) {
  clearReveals();
} else {
  gsap.registerPlugin(ScrollTrigger);
  const ease = "power3.out";

  const heroEls = gsap.utils.toArray<HTMLElement>("[data-hero]");
  gsap.set(heroEls, { y: 26, opacity: 0 });
  gsap.to(heroEls, { y: 0, opacity: 1, duration: 0.7, ease, stagger: 0.09, delay: 0.15 });

  const phone = document.getElementById("heroPhone");
  if (phone) {
    gsap.fromTo(phone, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "expo.out", delay: 0.35 });
    gsap.to(phone, { yPercent: -7, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  }
  document.querySelectorAll<HTMLElement>(".float-card").forEach((c, i) => {
    gsap.fromTo(c, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)", delay: 0.7 + i * 0.15 });
    gsap.to(c, { y: i ? 14 : -14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.4 } });
  });

  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    const d = parseFloat(el.getAttribute("data-delay") || "0");
    gsap.to(el, { y: 0, opacity: 1, duration: 0.7, ease, delay: d, scrollTrigger: { trigger: el, start: "top 86%" } });
  });

  gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
    const items = group.children;
    gsap.set(items, { y: 28, opacity: 0 });
    gsap.to(items, { y: 0, opacity: 1, duration: 0.6, ease, stagger: 0.08, scrollTrigger: { trigger: group, start: "top 82%" } });
  });

  const amt = document.getElementById("stsAmt");
  if (amt) ScrollTrigger.create({ trigger: amt, start: "top 90%", once: true, onEnter: () => countUp(amt, 1446, 1400) });
}
