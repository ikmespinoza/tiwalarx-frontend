"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Eye,
  Pencil,
  Copy,
  Send,
  PackageCheck,
  X,
} from "lucide-react";
import {
  PURCHASE_ORDERS,
  PO_STATUS_STYLES,
  PO_STATUS_LABELS,
  TOTAL_PO_COUNT,
} from "@/lib/mock-data/procurement-purchase-orders";

interface MenuPos {
  top?: number;
  bottom?: number;
  right: number;
}

function ActionMenu({ poId }: { poId: string }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<MenuPos>({ top: 0, right: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (btnRef.current && btnRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function handleOpen() {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const menuHeight = 240;
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < menuHeight) {
      setPos({
        bottom: window.innerHeight - rect.top + 4,
        right: window.innerWidth - rect.right,
      });
    } else {
      setPos({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
    }
    setOpen((v) => !v);
  }

  // suppress unused var warning — poId reserved for future routing
  void poId;

  const menu = open ? (
    <div
      style={{
        position: "fixed",
        top: pos.top,
        bottom: pos.bottom,
        right: pos.right,
        width: 196,
        zIndex: 9999,
      }}
      className="bg-card border border-border rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.12)] py-1"
    >
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <Eye size={14} strokeWidth={1.75} className="text-text-secondary" />
        View Details
      </button>
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <Pencil size={14} strokeWidth={1.75} className="text-text-secondary" />
        Edit PO
      </button>
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <Copy size={14} strokeWidth={1.75} className="text-text-secondary" />
        Duplicate
      </button>
      <div className="my-1 border-t border-border" />
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <Send size={14} strokeWidth={1.75} className="text-primary" />
        Send to Supplier
      </button>
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <PackageCheck size={14} strokeWidth={1.75} className="text-success" />
        Receive Items
      </button>
      <div className="my-1 border-t border-border" />
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-danger hover:bg-danger-light transition-colors"
        onClick={() => setOpen(false)}
      >
        <X size={14} strokeWidth={1.75} />
        Cancel PO
      </button>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleOpen}
        className="p-1.5 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-light transition-colors"
      >
        <MoreVertical size={15} strokeWidth={1.75} />
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(menu, document.body)
        : null}
    </>
  );
}

function formatAmount(amount: number): string {
  return `₱${amount.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function PurchaseOrderTable() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-muted">
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest font-headline">
                PO No.
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest font-headline">
                Supplier Name
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest font-headline hidden md:table-cell">
                Branch
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary text-center uppercase tracking-widest font-headline">
                Order Date
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary text-center uppercase tracking-widest font-headline hidden lg:table-cell">
                Expected
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest font-headline">
                Total Amount
                <p>Items</p>
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary text-center uppercase tracking-widest font-headline">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest font-headline">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PURCHASE_ORDERS.map((po) => {
              const statusStyle = PO_STATUS_STYLES[po.status];
              const statusLabel = PO_STATUS_LABELS[po.status];
              return (
                <tr
                  key={po.id}
                  className="hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 font-bold text-primary text-sm">
                    {po.poNumber}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-muted flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                        {po.supplierInitials}
                      </div>
                      <span className="text-sm font-semibold text-text-primary">
                        {po.supplierName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-text-secondary hidden md:table-cell">
                    {po.branch}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-text-secondary text-center">
                    {po.orderDate}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-text-secondary text-center hidden lg:table-cell">
                    {po.expectedDelivery ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-text-primary">
                    {formatAmount(po.totalAmount)}
                    <p className="text-xs font-medium text-primary">
                      {po.itemCount} items
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {statusLabel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <ActionMenu poId={po.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-border px-6 py-4 flex items-center justify-between">
        <p className="text-xs text-text-secondary font-medium">
          Showing 1–{PURCHASE_ORDERS.length} of {TOTAL_PO_COUNT} purchase orders
        </p>
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded bg-surface-muted text-text-secondary opacity-30 cursor-not-allowed"
            disabled
          >
            <ChevronLeft size={14} strokeWidth={2} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-card border border-border text-text-secondary hover:bg-surface-muted text-xs font-bold transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-card border border-border text-text-secondary hover:bg-surface-muted text-xs font-bold transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-muted text-text-secondary hover:text-primary transition-colors">
            <ChevronRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
