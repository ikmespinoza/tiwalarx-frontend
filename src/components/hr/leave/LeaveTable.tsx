"use client";

import { CheckCircle, XCircle, MoreVertical } from "lucide-react";
import {
  LEAVE_REQUESTS,
  LEAVE_TYPE_LABELS,
  LEAVE_TYPE_BADGE_STYLES,
  STATUS_BADGE_STYLES,
  type LeaveRequest,
} from "@/lib/mock-data/hr-leave";

interface LeaveTableProps {
  selectedLeaveId: string | null;
  onSelectLeave: (id: string | null) => void;
}

export function LeaveTable({
  selectedLeaveId,
  onSelectLeave,
}: LeaveTableProps) {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-muted border-b border-border">
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-center">
                Type
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-center hidden md:table-cell">
                Days
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-center">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wider text-right hidden sm:table-cell text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {LEAVE_REQUESTS.map((row, i) => (
              <LeaveRow
                key={row.id}
                row={row}
                isSelected={selectedLeaveId === row.id}
                isEven={i % 2 === 0}
                onSelectLeave={onSelectLeave}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LeaveRow({
  row,
  isSelected,
  isEven,
  onSelectLeave,
}: {
  row: LeaveRequest;
  isSelected: boolean;
  isEven: boolean;
  onSelectLeave: (id: string | null) => void;
}) {
  const typeStyle = LEAVE_TYPE_BADGE_STYLES[row.leaveType];
  const statusStyle = STATUS_BADGE_STYLES[row.status];

  const rowBg = isSelected
    ? "bg-primary-light"
    : isEven
      ? "bg-card"
      : "bg-background";

  return (
    <tr
      className={`${rowBg} hover:bg-surface-muted transition-colors cursor-pointer`}
      onClick={() => onSelectLeave(isSelected ? null : row.id)}
    >
      {/* Employee */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${row.avatarColor.bg} ${row.avatarColor.text}`}
          >
            {row.initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary leading-tight">
              {row.employeeName}
            </div>
            <div className="text-xs text-text-secondary leading-tight">
              {row.position}
            </div>
          </div>
        </div>
      </td>

      {/* Type */}
      <td className="px-5 py-4 text-center">
        <span
          className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full ${typeStyle.bg} ${typeStyle.text}`}
        >
          {LEAVE_TYPE_LABELS[row.leaveType]}
        </span>
      </td>

      {/* Dates */}
      <td className="px-5 py-4">
        <span className="text-xs text-text-secondary whitespace-nowrap">
          {row.dateFrom === row.dateTo
            ? row.dateFrom
            : `${row.dateFrom} – ${row.dateTo}`}
        </span>
      </td>

      {/* Days */}
      <td className="px-5 py-4 text-center hidden md:table-cell">
        <span className="text-sm font-medium text-text-primary">
          {row.days}
        </span>
      </td>

      {/* Status */}
      <td className="px-5 py-4 text-center">
        <div
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg ${statusStyle.bg} ${statusStyle.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </div>
      </td>

      {/* Actions */}
      <td className="px-5 py-4 text-center hidden sm:table-cell">
        <div
          className="flex items-center justify-end gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          {row.status === "pending" ? (
            <>
              <button
                className="p-1.5 text-success hover:bg-success-light rounded-lg transition-colors"
                title="Approve"
              >
                <CheckCircle size={18} />
              </button>
              <button
                className="p-1.5 text-danger hover:bg-danger-light rounded-lg transition-colors"
                title="Reject"
              >
                <XCircle size={18} />
              </button>
            </>
          ) : (
            <span className="text-[10px] font-semibold text-text-muted">
              Processed
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}
