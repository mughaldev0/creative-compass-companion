import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { isEmail, required } from "@/lib/validate";
import { Section } from "@/components/site/bits";
import { Button } from "@/components/site/Button";
import { Input } from "@/components/site/Field";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Student login | Rare Skill Academy" },
      { name: "description", content: "Sign in to the Rare Skill Academy student portal." },
      { property: "og:title", content: "Student login | Rare Skill Academy" },
      { property: "og:description", content: "Sign in to the student portal." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [v, setV] = useState({ email: "", password: "" });
  const [err, setErr] = useState<Partial<Record<"name" | "email" | "phone" | "subject" | "message" | "password", string>>>({});
  const [tried, setTried] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = {
      email: required(v.email, "Email") || (isEmail(v.email) ? "" : "Enter a valid email address."),
      password: required(v.password, "Password"),
    };
    setErr(next);
    if (!Object.values(next).some(Boolean)) setTried(true);
  }

  return (
    <Section>
      <div className="mx-auto max-w-md">
        <h1 className="text-h2">Student login</h1>
        <form noValidate onSubmit={onSubmit} className="theme-t mt-8 grid gap-5 rounded-card bg-surface-hi p-6 clay-raised sm:p-8">
          <Input label="Email" type="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} error={err.email} autoComplete="email" />
          <Input label="Password" type="password" value={v.password} onChange={(e) => setV({ ...v, password: e.target.value })} error={err.password} autoComplete="current-password" />
          <Button type="submit">Sign in</Button>
          <p role="status" className={tried ? "text-sm font-semibold text-ink" : "text-sm text-muted-ink"}>
            Sign-in opens when the student portal is connected.
          </p>
        </form>
        <p className="mt-6 text-muted-ink">Not a student yet? <Link to="/enroll" className="text-blue-ink underline">Enroll in a course</Link>.</p>
      </div>
    </Section>
  );
}
