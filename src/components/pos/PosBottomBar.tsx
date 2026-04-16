"use client";

import { CreditCard, Search, PauseCircle, Settings } from "lucide-react";

interface PosBottomBarProps {
  onOpenSearch: () => void;
  onCompleteSale: () => void;
}

export function PosBottomBar({ onOpenSearch, onCompleteSale }: PosBottomBarProps) {
  return (
    <nav className="shrink-0 h-16 bg-white/80 backdrop-blur-xl border-t border-border px-4 hidden md:flex items-center justify-around shadow-[0_-4px_16px_rgba(15,23,42,0.06)]">
      <button
        onClick={onCompleteSale}
        className="flex flex-col items-center justify-center bg-linear-to-br from-primary to-[#2563EB] text-white rounded-xl px-6 py-2 active:scale-95 transition-transform duration-150"
      >
        <CreditCard size={18} />
        <span className="text-[10px] font-headline font-bold uppercase tracking-widest mt-0.5">
          Checkout (F12)
        </span>
      </button>

      <button
        onClick={onOpenSearch}
        className="flex flex-col items-center justify-center text-text-primary/60 hover:text-text-primary hover:bg-surface-muted rounded-xl px-6 py-2 transition-colors"
      >
        <Search size={18} />
        <span className="text-[10px] font-headline font-bold uppercase tracking-widest mt-0.5">
          Search (F9)
        </span>
      </button>

      <button className="flex flex-col items-center justify-center text-text-primary/60 hover:text-text-primary hover:bg-surface-muted rounded-xl px-6 py-2 transition-colors">
        <PauseCircle size={18} />
        <span className="text-[10px] font-headline font-bold uppercase tracking-widest mt-0.5">
          Hold (F8)
        </span>
      </button>

      <button className="flex flex-col items-center justify-center text-text-primary/60 hover:text-text-primary hover:bg-surface-muted rounded-xl px-6 py-2 transition-colors">
        <Settings size={18} />
        <span className="text-[10px] font-headline font-bold uppercase tracking-widest mt-0.5">
          Settings
        </span>
      </button>
    </nav>
  );
}
