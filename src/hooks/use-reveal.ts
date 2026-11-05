import { useLayoutEffect, useEffect, type RefObject } from "react";
import { ensureGsap, MOTION_OK, REVEAL } from "@/lib/motion";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Reveals every [data-reveal] element inside the scope with one shared preset.
 * Elements stay visible if JavaScript fails: hiding only happens inside the motion branch.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useIso(() => {
    if (!scope.current) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(els, { opacity: 0, y: REVEAL.y });
        ScrollTrigger.batch(els, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: REVEAL.duration,
              ease: REVEAL.ease,
              stagger: REVEAL.stagger,
              clearProps: "transform",
            }),
        });
      });
    }, scope);
    return () => ctx.revert();
  }, [scope]);
}
