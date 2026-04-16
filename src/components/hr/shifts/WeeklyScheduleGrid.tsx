"use client";

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Sun,
  Sunset,
  Moon,
  BedDouble,
} from "lucide-react";
import {
  employeeSchedules,
  weekDays,
  weekLabel,
  TODAY_DAY_INDEX,
} from "@/lib/mock-data/hr-shifts";
import type { ShiftType } from "@/lib/mock-data/hr-shifts";
import { SHIFT_CELL } from "@/lib/shift-cell";

const ICONS = {
  Sun,
  Sunset,
  Moon,
  BedDouble,
} as const;

type IconName = keyof typeof ICONS;

function ShiftBlock({ type }: { type: ShiftType }) {
  const { label, icon, bg, text } = SHIFT_CELL[type];
  const Icon = ICONS[icon as IconName];
  return (
    <div
      className={[
        "mx-auto w-11 h-12 rounded-lg flex flex-col items-center justify-center gap-0.5",
        bg,
        text,
      ].join(" ")}
    >
      <Icon size={12} strokeWidth={3} />
      <span className="text-[8px] font-medium leading-none">{label}</span>
    </div>
  );
}

// Mobile pill used in card list view
function ShiftPill({ type }: { type: ShiftType }) {
  const { label, bg, text } = SHIFT_CELL[type];
  return (
    <div
      className={[
        "w-9 h-10 rounded-lg flex items-center justify-center",
        bg,
        text,
      ].join(" ")}
    >
      <span className="text-[8px] font-medium">{label}</span>
    </div>
  );
}

export function WeeklyScheduleGrid() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Calendar controls */}
      <div className="p-5 border-b border-border flex items-center justify-between gap-4 flex-wrap bg-card">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Prev / Next */}
          <div className="flex bg-surface-muted p-1 rounded-lg">
            <button
              className="p-1.5 hover:bg-card rounded-md transition-all"
              aria-label="Previous week"
            >
              <ChevronLeft
                size={16}
                strokeWidth={1.75}
                className="text-text-secondary"
              />
            </button>
            <button
              className="p-1.5 hover:bg-card rounded-md transition-all"
              aria-label="Next week"
            >
              <ChevronRight
                size={16}
                strokeWidth={1.75}
                className="text-text-secondary"
              />
            </button>
          </div>
          <h3 className="text-base font-extrabold font-headline text-text-primary">
            {weekLabel}
          </h3>
          <span className="px-2 py-0.5 bg-primary-light text-primary text-[10px] font-semibold rounded uppercase">
            Current Week
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Filter"
          >
            <Filter size={16} strokeWidth={1.75} />
          </button>
          <div className="h-4 w-px bg-border mx-1" />
          <button className="px-3 py-1.5 text-xs font-semibold text-text-secondary bg-surface-muted rounded-lg hover:bg-border transition-colors">
            Export PDF
          </button>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-muted/50">
              <th className="p-4 text-left min-w-50">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-text-secondary">
                  Employee
                </span>
              </th>
              {weekDays.map(({ abbr, date }, i) => (
                <th key={abbr} className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <span
                      className={[
                        "text-[10px] font-semibold uppercase",
                        i === TODAY_DAY_INDEX
                          ? "text-primary"
                          : "text-text-muted",
                      ].join(" ")}
                    >
                      {abbr}
                    </span>
                    <span
                      className={[
                        "text-sm font-semibold",
                        i === TODAY_DAY_INDEX
                          ? "text-primary"
                          : "text-text-primary",
                      ].join(" ")}
                    >
                      {date}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {employeeSchedules.map((emp) => (
              <tr
                key={emp.id}
                className="hover:bg-primary-light/10 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <span className="text-primary text-xs font-semibold font-headline">
                        {emp.avatarInitials}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-primary">
                        {emp.name}
                      </p>
                      <p className="text-[10px] text-text-muted">{emp.role}</p>
                    </div>
                  </div>
                </td>
                {emp.shifts.map((shift, dayIdx) => (
                  <td key={dayIdx} className="p-2">
                    <ShiftBlock type={shift} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="lg:hidden divide-y divide-border">
        {employeeSchedules.map((emp) => (
          <div key={emp.id} className="p-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                <span className="text-primary text-xs font-semibold font-headline">
                  {emp.avatarInitials}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-primary">
                  {emp.name}
                </p>
                <p className="text-[10px] text-text-muted">{emp.role}</p>
              </div>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {emp.shifts.map((shift, dayIdx) => (
                <div key={dayIdx} className="flex flex-col items-center gap-1">
                  <span
                    className={[
                      "text-[9px] font-semibold uppercase tracking-wide",
                      dayIdx === TODAY_DAY_INDEX
                        ? "text-primary"
                        : "text-text-muted",
                    ].join(" ")}
                  >
                    {weekDays[dayIdx].abbr}
                  </span>
                  <ShiftPill type={shift} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
