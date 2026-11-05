import { createFileRoute } from "@tanstack/react-router";
import { RequireRole } from "@/components/dash/Guard";
import { Empty } from "@/components/dash/ui";

export const Route = createFileRoute("/portal")({
  head: () => ({ meta: [{ title: "Student portal | Rare Skill Academy" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <RequireRole role="student">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-h2">Student portal</h1>
        <div className="mt-6"><Empty title="Portal screens are being built." /></div>
      </div>
    </RequireRole>
  ),
});
