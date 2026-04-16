"use client";

import { type ReactNode, useEffect, useState } from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { useRightPanel, RightPanelForceExpandedContext } from "./RightPanelContext";

export function RightPanelShell({ children }: { children: ReactNode }) {
  const { collapsed, toggleCollapsed, mobileOpen, toggleMobile } = useRightPanel();

  // Animate mobile overlay — same pattern as EmployeeDetailPanel
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      setRendered(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setRendered(false), 300);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop panel ── */}
      <aside
        className={[
          "fixed right-0 top-16 h-[calc(100vh-4rem)] bg-card border-l border-border",
          "hidden lg:flex flex-col overflow-hidden transition-all duration-300 z-30",
          collapsed ? "w-12 px-2" : "w-72 px-4",
        ].join(" ")}
      >
        {/* Header row — mirrors sidebar toggle row */}
        <div
          className={[
            "flex items-center py-4 mb-1",
            collapsed ? "justify-center" : "justify-between",
          ].join(" ")}
        >
          {!collapsed && (
            <span className="text-[11px] uppercase tracking-widest text-text-muted font-semibold font-headline select-none">
              Summary
            </span>
          )}
          <button
            onClick={toggleCollapsed}
            className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors"
            aria-label={collapsed ? "Expand panel" : "Collapse panel"}
          >
            {collapsed ? (
              <PanelRightOpen size={15} strokeWidth={1.75} />
            ) : (
              <PanelRightClose size={15} strokeWidth={1.75} />
            )}
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </aside>

      {/* ── Mobile overlay — full screen, matches EmployeeDetailPanel pattern ── */}
      {rendered && (
        <div className="lg:hidden fixed inset-0 z-100 pointer-events-none">
          {/* Backdrop */}
          <div
            className={[
              "fixed inset-0 bg-black/30 pointer-events-auto transition-opacity duration-300",
              visible ? "opacity-100" : "opacity-0",
            ].join(" ")}
            onClick={toggleMobile}
          />

          {/* Full-screen drawer */}
          <aside
            className={[
              "fixed right-0 top-0 h-screen w-full bg-card shadow-2xl z-10",
              "flex flex-col pointer-events-auto transition-transform duration-300",
              visible ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between shrink-0">
              <span className="text-[11px] uppercase tracking-widest text-text-muted font-semibold font-headline">
                Summary
              </span>
              <button
                onClick={toggleMobile}
                className="w-8 h-8 rounded-full hover:bg-surface-muted flex items-center justify-center text-text-muted transition-colors"
                aria-label="Close panel"
              >
                <PanelRightClose size={16} strokeWidth={1.75} />
              </button>
            </div>

            {/* Scrollable content — force expanded regardless of desktop collapsed state */}
            <div className="flex-1 overflow-y-auto p-6">
              <RightPanelForceExpandedContext.Provider value={true}>
                {children}
              </RightPanelForceExpandedContext.Provider>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
