import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { discountPercent, formatPKR } from "@/data/site";
import logo from "@/assets/rare_skill_logo.jpg.asset.json";

/** The uploaded logo, as given, on its own navy plate (it was designed on navy). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-control bg-navy px-2.5 py-1.5", className)}>
      <img src={logo.url} alt="Rare Skill Academy" width={169} height={57} className="h-8 w-auto sm:h-9" />
    </span>
  );
}

export function Section({
  children,
  className,
  tight,
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  id?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={cn(tight ? "py-12 md:py-[72px]" : "py-[72px] md:py-[112px]", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/** The </> bracket mark from the logo, used only as the list marker for outcomes and benefits. */
export function BracketList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3", className)}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-[3px] shrink-0 font-display text-sm font-bold text-blue-ink">
            {"</>"}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function SampleTag() {
  return (
    <span className="rounded-control bg-surface px-2 py-0.5 text-xs font-semibold text-muted-ink control">Sample</span>
  );
}

export function PriceBlock({ price, discountPrice, size = "md" }: { price: number; discountPrice: number; size?: "md" | "lg" }) {
  const pct = discountPercent(price, discountPrice);
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      {pct > 0 && (
        <s className="text-muted-ink">
          <span className="sr-only">Original price </span>
          {formatPKR(price)}
        </s>
      )}
      <span className={cn("font-display font-extrabold text-ink", size === "lg" ? "text-3xl" : "text-2xl")}>
        {pct > 0 && <span className="sr-only">Now </span>}
        {formatPKR(pct > 0 ? discountPrice : price)}
      </span>
      {pct > 0 && <span className="text-sm font-semibold text-blue-ink">{pct}% off</span>}
    </div>
  );
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-ink">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-blue-ink hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ title, intro, crumbs }: { title: string; intro?: string; crumbs: { label: string; to?: string }[] }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-4 sm:px-6 md:pt-16">
      <Crumbs items={crumbs} />
      <h1 className="text-h2 mt-5 max-w-3xl">{title}</h1>
      {intro && <p className="text-lead mt-4 max-w-2xl text-muted-ink">{intro}</p>}
    </div>
  );
}
