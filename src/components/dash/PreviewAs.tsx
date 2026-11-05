import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";
import type { Role } from "@/data/mock";

/** Development-only switch. Not rendered in production builds. */
export function PreviewAs() {
  const { role, previewAs } = useAuth();
  const nav = useNavigate();
  if (!import.meta.env.DEV) return null;
  const pick = (r: Role) => {
    previewAs(r);
    void nav({ to: r === "admin" ? "/admin" : r === "student" ? "/portal" : "/" });
  };
  return (
    <div className="fixed right-3 bottom-3 z-50 flex items-center gap-1 rounded-control bg-surface-hi p-1 text-xs clay-raised-sm control" role="group" aria-label="Preview as (development only)">
      <span className="px-2 font-semibold text-muted-ink">Preview as</span>
      {(["guest", "student", "admin"] as Role[]).map((r) => (
        <button key={r} type="button" aria-pressed={role === r} onClick={() => pick(r)} className={`rounded-control px-2 py-1 capitalize ${role === r ? "bg-surface clay-pressed text-blue-ink" : ""}`}>
          {r}
        </button>
      ))}
    </div>
  );
}
