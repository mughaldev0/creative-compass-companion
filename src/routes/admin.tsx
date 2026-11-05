import { createFileRoute } from "@tanstack/react-router";
import { RequireRole } from "@/components/dash/Guard";
import { Empty } from "@/components/dash/ui";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin panel | Rare Skill Academy" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <RequireRole role="admin">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-h2">Admin panel</h1>
        <div className="mt-6"><Empty title="Admin screens are being built." /></div>
      </div>
    </RequireRole>
  ),
});
