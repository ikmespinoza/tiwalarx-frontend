"use client";

import { AlarmClock } from "lucide-react";

export function OvertimeFab() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:flex">
      <button className="flex items-center gap-3 bg-card hover:bg-primary text-primary hover:text-primary-foreground px-6 py-4 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:-translate-y-1 font-bold text-sm">
        <AlarmClock size={18} strokeWidth={1.75} />
        Request Overtime
      </button>
    </div>
  );
}
