"use client";

import { Eye, EyeOff, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Employee,
  EMPLOYMENT_TYPE_LABEL,
  EMPLOYMENT_STATUS_LABEL,
  TYPE_BADGE_STYLE,
  STATUS_BADGE_STYLE,
  TOTAL_EMPLOYEES,
  PAGE_SIZE,
} from "@/lib/mock-data/hr-employees";

interface EmployeeTableProps {
  employees: Employee[];
  selectedId: string | null;
  onToggle: (id: string) => void;
}

function formatRate(rate: number) {
  return "₱" + rate.toLocaleString("en-PH", { minimumFractionDigits: 2 });
}

function fullName(e: Employee) {
  return [e.firstName, e.lastName, e.suffix].filter(Boolean).join(" ");
}

export function EmployeeTable({
  employees,
  selectedId,
  onToggle,
}: EmployeeTableProps) {
  const totalPages = Math.ceil(TOTAL_EMPLOYEES / PAGE_SIZE);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-muted/30 border-b border-border">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Employee
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Position
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Branch
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary text-center">
                Type
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary text-center">
                Status
              </th>
              <th className="hidden sm:table-cell px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary text-right">
                Rate (₱)
              </th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary text-center" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {employees.map((employee) => {
              const isActive = selectedId === employee.id;
              const typeBadge = TYPE_BADGE_STYLE[employee.employmentType];
              const statusBadge = STATUS_BADGE_STYLE[employee.employmentStatus];

              return (
                <tr
                  key={employee.id}
                  className={[
                    "transition-colors",
                    isActive
                      ? "bg-primary-light/20"
                      : "hover:bg-primary-light/10",
                  ].join(" ")}
                >
                  {/* Employee */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0",
                          employee.avatarBg ?? "bg-surface-muted",
                          employee.avatarText ?? "text-text-muted",
                        ].join(" ")}
                      >
                        {employee.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-text-primary whitespace-nowrap">
                          {fullName(employee)}
                        </div>
                        <div className="text-xs text-text-muted">
                          ID: {employee.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Position */}
                  <td className="px-6 py-4 text-sm text-text-secondary whitespace-nowrap">
                    {employee.position}
                  </td>

                  {/* Branch */}
                  <td className="hidden md:table-cell px-6 py-4 text-sm text-text-secondary whitespace-nowrap">
                    {employee.branch}
                  </td>

                  {/* Type badge */}
                  <td className="px-6 py-4 text-center">
                    <span
                      className={[
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                        typeBadge.bg,
                        typeBadge.text,
                      ].join(" ")}
                    >
                      {EMPLOYMENT_TYPE_LABEL[employee.employmentType]}
                    </span>
                  </td>

                  {/* Status badge */}
                  <td className="px-6 py-4 text-center">
                    <span
                      className={[
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                        statusBadge.bg,
                        statusBadge.text,
                      ].join(" ")}
                    >
                      {EMPLOYMENT_STATUS_LABEL[employee.employmentStatus]}
                    </span>
                  </td>

                  {/* Rate */}
                  <td className="hidden sm:table-cell px-6 py-4 text-sm font-semibold text-text-primary text-right whitespace-nowrap">
                    {formatRate(employee.monthlyRate)}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onToggle(employee.id)}
                      aria-label={
                        isActive
                          ? "Hide employee detail"
                          : "Show employee detail"
                      }
                      className={[
                        "p-2 rounded-full transition-colors",
                        isActive
                          ? "text-primary bg-primary-light"
                          : "text-text-muted hover:text-primary hover:bg-primary-light",
                      ].join(" ")}
                    >
                      {isActive ? (
                        <EyeOff size={18} strokeWidth={1.75} />
                      ) : (
                        <Eye size={18} strokeWidth={1.75} />
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-surface-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-xs text-text-secondary font-medium">
          Showing 1 to {PAGE_SIZE} of {TOTAL_EMPLOYEES} employees
        </p>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-border text-text-muted transition-colors">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={[
                "w-8 h-8 rounded text-xs font-bold transition-colors",
                page === 1
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-border text-text-secondary",
              ].join(" ")}
            >
              {page}
            </button>
          ))}
          {totalPages > 3 && (
            <span className="text-xs text-text-muted px-1">…</span>
          )}
          <button className="p-1 rounded hover:bg-border text-text-muted transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
