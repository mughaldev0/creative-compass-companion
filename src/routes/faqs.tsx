import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatsappHref } from "@/data/site";
import { PageHeader, Section } from "@/components/site/bits";
import { ButtonA, ButtonLink } from "@/components/site/Button";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Rare Skill Academy" },
      { name: "description", content: "Answers about Rare Skill Academy courses, enrollment, payment and the student portal." },
      { property: "og:title", content: "FAQs | Rare Skill Academy" },
      { property: "og:description", content: "Courses, enrollment and student portal questions answered." },
    ],
  }),
  component: FaqsPage,
});

function PerBatch() {
  const wa = whatsappHref();
  return (
    <>This is confirmed per batch. {wa ? <a href={wa} target="_blank" rel="noreferrer" className="text-blue-ink underline">Message us on WhatsApp</a> : <Link to="/contact" className="text-blue-ink underline">Contact us</Link>} for the current details.</>
  );
}

const groups: { title: string; items: [string, ReactNode][] }[] = [
  {
    title: "General",
    items: [
      ["What is Rare Skill Academy?", "An academy that teaches practical coding through two courses, with projects, assignments and feedback."],
      ["Which courses are offered?", "Web Development and Vibe Coding."],
      ["Who can join?", "Both courses run from beginner to advanced, so you can join without prior experience."],
    ],
  },
  {
    title: "Courses",
    items: [
      ["How long are the courses?", "Web Development runs 8+ weeks and Vibe Coding runs 6+ weeks."],
      ["Are classes live or recorded?", <PerBatch key="a" />],
      ["Will I build practical projects?", "Yes. Each course is project based and ends with a final project."],
      ["Are there prerequisites?", <PerBatch key="b" />],
    ],
  },
  {
    title: "Enrollment and portal",
    items: [
      ["How do I enroll?", <>Fill in the <Link to="/enroll" className="text-blue-ink underline">enrollment form</Link>. The academy contacts you to complete it.</>],
      ["How do I pay?", <PerBatch key="c" />],
      ["How do I get portal access?", "After enrollment is complete, you receive access to the student portal."],
      ["Can I view my profile?", "Yes, your profile is in the student portal."],
      ["How do I submit assignments?", "Assignments are submitted through the student portal."],
      ["How do I check my performance?", "Performance feedback from the instructor appears in the student portal."],
      ["How do I contact the instructor?", <PerBatch key="d" />],
    ],
  },
];

function FaqsPage() {
  const wa = whatsappHref();
  return (
    <div>
      <PageHeader title="Frequently asked questions" crumbs={[{ label: "Home", to: "/" }, { label: "FAQs" }]} />
      <Section tight>
        <div className="grid max-w-3xl gap-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-h3">{g.title}</h2>
              <Accordion type="single" collapsible className="mt-4 grid gap-2">
                {g.items.map(([q, a]) => (
                  <AccordionItem key={q} value={q} className="theme-t rounded-control border-0 px-4 data-[state=open]:bg-surface data-[state=open]:clay-pressed">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-ink">{a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            {wa && <ButtonA href={wa} target="_blank" rel="noreferrer">Ask on WhatsApp</ButtonA>}
            <ButtonLink to="/contact" variant="secondary">Contact the academy</ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
