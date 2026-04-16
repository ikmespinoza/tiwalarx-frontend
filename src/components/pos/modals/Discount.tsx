"use client";

import { useEffect, useState } from "react";
import { X, Tag } from "lucide-react";

type DiscountType = "scpwd" | "employee" | "promo" | "manual";

export interface AppliedDiscount {
  type: DiscountType;
  label: string;
  percentage: number;
}

const PRESET_PERCENTAGE: Record<DiscountType, number> = {
  scpwd: 20,
  employee: 15,
  promo: 10,
  manual: 0,
};

const TYPE_LABEL: Record<DiscountType, string> = {
  scpwd: "SC / PWD",
  employee: "Employee",
  promo: "Promo",
  manual: "Manual",
};

interface DiscountModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (discount: AppliedDiscount) => void;
}

const DISCOUNT_TYPES: { id: DiscountType; label: string; description: string }[] = [
  { id: "scpwd", label: "SC / PWD", description: "Senior Citizen or Person with Disability (20%)" },
  { id: "employee", label: "Employee", description: "Staff purchase discount" },
  { id: "promo", label: "Promo", description: "Active promotional discount" },
  { id: "manual", label: "Manual", description: "Custom percentage or fixed amount" },
];

export function DiscountModal({ open, onClose, onApply }: DiscountModalProps) {
  const [discountType, setDiscountType] = useState<DiscountType>("scpwd");
  const [manualPercentage, setManualPercentage] = useState("");

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card w-full sm:max-w-[480px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[85dvh]">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-start border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center">
              <Tag size={16} className="text-primary" />
            </div>
            <div>
              <h2 className="font-headline font-bold text-text-primary text-lg">
                Apply Discount
              </h2>
              <p className="text-text-secondary text-sm mt-0.5">Select discount type</p>
            </div>
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
          {/* Type selector */}
          <div className="space-y-2">
            {DISCOUNT_TYPES.map((type) => (
              <label
                key={type.id}
                className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-colors ${
                  discountType === type.id
                    ? "border-primary bg-primary-light/30"
                    : "border-border hover:border-border/80 hover:bg-surface-muted/50"
                }`}
              >
                <input
                  type="radio"
                  name="discountType"
                  value={type.id}
                  checked={discountType === type.id}
                  onChange={() => setDiscountType(type.id)}
                  className="mt-0.5 accent-primary"
                />
                <div>
                  <p className="text-sm font-bold text-text-primary">{type.label}</p>
                  <p className="text-xs text-text-muted">{type.description}</p>
                </div>
              </label>
            ))}
          </div>

          {/* SC/PWD fields */}
          {discountType === "scpwd" && (
            <div className="space-y-4 pt-1">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  SC / PWD ID Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. SC-2024-00123"
                  className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Beneficiary Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name as on ID"
                  className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="bg-surface-muted rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-text-secondary">Discount Rate</span>
                <span className="font-headline font-bold text-primary text-lg">20%</span>
              </div>
            </div>
          )}

          {/* Employee fields */}
          {discountType === "employee" && (
            <div className="space-y-4 pt-1">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Employee ID <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. EMP-001"
                  className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          )}

          {/* Manual fields */}
          {discountType === "manual" && (
            <div className="space-y-4 pt-1">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Discount Percentage (%)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 10"
                  min={0}
                  max={100}
                  value={manualPercentage}
                  onChange={(e) => setManualPercentage(e.target.value)}
                  className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest">
                  Reason / Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Manager override"
                  className="w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-surface-muted/30 border-t border-border flex gap-3 justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const pct =
                discountType === "manual"
                  ? parseFloat(manualPercentage) || 0
                  : PRESET_PERCENTAGE[discountType];
              onApply({ type: discountType, label: TYPE_LABEL[discountType], percentage: pct });
              onClose();
            }}
            className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 duration-150"
          >
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  );
}
