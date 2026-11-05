import { Link } from "@tanstack/react-router";
import { useState } from "react";
// Icons: lucide-react, one consistent 1.5px-stroke outline set already in the project.
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { courses } from "@/data/site";
import { ButtonLink } from "./Button";
import { Logo } from "./bits";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/faqs", label: "FAQs" },
] as const;

const navCls =
  "rounded-control px-3 py-2 text-[0.95rem] font-medium text-ink hover:text-blue-ink data-[status=active]:clay-pressed data-[status=active]:text-blue-ink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="theme-t mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-card bg-surface-hi px-3 py-2.5 clay-raised-sm sm:px-4">
        <Link to="/" aria-label="Rare Skill Academy home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link to="/" activeOptions={{ exact: true }} className={navCls}>
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className={`${navCls} inline-flex items-center gap-1`}>
              Courses <ChevronDown className="h-4 w-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-card border-0 bg-surface-hi p-2 clay-raised-sm">
              <DropdownMenuItem asChild className="rounded-control px-3 py-2">
                <Link to="/courses">All courses</Link>
              </DropdownMenuItem>
              {courses.map((c) => (
                <DropdownMenuItem key={c.slug} asChild className="rounded-control px-3 py-2">
                  <Link to="/courses/$slug" params={{ slug: c.slug }}>
                    {c.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={navCls}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <ButtonLink to="/login" variant="secondary" size="sm" className="hidden sm:inline-flex">
            Login
          </ButtonLink>
          <ButtonLink to="/enroll" size="sm" className="hidden sm:inline-flex">
            Enroll now
          </ButtonLink>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-surface-hi clay-raised-sm control lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm border-0 bg-bg p-6">
              <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1" onClick={() => setOpen(false)}>
                <Link to="/" activeOptions={{ exact: true }} className={navCls}>Home</Link>
                <Link to="/courses" activeOptions={{ exact: true }} className={navCls}>Courses</Link>
                {courses.map((c) => (
                  <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className={`${navCls} pl-6 text-muted-ink`}>
                    {c.title}
                  </Link>
                ))}
                {links.map((l) => (
                  <Link key={l.to} to={l.to} className={navCls}>{l.label}</Link>
                ))}
                <div className="mt-6 grid gap-3">
                  <ButtonLink to="/enroll">Enroll now</ButtonLink>
                  <ButtonLink to="/login" variant="secondary">Login</ButtonLink>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
