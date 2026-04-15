import { TrendingUp, AlertTriangle, Timer } from "lucide-react";

const TREND_BARS = [
  { month: "Jan", height: 40 },
  { month: "Feb", height: 55 },
  { month: "Mar", height: 85 },
  { month: "Apr", height: 60 },
  { month: "May", height: 70 },
  { month: "Jun", height: 45 },
  { month: "Jul", height: 75 },
];

const URGENT_ITEMS = [
  {
    id: "1",
    icon: AlertTriangle,
    iconBg: "bg-danger-light",
    iconColor: "text-danger",
    wrapperBg: "bg-danger-light/50",
    title: "Payment Due: Zuellig",
    subtitle: "₱45,200.00 due in 2 days",
    titleColor: "text-danger",
    subtitleColor: "text-danger/80",
  },
  {
    id: "2",
    icon: Timer,
    iconBg: "bg-warning-light",
    iconColor: "text-warning",
    wrapperBg: "bg-warning-light/50",
    title: "Delayed: Metro Drug",
    subtitle: "PO #88219 — 2 days late",
    titleColor: "text-warning",
    subtitleColor: "text-warning/80",
  },
];

export function SupplierInsightCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Procurement Trend */}
      <div className="lg:col-span-2 bg-primary-light/40 rounded-xl p-6 relative overflow-hidden">
        <h3 className="text-base font-bold font-headline text-text-primary mb-5 flex items-center gap-2">
          <TrendingUp size={17} strokeWidth={1.75} className="text-primary" />
          Procurement Trend
        </h3>

        {/* Bar chart */}
        <div className="h-40 flex items-end justify-between gap-2 px-1">
          {TREND_BARS.map((bar) => (
            <div key={bar.month} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-primary/30 hover:bg-primary/60 transition-colors"
                style={{ height: `${bar.height}%` }}
                title={bar.month}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1 px-1">
          {TREND_BARS.map((bar) => (
            <span
              key={bar.month}
              className="flex-1 text-center text-[10px] font-bold text-text-muted uppercase"
            >
              {bar.month}
            </span>
          ))}
        </div>
      </div>

      {/* Urgent Attention */}
      <div className="bg-card rounded-xl border border-border p-6 flex flex-col justify-between shadow-sm">
        <div>
          <h3 className="text-xs font-bold font-headline text-text-muted uppercase tracking-widest mb-4">
            Urgent Attention
          </h3>
          <div className="space-y-3">
            {URGENT_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-xl ${item.wrapperBg}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    <Icon size={16} strokeWidth={1.75} className={item.iconColor} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${item.titleColor}`}>
                      {item.title}
                    </p>
                    <p className={`text-[11px] ${item.subtitleColor}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="mt-5 w-full py-2 rounded-xl border-2 border-dashed border-border text-text-muted text-xs font-bold hover:border-primary/40 hover:text-primary transition-colors">
          View All Alerts
        </button>
      </div>
    </div>
  );
}
