"use client";

import { revenueTrend } from "@/lib/mock-data/dashboard";

const X_LABELS = ["Oct 01", "Oct 10", "Oct 20", "Oct 30"];
const MAX = Math.max(...revenueTrend.map((d) => d.value));

export function RevenueTrendChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-headline font-bold text-sm text-text-primary">
          Revenue Trend (30 Days)
        </h2>
        <select className="text-xs border border-border rounded-lg px-2 py-1 bg-surface-muted text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30">
          <option>Current Month</option>
          <option>Last Quarter</option>
        </select>
      </div>

      {/* Bars */}
      <div className="h-48 lg:h-64 flex items-end justify-between gap-1 px-2">
        {revenueTrend.map((point, i) => {
          const pct = (point.value / MAX) * 100;
          return (
            <div
              key={i}
              title={`${point.day}: ₱${point.value.toLocaleString()}`}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/10 to-primary/40 min-w-0"
              style={{ height: `${pct}%` }}
            />
          );
        })}
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 px-2">
        {X_LABELS.map((label) => (
          <span key={label} className="text-[10px] text-text-muted">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
