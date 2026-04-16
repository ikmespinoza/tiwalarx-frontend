"use client";

import {
  ATTENDANCE_RECORDS,
  SHIFT_LABELS,
  SHIFT_BADGE_STYLES,
  STATUS_LABELS,
  STATUS_BADGE_STYLES,
  REMARKS_LATE_STYLE,
  REMARKS_ABSENT_STYLE,
  REMARKS_LEAVE_STYLE,
  type AttendanceRecord,
} from "@/lib/mock-data/hr-attendance";

function getRemarkStyle(record: AttendanceRecord) {
  if (!record.remarks) return null;
  if (record.isLate) return REMARKS_LATE_STYLE;
  if (record.status === "absent") return REMARKS_ABSENT_STYLE;
  if (record.status === "on_leave") return REMARKS_LEAVE_STYLE;
  return null;
}

function TimeInOutCell({ record }: { record: AttendanceRecord }) {
  if (record.status === "absent") {
    return <span className="text-xs font-medium text-danger">No Record</span>;
  }

  if (record.status === "on_leave" || record.status === "day_off") {
    return (
      <span className="text-xs font-medium text-text-muted">
        On approved leave
      </span>
    );
  }

  const timeInDot = record.isLate ? "bg-warning" : "bg-success";

  return (
    <div className="text-xs space-y-1">
      <p className="flex items-center gap-1.5 font-medium text-text-primary">
        <span className={`w-1.5 h-1.5 rounded-full ${timeInDot} shrink-0`} />
        {record.timeIn ?? "—"}
      </p>
      <p className="flex items-center gap-1.5 font-medium text-text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
        {record.timeOut ?? (
          <span className="italic text-text-muted">In progress</span>
        )}
      </p>
    </div>
  );
}

function HoursCell({ record }: { record: AttendanceRecord }) {
  if (record.status === "absent") {
    return (
      <div className="text-xs">
        <p className="font-bold text-danger">0.0 hrs</p>
        <p className="text-text-muted">0.0 OT</p>
      </div>
    );
  }

  if (record.totalHours === null) {
    return <span className="text-xs text-text-muted">—</span>;
  }

  return (
    <div className="text-xs">
      <p className="font-bold text-text-primary">
        {record.totalHours.toFixed(1)} hrs
      </p>
      <p className="text-text-muted">{record.overtimeHours.toFixed(1)} OT</p>
    </div>
  );
}

export function AttendanceTable() {
  return (
    <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-muted/50">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap">
                Employee
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap hidden md:table-cell text-center">
                Shift
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap">
                Time In / Out
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap hidden sm:table-cell text-right">
                Total / OT
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap">
                Remarks
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary font-headline whitespace-nowrap text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {ATTENDANCE_RECORDS.map((record) => {
              const shiftStyle = SHIFT_BADGE_STYLES[record.shift];
              const statusStyle = STATUS_BADGE_STYLES[record.status];
              const remarkStyle = getRemarkStyle(record);

              return (
                <tr
                  key={record.id}
                  className="hover:bg-surface-muted/30 transition-colors"
                >
                  {/* Employee */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${record.avatarColor.bg} ${record.avatarColor.text}`}
                      >
                        {record.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">
                          {record.firstName} {record.lastName}
                        </p>
                        <p className="text-[11px] text-text-muted font-medium">
                          {record.position}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Shift */}
                  <td className="px-6 py-4 hidden md:table-cell text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-[11px] font-bold rounded-lg uppercase tracking-tight ${shiftStyle.bg} ${shiftStyle.text}`}
                    >
                      {SHIFT_LABELS[record.shift]}
                    </span>
                  </td>

                  {/* Time In / Out */}
                  <td className="px-6 py-4">
                    <TimeInOutCell record={record} />
                  </td>

                  {/* Total / OT */}
                  <td className="px-6 py-4 hidden sm:table-cell text-right">
                    <HoursCell record={record} />
                  </td>

                  {/* Remarks */}
                  <td className="px-6 py-4">
                    {record.remarks && remarkStyle ? (
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${remarkStyle.bg} ${remarkStyle.text}`}
                      >
                        {record.remarks}
                      </span>
                    ) : (
                      <span className="text-[11px] text-text-muted italic">
                        —
                      </span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 text-[10px] font-extrabold uppercase rounded-full ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {STATUS_LABELS[record.status]}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
