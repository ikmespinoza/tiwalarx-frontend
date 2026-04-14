import { kpiData } from "@/lib/mock-data/dashboard";

export function KpiCards({ className }: { className?: string }) {
  return (
    <div
      className={[
        "flex gap-4 overflow-x-auto snap-x no-scrollbar",
        "sm:grid sm:grid-cols-2 sm:overflow-visible",
        "md:grid-cols-3",
        "xl:grid-cols-5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Today's Revenue */}
      <div className="flex-shrink-0 min-w-[200px] snap-start bg-card border border-border rounded-xl p-5 hover:scale-[1.02] transition-all">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Today&apos;s Revenue
        </p>
        <p className="font-headline font-bold text-2xl text-text-primary">
          {kpiData.revenue.value}
        </p>
        <p className="mt-1 text-xs text-success font-medium">
          {kpiData.revenue.trend}
        </p>
      </div>

      {/* Transactions Today */}
      <div className="flex-shrink-0 min-w-[200px] snap-start bg-card border border-border rounded-xl p-5 hover:scale-[1.02] transition-all">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Transactions Today
        </p>
        <p className="font-headline font-bold text-2xl text-text-primary">
          {kpiData.transactions.value}
        </p>
        <p className="mt-1 text-xs text-text-secondary">
          {kpiData.transactions.sub}
        </p>
      </div>

      {/* Low Stock Items */}
      <div className="flex-shrink-0 min-w-[200px] snap-start bg-card border border-border rounded-xl p-5 hover:scale-[1.02] transition-all">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Low Stock Items
        </p>
        <p className="font-headline font-bold text-2xl text-text-primary">
          {kpiData.lowStock.value}
        </p>
        <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-warning-light text-warning">
          {kpiData.lowStock.badge}
        </span>
      </div>

      {/* Expiring Soon */}
      <div className="flex-shrink-0 min-w-[200px] snap-start bg-card border border-border rounded-xl p-5 hover:scale-[1.02] transition-all">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Expiring Soon
        </p>
        <p className="font-headline font-bold text-2xl text-destructive">
          {kpiData.expiringSoon.value}
        </p>
        <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-danger-light text-danger">
          {kpiData.expiringSoon.badge}
        </span>
      </div>

      {/* Pending Payroll */}
      <div className="flex-shrink-0 min-w-[200px] snap-start bg-card border border-border rounded-xl p-5 hover:scale-[1.02] transition-all">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">
          Pending Payroll
        </p>
        <p className="font-headline font-bold text-2xl text-info">
          {kpiData.pendingPayroll.value}
        </p>
        <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-info-light text-info">
          {kpiData.pendingPayroll.badge}
        </span>
      </div>
    </div>
  );
}
