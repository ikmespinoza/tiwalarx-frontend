import { Plus } from "lucide-react";
import { HrTabs } from "@/components/hr/HrTabs";
import { ShiftSummaryCards } from "@/components/hr/ShiftSummaryCards";
import { ShiftTemplatesPanel } from "@/components/hr/ShiftTemplatesPanel";
import { WeeklyAnalyticsCard } from "@/components/hr/WeeklyAnalyticsCard";
import { WeeklyScheduleGrid } from "@/components/hr/WeeklyScheduleGrid";
import { OvertimeRequestsTable } from "@/components/hr/OvertimeRequestsTable";
import { OvertimeFab } from "@/components/hr/OvertimeFab";

export default function ShiftsPage() {
  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <HrTabs />

      {/* Page header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold font-headline text-text-primary">
            Shifts &amp; Scheduling
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Manage weekly pharmacist and technician rosters
          </p>
        </div>
        <button className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-lg px-5 py-2.5 text-sm font-semibold flex items-center gap-2 shrink-0">
          <Plus size={16} strokeWidth={2} />
          Create New Schedule
        </button>
      </div>

      {/* KPI summary */}
      <ShiftSummaryCards />

      {/* Main 3/9 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <ShiftTemplatesPanel />
          <WeeklyAnalyticsCard />
        </aside>

        {/* Main content */}
        <section className="lg:col-span-9 space-y-6">
          <WeeklyScheduleGrid />
          <OvertimeRequestsTable />
        </section>
      </div>

      {/* FAB */}
      <OvertimeFab />
    </div>
  );
}
