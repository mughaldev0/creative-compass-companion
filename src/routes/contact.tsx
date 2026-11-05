import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { site, whatsappHref } from "@/data/site";
import { submitContact } from "@/lib/submitContact";
import { isEmail, required } from "@/lib/validate";
import { PageHeader, Section } from "@/components/site/bits";
import { Button, ButtonA } from "@/components/site/Button";
import { Input, Textarea } from "@/components/site/Field";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Rare Skill Academy" },
      { name: "description", content: "Send Rare Skill Academy a message about the Web Development or Vibe Coding course." },
      { property: "og:title", content: "Contact Rare Skill Academy" },
      { property: "og:description", content: "Questions about a course or enrollment? Send us a message." },
    ],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "success" | "error";
const empty = { name: "", email: "", phone: "", subject: "", message: "", website: "" };

function ContactPage() {
  const [v, setV] = useState(empty);
  const [err, setErr] = useState<Partial<Record<"name" | "email" | "phone" | "subject" | "message" | "password", string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const wa = whatsappHref();
  const { email, phone, city } = site.contact;
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (v.website) return; // honeypot
    const next = {
      name: required(v.name, "Full name"),
      email: required(v.email, "Email") || (isEmail(v.email) ? "" : "Enter a valid email address."),
      subject: required(v.subject, "Subject"),
      message: required(v.message, "Message"),
    };
    setErr(next);
    if (Object.values(next).some(Boolean)) return;
    setStatus("loading");
    try {
      await submitContact(v);
      setStatus("success");
      setV(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHeader title="Contact us" intro="Ask about a course, enrollment or the student portal." crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <Section tight>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {email && <p><span className="block text-sm text-muted-ink">Email</span><a className="font-semibold text-blue-ink underline" href={`mailto:${email}`}>{email}</a></p>}
            {phone && <p><span className="block text-sm text-muted-ink">Phone</span><a className="font-semibold text-blue-ink underline" href={`tel:${phone}`}>{phone}</a></p>}
            {city && <p><span className="block text-sm text-muted-ink">City</span><span className="font-semibold">{city}</span></p>}
            {wa && <ButtonA href={wa} target="_blank" rel="noreferrer" variant="secondary">Message us on WhatsApp</ButtonA>}
            <p className="text-muted-ink">Many common questions are answered in the <Link to="/faqs" className="text-blue-ink underline">FAQs</Link>.</p>
          </div>
          <form noValidate onSubmit={onSubmit} className="theme-t grid gap-5 rounded-card bg-surface-hi p-6 clay-raised sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Full name" value={v.name} onChange={set("name")} error={err.name} autoComplete="name" />
              <Input label="Email" type="email" value={v.email} onChange={set("email")} error={err.email} autoComplete="email" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Phone (optional)" type="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" />
              <Input label="Subject" value={v.subject} onChange={set("subject")} error={err.subject} />
            </div>
            <Textarea label="Message" value={v.message} onChange={set("message")} error={err.message} />
            <div aria-hidden className="absolute -left-[9999px]">
              <label>Website<input tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} /></label>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send message"}</Button>
              <p role="status" className="text-sm font-medium">
                {status === "success" && <span className="text-success">Thanks. Your message was sent.</span>}
                {status === "error" && <span className="text-danger">The message did not send. Please try again.</span>}
              </p>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
