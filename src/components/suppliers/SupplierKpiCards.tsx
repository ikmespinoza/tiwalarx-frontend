import {
  Users,
  CheckCircle,
  Clock,
  CreditCard,
} from "lucide-react";
import {
  TOTAL_SUPPLIERS,
  ACTIVE_SUPPLIERS,
  AVG_LEAD_TIME,
  OUTSTANDING_PAYABLES,
} from "@/lib/mock-data/suppliers";

export function SupplierKpiCards() {
  const payables = OUTSTANDING_PAYABLES.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Suppliers */}
      <div className="bg-card rounded-xl border border-border p-6 relative">
        <div className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center">
          <Users size={17} strokeWidth={1.75} className="text-primary" />
        </div>
        <p className="text-sm text-text-secondary font-medium mb-1">
          Total Suppliers
        </p>
        <p className="text-3xl font-bold font-headline text-text-primary">
          {TOTAL_SUPPLIERS}
        </p>
      </div>

      {/* Active */}
      <div className="bg-card rounded-xl border border-border p-6 relative">
        <div className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-success-light flex items-center justify-center">
          <CheckCircle size={17} strokeWidth={1.75} className="text-success" />
        </div>
        <p className="text-sm text-text-secondary font-medium mb-1">Active</p>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold font-headline text-text-primary">
            {ACTIVE_SUPPLIERS}
          </p>
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>

      {/* Avg Lead Time */}
      <div className="bg-card rounded-xl border border-border p-6 relative">
        <div className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-warning-light flex items-center justify-center">
          <Clock size={17} strokeWidth={1.75} className="text-warning" />
        </div>
        <p className="text-sm text-text-secondary font-medium mb-1">
          Avg Lead Time
        </p>
        <p className="text-3xl font-bold font-headline text-text-primary">
          {AVG_LEAD_TIME}{" "}
          <span className="text-base font-normal text-text-muted">days</span>
        </p>
      </div>

      {/* Outstanding Payables */}
      <div className="bg-card rounded-xl border border-border p-6 relative">
        <div className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-danger-light flex items-center justify-center">
          <CreditCard size={17} strokeWidth={1.75} className="text-danger" />
        </div>
        <p className="text-sm text-text-secondary font-medium mb-1">
          Outstanding Payables
        </p>
        <p className="text-2xl font-bold font-headline text-danger">
          {payables}
        </p>
      </div>
    </div>
  );
}
