export interface SupplierContact {
  name: string;
  role: string;
  phone: string;
  email: string;
  mobile?: string;
  notes?: string;
  isPrimary?: boolean;
}

export interface Supplier {
  id: string;
  distributorId: string;
  name: string;
  address: string;
  tin: string;
  ltoNumber: string;
  companyPhone?: string;
  companyEmail?: string;
  isPreferred: boolean;
  contacts: SupplierContact[];
  primaryContact: SupplierContact | null;
  paymentTerms: "COD" | "Net 7" | "Net 15" | "Net 30" | "Net 60";
  leadTimeDays: number;
  creditLimit?: number;
  activePOs: number;
  purchasesYTD: number;
  status: "active" | "inactive";
  lastPurchased: string;
  pendingOrders: number;
  complianceStatus: "verified" | "pending" | "expired";
}

export const SUPPLIERS: Supplier[] = [
  {
    id: "1",
    distributorId: "ZU-99210",
    name: "Zuellig Pharma Inc.",
    address: "Santa Rosa Logistics Hub, Laguna, Philippines",
    tin: "000-123-456-000",
    ltoNumber: "LTO-300000123456",
    companyPhone: "+63 49 541 0000",
    companyEmail: "orders@zuellig.com.ph",
    isPreferred: true,
    contacts: [
      {
        name: "Ana Reyes",
        role: "Account Manager",
        phone: "+63 917 123 4567",
        email: "ana.reyes@zuellig.com",
        isPrimary: true,
        notes: "Handles TiwalaRx account, responds within 24 hours",
      },
      {
        name: "Mark Lim",
        role: "Orders Department",
        phone: "+63 2 8888 1234",
        email: "orders@zuellig.com",
        notes: "For urgent same-day orders, call before 10 AM",
      },
      {
        name: "Grace Fernandez",
        role: "Accounts Receivable",
        phone: "+63 917 987 6543",
        email: "ar@zuellig.com",
        notes: "Contact for payment terms and invoice queries",
      },
    ],
    primaryContact: {
      name: "Ana Reyes",
      role: "Account Manager",
      phone: "+63 917 123 4567",
      email: "ana.reyes@zuellig.com",
    },
    paymentTerms: "Net 30",
    leadTimeDays: 5,
    creditLimit: 500000,
    activePOs: 2,
    purchasesYTD: 128450,
    status: "active",
    lastPurchased: "April 10, 2026",
    pendingOrders: 2,
    complianceStatus: "verified",
  },
  {
    id: "2",
    distributorId: "MD-44320",
    name: "Metro Drug Distribution Inc.",
    address: "Km. 14, South Superhighway, Parañaque City, Metro Manila",
    tin: "000-234-567-000",
    ltoNumber: "LTO-400000234567",
    companyPhone: "+63 918 234 5678",
    companyEmail: "orders@metrodrug.com",
    isPreferred: true,
    contacts: [
      {
        name: "Roberto Santos",
        role: "Sales Rep",
        phone: "+63 918 234 5678",
        email: "r.santos@metrodrug.com",
        isPrimary: true,
      },
    ],
    primaryContact: {
      name: "Roberto Santos",
      role: "Sales Rep",
      phone: "+63 918 234 5678",
      email: "r.santos@metrodrug.com",
    },
    paymentTerms: "Net 15",
    leadTimeDays: 3,
    creditLimit: 200000,
    activePOs: 1,
    purchasesYTD: 67200,
    status: "active",
    lastPurchased: "April 8, 2026",
    pendingOrders: 1,
    complianceStatus: "verified",
  },
  {
    id: "3",
    distributorId: "DK-88100",
    name: "DKSH Philippines Inc.",
    address: "Carmelray Industrial Park, Canlubang, Laguna",
    tin: "000-345-678-000",
    ltoNumber: "LTO-500000345678",
    companyPhone: "+63 2 8123 4567",
    companyEmail: "orders@dksh.com.ph",
    isPreferred: false,
    contacts: [],
    primaryContact: null,
    paymentTerms: "Net 30",
    leadTimeDays: 7,
    activePOs: 1,
    purchasesYTD: 45780,
    status: "active",
    lastPurchased: "March 28, 2026",
    pendingOrders: 1,
    complianceStatus: "pending",
  },
  {
    id: "4",
    distributorId: "UL-55500",
    name: "Unilab Direct",
    address: "66 United Street, Mandaluyong City, Metro Manila",
    tin: "000-456-789-000",
    ltoNumber: "LTO-600000456789",
    companyPhone: "+63 2 8656 0000",
    companyEmail: "directsales@unilab.com.ph",
    isPreferred: false,
    contacts: [
      {
        name: "Cherry Tan",
        role: "Key Accounts",
        phone: "+63 919 345 6789",
        email: "cherry.tan@unilab.com",
        isPrimary: true,
      },
    ],
    primaryContact: {
      name: "Cherry Tan",
      role: "Key Accounts",
      phone: "+63 919 345 6789",
      email: "cherry.tan@unilab.com",
    },
    paymentTerms: "Net 30",
    leadTimeDays: 4,
    creditLimit: 150000,
    activePOs: 0,
    purchasesYTD: 34560,
    status: "active",
    lastPurchased: "March 15, 2026",
    pendingOrders: 0,
    complianceStatus: "verified",
  },
  {
    id: "5",
    distributorId: "PP-33010",
    name: "PhilPharma Corp.",
    address: "Bagumbayan, Quezon City, Metro Manila",
    tin: "000-567-890-000",
    ltoNumber: "LTO-700000567890",
    companyPhone: "+63 2 8234 5678",
    companyEmail: "info@philpharma.com",
    isPreferred: false,
    contacts: [],
    primaryContact: null,
    paymentTerms: "COD",
    leadTimeDays: 2,
    activePOs: 1,
    purchasesYTD: 18900,
    status: "active",
    lastPurchased: "April 5, 2026",
    pendingOrders: 1,
    complianceStatus: "pending",
  },
  {
    id: "6",
    distributorId: "MW-77000",
    name: "Mercury Drug Wholesale",
    address: "Mercury Avenue, Bagumbayan, Quezon City",
    tin: "000-678-901-000",
    ltoNumber: "LTO-800000678901",
    companyPhone: "+63 2 8911 1111",
    companyEmail: "wholesale@mercurydrug.com",
    isPreferred: true,
    contacts: [
      {
        name: "Luis Garcia",
        role: "Branch Liaison",
        phone: "+63 920 456 7890",
        email: "l.garcia@mercurydrug.com",
        isPrimary: true,
      },
    ],
    primaryContact: {
      name: "Luis Garcia",
      role: "Branch Liaison",
      phone: "+63 920 456 7890",
      email: "l.garcia@mercurydrug.com",
    },
    paymentTerms: "Net 7",
    leadTimeDays: 2,
    creditLimit: 100000,
    activePOs: 0,
    purchasesYTD: 67450,
    status: "active",
    lastPurchased: "April 12, 2026",
    pendingOrders: 0,
    complianceStatus: "verified",
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
