import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

/** Pressed track with a raised knob. Native button gives Space and Enter for free. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const on = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className={cn("theme-t relative h-8 w-14 shrink-0 rounded-full bg-surface clay-pressed control", className)}
    >
      <span
        aria-hidden
        className={cn(
          "theme-t absolute top-1 left-1 h-6 w-6 rounded-full bg-surface-hi clay-raised-sm transition-transform duration-[250ms]",
          on && "translate-x-6 bg-amber",
        )}
      />
    </button>
  );
}
