"use client";

import { X, Search, PlusCircle, Trash2 } from "lucide-react";
import { stockInMockRow } from "@/lib/mock-data/inventory-expiry";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function StockInModal({ open, onClose }: Props) {
  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-200 max-h-[90vh] bg-card rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 flex justify-between items-center bg-card">
          <h2 className="font-headline text-2xl font-bold text-text-primary">
            Stock In / Receive Inventory
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors text-text-muted"
            aria-label="Close"
          >
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-8 pb-8">
          {/* Supplier + Date */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                General Supplier
              </label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                  <option value="">Select Supplier</option>
                  <option>PharmaCore Logistics</option>
                  <option>MedLink Distribution</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-xs">
                  ▾
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Date Received
              </label>
              <input
                type="date"
                defaultValue={today}
                className="w-full bg-surface-container-low border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Line items table */}
          <div className="rounded-xl overflow-hidden bg-surface-container-low/30 border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-muted">
                  <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-headline">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-headline">
                    Batch No.
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-headline">
                    Qty
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-headline">
                    Cost (₱)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-headline w-32">
                    Expiry
                  </th>
                  <th className="py-3 px-4" />
                </tr>
              </thead>
              <tbody className="bg-card">
                {/* Pre-filled mock row */}
                <tr className="border-b border-border">
                  <td className="py-3 px-4">
                    <div className="font-semibold text-sm text-text-primary">
                      {stockInMockRow.productName}
                    </div>
                    <div className="text-[11px] text-text-muted">
                      {stockInMockRow.genericName}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      defaultValue={stockInMockRow.batchNo}
                      className="w-full bg-surface-container-low border border-border rounded-md px-2 py-1.5 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      defaultValue={stockInMockRow.qty}
                      className="w-20 bg-surface-container-low border border-border rounded-md px-2 py-1.5 text-sm text-right text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      defaultValue={stockInMockRow.cost}
                      className="w-24 bg-surface-container-low border border-border rounded-md px-2 py-1.5 text-sm text-right text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      defaultValue={stockInMockRow.expiry}
                      placeholder="MM/YYYY"
                      className="w-28 bg-surface-container-low border border-border rounded-md px-2 py-1.5 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      className="text-danger/60 hover:text-danger transition-colors"
                      aria-label="Remove row"
                    >
                      <Trash2 size={16} strokeWidth={1.75} />
                    </button>
                  </td>
                </tr>

                {/* Empty new row */}
                <tr>
                  <td className="py-3 px-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for product..."
                        className="w-full bg-card border border-primary/20 rounded-md px-3 pr-8 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/10"
                      />
                      <Search
                        size={14}
                        strokeWidth={1.75}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      placeholder="Batch #"
                      className="w-full bg-surface-container-low/50 border border-border/50 rounded-md px-2 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-20 bg-surface-container-low/50 border border-border/50 rounded-md px-2 py-1.5 text-sm text-right text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-24 bg-surface-container-low/50 border border-border/50 rounded-md px-2 py-1.5 text-sm text-right text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      placeholder="MM/YYYY"
                      className="w-28 bg-surface-container-low/50 border border-border/50 rounded-md px-2 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </td>
                  <td className="py-3 px-4 text-right opacity-20">
                    <Trash2 size={16} strokeWidth={1.75} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add Another Line */}
          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/5 px-4 py-2 rounded-lg transition-all"
          >
            <PlusCircle size={14} strokeWidth={2} />
            Add Another Line
          </button>
        </div>

        {/* Footer */}
        <div className="bg-surface-container-low px-8 py-6 border-t border-border flex items-center justify-between">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Total Items
              </span>
              <span className="text-xl font-headline font-extrabold text-text-primary">
                2
              </span>
            </div>
            <div className="flex flex-col border-l border-border pl-8">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Total Transaction Cost
              </span>
              <span className="text-xl font-headline font-extrabold text-primary">
                ₱1,750.00
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg text-sm font-bold text-text-primary hover:bg-surface-container-high transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-8 py-3 rounded-lg text-sm font-bold text-white bg-linear-to-br from-primary to-primary/70 shadow-md hover:brightness-105 transition-all"
            >
              Record Stock In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
