"use client";

import { useState } from "react";
import { PosTopBar } from "./PosTopBar";
import { PosBottomBar } from "./PosBottomBar";
import { MobilePosTabBar } from "./MobilePosTabBar";
import { ProductSearchPanel } from "./ProductSearchPanel";
import { PaymentPanel, ActiveDiscount } from "./PaymentPanel";
import { ReceiptModal } from "./modals/Receipt";
import { VoidModal } from "./modals/Void";
import { AssignCustomerModal } from "./modals/AssignCustomer";
import { SearchProductModal } from "./modals/SearchProduct";
import { DiscountModal } from "./modals/Discount";
import { MOCK_CART_TOTALS } from "@/lib/mock-data/pos";

type PaymentMethod = "cash" | "gcash" | "maya" | "bank" | "credit" | "other";
type MobileTab = "products" | "cart" | "pay";
type MobileSection = "all" | "search" | "cart";


const MOBILE_SECTION: Record<MobileTab, MobileSection> = {
  products: "search",
  cart: "cart",
  pay: "all",
};

export function PosClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>("cash");
  const [tenderAmount, setTenderAmount] = useState("500.00");
  const [customerAssigned, setCustomerAssigned] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>("products");

  const [activeDiscount, setActiveDiscount] = useState<ActiveDiscount | null>(null);

  const [receiptOpen, setReceiptOpen] = useState(false);
  const [voidOpen, setVoidOpen] = useState(false);
  const [assignCustomerOpen, setAssignCustomerOpen] = useState(false);
  const [searchProductOpen, setSearchProductOpen] = useState(false);
  const [discountOpen, setDiscountOpen] = useState(false);

  const handleCompleteSale = () => setReceiptOpen(true);
  const handleNewSale = () => setReceiptOpen(false);

  return (
    // h-dvh flex-col keeps bars in flow — avoids fixed-bar padding math bugs
    <div className="h-dvh flex flex-col overflow-hidden bg-background">
      <PosTopBar />

      {/* Main two-pane area — flex-1 fills between topbar and bottombar */}
      <main className="flex-1 min-h-0 flex gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 overflow-hidden">
        {/* Left pane — 60% on desktop, full-width on mobile (products/cart tabs) */}
        <section
          className={[
            "flex flex-col gap-3 md:gap-4 overflow-hidden min-h-0",
            activeMobileTab === "pay"
              ? "hidden md:flex md:w-3/5"
              : "flex w-full md:w-3/5",
          ].join(" ")}
        >
          <ProductSearchPanel
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            mobileSection={MOBILE_SECTION[activeMobileTab]}
            onOpenSearch={() => setSearchProductOpen(true)}
          />
        </section>

        {/* Right pane — 40% on desktop, full-width on mobile (pay tab only) */}
        <aside
          className={[
            "flex flex-col gap-3 md:gap-4 overflow-hidden min-h-0",
            activeMobileTab !== "pay"
              ? "hidden md:flex md:w-2/5"
              : "flex w-full md:w-2/5",
          ].join(" ")}
        >
          <PaymentPanel
            activeMethod={activeMethod}
            onMethodChange={setActiveMethod}
            tenderAmount={tenderAmount}
            onTenderChange={setTenderAmount}
            customerAssigned={customerAssigned}
            onOpenAssignCustomer={() => setAssignCustomerOpen(true)}
            onOpenVoid={() => setVoidOpen(true)}
            onCompleteSale={handleCompleteSale}
            onOpenDiscount={() => setDiscountOpen(true)}
            activeDiscount={activeDiscount}
            onClearDiscount={() => setActiveDiscount(null)}
          />
        </aside>
      </main>

      {/* Desktop bottom shortcut bar */}
      <PosBottomBar
        onOpenSearch={() => setSearchProductOpen(true)}
        onCompleteSale={handleCompleteSale}
      />

      {/* Mobile 3-tab bar */}
      <MobilePosTabBar
        activeTab={activeMobileTab}
        onTabChange={setActiveMobileTab}
        cartItemCount={MOCK_CART_TOTALS.totalUnits}
      />

      {/* Ambient blur decorations */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-secondary-teal/5 blur-[80px] rounded-full -z-10 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      {/* Modals */}
      <ReceiptModal
        open={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        onNewSale={handleNewSale}
      />
      <VoidModal open={voidOpen} onClose={() => setVoidOpen(false)} />
      <AssignCustomerModal
        open={assignCustomerOpen}
        onClose={() => setAssignCustomerOpen(false)}
        onAssign={() => {
          setCustomerAssigned(true);
          setAssignCustomerOpen(false);
        }}
      />
      <SearchProductModal
        open={searchProductOpen}
        onClose={() => setSearchProductOpen(false)}
      />
      <DiscountModal
        open={discountOpen}
        onClose={() => setDiscountOpen(false)}
        onApply={(d) => setActiveDiscount(d as ActiveDiscount)}
      />
    </div>
  );
}
