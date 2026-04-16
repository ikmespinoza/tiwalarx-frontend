"use client";

import { useEffect } from "react";
import { X, Printer, ShoppingCart } from "lucide-react";

interface ReceiptModalProps {
  open: boolean;
  onClose: () => void;
  onNewSale: () => void;
}

export function ReceiptModal({ open, onClose, onNewSale }: ReceiptModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card w-full h-dvh sm:h-auto sm:max-w-[480px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:max-h-[95dvh]">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-border flex-shrink-0">
          <h2 className="font-headline font-bold text-text-primary text-lg">
            Official Receipt
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Receipt body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* Pharmacy info */}
          <div className="text-center space-y-0.5">
            <p className="font-headline font-bold text-text-primary text-base">TiwalaRx SM City Branch</p>
            <p className="text-xs text-text-muted">Ground Floor SM City, Cebu City</p>
            <p className="text-xs text-text-muted">VAT Reg. TIN: 123-456-789-000</p>
          </div>

          <div className="border-t border-dashed border-border" />

          {/* Receipt meta */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-text-muted">Receipt No.</span>
              <span className="font-semibold text-text-primary">OR-2026-00142</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">Date</span>
              <span className="font-semibold text-text-primary">April 16, 2026 10:42 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">Cashier</span>
              <span className="font-semibold text-text-primary">Maria Santos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">Terminal</span>
              <span className="font-semibold text-text-primary">Counter 1</span>
            </div>
          </div>

          <div className="border-t border-dashed border-border" />

          {/* Items */}
          <div className="space-y-2">
            {[
              { name: "Biogesic 500mg Tablet", qty: 2, price: "₱90.00" },
              { name: "Solmux Advance 500mg", qty: 10, price: "₱155.00" },
              { name: "Enervon Tablet", qty: 1, price: "₱240.50" },
            ].map((item) => (
              <div key={item.name} className="flex justify-between text-xs">
                <div>
                  <p className="font-medium text-text-primary">{item.name}</p>
                  <p className="text-text-muted">×{item.qty}</p>
                </div>
                <span className="font-semibold text-text-primary">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-border" />

          {/* Totals */}
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-text-secondary">
              <span>Subtotal</span>
              <span>₱485.50</span>
            </div>
            <div className="flex justify-between text-danger">
              <span>SC/PWD Discount (20%)</span>
              <span>−₱97.10</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>VAT (12%)</span>
              <span>₱0.00 (Exempt)</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-text-primary pt-1 border-t border-border">
              <span>Total</span>
              <span>₱388.40</span>
            </div>
          </div>

          <div className="border-t border-dashed border-border" />

          {/* Payment */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-text-secondary">
              <span>Payment Method</span>
              <span className="font-semibold text-text-primary">Cash</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Amount Tendered</span>
              <span className="font-semibold text-text-primary">₱500.00</span>
            </div>
            <div className="flex justify-between font-bold text-success">
              <span>Change</span>
              <span>₱111.60</span>
            </div>
          </div>

          <div className="border-t border-dashed border-border" />

          <p className="text-center text-xs text-text-muted italic">
            Thank you for your purchase! Please come again.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-surface-muted/30 border-t border-border flex gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
          >
            Close
          </button>
          <button
            onClick={onNewSale}
            className="flex-1 px-4 py-2.5 border border-primary text-primary hover:bg-primary-light font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={15} />
            New Sale
          </button>
          <button className="flex-1 px-4 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 duration-150 flex items-center justify-center gap-2">
            <Printer size={15} />
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
