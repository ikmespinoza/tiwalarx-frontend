import type { ExpiryBatchItem } from "@/lib/mock-data/inventory-expiry";

const badgeStyles: Record<ExpiryBatchItem["aiActionStyle"], string> = {
  critical: "bg-danger-light text-danger",
  discount: "bg-amber-100 text-amber-700",
  move: "bg-blue-100 text-blue-700",
  return: "bg-info-light text-info",
};

const expiryTextStyles: Record<ExpiryBatchItem["aiActionStyle"], string> = {
  critical: "text-danger",
  discount: "text-amber-700",
  move: "text-amber-700",
  return: "text-primary",
};

export function ExpiryBatchRow({ item }: { item: ExpiryBatchItem }) {
  return (
    <div className="bg-card rounded-lg p-3 shadow-sm flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold text-text-primary text-sm">{item.productName}</p>
          <p className="text-[10px] text-text-muted font-mono">BATCH: {item.batchNo}</p>
        </div>
        <span
          className={[
            "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase whitespace-nowrap",
            badgeStyles[item.aiActionStyle],
          ].join(" ")}
        >
          {item.aiAction}
        </span>
      </div>
      <div className="flex justify-between text-[12px] text-text-secondary">
        <span>
          Qty: {item.qty.toLocaleString()} {item.qtyUnit}
        </span>
        <span className={["font-bold", expiryTextStyles[item.aiActionStyle]].join(" ")}>
          Exp: {item.expiryDate}
        </span>
      </div>
    </div>
  );
}
