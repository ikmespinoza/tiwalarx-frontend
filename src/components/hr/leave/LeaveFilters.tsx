"use client";

import { Search, Plus } from "lucide-react";

interface LeaveFiltersProps {
  onRequestLeave: () => void;
}

export function LeaveFilters({ onRequestLeave }: LeaveFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
      {/* Left: search + selects */}
      <div className="flex flex-wrap items-center gap-3 flex-1">
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search employee..."
            className="pl-9 pr-4 py-2 bg-surface-muted border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary w-52"
          />
        </div>

        <select className="bg-surface-muted border border-border rounded-lg text-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Leave Type: All</option>
          <option>Vacation</option>
          <option>Sick Leave</option>
          <option>Emergency</option>
          <option>Maternity / Paternity</option>
        </select>

        <select className="bg-surface-muted border border-border rounded-lg text-sm px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Status: All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Right: Request Leave button */}
      <button
        onClick={onRequestLeave}
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95 duration-150 whitespace-nowrap"
      >
        <Plus size={15} />
        Request Leave
      </button>
    </div>
  );
}
