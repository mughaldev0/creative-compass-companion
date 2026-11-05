import type { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { useDemo } from "@/context/DemoStore";
import { ButtonLink } from "@/components/site/Button";
import { Logo } from "@/components/site/bits";

function Card({ title, body, children }: { title: string; body: string; children?: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="theme-t w-full max-w-md rounded-card bg-surface-hi p-8 text-center clay-raised">
        <div className="flex justify-center"><Logo /></div>
        <h1 className="text-h3 mt-6">{title}</h1>
        <p className="mt-2 text-muted-ink">{body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>
      </div>
    </div>
  );
}

/** ProtectedRoute + RoleRoute in one. Guests see a sign-in card, wrong roles see Not authorised, no redirect loops. */
export function RequireRole({ role, children }: { role: "student" | "admin"; children: ReactNode }) {
  const { user } = useAuth();
  const { db } = useDemo();

  if (!user) {
    return (
      <Card title="Please sign in" body="This area is for signed-in users.">
        <ButtonLink to="/login">Go to login</ButtonLink>
      </Card>
    );
  }
  if (user.role !== role) {
    return (
      <Card title="Not authorised" body={`Your account does not have access to the ${role === "admin" ? "admin panel" : "student portal"}.`}>
        <ButtonLink to={user.role === "admin" ? "/admin" : "/portal"} variant="secondary">Go to my area</ButtonLink>
      </Card>
    );
  }
  if (role === "student") {
    const st = db.students.find((s) => s.id === user.studentId);
    if (st && st.account !== "Active") {
      return (
        <Card title={`Account ${st.account.toLowerCase()}`} body="Your portal access is paused. Contact the academy to resolve it.">
          <ButtonLink to="/contact">Contact the academy</ButtonLink>
        </Card>
      );
    }
  }
  return <>{children}</>;
}
