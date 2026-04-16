"use client";

import { Search, Camera, Minus, Plus, X, ShoppingCart } from "lucide-react";
import { MOCK_CART_ITEMS, MOCK_CART_TOTALS } from "@/lib/mock-data/pos";

const CATEGORIES = ["All", "Medicines", "Vitamins", "Personal Care", "Medical Supplies"];

// "search" = mobile products tab (show search, hide cart)
// "cart"   = mobile cart tab (hide search, show cart)
// "all"    = always show both (desktop default, mobile pay tab fallback)
type MobileSection = "all" | "search" | "cart";

interface ProductSearchPanelProps {
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  mobileSection?: MobileSection;
  onOpenSearch?: () => void;
}

export function ProductSearchPanel({
  activeCategory,
  onCategoryChange,
  mobileSection = "all",
  onOpenSearch,
}: ProductSearchPanelProps) {
  // On desktop (md+) both sections always show via md:block / md:flex override.
  // On mobile, mobileSection controls visibility via hidden/block/flex.
  const searchClass = mobileSection === "cart" ? "hidden md:block" : "block";
  const cartClass = mobileSection === "search" ? "hidden md:flex" : "flex";

  return (
    <div className="flex flex-col gap-3 md:gap-4 flex-1 min-h-0 overflow-hidden">
      {/* Search + Category pills */}
      <div className={`bg-card border border-border rounded-xl p-4 md:p-5 shadow-sm shrink-0 ${searchClass}`}>
        <div className="relative group">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors"
          />
          <input
            type="text"
            readOnly
            placeholder="Scan barcode or search product name..."
            onClick={onOpenSearch}
            className="w-full bg-surface-muted border border-transparent rounded-xl pl-11 pr-12 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium cursor-pointer"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors">
            <Camera size={18} />
          </button>
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-0.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
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

      {/* Cart table — flex-1 fills remaining height; md:flex always overrides hidden */}
      <div
        className={`bg-card border border-border rounded-xl flex-col flex-1 min-h-0 overflow-hidden shadow-sm ${cartClass}`}
      >
        {/* Table header */}
        <div className="bg-background px-5 py-2.5 grid grid-cols-12 text-[10px] font-bold uppercase tracking-widest text-text-secondary border-b border-border shrink-0">
          <span className="col-span-5">Product Description</span>
          <span className="col-span-2 text-center">Unit Price</span>
          <span className="col-span-2 text-center">Qty</span>
          <span className="col-span-2 text-right">Total</span>
          <span className="col-span-1" />
        </div>

        {/* Scrollable rows */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {MOCK_CART_ITEMS.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 py-12 text-text-muted">
              <ShoppingCart size={40} strokeWidth={1.5} />
              <p className="text-sm font-medium">Scan or search to add products</p>
            </div>
          ) : (
            MOCK_CART_ITEMS.map((item) => (
              <div
                key={item.id}
                className="px-5 py-3.5 grid grid-cols-12 items-center hover:bg-surface-muted/50 transition-colors border-b border-border/40 last:border-0"
              >
                <div className="col-span-5 flex flex-col">
                  <span className="font-headline font-bold text-sm text-text-primary leading-none">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-text-muted mt-0.5">{item.genericName}</span>
                </div>
                <div className="col-span-2 text-center text-sm font-medium text-text-secondary">
                  ₱{item.unitPrice.toFixed(2)}
                </div>
                <div className="col-span-2 flex justify-center items-center gap-2">
                  <button className="w-6 h-6 flex items-center justify-center rounded-full bg-surface-muted text-primary hover:bg-primary hover:text-white transition-all">
                    <Minus size={10} strokeWidth={3} />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{item.quantity}</span>
                  <button className="w-6 h-6 flex items-center justify-center rounded-full bg-surface-muted text-primary hover:bg-primary hover:text-white transition-all">
                    <Plus size={10} strokeWidth={3} />
                  </button>
                </div>
                <div className="col-span-2 text-right font-bold text-sm text-text-primary">
                  ₱{item.lineTotal.toFixed(2)}
                </div>
                <div className="col-span-1 text-right">
                  <button className="text-danger/40 hover:text-danger transition-colors">
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Totals footer */}
        <div className="px-5 py-4 bg-surface-muted/40 border-t border-border shrink-0 space-y-1.5">
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Subtotal</span>
            <span>₱{MOCK_CART_TOTALS.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-danger font-medium">
            <span>Discount ({MOCK_CART_TOTALS.discountLabel})</span>
            <span>−₱{MOCK_CART_TOTALS.discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-text-secondary">
            <span>{MOCK_CART_TOTALS.vatLabel}</span>
            <span>₱{MOCK_CART_TOTALS.vatAmount.toFixed(2)} (Exempted)</span>
          </div>
          <div className="pt-2 border-t border-border flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                Total Amount Due
              </span>
              <span className="font-headline font-extrabold text-3xl text-primary leading-none mt-0.5">
                ₱{MOCK_CART_TOTALS.grandTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                Items In Cart
              </span>
              <span className="text-xl font-bold text-text-primary">
                {MOCK_CART_TOTALS.totalUnits} Units
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
