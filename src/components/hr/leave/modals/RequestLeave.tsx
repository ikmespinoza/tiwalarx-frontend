"use client";

import { useEffect, useState } from "react";
import { X, Calendar } from "lucide-react";
import { LEAVE_REQUESTS } from "@/lib/mock-data/hr-leave";

interface RequestLeaveModalProps {
  open: boolean;
  onClose: () => void;
}

type LeaveTypeOption = {
  value: string;
  label: string;
  dotClass: string;
};

const LEAVE_TYPE_OPTIONS: LeaveTypeOption[] = [
  { value: "vacation", label: "Vacation", dotClass: "bg-primary" },
  { value: "sick", label: "Sick Leave", dotClass: "bg-warning" },
  { value: "emergency", label: "Emergency", dotClass: "bg-danger" },
  { value: "maternity", label: "Maternity", dotClass: "bg-info" },
];

const EMPLOYEE_NAMES = Array.from(
  new Set(LEAVE_REQUESTS.map((r) => r.employeeName))
);

export function RequestLeaveModal({ open, onClose }: RequestLeaveModalProps) {
  const [selectedType, setSelectedType] = useState("vacation");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative bg-card w-full sm:max-w-[560px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[95dvh] overflow-y-auto">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="font-headline font-bold text-text-primary text-xl leading-tight">
              Request Leave
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Submit a new time-off request for approval.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form className="px-8 pb-4 pt-2 space-y-6">
          {/* Employee */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Employee
            </label>
            <select className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
              {EMPLOYEE_NAMES.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>

          {/* Leave Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Leave Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {LEAVE_TYPE_OPTIONS.map((opt) => {
                const isSelected = selectedType === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={[
                      "flex items-center gap-3 p-3 rounded-xl border-2 bg-surface-muted cursor-pointer transition-all",
                      isSelected
                        ? "border-primary bg-primary-light/20"
                        : "border-transparent hover:bg-surface-muted/80",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      name="leave_type"
                      value={opt.value}
                      checked={isSelected}
                      onChange={() => setSelectedType(opt.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${opt.dotClass}`}
                    />
                    <span className="text-sm font-semibold text-text-primary">
                      {opt.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Date range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Date From
              </label>
              <input
                type="date"
                defaultValue="2026-04-24"
                className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Date To
              </label>
              <input
                type="date"
                defaultValue="2026-04-28"
                className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Total Duration */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar size={15} className="text-primary" />
              Total Duration
            </span>
            <span className="text-sm font-bold text-primary">5 days</span>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Reason
            </label>
            <textarea
              rows={3}
              placeholder="Please provide a brief reason for your leave request..."
              className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </form>

        {/* Footer */}
        <div className="px-8 py-5 bg-surface-muted/30 border-t border-border flex gap-3 justify-end flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 duration-150 shadow-sm"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
