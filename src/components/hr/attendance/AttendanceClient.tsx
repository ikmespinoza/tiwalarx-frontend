"use client";

import { AttendanceActionRow } from "./AttendanceActionRow";
import { AttendanceSummaryCards } from "./AttendanceSummaryCards";
import { AttendanceTable } from "./AttendanceTable";

export function AttendanceClient() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold font-headline text-text-primary">
            Attendance Log
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Real-time staff tracking and verification.
          </p>
        </div>
        <AttendanceActionRow />
      </div>

      <AttendanceSummaryCards />
      <AttendanceTable />
    </div>
  );
}
