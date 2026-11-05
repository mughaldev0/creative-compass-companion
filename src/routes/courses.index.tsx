import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { courses } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { CourseCard } from "@/components/site/CourseCard";
import { PageHeader, Section } from "@/components/site/bits";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses | Rare Skill Academy" },
      { name: "description", content: "Web Development and Vibe Coding: compare both Rare Skill Academy courses, prices and roadmaps." },
      { property: "og:title", content: "Courses | Rare Skill Academy" },
      { property: "og:description", content: "Compare the Web Development and Vibe Coding courses." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);
  return (
    <div ref={ref}>
      <PageHeader
        title="Courses"
        intro="The academy teaches two courses. Each one has a roadmap, assignments and a final project."
        crumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
      />
      <Section tight>
        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
      </Section>
    </div>
  );
}
