import { cva, type VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "@tanstack/react-router";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "theme-t inline-flex items-center justify-center gap-2 rounded-control font-semibold transition-[box-shadow,transform,background-color] duration-[120ms] disabled:pointer-events-none disabled:opacity-55 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-amber text-on-accent clay-puffy control hover:brightness-[1.04] active:[box-shadow:var(--clay-puffy-pressed)] active:translate-y-px",
        secondary:
          "bg-surface-hi text-ink clay-raised-sm control hover:text-blue-ink active:[box-shadow:var(--clay-pressed)] active:translate-y-px",
        ghost: "text-blue-ink hover:underline px-1",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BtnVariants = VariantProps<typeof btn>;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & BtnVariants
>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(btn({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";

export function ButtonLink({
  className,
  variant,
  size,
  children,
  ...props
}: LinkProps & BtnVariants & { className?: string; children: ReactNode }) {
  return (
    <Link className={cn(btn({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonA({
  className,
  variant,
  size,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & BtnVariants) {
  return <a className={cn(btn({ variant, size }), className)} {...props} />;
}
