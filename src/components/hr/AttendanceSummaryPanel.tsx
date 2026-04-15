import { RightPanelSection } from "@/components/layout/RightPanelSection";
import {
  TOTAL_HEADCOUNT,
  PRESENT_COUNT,
  ABSENT_COUNT,
  ON_LEAVE_COUNT,
  LATE_COUNT,
  OT_HOURS_TOTAL,
  OT_VS_AVG,
  UPCOMING_COVERAGE,
  OT_SPARKLINE,
} from "@/lib/mock-data/hr-attendance";

const presentPct = Math.round((PRESENT_COUNT / TOTAL_HEADCOUNT) * 100);
const absentPct = Math.round((ABSENT_COUNT / TOTAL_HEADCOUNT) * 100);
const leavePct = Math.round((ON_LEAVE_COUNT / TOTAL_HEADCOUNT) * 100);

// Icons as inline SVG paths (lucide)
const UsersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ClockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CalendarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

// Shift icon paths
const shiftIconPaths: Record<string, string> = {
  wb_sunny:
    "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6z",
  wb_twilight:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
  bedtime: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
};

function ShiftIcon({ icon }: { icon: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={shiftIconPaths[icon] ?? shiftIconPaths["wb_sunny"]} />
    </svg>
  );
}

const coverageIconColors: Record<string, string> = {
  wb_sunny: "bg-primary/10 text-primary",
  wb_twilight: "bg-warning-light text-warning",
  bedtime: "bg-surface-muted text-text-muted",
};

export function AttendanceSummaryPanel() {
  return (
    <div className="space-y-2">
      {/* Section 1 — Today's Summary */}
      <RightPanelSection icon={UsersIcon} label="Today's Summary">
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary font-medium">
              Total Headcount
            </span>
            <span className="text-sm font-bold text-text-primary">
              {TOTAL_HEADCOUNT}
            </span>
          </div>

          <div className="space-y-3">
            {/* Present bar */}
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 bg-surface-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-success rounded-full"
                  style={{ width: `${presentPct}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-success w-4 text-right">
                {PRESENT_COUNT}
              </span>
            </div>

            {/* Absent bar */}
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 bg-surface-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-danger rounded-full"
                  style={{ width: `${absentPct}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-danger w-4 text-right">
                {ABSENT_COUNT}
              </span>
            </div>

            {/* On leave bar */}
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 bg-surface-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-info rounded-full"
                  style={{ width: `${leavePct}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-info w-4 text-right">
                {ON_LEAVE_COUNT}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-warning"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-[11px] font-semibold text-text-secondary">
                {LATE_COUNT} Late Arrivals
              </span>
            </div>
            <span className="text-[11px] font-bold text-primary cursor-default">
              View
            </span>
          </div>
        </div>
      </RightPanelSection>

      {/* Section 2 — OT Hours Pool */}
      <RightPanelSection icon={ClockIcon} label="OT Hours Pool">
        <div className="bg-primary rounded-2xl p-4 shadow-sm">
          <div className="flex items-end justify-between mt-2">
            <div>
              <h4 className="text-3xl font-extrabold font-headline text-primary-foreground">
                {OT_HOURS_TOTAL}{" "}
                <span className="text-sm font-normal opacity-80">hrs</span>
              </h4>
              <p className="text-[10px] mt-1 text-success flex items-center gap-1 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
                {Math.abs(OT_VS_AVG)}h from avg
              </p>
            </div>
            {/* Mini sparkline */}
            <div className="h-12 w-20 flex items-end gap-1 pb-1">
              {OT_SPARKLINE.map((bar, i) => (
                <div
                  key={i}
                  className={`w-2 bg-white rounded-full ${bar.opacity} ${bar.height}`}
                />
              ))}
            </div>
          </div>
        </div>
      </RightPanelSection>

      {/* Section 3 — Upcoming Coverage */}
      <RightPanelSection icon={CalendarIcon} label="Upcoming Coverage">
        <div className="space-y-2">
          {UPCOMING_COVERAGE.map((item) => {
            const iconColor =
              coverageIconColors[item.icon] ??
              "bg-surface-muted text-text-muted";

            return (
              <div
                key={item.shift}
                className="bg-card p-3 rounded-xl border border-border flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconColor}`}
                  >
                    <ShiftIcon icon={item.icon} />
                  </div>
                  <span className="text-xs font-bold text-text-primary">
                    {item.shift}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.statusStyle.bg} ${item.statusStyle.text}`}
                >
                  {item.statusLabel}
                </span>
              </div>
            );
          })}
        </div>
      </RightPanelSection>
    </div>
  );
}
