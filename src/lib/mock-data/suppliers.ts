export interface SupplierContact {
  name: string;
  role: string;
  phone: string;
  email: string;
}

export interface Supplier {
  id: string;
  distributorId: string;
  name: string;
  isPreferred: boolean;
  primaryContact: SupplierContact | null;
  paymentTerms: "COD" | "Net 7" | "Net 15" | "Net 30" | "Net 60";
  leadTimeDays: number;
  activePOs: number;
  purchasesYTD: number;
  status: "active" | "inactive";
}

export const SUPPLIERS: Supplier[] = [
  {
    id: "1",
    distributorId: "ZU-99210",
    name: "Zuellig Pharma Inc.",
    isPreferred: true,
    primaryContact: {
      name: "Ana Reyes",
      role: "Account Manager",
      phone: "+63 917 555 0101",
      email: "ana.reyes@zuellig.com",
    },
    paymentTerms: "Net 30",
    leadTimeDays: 5,
    activePOs: 2,
    purchasesYTD: 128450,
    status: "active",
  },
  {
    id: "2",
    distributorId: "MD-44320",
    name: "Metro Drug Distribution Inc.",
    isPreferred: true,
    primaryContact: {
      name: "Roberto Santos",
      role: "Sales Rep",
      phone: "+63 918 555 0202",
      email: "r.santos@metrodrug.com",
    },
    paymentTerms: "Net 15",
    leadTimeDays: 3,
    activePOs: 1,
    purchasesYTD: 67200,
    status: "active",
  },
  {
    id: "3",
    distributorId: "DK-88100",
    name: "DKSH Philippines Inc.",
    isPreferred: false,
    primaryContact: null,
    paymentTerms: "Net 30",
    leadTimeDays: 7,
    activePOs: 1,
    purchasesYTD: 45780,
    status: "active",
  },
  {
    id: "4",
    distributorId: "UL-55500",
    name: "Unilab Direct",
    isPreferred: false,
    primaryContact: {
      name: "Cherry Tan",
      role: "Key Accounts",
      phone: "+63 919 555 0404",
      email: "cherry.tan@unilab.com",
    },
    paymentTerms: "Net 30",
    leadTimeDays: 4,
    activePOs: 0,
    purchasesYTD: 34560,
    status: "active",
  },
  {
    id: "5",
    distributorId: "PP-33010",
    name: "PhilPharma Corp.",
    isPreferred: false,
    primaryContact: null,
    paymentTerms: "COD",
    leadTimeDays: 2,
    activePOs: 1,
    purchasesYTD: 18900,
    status: "active",
  },
  {
    id: "6",
    distributorId: "MW-77000",
    name: "Mercury Drug Wholesale",
    isPreferred: true,
    primaryContact: {
      name: "Luis Garcia",
      role: "Branch Liaison",
      phone: "+63 920 555 0606",
      email: "l.garcia@mercurydrug.com",
    },
    paymentTerms: "Net 7",
    leadTimeDays: 2,
    activePOs: 0,
    purchasesYTD: 67450,
    status: "active",
  },
];

export const PAYMENT_TERMS_BADGE_STYLES: Record<
  Supplier["paymentTerms"],
  { bg: string; text: string }
> = {
  COD: { bg: "bg-danger-light", text: "text-danger" },
  "Net 7": { bg: "bg-warning-light", text: "text-warning" },
  "Net 15": { bg: "bg-primary-light", text: "text-primary" },
  "Net 30": { bg: "bg-surface-muted", text: "text-text-secondary" },
  "Net 60": { bg: "bg-secondary-light", text: "text-secondary" },
};

export const STATUS_BADGE_STYLES: Record<
  Supplier["status"],
  { bg: string; text: string }
> = {
  active: { bg: "bg-success-light", text: "text-success" },
  inactive: { bg: "bg-surface-muted", text: "text-text-muted" },
};

export const TOTAL_SUPPLIERS = 12;
export const ACTIVE_SUPPLIERS = 8;
export const AVG_LEAD_TIME = 4.2;
export const OUTSTANDING_PAYABLES = 234560;
