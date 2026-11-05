import { createContext, useContext, useState, type ReactNode } from "react";
import { signInAsRole, signInWithPassword, type AuthUser } from "@/lib/authAdapter";
import type { Role } from "@/data/mock";

interface AuthCtx {
  user: AuthUser | null;
  role: Role;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  previewAs: (role: Role) => void;
  setUser: (u: AuthUser | null) => void;
  signOut: () => void;
}

const Ctx = createContext<AuthCtx | null>(null);

// Session is kept in memory only (the theme is the only thing saved in the browser).
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const signIn = async (email: string, password: string) => {
    const u = await signInWithPassword(email, password);
    setUser(u);
    return u;
  };
  const previewAs = (role: Role) => setUser(role === "guest" ? null : signInAsRole(role));
  return (
    <Ctx.Provider value={{ user, role: user?.role ?? "guest", signIn, previewAs, setUser, signOut: () => setUser(null) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
