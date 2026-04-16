"use client";

import { useEffect } from "react";
import { X, Info, ChevronDown, CalendarDays, Clock, Send } from "lucide-react";

interface RequestOvertimeModalProps {
  open: boolean;
  onClose: () => void;
}

export function RequestOvertimeModal({ open, onClose }: RequestOvertimeModalProps) {
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
      <div className="relative bg-card w-full sm:max-w-[560px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[95dvh]">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="font-headline font-bold text-text-primary text-xl leading-tight">
              Request Overtime
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Submit additional hours for administrative review.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-4 space-y-6 overflow-y-auto flex-1">
          {/* Staffing Alert */}
          <div className="bg-info-light/30 rounded-xl p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-info text-white flex items-center justify-center flex-shrink-0">
              <Info size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-info leading-none">
                Staffing Alert
              </p>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                Current branch capacity is at 84% for this date. Additional OT
                requests may be prioritized for urgent clinical tasks.
              </p>
            </div>
          </div>

          {/* Assign to Employee */}
          <div>
            <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
              Assign to Employee
            </label>
            <button
              type="button"
              className="w-full h-14 bg-surface-muted border border-border rounded-lg px-4 flex items-center justify-between hover:bg-surface-muted/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  MS
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-primary leading-none">
                    Maria Santos
                  </p>
                  <p className="text-[10px] text-text-muted mt-0.5">
                    Head Pharmacist · TiwalaRx Main
                  </p>
                </div>
              </div>
              <ChevronDown size={16} className="text-text-muted" />
            </button>
          </div>

          {/* Date + Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
                Overtime Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 pr-10"
                />
                <CalendarDays
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
                Duration (Hours)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step={0.5}
                  placeholder="0.0"
                  className="w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 pr-10"
                />
                <Clock
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
              Reason for Request
            </label>
            <textarea
              rows={4}
              placeholder="Please describe the necessity for this overtime (e.g., inventory audit, emergency stock count)..."
              className="w-full bg-surface-muted border border-border rounded-lg p-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-border flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-xl text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-[2] py-3 bg-primary text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center gap-2 shadow-sm"
          >
            <Send size={15} />
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
