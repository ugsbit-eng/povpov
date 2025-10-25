"use client";
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(className = "reveal") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("revealed");
      return;
    }
    const obs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);

    // Fallback: if never observed (e.g., static design/screenshot iframes), reveal after a short delay
    const tk = window.setTimeout(() => {
      if (!el.classList.contains("revealed")) el.classList.add("revealed");
    }, 1200);

    return () => {
      obs.disconnect();
      window.clearTimeout(tk);
    };
  }, []);

  return ref;
}
