import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { initialDB, type DemoDB } from "@/data/mock";

// In-memory demo store. Changes last until the page reloads.
// TODO(backend): replace with server reads and writes.
interface Store {
  db: DemoDB;
  update: (fn: (draft: DemoDB) => void) => void;
}

const Ctx = createContext<Store | null>(null);

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<DemoDB>(() => structuredClone(initialDB));
  const update = useCallback((fn: (d: DemoDB) => void) => {
    setDb((prev) => {
      const next = structuredClone(prev);
      fn(next);
      return next;
    });
  }, []);
  return <Ctx.Provider value={{ db, update }}>{children}</Ctx.Provider>;
}

export function useDemo() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useDemo must be used inside DemoStoreProvider");
  return c;
}

export const uid = () => Math.random().toString(36).slice(2, 8).toUpperCase();
export const today = () => new Date().toISOString().slice(0, 10);
