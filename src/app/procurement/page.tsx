import { ProcurementTabs } from "@/components/procurement/_shared/ProcurementTabs";
import { PurchaseOrdersClient } from "@/components/procurement/purchase-orders/PurchaseOrdersClient";

export default function ProcurementPage() {
  return (
    <div className="space-y-6">
      <ProcurementTabs />
      <PurchaseOrdersClient />
    </div>
  );
}
