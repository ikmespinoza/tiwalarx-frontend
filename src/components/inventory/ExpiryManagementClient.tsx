"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { ExpiryRiskGrid } from "./ExpiryRiskGrid";
import { ExpirySummaryStrip } from "./ExpirySummaryStrip";
import { AddProductModal } from "./modals/AddProduct";
import { StockInModal } from "./modals/StockIn";

export function ExpiryManagementClient() {
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [stockInOpen, setStockInOpen] = useState(false);

  return (
    <div>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight font-headline">
            Inventory Expiry
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            Reviewing high-risk stock based on AI forecasting.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-lg border border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-all flex items-center gap-2">
            <Download size={16} strokeWidth={1.75} />
            Export CSV
          </button>
          <button
            onClick={() => setAddProductOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-primary-light text-primary text-sm font-semibold hover:bg-primary-light/70 transition-all"
          >
            Add Product
          </button>
          <button
            onClick={() => setStockInOpen(true)}
            className="px-6 py-2.5 rounded-lg bg-linear-to-br from-primary to-primary/70 text-white text-sm font-semibold shadow-sm hover:brightness-105 transition-all flex items-center gap-2"
          >
            Stock In
          </button>
        </div>
      </div>

      {/* Expiry risk bento grid */}
      <ExpiryRiskGrid />

      {/* Summary footer strip */}
      <ExpirySummaryStrip />

      {/* Modals */}
      <AddProductModal
        open={addProductOpen}
        onClose={() => setAddProductOpen(false)}
      />
      <StockInModal open={stockInOpen} onClose={() => setStockInOpen(false)} />
    </div>
  );
}
