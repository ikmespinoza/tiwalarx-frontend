import { Activity, TrendingUp, Search, ChevronRight } from "lucide-react";
import { RightPanelSection } from "@/components/layout/RightPanelSection";
import { stockHealth, quickBatchLookup } from "@/lib/mock-data/inventory-expiry";

const healthBars = [
  { label: "Fresh Stock (>6mo)", value: stockHealth.fresh, bar: "bg-primary", text: "text-primary" },
  { label: "Nearing Expiry (3-6mo)", value: stockHealth.nearingExpiry, bar: "bg-info", text: "text-info" },
  { label: "At Risk (<3mo)", value: stockHealth.atRisk, bar: "bg-danger", text: "text-danger" },
];

export function InventorySummaryPanel() {
  return (
    <>
      {/* Stock Health */}
      <RightPanelSection icon={<Activity size={16} strokeWidth={1.75} />} label="Stock Health">
        <div className="space-y-5">
          {healthBars.map(({ label, value, bar, text }) => (
            <div key={label} className="space-y-1.5">
              <div className="flex justify-between items-end">
                <span className="text-xs font-semibold text-text-secondary">{label}</span>
                <span className={["text-xs font-bold", text].join(" ")}>{value}%</span>
              </div>
              <div className="h-2 w-full bg-surface-muted rounded-full overflow-hidden">
                <div
                  className={["h-full rounded-full", bar].join(" ")}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </RightPanelSection>

      {/* Inventory Efficiency */}
      <RightPanelSection icon={<TrendingUp size={16} strokeWidth={1.75} />} label="Efficiency">
        <div className="bg-surface-muted rounded-2xl p-5 relative overflow-hidden border border-primary/5">
          <div className="relative z-10">
            <h4 className="font-bold text-primary mb-2 font-headline text-sm">Inventory Efficiency</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Waste-to-revenue ratio improved by{" "}
              <span className="font-bold text-success">4.2%</span> this month via AI-suggested discounts.
            </p>
            <button className="mt-3 text-[11px] font-black text-primary uppercase tracking-widest hover:opacity-70 transition-opacity">
              Download Report
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-3 translate-y-3 pointer-events-none select-none">
            <TrendingUp size={72} strokeWidth={1} />
          </div>
        </div>
      </RightPanelSection>

      {/* Quick Batch Lookup */}
      <RightPanelSection icon={<Search size={16} strokeWidth={1.75} />} label="Quick Batch Lookup">
        <div className="flex flex-col gap-3">
          {quickBatchLookup.map(({ lotNo, productName }) => (
            <button
              key={lotNo}
              className="p-3 border border-border rounded-xl hover:bg-primary-light transition-colors group text-left"
            >
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold text-text-muted font-mono">{lotNo}</span>
                <ChevronRight
                  size={12}
                  strokeWidth={2}
                  className="text-text-muted group-hover:text-primary transition-colors"
                />
              </div>
              <p className="text-sm font-bold text-text-primary">{productName}</p>
            </button>
          ))}
        </div>
      </RightPanelSection>
    </>
  );
}
