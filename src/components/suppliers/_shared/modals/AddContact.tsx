"use client";

import { useEffect } from "react";
import { X, Star } from "lucide-react";

interface AddContactProps {
  open: boolean;
  onClose: () => void;
}

const ROLE_OPTIONS = [
  "Account Manager",
  "Sales Representative",
  "Orders Department",
  "Accounts Receivable",
  "General Manager",
  "Pharmacist",
  "Other",
];

export function AddContact({ open, onClose }: AddContactProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card w-full h-dvh sm:h-auto sm:max-w-140 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:max-h-[95dvh]">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="font-headline font-bold text-text-primary text-xl leading-tight">
              Add Contact Person
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Add a new contact person for this supplier.
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
        <form className="px-8 pb-4 pt-2 space-y-5 overflow-y-auto">
          {/* Full Name + Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ana Reyes"
                className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Role / Designation <span className="text-danger">*</span>
              </label>
              <select className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                <option value="">Select role...</option>
                {ROLE_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Phone + Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                placeholder="+63 917 000 0000"
                className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                Mobile{" "}
                <span className="text-text-muted font-normal normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <input
                type="tel"
                placeholder="+63 920 000 0000"
                className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              placeholder="contact@supplier.com"
              className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Notes{" "}
              <span className="text-text-muted font-normal normal-case tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              rows={3}
              placeholder='e.g. "Available Mon–Fri 8AM–5PM, handles urgent orders"'
              className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>

          {/* Set as Primary */}
          <label className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-muted cursor-pointer hover:bg-primary-light/20 hover:border-primary/30 transition-colors group">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-5 h-5 rounded border-2 border-border peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors flex-shrink-0">
              <Star size={11} strokeWidth={2} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary leading-none mb-0.5">
                Set as Primary Contact
              </p>
              <p className="text-[11px] text-text-secondary">
                This person&apos;s info appears in the supplier table and is
                auto-populated in PO emails.
              </p>
            </div>
          </label>
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
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}
