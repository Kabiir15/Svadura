"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight smooth-scroll wrapper. Uses the Lenis library at runtime
 * (installed separately: `npm install @studio-freight/lenis`) and falls
 * back gracefully to native scroll if the library isn't present, so the
 * build never breaks. Respects prefers-reduced-motion.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let rafId: number;
    let lenis: any;

    import("@studio-freight/lenis")
      .then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
        });
        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Library not installed yet — native scroll is used instead.
      });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
