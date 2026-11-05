import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { courses, site } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { Hero } from "@/components/home/Hero";
import { SaleBanner } from "@/components/home/SaleBanner";
import { LearningProcess } from "@/components/home/LearningProcess";
import { Testimonials } from "@/components/home/Testimonials";
import { CourseCard } from "@/components/site/CourseCard";
import { Section } from "@/components/site/bits";
import { ButtonLink } from "@/components/site/Button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rare Skill Academy | Web Development and Vibe Coding courses" },
      { name: "description", content: "Learn Web Development or Vibe Coding through practical projects and a clear roadmap at Rare Skill Academy." },
      { property: "og:title", content: "Rare Skill Academy | Web Development and Vibe Coding courses" },
      { property: "og:description", content: "Two practical coding courses, built around real projects and a clear roadmap." },
    ],
  }),
  component: Home,
});

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);
  return (
    <div ref={ref}>
      <Hero />
      <SaleBanner />

      <Section label="Our courses">
        <h2 data-reveal className="text-h2">Pick your course</h2>
        <p data-reveal className="text-lead mt-3 max-w-xl text-muted-ink">Two courses, each with its own roadmap and projects.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
      </Section>

      <Section tight label="Why choose us" className="border-y">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 data-reveal className="text-h2">Why learn at {site.name}</h2>
            <p data-reveal className="text-lead mt-4 text-muted-ink">The course is built around writing code, finishing projects and getting feedback.</p>
          </div>
          <ol className="divide-y">
            {site.whyUs.map((w, i) => (
              <li key={w.title} data-reveal className="flex gap-4 py-4">
                <span aria-hidden className="w-6 shrink-0 font-display font-bold text-blue-ink">{"</>"}</span>
                <div>
                  <p className="font-semibold"><span className="sr-only">{i + 1}. </span>{w.title}</p>
                  <p className="text-muted-ink">{w.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <LearningProcess />
      <Testimonials />

      <Section tight label="Start learning">
        <div data-reveal className="theme-t rounded-card bg-surface px-6 py-12 text-center clay-pressed sm:px-12">
          <h2 className="text-h2">Ready to start building?</h2>
          <p className="text-lead mx-auto mt-3 max-w-lg text-muted-ink">Choose a course, enroll, and get access to the student portal.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/courses" variant="secondary" size="lg">Explore courses</ButtonLink>
            <ButtonLink to="/enroll" size="lg">Join the academy</ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
