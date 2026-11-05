import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Bell, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import { Logo } from "@/components/site/bits";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Button } from "@/components/site/Button";

export interface NavItem {
  to: string;
  label: string;
  exact?: boolean;
}

const linkCls =
  "block rounded-control px-3 py-2.5 text-[0.95rem] font-medium text-ink hover:text-blue-ink data-[status=active]:bg-surface data-[status=active]:clay-pressed data-[status=active]:text-blue-ink";

function NavList({ items, onPick }: { items: NavItem[]; onPick?: () => void }) {
  return (
    <nav aria-label="Portal" className="flex flex-col gap-1" onClick={onPick}>
      {items.map((i) => (
        <Link key={i.to} to={i.to} activeOptions={{ exact: !!i.exact }} className={linkCls}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}

export function DashboardShell({ items, area, notifications, children }: { items: NavItem[]; area: string; notifications: number; children: ReactNode }) {
  const { user, signOut } = useAuth();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const initials = (user?.name ?? "?").split(" ").map((w) => w[0]).join("").slice(0, 2);
  const logout = () => {
    signOut();
    void nav({ to: "/login" });
  };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r p-5 lg:flex lg:flex-col lg:gap-8">
        <Link to="/" aria-label="Back to website"><Logo /></Link>
        <div>
          <p className="mb-3 px-3 text-sm font-semibold text-muted-ink">{area}</p>
          <NavList items={items} />
        </div>
      </aside>
      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b bg-bg px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-surface-hi clay-raised-sm control lg:hidden">
                <Menu className="h-5 w-5" aria-hidden />
              </SheetTrigger>
              <SheetContent side="left" className="w-[82vw] max-w-xs border-0 bg-bg p-5">
                <SheetTitle className="font-display text-lg">{area}</SheetTitle>
                <div className="mt-6"><NavList items={items} onPick={() => setOpen(false)} /></div>
              </SheetContent>
            </Sheet>
            <span className="text-sm text-muted-ink">Demo data</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-control bg-surface-hi clay-raised-sm control" aria-label={`${notifications} unread notifications`} role="img">
              <Bell className="h-5 w-5" aria-hidden />
              {notifications > 0 && <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber px-1 text-xs font-bold text-on-accent">{notifications}</span>}
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-amber">{initials}</span>
              <span className="text-sm font-semibold">{user?.name}</span>
            </span>
            <Button variant="secondary" size="sm" onClick={logout}>Log out</Button>
          </div>
        </header>
        <main id="main" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10">{children}</main>
      </div>
    </div>
  );
}
