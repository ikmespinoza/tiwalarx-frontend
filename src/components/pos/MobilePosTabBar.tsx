"use client";

import { Search, ShoppingCart, CreditCard } from "lucide-react";

type MobileTab = "products" | "cart" | "pay";

interface MobilePosTabBarProps {
  activeTab: MobileTab;
  onTabChange: (tab: MobileTab) => void;
  cartItemCount: number;
}

const TABS: { id: MobileTab; label: string; icon: React.ReactNode }[] = [
  { id: "products", label: "Products", icon: <Search size={20} /> },
  { id: "cart", label: "Cart", icon: <ShoppingCart size={20} /> },
  { id: "pay", label: "Pay", icon: <CreditCard size={20} /> },
];

export function MobilePosTabBar({ activeTab, onTabChange, cartItemCount }: MobilePosTabBarProps) {
  return (
    <nav className="shrink-0 h-16 bg-white/90 backdrop-blur-xl border-t border-border flex md:hidden items-stretch">
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 relative transition-colors ${
              isActive ? "text-primary" : "text-text-muted"
            }`}
          >
            <span className="relative">
              {tab.icon}
              {tab.id === "cart" && cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center px-1">
                  {cartItemCount}
                </span>
              )}
            </span>
            <span className="text-[10px] font-headline font-bold uppercase tracking-widest">
              {tab.label}
            </span>
            {isActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-b-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
