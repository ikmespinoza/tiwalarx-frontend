"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

/** Set to true inside the mobile full-screen overlay so RightPanelSection always renders expanded */
export const RightPanelForceExpandedContext = createContext(false);

const STORAGE_KEY = "tiwalarx-right-panel-collapsed";

type RightPanelContextValue = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  mobileOpen: boolean;
  toggleMobile: () => void;
};

const RightPanelContext = createContext<RightPanelContextValue | null>(null);

export function RightPanelProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setCollapsed(true);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <RightPanelContext.Provider
      value={{ collapsed, toggleCollapsed, mobileOpen, toggleMobile }}
    >
      {children}
    </RightPanelContext.Provider>
  );
}

export function useRightPanel() {
  const ctx = useContext(RightPanelContext);
  if (!ctx) throw new Error("useRightPanel must be used within RightPanelProvider");
  return ctx;
}

/** Returns null when no provider is present — safe for optional consumption in shared layout components */
export function useOptionalRightPanel() {
  return useContext(RightPanelContext);
}
