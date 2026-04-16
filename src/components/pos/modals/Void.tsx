"use client";

import { useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

interface VoidModalProps {
  open: boolean;
  onClose: () => void;
}

export function VoidModal({ open, onClose }: VoidModalProps) {
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
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card w-full h-dvh sm:h-auto sm:max-w-[480px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:max-h-[95dvh]">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-danger-light flex items-center justify-center">
              <AlertTriangle size={18} className="text-danger" />
            </div>
            <h2 className="font-headline font-bold text-text-primary text-lg">
              Void Transaction
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          <p className="text-sm text-text-secondary">
            Are you sure you want to void this transaction? This action cannot be undone.
          </p>

          {/* Transaction info */}
          <div className="bg-danger-light/40 border border-danger/20 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Transaction ID</span>
              <span className="font-semibold text-text-primary">TXN-20260416-001</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Amount</span>
              <span className="font-bold text-text-primary">₱388.40</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Cashier</span>
              <span className="font-semibold text-text-primary">Maria Santos</span>
            </div>
          </div>

          {/* Reason */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
              Reason for Void <span className="text-danger">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Enter reason for voiding this transaction..."
              className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-surface-muted/30 border-t border-border flex gap-3 justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-danger text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 duration-150">
            Confirm Void
          </button>
        </div>
      </div>
    </div>
  );
}
