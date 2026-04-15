import type { Supplier } from "@/lib/mock-data/suppliers";

interface SupplierMetaCardProps {
  supplier: Supplier;
}

const COMPLIANCE_STYLES: Record<
  Supplier["complianceStatus"],
  { bg: string; text: string; label: string }
> = {
  verified: {
    bg: "bg-success-light",
    text: "text-success",
    label: "Verified",
  },
  pending: {
    bg: "bg-warning-light",
    text: "text-warning",
    label: "Pending",
  },
  expired: {
    bg: "bg-danger-light",
    text: "text-danger",
    label: "Expired",
  },
};

export default function SupplierMetaCard({ supplier }: SupplierMetaCardProps) {
  const compliance = COMPLIANCE_STYLES[supplier.complianceStatus];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="text-text-secondary">Last Purchased</span>
        <span className="font-semibold text-text-primary">
          {supplier.lastPurchased}
        </span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-text-secondary">Pending Orders</span>
        <span className="font-semibold text-text-primary">
          {supplier.pendingOrders} PO{supplier.pendingOrders !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-text-secondary">Compliance Status</span>
        <span
          className={`${compliance.bg} ${compliance.text} text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full`}
        >
          {compliance.label}
        </span>
      </div>
    </div>
  );
}
