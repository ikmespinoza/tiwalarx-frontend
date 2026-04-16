import {
  TOTAL_HEADCOUNT,
  PRESENT_COUNT,
  ON_LEAVE_COUNT,
} from "@/lib/mock-data/hr-attendance";
import { CalendarCheck2, UserCheck, Users } from "lucide-react";

const cards = [
  {
    icon: Users,
    badge: "Real-time",
    badgeStyle: "bg-primary/10 text-primary",
    count: TOTAL_HEADCOUNT,
    label: "Total active staff",
    iconColor: "text-primary",
    iconBg: "bg-primary-light",
  },
  {
    icon: UserCheck,
    badge: "+8% vs yesterday",
    badgeStyle: "bg-success-light text-success",
    count: PRESENT_COUNT,
    label: "Present & working",
    iconColor: "text-success",
    iconBg: "bg-success-light",
  },
  {
    icon: CalendarCheck2,
    badge: "Verified",
    badgeStyle: "bg-info-light text-info",
    count: ON_LEAVE_COUNT,
    label: "Approved leave today",
    iconColor: "text-info",
    iconBg: "bg-info-light",
  },
];

export function AttendanceSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map(
        ({
          label,
          count,
          badge,
          badgeStyle,
          icon: Icon,
          iconBg,
          iconColor,
        }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
          >
            <div className="flex items-center justify-between">
              <div
                className={[
                  "w-20 h-20 rounded-lg flex items-center justify-center shrink-0",
                  iconBg,
                ].join(" ")}
              >
                <Icon size={40} strokeWidth={1.75} className={iconColor} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-extrabold font-headline text-text-primary">
                {count}
              </p>
              <p className="text-sm text-text-secondary font-medium mt-1">
                {label}
              </p>
              <span
                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${badgeStyle}`}
              >
                {badge}
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
