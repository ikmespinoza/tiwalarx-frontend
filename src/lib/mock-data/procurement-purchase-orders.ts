export type PoStatus =
  | "sent_to_supplier"
  | "partially_received"
  | "fully_received"
  | "pending_approval"
  | "approved"
  | "draft"
  | "cancelled";

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplierName: string;
  supplierInitials: string;
  branch: string;
  orderDate: string;
  expectedDelivery: string | null;
  itemCount: number;
  totalAmount: number;
  status: PoStatus;
  createdBy: string;
  approvedBy: string | null;
}

export const PURCHASE_ORDERS: PurchaseOrder[] = [
  {
    id: "po-2026-0042",
    poNumber: "PO-2026-0042",
    supplierName: "Zuellig Pharma",
    supplierInitials: "ZP",
    branch: "TiwalaRx Main",
    orderDate: "Apr 10, 2026",
    expectedDelivery: "Apr 17, 2026",
    itemCount: 12,
    totalAmount: 45230.0,
    status: "sent_to_supplier",
    createdBy: "Maria Santos",
    approvedBy: "Juan dela Cruz Jr.",
  },
  {
    id: "po-2026-0041",
    poNumber: "PO-2026-0041",
    supplierName: "Metro Drug Distribution",
    supplierInitials: "MD",
    branch: "TiwalaRx Main",
    orderDate: "Apr 9, 2026",
    expectedDelivery: "Apr 14, 2026",
    itemCount: 8,
    totalAmount: 23100.0,
    status: "partially_received",
    createdBy: "Carlos Garcia",
    approvedBy: "Juan dela Cruz Jr.",
  },
  {
    id: "po-2026-0040",
    poNumber: "PO-2026-0040",
    supplierName: "DKSH Philippines",
    supplierInitials: "DK",
    branch: "TiwalaRx Poblacion",
    orderDate: "Apr 8, 2026",
    expectedDelivery: "Apr 15, 2026",
    itemCount: 5,
    totalAmount: 12780.0,
    status: "fully_received",
    createdBy: "Elena Reyes",
    approvedBy: "Maria Santos",
  },
  {
    id: "po-2026-0039",
    poNumber: "PO-2026-0039",
    supplierName: "PhilPharma Corp.",
    supplierInitials: "PP",
    branch: "TiwalaRx Main",
    orderDate: "Apr 7, 2026",
    expectedDelivery: null,
    itemCount: 3,
    totalAmount: 8900.0,
    status: "pending_approval",
    createdBy: "Ricardo Bautista",
    approvedBy: null,
  },
  {
    id: "po-2026-0038",
    poNumber: "PO-2026-0038",
    supplierName: "Mercury Drug Wholesale",
    supplierInitials: "MW",
    branch: "TiwalaRx SM City",
    orderDate: "Apr 5, 2026",
    expectedDelivery: "Apr 12, 2026",
    itemCount: 15,
    totalAmount: 67450.0,
    status: "fully_received",
    createdBy: "Lourdes Aquino",
    approvedBy: "Antonio Villanueva",
  },
  {
    id: "po-2026-0037",
    poNumber: "PO-2026-0037",
    supplierName: "Zuellig Pharma",
    supplierInitials: "ZP",
    branch: "TiwalaRx Main",
    orderDate: "Apr 3, 2026",
    expectedDelivery: null,
    itemCount: 6,
    totalAmount: 18200.0,
    status: "draft",
    createdBy: "Maria Santos",
    approvedBy: null,
  },
  {
    id: "po-2026-0036",
    poNumber: "PO-2026-0036",
    supplierName: "Unilab Direct",
    supplierInitials: "UD",
    branch: "TiwalaRx Main",
    orderDate: "Apr 1, 2026",
    expectedDelivery: "Apr 8, 2026",
    itemCount: 10,
    totalAmount: 34560.0,
    status: "fully_received",
    createdBy: "Carlos Garcia",
    approvedBy: "Juan dela Cruz Jr.",
  },
  {
    id: "po-2026-0035",
    poNumber: "PO-2026-0035",
    supplierName: "Metro Drug Distribution",
    supplierInitials: "MD",
    branch: "TiwalaRx Poblacion",
    orderDate: "Mar 28, 2026",
    expectedDelivery: null,
    itemCount: 4,
    totalAmount: 9870.0,
    status: "cancelled",
    createdBy: "Elena Reyes",
    approvedBy: null,
  },
];

export const PO_STATUS_STYLES: Record<PoStatus, { bg: string; text: string }> =
  {
    sent_to_supplier: { bg: "bg-secondary-teal/10", text: "text-secondary-teal" },
    partially_received: { bg: "bg-info/10", text: "text-info" },
    fully_received: { bg: "bg-success/10", text: "text-success" },
    pending_approval: { bg: "bg-warning/10", text: "text-warning" },
    approved: { bg: "bg-primary/10", text: "text-primary" },
    draft: { bg: "bg-text-muted/10", text: "text-text-secondary" },
    cancelled: { bg: "bg-danger/10", text: "text-danger" },
  };

export const PO_STATUS_LABELS: Record<PoStatus, string> = {
  sent_to_supplier: "Sent to Supplier",
  partially_received: "Partially Received",
  fully_received: "Fully Received",
  pending_approval: "Pending Approval",
  approved: "Approved",
  draft: "Draft",
  cancelled: "Cancelled",
};

export const ACTIVE_POS = 7;
export const AWAITING_APPROVAL = 3;
export const PENDING_DELIVERY = 4;
export const PARTIALLY_RECEIVED = 2;
export const MONTHLY_VOLUME = 187450;
export const MONTHLY_TREND = "+12.4% vs last month";
export const TOTAL_PO_COUNT = 42;
