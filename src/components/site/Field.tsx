import { useId, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "theme-t w-full rounded-control bg-surface text-ink clay-pressed control px-4 placeholder:text-muted-ink/80 focus-visible:outline-2 focus-visible:outline-blue-ink";

function Wrap({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-err`} className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type Common = { label: string; error?: string | undefined };

export function Input({ label, error, className, ...p }: Common & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <Wrap id={id} label={label} error={error}>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(base, "h-12", className)}
        {...p}
      />
    </Wrap>
  );
}

export function Textarea({ label, error, className, ...p }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <Wrap id={id} label={label} error={error}>
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(base, "min-h-36 py-3", className)}
        {...p}
      />
    </Wrap>
  );
}

export function Select({
  label,
  error,
  className,
  children,
  ...p
}: Common & SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <Wrap id={id} label={label} error={error}>
      <select
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(base, "h-12 appearance-none", className)}
        {...p}
      >
        {children}
      </select>
    </Wrap>
  );
}
