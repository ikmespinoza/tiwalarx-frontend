export interface CartItem {
  id: string;
  name: string;
  genericName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface CartTotals {
  subtotal: number;
  discountLabel: string;
  discountAmount: number;
  vatLabel: string;
  vatAmount: number;
  grandTotal: number;
  totalUnits: number;
}

export interface CustomerResult {
  id: string;
  name: string;
  initials: string;
  phone: string;
  tier: "Bronze" | "Silver" | "Gold" | "Platinum";
  lastVisit: string;
}

export interface ProductResult {
  id: string;
  name: string;
  genericName: string;
  category: string;
  price: number;
  stock: number;
}

export const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Biogesic 500mg Tablet",
    genericName: "Paracetamol • 10 tabs/pack",
    unitPrice: 45.0,
    quantity: 2,
    lineTotal: 90.0,
  },
  {
    id: "2",
    name: "Solmux Advance 500mg",
    genericName: "Carbocisteine + Zinc • 20 caps",
    unitPrice: 15.5,
    quantity: 10,
    lineTotal: 155.0,
  },
  {
    id: "3",
    name: "Enervon Tablet",
    genericName: "Multivitamins • 30 tabs Bottle",
    unitPrice: 240.5,
    quantity: 1,
    lineTotal: 240.5,
  },
];

export const MOCK_CART_TOTALS: CartTotals = {
  subtotal: 485.5,
  discountLabel: "SC/PWD 20%",
  discountAmount: 97.1,
  vatLabel: "VAT (12%)",
  vatAmount: 0,
  grandTotal: 388.4,
  totalUnits: 13,
};

export const MOCK_CUSTOMER_SEARCH_RESULTS: CustomerResult[] = [
  {
    id: "c1",
    name: "Elena Reyes",
    initials: "ER",
    phone: "+63 917 555 1234",
    tier: "Gold",
    lastVisit: "April 10, 2026",
  },
  {
    id: "c2",
    name: "Maria Santos",
    initials: "MS",
    phone: "+63 918 555 5678",
    tier: "Silver",
    lastVisit: "April 14, 2026",
  },
  {
    id: "c3",
    name: "Carlos Garcia",
    initials: "CG",
    phone: "+63 919 555 9012",
    tier: "Bronze",
    lastVisit: "April 1, 2026",
  },
];

export const MOCK_PRODUCT_SEARCH_RESULTS: ProductResult[] = [
  {
    id: "p1",
    name: "Biogesic 500mg Tablet",
    genericName: "Paracetamol",
    category: "Medicines",
    price: 45.0,
    stock: 245,
  },
  {
    id: "p2",
    name: "Solmux Advance 500mg",
    genericName: "Carbocisteine + Zinc",
    category: "Medicines",
    price: 15.5,
    stock: 89,
  },
  {
    id: "p3",
    name: "Enervon Tablet 30s",
    genericName: "Multivitamins",
    category: "Vitamins",
    price: 240.5,
    stock: 34,
  },
  {
    id: "p4",
    name: "Ceelin 100mL Syrup",
    genericName: "Ascorbic Acid",
    category: "Vitamins",
    price: 185.0,
    stock: 57,
  },
  {
    id: "p5",
    name: "Betadine Solution 60mL",
    genericName: "Povidone-Iodine",
    category: "Medical Supplies",
    price: 98.0,
    stock: 22,
  },
];
