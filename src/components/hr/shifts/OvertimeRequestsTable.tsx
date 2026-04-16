import { CheckCircle, XCircle } from "lucide-react";
import { overtimeRequests } from "@/lib/mock-data/hr-shifts";

export function OvertimeRequestsTable() {
  return (
    <div className="space-y-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold font-headline text-text-primary">
          Overtime Requests
        </h3>
        <button className="text-primary font-semibold text-xs hover:underline">
          View All Requests
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-muted/30 border-b border-border">
                <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Employee
                </th>
                <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Date
                </th>
                <th className="px-6 py-4 text-center text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Duration
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-left text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Reason
                </th>
                <th className="px-6 py-4 text-center text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Status
                </th>
                <th className="hidden sm:table-cell px-6 py-4 text-right text-[10px] font-semibold uppercase text-text-secondary tracking-widest">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {overtimeRequests.map((req) => (
                <tr
                  key={req.id}
                  className="hover:bg-surface-muted/20 transition-colors"
                >
                  {/* Employee */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0",
                          req.avatarColor,
                          req.avatarTextColor,
                        ].join(" ")}
                      >
                        {req.avatarInitials}
                      </div>
                      <span className="text-xs font-semibold text-text-primary whitespace-nowrap">
                        {req.employeeName}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-4 text-xs font-medium text-text-secondary whitespace-nowrap">
                    {req.date}
                  </td>

                  {/* Duration */}
                  <td className="p-4 text-xs font-semibold text-text-primary whitespace-nowrap text-center">
                    {req.duration}
                  </td>

                  {/* Reason — hidden on mobile */}
                  <td className="hidden sm:table-cell p-4 text-xs text-text-muted max-w-[150px] truncate">
                    {req.reason}
                  </td>

                  {/* Status */}
                  <td className="p-4 text-center">
                    {req.status === "pending" ? (
                      <span className="px-2 py-1 bg-warning-light text-warning text-[10px] font-semibold rounded-full uppercase">
                        Pending
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-success-light text-success text-[10px] font-semibold rounded-full uppercase">
                        Approved
                      </span>
                    )}
                  </td>

                  {/* Action — hidden on mobile */}
                  <td className="hidden sm:table-cell p-4 text-right">
                    {req.status === "pending" ? (
                      <div className="flex items-center justify-end gap-1">
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
                      </div>
                    ) : (
                      <span className="text-[10px] font-semibold text-text-muted">
                        Processed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
