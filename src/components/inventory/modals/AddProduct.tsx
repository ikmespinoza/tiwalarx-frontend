"use client";

import { X, ScanBarcode } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function AddProductModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-140 bg-card/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-text-primary">
              Add New Product
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Enter product specifications to update inventory.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors text-text-muted"
            aria-label="Close"
          >
            <X size={16} strokeWidth={1.75} />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 space-y-5">
          {/* Row 1: Generic Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
              Generic Name*
            </label>
            <input
              type="text"
              placeholder="e.g. Ibuprofen + Paracetamol"
              className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          {/* Row 2: Brand + Category */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Brand Name
              </label>
              <input
                type="text"
                placeholder="e.g. Advil"
                className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Category
              </label>
              <select className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer">
                <option>Medicines</option>
                <option>Vitamins</option>
                <option>Personal Care</option>
                <option>Medical Supplies</option>
                <option>Baby Products</option>
              </select>
            </div>
          </div>

          {/* Row 3: Barcode + FDA */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Barcode
              </label>
              <div className="relative">
                <ScanBarcode
                  size={16}
                  strokeWidth={1.75}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Scanning..."
                  className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 pl-10 pr-4 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                FDA Reg No.
              </label>
              <input
                type="text"
                placeholder="e.g. DR-XY12345"
                className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          {/* Row 4: Controlled Class + Selling Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Controlled Class
              </label>
              <select className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer">
                <option>None</option>
                <option>S2</option>
                <option>S3</option>
                <option>S4</option>
                <option>OTC</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Selling Price (₱)*
              </label>
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                className="w-full bg-card border-0 ring-1 ring-border rounded-lg py-3 px-4 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          {/* Row 5: Info note + Active Status toggle */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-text-muted font-medium">
              Auto-listed on active stock arrival
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Active Status
              </span>
              {/* Visual-only toggle, defaults ON */}
              <button
                type="button"
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none"
                aria-label="Active status toggle"
              >
                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
              </button>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-lg font-semibold text-sm text-primary bg-primary-light hover:bg-primary-light/70 transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 py-3 px-6 rounded-lg font-semibold text-sm text-white bg-linear-to-br from-primary to-primary/70 hover:brightness-105 transition-all"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
