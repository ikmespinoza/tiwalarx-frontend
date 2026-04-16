"use client";

import { Search, Bell, ChevronDown, Moon, Sun, PanelRightOpen, PanelRightClose } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useOptionalRightPanel } from "./RightPanelContext";
import { useTheme } from "@/hooks/useTheme";

export function TopBar() {
  const { collapsed } = useSidebar();
  const { isDark, toggleTheme } = useTheme();
  const rightCtx = useOptionalRightPanel();

  return (
    <header
      className={[
        "fixed top-0 right-0 h-16 bg-card border-b border-border flex items-center px-6 gap-4 z-30 transition-[left] duration-300",
        collapsed ? "left-0 lg:left-16" : "left-0 lg:left-60",
      ].join(" ")}
    >
      {/* Search */}
      <div className="flex-1 max-w-sm relative">
        <Search
          size={15}
          strokeWidth={1.75}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search products, customers, transactions..."
          className="w-full bg-surface-muted border border-border rounded-lg py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Branch selector */}
        <button className="hidden sm:flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary border border-border rounded-lg px-3 py-2 hover:bg-surface-muted transition-colors">
          <span>TiwalaRx Main</span>
          <ChevronDown size={13} strokeWidth={2} />
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <Sun size={18} strokeWidth={1.75} />
          ) : (
            <Moon size={18} strokeWidth={1.75} />
          )}
        </button>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
          aria-label="Notifications"
        >
          <Bell size={18} strokeWidth={1.75} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
        </button>

        {/* Right panel mobile toggle — only when RightPanelContext is present */}
        {rightCtx && (
          <button
            onClick={rightCtx.toggleMobile}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
            aria-label={rightCtx.mobileOpen ? "Close panel" : "Open panel"}
          >
            {rightCtx.mobileOpen ? (
              <PanelRightClose size={18} strokeWidth={1.75} />
            ) : (
              <PanelRightOpen size={18} strokeWidth={1.75} />
            )}
          </button>
        )}
      </div>
    </header>
  );
}
