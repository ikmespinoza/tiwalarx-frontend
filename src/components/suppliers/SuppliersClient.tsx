"use client";

import { Download, Plus } from "lucide-react";
import { SupplierKpiCards } from "./SupplierKpiCards";
import { SupplierFilters } from "./SupplierFilters";
import { SupplierTable } from "./SupplierTable";
import { SupplierInsightCards } from "./SupplierInsightCards";

export function SuppliersClient() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-headline text-text-primary">
            Suppliers
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Manage your pharmaceutical distribution partners and procurement
            pipeline.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-colors">
            <Download size={15} strokeWidth={1.75} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Plus size={15} strokeWidth={1.75} />
            Add Supplier
          </button>
        </div>
      </div>

      <SupplierKpiCards />
      <SupplierFilters />
      <SupplierTable />
      <SupplierInsightCards />
    </div>
  );
}
