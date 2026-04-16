"use client";

import { useEffect, useState } from "react";
import { X, Search, UserPlus, ArrowLeft, Phone, Mail, User, ShieldCheck } from "lucide-react";
import { MOCK_CUSTOMER_SEARCH_RESULTS } from "@/lib/mock-data/pos";

const TIER_STYLES: Record<string, string> = {
  Gold: "bg-[#FEF3C7] text-[#D97706]",
  Silver: "bg-surface-muted text-text-secondary",
  Bronze: "bg-[#FEF3C7]/60 text-[#92400E]",
  Platinum: "bg-surface-muted text-[#4B5563]",
};

interface AssignCustomerModalProps {
  open: boolean;
  onClose: () => void;
  onAssign: () => void;
}

type View = "search" | "register";

export function AssignCustomerModal({ open, onClose, onAssign }: AssignCustomerModalProps) {
  const [view, setView] = useState<View>("search");
  const [scpwd, setScpwd] = useState(false);

  // Reset to search view when modal closes
  useEffect(() => {
    if (!open) {
      setView("search");
      setScpwd(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (view === "register") setView("search");
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, view]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={() => (view === "register" ? setView("search") : onClose())}
      />
      <div className="relative bg-card w-full sm:max-w-[480px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[85dvh]">

        {/* ── SEARCH VIEW ── */}
        {view === "search" && (
          <>
            <div className="px-6 pt-6 pb-4 flex justify-between items-start border-b border-border shrink-0">
              <div>
                <h2 className="font-headline font-bold text-text-primary text-lg">Assign Customer</h2>
                <p className="text-text-secondary text-sm mt-0.5">
                  Search and assign a customer to this transaction.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-4 border-b border-border shrink-0">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search by name or phone..."
                  className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {MOCK_CUSTOMER_SEARCH_RESULTS.map((customer) => (
                <button
                  key={customer.id}
                  onClick={onAssign}
                  className="w-full flex items-center gap-3 px-6 py-3.5 hover:bg-surface-muted transition-colors border-b border-border/50 last:border-0 text-left"
                >
                  <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{customer.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-text-primary leading-none">{customer.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{customer.phone}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${TIER_STYLES[customer.tier]}`}>
                      {customer.tier}
                    </span>
                    <span className="text-[10px] text-text-muted">Last: {customer.lastVisit}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-border shrink-0">
              <button
                onClick={() => setView("register")}
                className="w-full flex items-center justify-center gap-2 text-sm text-primary font-semibold hover:bg-primary-light py-2 rounded-lg transition-colors"
              >
                <UserPlus size={15} />
                Quick Register New Customer
              </button>
            </div>
          </>
        )}

        {/* ── REGISTER VIEW ── */}
        {view === "register" && (
          <>
            <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setView("search")}
                  className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <div>
                  <h2 className="font-headline font-bold text-text-primary text-lg leading-none">
                    Quick Register
                  </h2>
                  <p className="text-text-secondary text-xs mt-0.5">New customer for this transaction</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Full Name <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="e.g. Juan dela Cruz"
                    className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="tel"
                    placeholder="+63 917 000 0000"
                    className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Email{" "}
                  <span className="text-text-muted font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    placeholder="customer@email.com"
                    className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* SC/PWD toggle */}
              <label className="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors group"
                style={{ borderColor: scpwd ? "var(--primary)" : "var(--border)", background: scpwd ? "var(--primary-light)" : "" }}>
                <input
                  type="checkbox"
                  checked={scpwd}
                  onChange={(e) => setScpwd(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${
                    scpwd ? "border-primary bg-primary" : "border-border bg-card"
                  }`}
                >
                  <ShieldCheck size={11} className={scpwd ? "text-white" : "text-transparent"} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary leading-none mb-0.5">
                    Senior Citizen / PWD
                  </p>
                  <p className="text-xs text-text-secondary">
                    Automatically applies 20% SC/PWD discount to this transaction.
                  </p>
                </div>
                {scpwd && (
                  <span className="ml-auto shrink-0 text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                    −20%
                  </span>
                )}
              </label>

              {/* Info note */}
              <p className="text-xs text-text-muted text-center">
                Full profile can be completed later in the Customers module.
              </p>
            </div>

            <div className="px-6 py-4 bg-surface-muted/30 border-t border-border flex gap-3 shrink-0">
              <button
                onClick={() => setView("search")}
                className="px-4 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
              >
                Back
              </button>
              <button
                onClick={onAssign}
                className="flex-1 px-4 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 duration-150 flex items-center justify-center gap-2"
              >
                <UserPlus size={15} />
                Register &amp; Assign
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
