"use client";

import { X, Info } from "lucide-react";
import {
  LEAVE_REQUESTS,
  LEAVE_BALANCES_BY_EMPLOYEE_ID,
  type EmployeeLeaveBalance,
  type LeaveBalance,
} from "@/lib/mock-data/hr-leave";

interface LeaveBalancesPanelProps {
  selectedLeaveId: string | null;
  onClose: () => void;
}

export function LeaveBalancesPanel({
  selectedLeaveId,
  onClose,
}: LeaveBalancesPanelProps) {
  const isOpen = selectedLeaveId !== null;

  const selectedRequest = selectedLeaveId
    ? LEAVE_REQUESTS.find((r) => r.id === selectedLeaveId)
    : null;

  const balance: EmployeeLeaveBalance | undefined = selectedRequest
    ? LEAVE_BALANCES_BY_EMPLOYEE_ID[selectedRequest.employeeId]
    : undefined;

  return (
    <>
      {/* Desktop: inline sliding panel */}
      <div
        className={[
          "hidden md:block shrink-0 transition-[width] duration-300 overflow-hidden",
          isOpen ? "w-75" : "w-0",
        ].join(" ")}
      >
        <div className="w-75 h-full">
          <PanelContent balance={balance} onClose={onClose} />
        </div>
      </div>

      {/* Mobile: full-screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-card overflow-y-auto">
          <PanelContent balance={balance} onClose={onClose} />
        </div>
      )}
    </>
  );
}

interface PanelContentProps {
  balance: EmployeeLeaveBalance | undefined;
  onClose: () => void;
}

function PanelContent({ balance, onClose }: PanelContentProps) {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-5 h-full overflow-y-auto ml-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline font-bold text-text-primary text-sm">
          Leave Balances
        </h3>
        <button
          onClick={onClose}
          className="p-1 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {balance ? (
        <>
          {/* Employee info block */}
          <div className="bg-surface-muted rounded-xl p-3 flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${balance.avatarColor.bg} ${balance.avatarColor.text}`}
            >
              {balance.initials}
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary leading-tight">
                {balance.employeeName}
              </div>
              <div className="text-[11px] text-text-secondary leading-tight mt-0.5">
                {balance.activePeriodLabel}
              </div>
            </div>
          </div>

          {/* Balance bars */}
          <div className="space-y-5">
            {balance.balances.map((item: LeaveBalance) => {
              const pct = Math.min(
                100,
                Math.round((item.used / item.total) * 100)
              );
              return (
                <div key={item.type} className="space-y-1.5">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-semibold text-text-secondary">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-text-primary">
                      {item.used} / {item.total}{" "}
                      <span className="text-[10px] text-text-muted font-normal">
                        days used
                      </span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-surface-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.barColorClass}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info footer */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="bg-primary-light/30 rounded-xl p-3 flex items-start gap-2">
              <Info size={15} className="text-primary shrink-0 mt-0.5" />
              <p className="text-[11px] text-text-secondary leading-snug">
                Next leave credits refresh on {balance.nextRefreshDate}.
                {balance.eligibleFor.length > 0 && (
                  <> Employee is eligible for {balance.eligibleFor.join(", ")}.</>
                )}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Info size={36} className="text-text-muted mb-3" />
          <p className="text-sm font-medium text-text-secondary">
            No balance data available.
          </p>
        </div>
      )}
    </div>
  );
}
