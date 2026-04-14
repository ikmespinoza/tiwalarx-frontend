"use client";

import { ShoppingCart, PackagePlus, UserPlus, CreditCard, FileText } from "lucide-react";

export function QuickActionsBar() {
  return (
    <div className="hidden lg:block fixed bottom-0 left-60 right-0 p-6 z-50">
      <div className="bg-surface/60 backdrop-blur-2xl rounded-2xl p-4 shadow-lg flex items-center justify-between border border-border/40">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
            <ShoppingCart size={15} strokeWidth={1.75} />
            New Sale
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-muted transition-colors">
            <PackagePlus size={15} strokeWidth={1.75} />
            Stock In
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-muted transition-colors">
            <UserPlus size={15} strokeWidth={1.75} />
            Add Customer
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-muted transition-colors">
            <CreditCard size={15} strokeWidth={1.75} />
            Run Payroll
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm font-medium hover:bg-surface-muted transition-colors">
            <FileText size={15} strokeWidth={1.75} />
            Report
          </button>
        </div>
      </div>
    </div>
  );
}
