// The only file that knows auth is fake. Same function names a Clerk adapter would expose.
// TODO(backend): swap these for Clerk (signIn, signUp, signOut, password reset).
import { demoUsers, type DemoUser } from "@/data/mock";

export type AuthUser = Omit<DemoUser, "password">;

const strip = ({ password: _p, ...u }: DemoUser): AuthUser => u;

export async function signInWithPassword(email: string, password: string): Promise<AuthUser> {
  await new Promise((r) => setTimeout(r, 400));
  const u = demoUsers.find((x) => x.email === email.trim().toLowerCase() && x.password === password);
  if (!u) throw new Error("Email or password is not correct.");
  return strip(u);
}

export function signInAsRole(role: "student" | "admin"): AuthUser {
  return strip(demoUsers.find((u) => u.role === role)!);
}

// New accounts are always students. Admin is assigned by the system owner, never here.
export async function signUp(name: string, email: string): Promise<AuthUser> {
  await new Promise((r) => setTimeout(r, 500));
  return { id: `new-${Date.now()}`, name, email, role: "student" };
}

export async function requestPasswordReset(_email: string): Promise<void> {
  await new Promise((r) => setTimeout(r, 500));
}

export async function resetPassword(_password: string): Promise<void> {
  await new Promise((r) => setTimeout(r, 500));
}
