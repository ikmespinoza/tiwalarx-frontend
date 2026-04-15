import { Settings } from "lucide-react";
import type { Supplier } from "@/lib/mock-data/suppliers";

interface TermsPreferencesPanelProps {
  supplier?: Supplier;
  blank?: boolean;
}

export default function TermsPreferencesPanel({
  supplier,
  blank = false,
}: TermsPreferencesPanelProps) {
  const creditLimitValue =
    !blank && supplier?.creditLimit
      ? supplier.creditLimit.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "";

  return (
    <div className="bg-surface-muted rounded-xl border border-border p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <Settings size={18} strokeWidth={1.75} className="text-primary shrink-0" />
        <h2 className="font-headline font-bold text-base text-text-primary">
          Terms &amp; Preferences
        </h2>
      </div>

      <div className="space-y-5">
        {/* Payment Terms */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            Payment Terms
          </label>
          <select
            defaultValue={blank ? "COD" : (supplier?.paymentTerms ?? "COD")}
            className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none"
          >
            <option>COD</option>
            <option>Net 7</option>
            <option>Net 15</option>
            <option>Net 30</option>
            <option>Net 60</option>
          </select>
        </div>

        {/* Credit Limit */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            Credit Limit
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-bold text-sm select-none">
              ₱
            </span>
            <input
              type="text"
              defaultValue={creditLimitValue}
              placeholder="0.00"
              className="w-full bg-card border border-border rounded-lg pl-8 pr-4 py-2.5 text-sm font-bold text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Lead Time */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            Estimated Lead Time
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              defaultValue={blank ? "" : (supplier?.leadTimeDays ?? "")}
              min={1}
              className="w-20 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-sm text-text-secondary font-medium">
              Days
            </span>
          </div>
        </div>

        {/* Preferred toggle */}
        <div className="pt-5 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-text-primary">
                Preferred Supplier
              </p>
              <p className="text-[11px] text-text-secondary mt-0.5">
                Auto-prioritize in procurement
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={!blank && (supplier?.isPreferred ?? false)}
                className="sr-only peer"
                readOnly
              />
              <div className="w-11 h-6 bg-border rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
