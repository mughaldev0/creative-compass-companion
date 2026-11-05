import { useLayoutEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { ensureGsap, MOTION_OK } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Pinned and stepped on scroll at 1024px+, plain vertical list otherwise. */
export function LearningProcess() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const steps = site.process;

  useLayoutEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top top+=96",
          end: `+=${steps.length * 220}`,
          pin: true,
          scrub: true,
          onUpdate: (self) => setActive(Math.min(steps.length - 1, Math.floor(self.progress * steps.length))),
        });
        return () => setActive(0);
      });
    }, ref);
    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section ref={ref} aria-labelledby="process-title" className="py-[72px] md:py-[112px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 id="process-title" data-reveal className="text-h2">How learning works here</h2>
          <p data-reveal className="text-lead mt-4 max-w-md text-muted-ink">
            Six steps, from choosing a course to getting feedback on your work.
          </p>
          <div className="mt-8 hidden h-2 max-w-sm rounded-full bg-surface clay-pressed lg:block" aria-hidden>
            <div
              className="h-2 rounded-full bg-deep-blue transition-[width] duration-300"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
        <ol className="grid gap-2">
          {steps.map((s, i) => (
            <li
              key={s}
              aria-current={i === active ? "step" : undefined}
              className={cn(
                "theme-t flex items-center gap-5 rounded-control px-4 py-4 transition-opacity",
                i === active ? "lg:bg-surface lg:clay-pressed" : "lg:opacity-60",
              )}
            >
              <span className="w-10 shrink-0 font-display text-2xl font-extrabold text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg font-semibold">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
