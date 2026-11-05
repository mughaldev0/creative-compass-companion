import type { Course } from "@/data/site";
import { Section } from "@/components/site/bits";

/** Horizontal stepped line on desktop, vertical on mobile. No lesson counts or hours. */
export function CourseRoadmap({ course }: { course: Course }) {
  return (
    <Section tight label="Roadmap">
      <h2 data-reveal className="text-h2">Roadmap</h2>
      <ol className="relative mt-10 grid gap-6 md:grid-flow-col md:auto-cols-fr md:gap-4">
        <span aria-hidden className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-deep-blue md:top-[19px] md:right-0 md:bottom-auto md:left-0 md:h-0.5 md:w-auto" />
        {course.roadmap.map((r, i) => (
          <li key={r.title} data-reveal className="relative flex gap-4 md:flex-col md:gap-3">
            <span className="theme-t relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-hi font-display font-bold text-blue-ink clay-raised-sm control">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold">{r.title}</p>
              {r.detail && <p className="text-sm text-muted-ink">{r.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
