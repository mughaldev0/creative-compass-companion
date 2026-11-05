import type { ReactNode } from "react";
import { PageHeader, Section } from "./bits";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <PageHeader title={title} crumbs={[{ label: "Home", to: "/" }, { label: title }]} />
      <Section tight>
        <div className="max-w-2xl space-y-5 text-muted-ink [&_h2]:text-h3 [&_h2]:text-ink">
          <p className="rounded-control bg-surface px-4 py-3 font-medium text-ink clay-pressed">
            Draft for the academy to review. This is not final legal text.
          </p>
          {children}
        </div>
      </Section>
    </div>
  );
}
