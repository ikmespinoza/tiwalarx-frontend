import { Calendar, AlertCircle, Clock } from "lucide-react";
import { shiftSummary } from "@/lib/mock-data/hr-shifts";

const cards = [
  {
    label: "Total Shifts",
    value: shiftSummary.totalShifts.toString(),
    subText: "This week",
    icon: Calendar,
    iconBg: "bg-primary-light",
    iconColor: "text-primary",
    valueColor: "text-text-primary",
  },
  {
    label: "Unfilled Slots",
    value: shiftSummary.unfilledSlots.toString(),
    subText: "Needs assignment",
    icon: AlertCircle,
    iconBg: "bg-danger-light",
    iconColor: "text-danger",
    valueColor: "text-danger",
  },
  {
    label: "Overtime Hours",
    value: `${shiftSummary.overtimeHours}h`,
    subText: "Across 4 employees",
    icon: Clock,
    iconBg: "bg-warning-light",
    iconColor: "text-warning",
    valueColor: "text-warning",
  },
];

export function ShiftSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map(
        ({
          label,
          value,
          subText,
          icon: Icon,
          iconBg,
          iconColor,
          valueColor,
        }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
          >
            <div
              className={[
                "w-20 h-20 rounded-lg flex items-center justify-center shrink-0",
                iconBg,
              ].join(" ")}
            >
              <Icon size={40} strokeWidth={1.75} className={iconColor} />
            </div>
            <div>
              <p className="text-[14px] uppercase tracking-widest text-text-muted font-semibold font-headline">
                {label}
              </p>
              <p
                className={[
                  "text-4xl font-bold font-headline mt-0.5",
                  valueColor,
                ].join(" ")}
              >
                {value}
              </p>
              <p className="text-xs text-text-secondary mt-0.5">{subText}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
