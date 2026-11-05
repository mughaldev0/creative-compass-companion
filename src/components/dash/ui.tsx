import type { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { btn } from "@/components/site/Button";

export function PageTitle({ title, intro, actions }: { title: string; intro?: string; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-h2">{title}</h1>
        {intro && <p className="mt-2 max-w-2xl text-muted-ink">{intro}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}

/** Flat panel with a hairline border. Use `raised` only for the few things to act on. */
export function Panel({ title, children, className, raised, actions }: { title?: string; children: ReactNode; className?: string; raised?: boolean; actions?: ReactNode }) {
  return (
    <section className={cn("theme-t rounded-card bg-surface-hi p-5 sm:p-6", raised ? "clay-raised" : "border", className)}>
      {(title || actions) && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          {title && <h2 className="text-h3 text-lg">{title}</h2>}
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}

export function StatTile({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return (
    <div className="theme-t rounded-card bg-surface-hi p-5 clay-raised">
      <p className="text-sm text-muted-ink">{label}</p>
      <p className="mt-2 font-display text-3xl font-extrabold">{value}</p>
      {note && <p className="mt-1 text-xs text-muted-ink">{note}</p>}
    </div>
  );
}

const tone: Record<string, string> = {
  good: "text-success",
  warn: "text-amber-ink",
  bad: "text-danger",
  info: "text-blue-ink",
  muted: "text-muted-ink",
};
const statusTone: Record<string, keyof typeof tone> = {
  Active: "good", Paid: "good", Approved: "good", Reviewed: "good", Completed: "good", Published: "good",
  "Partially paid": "warn", "Pending verification": "warn", Pending: "warn", Submitted: "info", "Under review": "info", "In progress": "info",
  Suspended: "bad", Restricted: "bad", Unpaid: "bad", Rejected: "bad", "Resubmission required": "bad",
  Important: "bad", Unread: "info", Draft: "muted", "Not started": "muted", Read: "muted",
};

export function Status({ value }: { value: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-semibold", tone[statusTone[value] ?? "muted"])}>
      <span aria-hidden className="h-2 w-2 rounded-full bg-current" />
      {value}
    </span>
  );
}

export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="rounded-control bg-surface px-5 py-8 text-center clay-pressed">
      <p className="font-semibold">{title}</p>
      {children && <div className="mt-2 text-sm text-muted-ink">{children}</div>}
    </div>
  );
}

export interface Col<T> {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
  className?: string;
}

export function DataTable<T>({ rows, cols, rowKey, empty = "Nothing here yet." }: { rows: T[]; cols: Col<T>[]; rowKey: (r: T) => string; empty?: string }) {
  if (rows.length === 0) return <Empty title={empty} />;
  return (
    <div className="-mx-5 overflow-x-auto sm:mx-0">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b text-muted-ink">
            {cols.map((c) => <th key={c.key} scope="col" className={cn("px-3 py-3 font-semibold", c.className)}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={rowKey(r)} className="border-b last:border-0">
              {cols.map((c) => <td key={c.key} className={cn("px-3 py-3 align-top", c.className)}>{c.render(r)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Confirm({ trigger, title, body, action, onConfirm, danger }: { trigger: string; title: string; body: string; action: string; onConfirm: () => void; danger?: boolean }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn(btn({ variant: "secondary", size: "sm" }), danger && "text-danger")}>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="rounded-card border-0 bg-surface-hi clay-raised">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-ink">{body}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={btn({ variant: "secondary", size: "sm" })}>Cancel</AlertDialogCancel>
          <AlertDialogAction className={btn({ size: "sm" })} onClick={onConfirm}>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className="theme-t h-10 rounded-control bg-surface px-3 font-normal clay-pressed control">
        <option value="">All</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export const courseName = (slug: string) => (slug === "web-development" ? "Web Development" : slug === "vibe-coding" ? "Vibe Coding" : "All courses");
export const fmtDate = (d: string) => (d ? new Date(d).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" }) : "");
