import { useLayoutEffect, useRef } from "react";
import { courses, site } from "@/data/site";
import { ensureGsap, MOTION_OK } from "@/lib/motion";
import { ButtonLink } from "@/components/site/Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: "power3.out", duration: 0.5 } })
          .from("[data-h='title']", { y: 28, opacity: 0 })
          .from("[data-h='lead']", { y: 20, opacity: 0 }, "-=0.3")
          .from("[data-h='cta']", { y: 16, opacity: 0 }, "-=0.3")
          .from("[data-h='visual']", { x: 30, opacity: 0, duration: 0.6 }, "-=0.35");
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-[72px] sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 id="hero-title" data-h="title" className="text-display max-w-[14ch]">
            Level up your skills with <span className="text-blue-ink">{site.name}</span>
          </h1>
          <p data-h="lead" className="text-lead mt-6 max-w-xl text-muted-ink">
            Learn Web Development or Vibe Coding through practical projects and a clear roadmap, from your first lesson to a finished build.
          </p>
          <div data-h="cta" className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/courses" size="lg">Explore courses</ButtonLink>
            <ButtonLink to="/enroll" variant="secondary" size="lg">Enroll now</ButtonLink>
          </div>
          <p data-h="cta" className="mt-6 text-sm font-medium text-muted-ink">
            {courses.length} courses, beginner to advanced
          </p>
        </div>
        <HeroComposition />
      </div>
    </section>
  );
}

/** Built clay composition: two overlapping course cards with the logo swoosh behind. */
function HeroComposition() {
  const [a, b] = courses;
  return (
    <div data-h="visual" className="relative mx-auto h-[340px] w-full max-w-[460px] sm:h-[400px]" aria-hidden>
      <svg viewBox="0 0 460 400" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M18 300 C 90 380, 330 360, 448 120" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <MiniCard className="absolute top-4 left-0 w-[72%] -rotate-3" title={a.title} level={a.level} duration={a.duration} code="<html>" />
      <MiniCard className="absolute right-0 bottom-6 w-[72%] rotate-2" title={b.title} level={b.level} duration={b.duration} code="prompt()" />
    </div>
  );
}

function MiniCard({ className, title, level, duration, code }: { className: string; title: string; level: string; duration: string; code: string }) {
  return (
    <div className={`theme-t rounded-card bg-surface-hi p-6 clay-raised ${className}`}>
      <div className="flex items-center justify-between">
        <span className="rounded-control bg-navy px-3 py-1 font-display text-sm font-bold text-amber">{code}</span>
        <span className="text-xs font-semibold text-muted-ink">{duration}</span>
      </div>
      <p className="mt-6 font-display text-2xl font-extrabold">{title}</p>
      <p className="mt-1 text-sm text-muted-ink">{level}</p>
      <div className="mt-5 h-2 rounded-full bg-surface clay-pressed">
        <div className="h-2 w-2/5 rounded-full bg-deep-blue" />
      </div>
    </div>
  );
}
