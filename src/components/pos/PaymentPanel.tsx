"use client";

import {
  User,
  Banknote,
  QrCode,
  Wallet,
  CreditCard,
  Building2,
  MoreHorizontal,
  PauseCircle,
  Ban,
  Tag,
  X as XIcon,
} from "lucide-react";
import { MOCK_CART_TOTALS } from "@/lib/mock-data/pos";

type PaymentMethod = "cash" | "gcash" | "maya" | "bank" | "credit" | "other";

export interface ActiveDiscount {
  type: "scpwd" | "employee" | "promo" | "manual";
  label: string;
  percentage: number;
}

const DISCOUNT_BADGE: Record<ActiveDiscount["type"], string> = {
  scpwd: "bg-warning-light text-warning",
  employee: "bg-primary-light text-primary",
  promo: "bg-success-light text-success",
  manual: "bg-info-light text-info",
};

interface PaymentPanelProps {
  activeMethod: PaymentMethod;
  onMethodChange: (m: PaymentMethod) => void;
  tenderAmount: string;
  onTenderChange: (v: string) => void;
  customerAssigned: boolean;
  onOpenAssignCustomer: () => void;
  onOpenVoid: () => void;
  onCompleteSale: () => void;
  onOpenDiscount: () => void;
  activeDiscount: ActiveDiscount | null;
  onClearDiscount: () => void;
}

const PAYMENT_METHODS: {
  id: PaymentMethod;
  label: string;
  icon: React.ReactNode;
}[] = [
  { id: "cash", label: "Cash", icon: <Banknote size={20} /> },
  { id: "gcash", label: "GCash", icon: <QrCode size={20} /> },
  { id: "maya", label: "Maya", icon: <Wallet size={20} /> },
  { id: "credit", label: "Credit", icon: <CreditCard size={20} /> },
  { id: "bank", label: "Bank", icon: <Building2 size={20} /> },
  { id: "other", label: "Other", icon: <MoreHorizontal size={20} /> },
];

const QUICK_AMOUNTS = ["Exact", "+₱50", "+₱100", "+₱500"];

export function PaymentPanel({
  activeMethod,
  onMethodChange,
  tenderAmount,
  onTenderChange,
  customerAssigned,
  onOpenAssignCustomer,
  onOpenVoid,
  onCompleteSale,
  onOpenDiscount,
  activeDiscount,
  onClearDiscount,
}: PaymentPanelProps) {
  const tender = parseFloat(tenderAmount) || 0;
  const change = tender - MOCK_CART_TOTALS.grandTotal;

  return (
    <div className="flex flex-col gap-3 h-full overflow-hidden">
      {/* Customer card */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-sm shrink-0 flex flex-col gap-2">
        {/* Customer info row */}
        {customerAssigned ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-[#D97706]">ER</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted block">
                Customer
              </span>
              <span className="font-headline font-bold text-text-primary text-sm leading-none">
                Elena Reyes
              </span>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706]">
                Gold
              </span>
              <span className="text-[10px] text-text-muted">2,450 pts</span>
            </div>
            <button
              onClick={onOpenDiscount}
              className="flex items-center gap-1.5 text-xs text-text-secondary border border-border rounded-lg px-2.5 py-1.5 hover:bg-surface-muted transition-colors shrink-0"
            >
              <Tag size={12} />
              Discount
            </button>
            <button
              onClick={onOpenAssignCustomer}
              className="text-xs text-primary font-bold hover:underline shrink-0"
            >
              Change
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center">
                <User size={18} className="text-text-muted" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted block">
                  Customer
                </span>
                <span className="font-headline font-bold text-text-primary text-sm leading-none">
                  Walk-in Customer
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDiscount}
                className="flex items-center gap-1.5 text-xs text-text-secondary border border-border rounded-lg px-2.5 py-1.5 hover:bg-surface-muted transition-colors"
              >
                <Tag size={12} />
                Discount
              </button>
              <button
                onClick={onOpenAssignCustomer}
                className="text-xs text-primary font-bold hover:underline"
              >
                Assign
              </button>
            </div>
          </div>
        )}

        {/* Active discount badge */}
        {activeDiscount && (
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${DISCOUNT_BADGE[activeDiscount.type]} border-current/20 mt-2`}
          >
            <Tag size={12} className="shrink-0" />
            <span className="flex-1 min-w-0 truncate">
              {activeDiscount.label}
            </span>
            <span className="font-extrabold shrink-0">
              −{activeDiscount.percentage}%
            </span>
            <button
              onClick={onClearDiscount}
              className="ml-1 p-0.5 rounded hover:bg-black/10 transition-colors shrink-0"
              title="Remove discount"
            >
              <XIcon size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Payment config card */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex-1 overflow-y-auto flex flex-col gap-4 min-h-0">
        {/* Payment method selector */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">
            Payment Method
          </p>
          <div className="grid grid-cols-3 gap-2">
            {PAYMENT_METHODS.map((method) => {
              const isActive = activeMethod === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => onMethodChange(method.id)}
                  className={`flex flex-col items-center justify-center py-3 rounded-xl border-2 transition-all ${
                    isActive
                      ? "border-primary bg-primary-light/40 text-primary"
                      : "border-border bg-surface-muted text-text-muted hover:border-border/60"
                  }`}
                >
                  {method.icon}
                  <span className="text-[11px] font-bold mt-1">
                    {method.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment form */}
        <div className="flex-1 flex flex-col gap-3">
          {activeMethod === "cash" && (
            <>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  Amount Tendered (₱)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={tenderAmount}
                    onChange={(e) => onTenderChange(e.target.value)}
                    className="w-full font-headline font-extrabold text-3xl py-4 px-4 bg-surface-muted border border-border rounded-xl text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex gap-2">
                  {QUICK_AMOUNTS.map((qa) => (
                    <button
                      key={qa}
                      className="flex-1 py-1.5 bg-card border border-border rounded-lg text-xs font-bold text-text-secondary hover:bg-surface-muted hover:border-primary/30 transition-colors"
                    >
                      {qa}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-secondary-teal/5 border border-secondary-teal/20 rounded-xl p-4 flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-teal/70">
                  Change Due
                </span>
                <span className="font-headline font-extrabold text-4xl text-secondary-teal mt-1">
                  {change >= 0 ? `₱${change.toFixed(2)}` : "—"}
                </span>
              </div>
            </>
          )}

          {(activeMethod === "gcash" || activeMethod === "maya") && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  Reference Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1234567890"
                  className="w-full bg-surface-muted border border-border rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  Amount
                </label>
                <input
                  type="text"
                  readOnly
                  value={`₱${MOCK_CART_TOTALS.grandTotal.toFixed(2)}`}
                  className="w-full bg-surface-muted border border-border rounded-xl py-3 px-4 text-sm font-bold text-text-primary focus:outline-none cursor-default"
                />
              </div>
            </div>
          )}

          {activeMethod === "credit" && (
            <div className="space-y-3">
              <div className="bg-surface-muted rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Credit Limit</span>
                  <span className="font-semibold text-text-primary">
                    ₱5,000.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Current Balance</span>
                  <span className="font-semibold text-text-primary">
                    ₱1,200.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Available</span>
                  <span className="font-semibold text-success">₱3,800.00</span>
                </div>
              </div>
              <div className="bg-success-light/50 border border-success/20 rounded-xl p-3 text-xs text-success font-medium text-center">
                Transaction within credit limit
              </div>
            </div>
          )}

          {(activeMethod === "bank" || activeMethod === "other") && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  Reference / Notes
                </label>
                <input
                  type="text"
                  placeholder="Enter reference number or notes..."
                  className="w-full bg-surface-muted border border-border rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  Amount
                </label>
                <input
                  type="text"
                  readOnly
                  value={`₱${MOCK_CART_TOTALS.grandTotal.toFixed(2)}`}
                  className="w-full bg-surface-muted border border-border rounded-xl py-3 px-4 text-sm font-bold text-text-primary focus:outline-none cursor-default"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 flex-shrink-0 mt-auto">
          <button
            onClick={onCompleteSale}
            className="w-full bg-linear-to-br from-primary to-[#2563EB] text-white py-5 rounded-xl font-headline font-extrabold text-lg shadow-md hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Complete Sale
            <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">
              F12
            </span>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-surface-muted py-3.5 rounded-xl font-bold text-text-primary text-sm flex items-center justify-center gap-2 hover:bg-border transition-colors active:scale-[0.98]">
              <PauseCircle size={16} />
              Hold Sale
              <span className="text-[10px] opacity-40">F8</span>
            </button>
            <button
              onClick={onOpenVoid}
              className="bg-danger-light/60 text-danger py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-danger-light transition-colors active:scale-[0.98]"
            >
              <Ban size={16} />
              Void
              <span className="text-[10px] opacity-40">F8</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
