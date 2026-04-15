import { InventoryTabs } from "@/components/inventory/InventoryTabs";
import { ExpiryManagementClient } from "@/components/inventory/ExpiryManagementClient";

export default function ExpiryManagementPage() {
  return (
    <>
      <InventoryTabs />
      <ExpiryManagementClient />
    </>
  );
}
