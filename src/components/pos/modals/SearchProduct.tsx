"use client";

import { useEffect, useState } from "react";
import { X, Search } from "lucide-react";
import { MOCK_PRODUCT_SEARCH_RESULTS } from "@/lib/mock-data/pos";

const CATEGORIES = ["All", "Medicines", "Vitamins", "Personal Care", "Medical Supplies"];

const CATEGORY_STYLES: Record<string, string> = {
  Medicines: "bg-primary-light text-primary",
  Vitamins: "bg-[#DCFCE7] text-[#16A34A]",
  "Personal Care": "bg-[#EDE9FE] text-[#7C3AED]",
  "Medical Supplies": "bg-[#FEF3C7] text-[#D97706]",
};

interface SearchProductModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchProductModal({ open, onClose }: SearchProductModalProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card w-full sm:max-w-[720px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90dvh] sm:max-h-[85dvh]">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-start border-b border-border flex-shrink-0">
          <div>
            <h2 className="font-headline font-bold text-text-primary text-lg">
              Search Product
            </h2>
            <p className="text-text-secondary text-sm mt-0.5">
              Search by product name, generic name, or barcode.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search + Pills */}
        <div className="px-6 py-4 border-b border-border flex-shrink-0 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              autoFocus
              placeholder="Search by product name, generic name, or barcode..."
              className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface-muted text-text-secondary hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {/* Header row */}
          <div className="px-6 py-2 grid grid-cols-12 text-[10px] font-bold uppercase tracking-widest text-text-secondary bg-background border-b border-border">
            <span className="col-span-5">Product</span>
            <span className="col-span-3">Category</span>
            <span className="col-span-2 text-right">Price</span>
            <span className="col-span-2 text-right">Stock</span>
          </div>

          {MOCK_PRODUCT_SEARCH_RESULTS.map((product) => (
            <button
              key={product.id}
              onClick={onClose}
              className="w-full px-6 py-3.5 grid grid-cols-12 items-center hover:bg-primary-light/30 transition-colors border-b border-border/50 last:border-0 text-left"
            >
              <div className="col-span-5">
                <p className="font-headline font-semibold text-sm text-text-primary leading-none">
                  {product.name}
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">{product.genericName}</p>
              </div>
              <div className="col-span-3">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    CATEGORY_STYLES[product.category] ?? "bg-surface-muted text-text-secondary"
                  }`}
                >
                  {product.category}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-semibold text-sm text-text-primary">
                  ₱{product.price.toFixed(2)}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={`text-xs font-semibold ${
                    product.stock <= 30 ? "text-warning" : "text-success"
                  }`}
                >
                  {product.stock}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
