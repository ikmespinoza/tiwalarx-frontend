"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ShiftSummaryCards } from "./ShiftSummaryCards";
import { ShiftTemplatesPanel } from "./ShiftTemplatesPanel";
import { WeeklyAnalyticsCard } from "./WeeklyAnalyticsCard";
import { WeeklyScheduleGrid } from "./WeeklyScheduleGrid";
import { OvertimeRequestsTable } from "./OvertimeRequestsTable";
import { OvertimeFab } from "./OvertimeFab";
import { CreateScheduleModal } from "./CreateScheduleModal";

export function ShiftsClient() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  return (
    <>
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold font-headline text-text-primary">
            Shifts &amp; Scheduling
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Manage weekly pharmacist and technician rosters
          </p>
        </div>
        <button
          onClick={() => setScheduleModalOpen(true)}
          className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-lg px-5 py-2.5 text-sm font-semibold flex items-center gap-2 shrink-0"
        >
          <Plus size={16} strokeWidth={2} />
          Create New Schedule
        </button>
      </div>

      {/* KPI summary */}
      <ShiftSummaryCards />

      {/* Main 3/9 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-6">
          <ShiftTemplatesPanel />
          <WeeklyAnalyticsCard />
        </aside>
        <section className="lg:col-span-9 space-y-6">
          <WeeklyScheduleGrid />
          <OvertimeRequestsTable />
        </section>
      </div>

      {/* FAB */}
      <OvertimeFab />

      <CreateScheduleModal
        open={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </>
  );
}
