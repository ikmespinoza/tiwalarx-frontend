import { BarChart2 } from "lucide-react";
import { weeklyAnalytics } from "@/lib/mock-data/hr-shifts";

export function WeeklyAnalyticsCard() {
  return (
    <div className="bg-primary rounded-xl p-5 text-primary-foreground overflow-hidden relative">
      <div className="relative z-10">
        <p className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest mb-1">
          Weekly Analytics
        </p>
        <h4 className="text-xl font-bold font-headline mb-4">Total Shift Hours</h4>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black font-headline">
            {weeklyAnalytics.totalHours.toLocaleString()}
          </span>
          <span className="text-sm text-primary-foreground/80">{weeklyAnalytics.label}</span>
        </div>
        {/* Decorative bars */}
        <div className="flex gap-1 mt-4">
          <div className="h-1 w-1/2 bg-primary-foreground rounded-full" />
          <div className="h-1 w-1/4 bg-primary-foreground/40 rounded-full" />
          <div className="h-1 w-1/4 bg-primary-foreground/20 rounded-full" />
        </div>
      </div>
      {/* Background icon */}
      <BarChart2
        size={96}
        strokeWidth={1}
        className="absolute -bottom-4 -right-4 text-primary-foreground/10"
      />
    </div>
  );
}
