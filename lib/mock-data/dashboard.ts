export const kpiData = {
  revenue: {
    value: "₱125,450.00",
    trend: "+12% vs yesterday",
    trendPositive: true,
  },
  transactions: {
    value: "342",
    sub: "Last: 2 mins ago",
  },
  lowStock: {
    value: "18",
    badge: "WARNING",
  },
  expiringSoon: {
    value: "12",
    badge: "CRITICAL",
  },
  pendingPayroll: {
    value: "4 items",
    badge: "INFO",
  },
};

export const revenueTrend: { day: string; value: number }[] = [
  { day: "Oct 01", value: 85000 },
  { day: "Oct 02", value: 92000 },
  { day: "Oct 03", value: 78000 },
  { day: "Oct 04", value: 105000 },
  { day: "Oct 05", value: 98000 },
  { day: "Oct 06", value: 115000 },
  { day: "Oct 07", value: 125000 },
  { day: "Oct 08", value: 89000 },
  { day: "Oct 09", value: 97000 },
  { day: "Oct 10", value: 112000 },
  { day: "Oct 11", value: 103000 },
  { day: "Oct 12", value: 118000 },
  { day: "Oct 13", value: 95000 },
  { day: "Oct 14", value: 130000 },
  { day: "Oct 15", value: 122000 },
  { day: "Oct 16", value: 108000 },
  { day: "Oct 17", value: 135000 },
  { day: "Oct 18", value: 99000 },
  { day: "Oct 19", value: 114000 },
  { day: "Oct 20", value: 141000 },
  { day: "Oct 21", value: 126000 },
  { day: "Oct 22", value: 109000 },
  { day: "Oct 23", value: 138000 },
  { day: "Oct 24", value: 119000 },
  { day: "Oct 25", value: 145000 },
  { day: "Oct 26", value: 132000 },
  { day: "Oct 27", value: 117000 },
  { day: "Oct 28", value: 128000 },
  { day: "Oct 29", value: 142000 },
  { day: "Oct 30", value: 125450 },
];

export const salesByCategory: { label: string; percent: number; color: string }[] = [
  { label: "Medicines", percent: 40, color: "#3B82F6" },
  { label: "Vitamins", percent: 25, color: "#8B5CF6" },
  { label: "Personal Care", percent: 20, color: "#06B6D4" },
  { label: "Others", percent: 15, color: "#E2E8F0" },
];

export const recentTransactions: {
  time: string;
  receipt: string;
  total: string;
  status: "Paid" | "Pending" | "Voided";
}[] = [
  { time: "14:22", receipt: "#TRX-8902", total: "₱1,250.00", status: "Paid" },
  { time: "14:05", receipt: "#TRX-8901", total: "₱450.50", status: "Paid" },
  { time: "13:58", receipt: "#TRX-8900", total: "₱2,890.00", status: "Pending" },
  { time: "13:31", receipt: "#TRX-8899", total: "₱670.00", status: "Paid" },
  { time: "13:10", receipt: "#TRX-8898", total: "₱385.00", status: "Voided" },
];

export const aiInsights: {
  module: string;
  severity: "danger" | "secondary" | "warning" | "info";
  message: string;
}[] = [
  {
    module: "INVENTORY",
    severity: "danger",
    message: "Metformin stocks will deplete in 4 days at current rate.",
  },
  {
    module: "SALES",
    severity: "secondary",
    message: "32% increase in Pediatric Vitamin sales this week.",
  },
];

export const expiryWatchlist: {
  name: string;
  expiry: string;
  action: "Discount" | "Return" | "Dispose";
  urgent: boolean;
}[] = [
  {
    name: "Biogesic 500mg (100s)",
    expiry: "Oct 20, 2024",
    action: "Discount",
    urgent: true,
  },
  {
    name: "Amoxicillin 250mg",
    expiry: "Nov 12, 2024",
    action: "Return",
    urgent: false,
  },
];
