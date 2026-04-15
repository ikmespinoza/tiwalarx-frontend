import { InventoryTabs } from "@/components/inventory/InventoryTabs";

export default function InventoryPage() {
  return (
    <>
      <InventoryTabs />
      <div className="py-8 px-6">
        <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-headline">
          Products
        </h2>
        <p className="text-text-secondary text-sm mt-1">
          Product catalog coming soon.
        </p>
      </div>
    </>
  );
}
