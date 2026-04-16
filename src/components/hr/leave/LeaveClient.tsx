"use client";

import { useState } from "react";
import { LeaveFilters } from "./LeaveFilters";
import { LeaveTable } from "./LeaveTable";
import { LeaveBalancesPanel } from "./LeaveBalancesPanel";
import { RequestLeaveModal } from "./modals/RequestLeave";

export function LeaveClient() {
  const [selectedLeaveId, setSelectedLeaveId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-headline text-text-primary">
          Leave Management
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Track and manage staff leave requests.
        </p>
      </div>

      <LeaveFilters onRequestLeave={() => setModalOpen(true)} />

      {/* Table + sliding panel row */}
      <div className="flex gap-0 items-start overflow-hidden">
        <div className="flex-1 min-w-0">
          <LeaveTable
            selectedLeaveId={selectedLeaveId}
            onSelectLeave={setSelectedLeaveId}
          />
        </div>
        <LeaveBalancesPanel
          selectedLeaveId={selectedLeaveId}
          onClose={() => setSelectedLeaveId(null)}
        />
      </div>

      <RequestLeaveModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
