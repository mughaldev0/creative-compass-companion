import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { courses, getCourse, type CourseSlug } from "@/data/site";
import { submitEnrollment } from "@/lib/submitEnrollment";
import { isEmail, isPhone, required } from "@/lib/validate";
import { PageHeader, PriceBlock, Section } from "@/components/site/bits";
import { Button, ButtonLink } from "@/components/site/Button";
import { Input, Select } from "@/components/site/Field";

export const Route = createFileRoute("/enroll")({
  validateSearch: (s: Record<string, unknown>): { course?: CourseSlug } =>
    typeof s["course"] === "string" && getCourse(s["course"]) ? { course: s["course"] as CourseSlug } : {},
  head: () => ({
    meta: [
      { title: "Enroll | Rare Skill Academy" },
      { name: "description", content: "Enroll in the Web Development or Vibe Coding course at Rare Skill Academy." },
      { property: "og:title", content: "Enroll at Rare Skill Academy" },
      { property: "og:description", content: "Choose a course and send your enrollment request." },
    ],
  }),
  component: EnrollPage,
});

function EnrollPage() {
  const search = Route.useSearch();
  const [course, setCourse] = useState<CourseSlug>(search.course ?? "web-development");
  const [v, setV] = useState({ name: "", email: "", phone: "" });
  const [err, setErr] = useState<Partial<Record<"name" | "email" | "phone" | "subject" | "message" | "password", string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const c = getCourse(course)!;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = {
      name: required(v.name, "Full name"),
      email: required(v.email, "Email") || (isEmail(v.email) ? "" : "Enter a valid email address."),
      phone: required(v.phone, "Phone") || (isPhone(v.phone) ? "" : "Enter a valid phone number."),
    };
    setErr(next);
    if (Object.values(next).some(Boolean)) return;
    setStatus("loading");
    try {
      await submitEnrollment({ course, ...v });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Section>
        <div className="theme-t mx-auto max-w-xl rounded-card bg-surface p-10 text-center clay-pressed">
          <h1 className="text-h2">Request received</h1>
          <p className="mt-4 text-muted-ink">Thanks, {v.name.split(" ")[0]}. The academy will contact you about {c.title} and payment details.</p>
          <ButtonLink to="/courses/$slug" params={{ slug: c.slug }} variant="secondary" className="mt-8">Back to {c.title}</ButtonLink>
        </div>
      </Section>
    );
  }

  return (
    <div>
      <PageHeader title="Enroll" intro="Send your details and the academy will contact you to complete enrollment." crumbs={[{ label: "Home", to: "/" }, { label: "Enroll" }]} />
      <Section tight>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form noValidate onSubmit={onSubmit} className="theme-t grid gap-5 rounded-card bg-surface-hi p-6 clay-raised sm:p-8">
            <Select label="Course" value={course} onChange={(e) => setCourse(e.target.value as CourseSlug)}>
              {courses.map((x) => <option key={x.slug} value={x.slug}>{x.title}</option>)}
            </Select>
            <Input label="Full name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} error={err.name} autoComplete="name" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Email" type="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} error={err.email} autoComplete="email" />
              <Input label="Phone" type="tel" value={v.phone} onChange={(e) => setV({ ...v, phone: e.target.value })} error={err.phone} autoComplete="tel" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : `Enroll in ${c.title}`}</Button>
              {status === "error" && <p role="alert" className="text-sm font-medium text-danger">The request did not send. Please try again.</p>}
            </div>
          </form>
          <aside aria-label="Order summary" className="theme-t h-fit rounded-card bg-surface p-6 clay-pressed sm:p-8">
            <h2 className="text-h3">Summary</h2>
            <p className="mt-4 font-semibold">{c.title}</p>
            <p className="text-sm text-muted-ink">{c.level}, {c.duration}</p>
            <div className="mt-5 border-t pt-5"><PriceBlock price={c.price} discountPrice={c.discountPrice} /></div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
