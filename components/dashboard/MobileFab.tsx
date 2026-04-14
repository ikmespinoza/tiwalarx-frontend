"use client";

import { ShoppingCart } from "lucide-react";

export function MobileFab() {
  return (
    <button
      aria-label="New Sale"
      className="fixed bottom-20 right-6 lg:hidden z-[60] w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
    >
      <ShoppingCart size={24} strokeWidth={1.75} />
    </button>
  );
}
