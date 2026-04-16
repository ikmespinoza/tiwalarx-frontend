import {
  ClipboardList,
  Truck,
  Package,
  TrendingUp,
  FileCheckCorner,
} from "lucide-react";
import {
  ACTIVE_POS,
  AWAITING_APPROVAL,
  MONTHLY_TREND,
  MONTHLY_VOLUME,
  PARTIALLY_RECEIVED,
  PENDING_DELIVERY,
} from "@/lib/mock-data/procurement-purchase-orders";

export function PurchaseOrderKpiCards() {
  const monthlyFormatted = `₱${MONTHLY_VOLUME.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {/* Active POs */}
      <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-0.5 transition-transform">
        <span className="absolute top-4 right-4 text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full uppercase tracking-wider">
          Active
        </span>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <FileCheckCorner size={25} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-text-primary leading-none">
              {ACTIVE_POS}
            </p>
            <p className="text-xs text-text-secondary font-medium mt-1">
              Active POs
            </p>
          </div>
        </div>
      </div>

      {/* Awaiting Approval */}
      <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-0.5 transition-transform">
        <span className="absolute top-4 right-4 text-[10px] font-bold text-danger px-2 py-1 bg-danger/10 rounded-full uppercase tracking-wider">
          Urgent
        </span>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-danger/10 flex items-center justify-center text-danger">
            <ClipboardList size={25} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-text-primary leading-none">
              {AWAITING_APPROVAL}
            </p>
            <p className="text-xs text-text-secondary font-medium mt-1">
              Awaiting Approval
            </p>
          </div>
        </div>
      </div>

      {/* Pending Delivery */}
      <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-0.5 transition-transform">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-secondary-teal/10 flex items-center justify-center text-secondary-teal">
            <Truck size={25} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-text-primary leading-none">
              {PENDING_DELIVERY}
            </p>
            <p className="text-xs text-text-secondary font-medium mt-1">
              Pending Delivery
            </p>
          </div>
        </div>
      </div>

      {/* Partially Received */}
      <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-0.5 transition-transform">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center text-info">
            <Package size={25} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-text-primary leading-none">
              {PARTIALLY_RECEIVED}
            </p>
            <p className="text-xs text-text-secondary font-medium mt-1">
              Partially Received
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Volume */}
      <div className="relative bg-card rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-0.5 transition-transform overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center text-success">
            <TrendingUp size={25} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-text-primary leading-none">
              {monthlyFormatted}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={14} strokeWidth={2} className="text-success" />
              <span className="text-[11px] font-bold text-success">
                {MONTHLY_TREND}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
