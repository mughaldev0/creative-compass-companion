import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import Lenis from "lenis";
import { ensureGsap, REDUCED } from "@/lib/motion";

let lenisRef: Lenis | null = null;

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    if (window.matchMedia(REDUCED).matches) return;
    const lenis = new Lenis();
    lenisRef = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef = null;
    };
  }, []);

  // Scroll to top and refresh triggers on route change.
  useEffect(() => {
    const { ScrollTrigger } = ensureGsap();
    if (lenisRef) lenisRef.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
