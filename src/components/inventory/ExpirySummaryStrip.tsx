import { Package, TriangleAlert, Sparkles } from "lucide-react";
import { summaryStats } from "@/lib/mock-data/inventory-expiry";

export function ExpirySummaryStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Active SKUs */}
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-lg bg-primary-light text-primary">
            <Package size={18} strokeWidth={1.75} />
          </span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Total Active SKUs
          </span>
        </div>
        <p className="text-2xl font-black text-text-primary font-headline">
          {summaryStats.totalActiveSKUs.toLocaleString()}
        </p>
      </div>

      {/* Expired Today */}
      <div className="bg-card p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 rounded-lg bg-error-container text-danger">
            <TriangleAlert size={18} strokeWidth={1.75} />
          </span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Expired Today
          </span>
        </div>
        <p className="text-2xl font-black text-text-primary font-headline">
          {summaryStats.expiredTodayBatches}{" "}
          <span className="text-sm font-normal text-text-muted">batches</span>
        </p>
      </div>

      {/* AI Expiry Forecast — spans 2 cols */}
      <div className="bg-card p-6 rounded-xl shadow-sm col-span-1 md:col-span-2 relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute right-[-20px] top-[-20px] opacity-5 pointer-events-none select-none">
          <Sparkles size={120} strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={16} strokeWidth={1.75} className="text-tertiary" />
            <span className="text-xs font-extrabold text-tertiary uppercase tracking-wider">
              AI Expiry Forecast
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-text-secondary font-medium">
              Predicted high-risk peak:{" "}
              <span className="font-bold text-text-primary">
                {summaryStats.aiPeakRange}
              </span>
            </p>
            <button className="text-tertiary text-xs font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
              View Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
