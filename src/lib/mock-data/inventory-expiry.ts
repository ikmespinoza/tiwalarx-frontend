export type AiActionStyle = "critical" | "discount" | "move" | "return";

export type ExpiryBatchItem = {
  id: string;
  productName: string;
  batchNo: string;
  qty: number;
  qtyUnit: string;
  expiryDate: string;
  aiAction: string;
  aiActionStyle: AiActionStyle;
};

export const criticalItems: ExpiryBatchItem[] = [
  {
    id: "1",
    productName: "Biogesic (500mg)",
    batchNo: "PH-BG2024",
    qty: 1200,
    qtyUnit: "tabs",
    expiryDate: "Oct 28, 2024",
    aiAction: "Dispose",
    aiActionStyle: "critical",
  },
  {
    id: "2",
    productName: "Solmux Capsule",
    batchNo: "SL-MX440",
    qty: 450,
    qtyUnit: "caps",
    expiryDate: "Oct 30, 2024",
    aiAction: "Discount",
    aiActionStyle: "discount",
  },
];

export const warningItems: ExpiryBatchItem[] = [
  {
    id: "3",
    productName: "Ceelin Plus Syrup 120ml",
    batchNo: "CE-PLS92",
    qty: 85,
    qtyUnit: "btls",
    expiryDate: "Dec 15, 2024",
    aiAction: "Discount 15%",
    aiActionStyle: "discount",
  },
  {
    id: "4",
    productName: "Metformin 500mg",
    batchNo: "MT-FM003",
    qty: 3000,
    qtyUnit: "tabs",
    expiryDate: "Jan 10, 2025",
    aiAction: "Move to Front",
    aiActionStyle: "move",
  },
  {
    id: "5",
    productName: "Enervon Tablet",
    batchNo: "EN-VR71",
    qty: 120,
    qtyUnit: "boxes",
    expiryDate: "Jan 22, 2025",
    aiAction: "Discount 20%",
    aiActionStyle: "discount",
  },
];

export const infoItems: ExpiryBatchItem[] = [
  {
    id: "6",
    productName: "Amoxicillin (Watsons)",
    batchNo: "AX-WT01",
    qty: 5500,
    qtyUnit: "tabs",
    expiryDate: "Mar 05, 2025",
    aiAction: "Return to Supplier",
    aiActionStyle: "return",
  },
  {
    id: "7",
    productName: "Poten-Cee Chewable",
    batchNo: "PT-CC82",
    qty: 340,
    qtyUnit: "btls",
    expiryDate: "Apr 12, 2025",
    aiAction: "Return to Supplier",
    aiActionStyle: "return",
  },
];

export const financialRisks = {
  thisMonthRisk: "₱ 42,150.00",
  oneToThreeRisk: "₱ 128,400.50",
  threeToSixRisk: "₱ 245,110.00",
};

export const summaryStats = {
  totalActiveSKUs: 2418,
  expiredTodayBatches: 14,
  aiPeakRange: "Jan 15–22, 2025",
};

export const stockHealth = {
  fresh: 78,
  nearingExpiry: 15,
  atRisk: 7,
};

export const quickBatchLookup = [
  { lotNo: "LOT-V410-X", productName: "Ascof Lagundi (600mg)" },
  { lotNo: "LOT-Z992-B", productName: "Neozep Forte" },
];

export const stockInMockRow = {
  productName: "Biogesic",
  genericName: "Paracetamol 500mg",
  batchNo: "B2026-041",
  qty: 500,
  cost: "3.50",
  expiry: "08/2026",
};
