import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

// Animasi halaman studi kasus MediLink.
// Elemen angka memakai atribut data-count="86" (atau "100%", "6/6") sebagai nilai akhir.
const REVEAL = [
  ".cs-head .cs-lead", ".cs-content h3", ".cs-content h4", ".cs-note", ".cs-block",
  ".cs-tags span", ".cs-card", ".cs-users li", ".cs-list li", ".cs-table tbody tr",
  ".cs-ds__logo", ".cs-swatch", ".mds-type__hero", ".mds-type__list li", ".mds-cell",
  ".cs-gal", ".cs-seg", ".cs-sus", ".cs-sec > .cs-lead", ".cs-content .btn", ".cs-next",
].join(",");

const parse = (s) => {
  const m = String(s).match(/^(\d+(?:\.\d+)?)(.*)$/);
  return m ? { n: parseFloat(m[1]), rest: m[2], dec: (m[1].split(".")[1] || "").length } : null;
};

function countUp(el, vars = {}) {
  const p = parse(el.dataset.count);
  if (!p) return null;
  const o = { v: 0 };
  el.textContent = (0).toFixed(p.dec) + p.rest;
  return gsap.to(o, {
    v: p.n, duration: 1.6, ease: "power2.out",
    onUpdate: () => { el.textContent = o.v.toFixed(p.dec) + p.rest; },
    ...vars,
  });
}

export default function useCaseAnimations(rootRef, { susScore, dotScores }) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const $ = (s) => gsap.utils.toArray(s, root);
    let rt;
    const refresh = () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(), 150); };

    const ctx = gsap.context(() => {
      /* 1. Intro hero */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".cs-hero h1", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(".cs-hero__sub", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.65")
        .fromTo(".cs-facts > div", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, "-=0.5")
        .fromTo(".cs-hero__shot", { y: 50, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 1.1 }, "-=0.4")
        .fromTo(".cs-stats li", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.09 }, "-=0.6");
      $(".cs-stats strong").forEach((el, i) => countUp(el, { delay: 1.2 + i * 0.09 }));

      /* 1b. Alur proses: garis terisi mengikuti scroll, titik muncul satu per satu */
      const steps = $(".cs-flow__step");
      gsap.set(steps, { opacity: 0, y: 20 });
      gsap.set(".cs-flow__line i", { scaleX: 0, scaleY: 0, transformOrigin: "left top" });
      gsap.to(".cs-flow__line i", { scaleX: 1, scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".cs-flow", start: "top 85%", end: "bottom 60%", scrub: true } });
      ScrollTrigger.create({
        trigger: ".cs-flow", start: "top 88%", once: true,
        onEnter: () => gsap.to(steps, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", clearProps: "opacity,transform" }),
      });

      /* 2. Parallax gambar hero */
      gsap.fromTo(".cs-hero__shot img", { yPercent: -5, scale: 1.08 }, {
        yPercent: 5, ease: "none",
        scrollTrigger: { trigger: ".cs-hero__shot", start: "top bottom", end: "bottom top", scrub: true },
      });

      /* 3. Muncul saat scroll (batch, sekali jalan) */
      const targets = $(REVEAL);
      gsap.set(targets, { opacity: 0, y: 26 });
      ScrollTrigger.batch(targets, {
        start: "top 90%", once: true,
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
          stagger: 0.08, overwrite: true, clearProps: "opacity,transform",
        }),
      });

      /* 4. Chip warna: tumbuh dari kiri */
      const chips = $(".cs-chips__row span");
      gsap.set(chips, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: ".cs-chips", start: "top 88%", once: true,
        onEnter: () => gsap.to(chips, { scaleX: 1, duration: 0.7, stagger: 0.06, ease: "power3.out" }),
      });

      /* 5. Maze: baris masuk, bar terisi, angka menghitung */
      const rows = $(".cs-maze li");
      const bars = $(".cs-bar-track i");
      const nums = $(".cs-maze b[data-count]");
      gsap.set(rows, { opacity: 0, x: -18 });
      gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: ".cs-maze", start: "top 82%", once: true,
        onEnter: () => {
          gsap.to(rows, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" });
          gsap.to(bars, { scaleX: 1, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.1 });
          nums.forEach((el, i) => countUp(el, { delay: 0.1 + i * 0.1, duration: 1.2 }));
        },
      });

      /* 6. SUS: skor menghitung, penanda meluncur, batang responden tumbuh */
      const you = $(".cs-sus__scale i.you");
      const avg = $(".cs-sus__scale i.avg");
      const dots = $(".cs-dots span");
      const dotLabels = $(".cs-dots small");
      gsap.set(you, { left: "0%" });
      gsap.set(avg, { opacity: 0 });
      gsap.set(dots, { height: "0%" });
      gsap.set(dotLabels, { opacity: 0 });
      ScrollTrigger.create({
        trigger: ".cs-sus", start: "top 80%", once: true,
        onEnter: () => {
          $(".cs-sus__score strong").forEach((el) => countUp(el, { duration: 1.8 }));
          gsap.to(avg, { opacity: 0.45, duration: 0.6, delay: 0.2 });
          gsap.to(you, { left: `${susScore}%`, duration: 1.8, ease: "power3.out" });
        },
      });
      ScrollTrigger.create({
        trigger: ".cs-dots", start: "top 88%", once: true,
        onEnter: () => {
          gsap.to(dots, { height: (i) => `${dotScores[i]}%`, duration: 0.9, stagger: 0.045, ease: "back.out(1.4)" });
          gsap.to(dotLabels, { opacity: 1, duration: 0.4, stagger: 0.045, delay: 0.5 });
        },
      });
    }, root);

    // Posisi trigger bisa meleset saat gambar telat dimuat, jadi di-refresh.
    const imgs = [...root.querySelectorAll("img")];
    imgs.forEach((img) => !img.complete && img.addEventListener("load", refresh, { once: true }));
    window.addEventListener("load", refresh);
    refresh();

    return () => {
      clearTimeout(rt);
      window.removeEventListener("load", refresh);
      ctx.revert();
      // Kembalikan teks angka ke nilai akhir (aman untuk StrictMode / hot reload).
      root.querySelectorAll("[data-count]").forEach((el) => { el.textContent = el.dataset.count; });
    };
  }, [rootRef, susScore, dotScores]);
}
