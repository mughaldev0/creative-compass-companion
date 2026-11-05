import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { ButtonLink, Button } from "@/components/site/Button";
import { AuthProvider } from "@/context/AuthContext";
import { DemoStoreProvider } from "@/context/DemoStore";

function NotFoundComponent() {
  return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="font-display text-6xl font-extrabold text-blue-ink">404</p>
      <h1 className="text-h3 mt-4">This page does not exist</h1>
      <p className="mt-2 text-muted-ink">The link may be old, or the page was moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink to="/">Go to home</ButtonLink>
        <ButtonLink to="/courses" variant="secondary">See the courses</ButtonLink>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <h1 className="text-h3">This page did not load</h1>
      <p className="mt-2 text-muted-ink">Something went wrong. Try again or go back home.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button onClick={() => { router.invalidate(); reset(); }}>Try again</Button>
        <ButtonLink to="/" variant="secondary">Go to home</ButtonLink>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#F1F5FB" },
      { title: "Rare Skill Academy" },
      { name: "description", content: "Practical Web Development and Vibe Coding courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Public+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
       <AuthProvider>
       <DemoStoreProvider>
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-amber focus:px-4 focus:py-2 focus:text-on-accent"
          >
            Skip to content
          </a>
          <AnnouncementBar />
          <Navbar />
          <main id="main">
            <Outlet />
          </main>
          <Footer />
        </MotionProvider>
       </DemoStoreProvider>
       </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
