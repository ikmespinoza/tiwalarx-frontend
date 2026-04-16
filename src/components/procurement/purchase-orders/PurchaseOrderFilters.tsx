"use client";

import { PlusCircle, Upload, Download, ChevronDown, Calendar } from "lucide-react";

export function PurchaseOrderFilters() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm shadow-primary/20 hover:opacity-90 transition-opacity">
          <PlusCircle size={16} strokeWidth={2} />
          Create Purchase Order
        </button>
        <button className="px-5 py-2.5 border border-border text-text-primary rounded-lg text-sm font-semibold hover:bg-surface-muted transition-colors flex items-center gap-2">
          <Upload size={16} strokeWidth={1.75} />
          Import PO (CSV)
        </button>
        <button className="px-5 py-2.5 border border-border text-text-primary rounded-lg text-sm font-semibold hover:bg-surface-muted transition-colors flex items-center gap-2">
          <Download size={16} strokeWidth={1.75} />
          Export
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 p-1.5 bg-surface-muted rounded-xl">
        <div className="relative">
          <select className="appearance-none bg-card border border-border rounded-lg py-1.5 pl-3 pr-8 text-xs font-semibold text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
            <option>All Status</option>
            <option>Draft</option>
            <option>Pending Approval</option>
            <option>Approved</option>
            <option>Sent to Supplier</option>
            <option>Partially Received</option>
            <option>Fully Received</option>
            <option>Cancelled</option>
          </select>
          <ChevronDown
            size={12}
            strokeWidth={2}
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-card border border-border rounded-lg py-1.5 pl-3 pr-8 text-xs font-semibold text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
            <option>All Suppliers</option>
            <option>Zuellig Pharma</option>
            <option>Metro Drug Distribution</option>
            <option>DKSH Philippines</option>
            <option>PhilPharma Corp.</option>
            <option>Mercury Drug Wholesale</option>
            <option>Unilab Direct</option>
          </select>
          <ChevronDown
            size={12}
            strokeWidth={2}
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary"
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-card rounded-lg border border-border cursor-pointer">
          <Calendar size={12} strokeWidth={1.75} className="text-text-secondary" />
          <span className="text-xs font-semibold text-text-secondary">Apr 01 – Apr 30</span>
        </div>
      </div>
    </div>
  );
}
