"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-60 h-16 bg-white border-b border-border flex items-center px-6 gap-4 z-30">
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

        {/* Notifications */}
        <button
          className="relative p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
          aria-label="Notifications"
        >
          <Bell size={18} strokeWidth={1.75} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
        </button>
      </div>
    </header>
  );
}
