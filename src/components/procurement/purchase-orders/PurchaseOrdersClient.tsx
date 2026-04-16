import { PurchaseOrderKpiCards } from "./PurchaseOrderKpiCards";
import { PurchaseOrderFilters } from "./PurchaseOrderFilters";
import { PurchaseOrderTable } from "./PurchaseOrderTable";

export function PurchaseOrdersClient() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary font-headline">
          Purchase Orders
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Manage order creation, tracking, and fulfillment across your supply
          chain.
        </p>
      </div>
      <PurchaseOrderKpiCards />
      <PurchaseOrderFilters />
      <PurchaseOrderTable />
    </div>
  );
}
