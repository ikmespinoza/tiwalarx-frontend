"use client";

import { useEffect, useState } from "react";
import {
  X,
  Check,
  CreditCard,
  ShieldPlus,
  Landmark,
  Building2,
} from "lucide-react";
import { Employee } from "@/lib/mock-data/hr-employees";

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard,
  ShieldPlus,
  Landmark,
  Building2,
};

interface EmployeeDetailPanelProps {
  employee: Employee | null;
  onClose: () => void;
}

function fullName(e: Employee) {
  return [e.firstName, e.lastName, e.suffix].filter(Boolean).join(" ");
}

export function EmployeeDetailPanel({ employee, onClose }: EmployeeDetailPanelProps) {
  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (employee) {
      setRendered(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setRendered(false), 300);
      return () => clearTimeout(t);
    }
  }, [employee]);

  if (!rendered || !employee) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 bg-black/30 pointer-events-auto transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={[
          "fixed right-0 top-0 h-screen w-full max-w-md bg-card shadow-2xl z-10 flex flex-col pointer-events-auto transition-transform duration-300",
          visible ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between shrink-0">
          <h3 className="text-lg font-bold font-headline text-text-primary">
            Employee Detail
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-muted flex items-center justify-center text-text-muted transition-colors"
            aria-label="Close panel"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className={[
                  "w-24 h-24 rounded-2xl flex items-center justify-center font-black text-2xl",
                  employee.avatarBg ?? "bg-surface-muted",
                  employee.avatarText ?? "text-text-muted",
                ].join(" ")}
              >
                {employee.initials}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success border-4 border-card rounded-full flex items-center justify-center">
                <Check size={14} strokeWidth={2.5} className="text-white" />
              </div>
            </div>
            <h4 className="text-xl font-bold font-headline text-text-primary">
              {fullName(employee)}
            </h4>
            <p className="text-sm text-primary font-semibold mb-3">
              {employee.position} &bull; {employee.id}
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="px-2 py-0.5 bg-surface-muted text-text-secondary rounded text-[10px] font-bold uppercase tracking-wider">
                {employee.division}
              </span>
              <span className="px-2 py-0.5 bg-surface-muted text-text-secondary rounded text-[10px] font-bold uppercase tracking-wider">
                {employee.branch}
              </span>
            </div>
          </div>

          {/* Government Identifiers */}
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-text-muted mb-3">
              Government Identifiers
            </h5>
            <div className="space-y-3">
              {employee.governmentIds.map((govId) => {
                const Icon = ICON_MAP[govId.icon] ?? CreditCard;
                return (
                  <div
                    key={govId.label}
                    className="p-4 bg-surface-muted/40 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={1.75} className="text-text-muted shrink-0" />
                      <div>
                        <div className="text-[10px] text-text-muted font-bold uppercase mb-0.5">
                          {govId.label}
                        </div>
                        <div className="text-sm font-medium tracking-widest text-text-primary">
                          {govId.masked}
                        </div>
                      </div>
                    </div>
                    <button className="text-primary text-[10px] font-bold uppercase hover:underline shrink-0">
                      View
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Employment History */}
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-text-muted mb-3">
              Employment History
            </h5>
            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {employee.positionHistory.map((entry, i) => (
                <div key={i} className="relative">
                  <div
                    className={[
                      "absolute -left-[19px] top-1.5 w-4 h-4 rounded-full border-4 border-card shadow-sm",
                      entry.isCurrent ? "bg-primary" : "bg-border",
                    ].join(" ")}
                  />
                  <div className="text-sm font-bold text-text-primary">
                    {entry.title}
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">
                    {entry.dateRange} &bull; {entry.branch}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-surface-muted/30 border-t border-border flex items-center gap-3 shrink-0">
          <button className="flex-1 py-3 bg-card border border-border rounded-xl font-bold text-sm text-text-secondary hover:bg-border transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            Generate Payslip
          </button>
        </div>
      </aside>
    </div>
  );
}
