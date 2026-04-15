export type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERN";
export type EmploymentStatus = "PROBATIONARY" | "REGULAR" | "RESIGNED" | "TERMINATED";

export interface PositionHistoryEntry {
  title: string;
  dateRange: string;
  branch: string;
  isCurrent: boolean;
}

export interface GovernmentId {
  label: string;
  icon: string;
  masked: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  suffix?: string;
  position: string;
  branch: string;
  employmentType: EmploymentType;
  employmentStatus: EmploymentStatus;
  monthlyRate: number;
  initials: string;
  avatarBg?: string;
  avatarText?: string;
  division: string;
  governmentIds: GovernmentId[];
  positionHistory: PositionHistoryEntry[];
}

export const EMPLOYMENT_TYPE_LABEL: Record<EmploymentType, string> = {
  FULL_TIME: "Full-Time",
  PART_TIME: "Part-Time",
  CONTRACT:  "Contract",
  INTERN:    "Intern",
};

export const EMPLOYMENT_STATUS_LABEL: Record<EmploymentStatus, string> = {
  PROBATIONARY: "Probationary",
  REGULAR:      "Regular",
  RESIGNED:     "Resigned",
  TERMINATED:   "Terminated",
};

export const TYPE_BADGE_STYLE: Record<EmploymentType, { bg: string; text: string }> = {
  FULL_TIME: { bg: "bg-primary-light",   text: "text-primary" },
  PART_TIME: { bg: "bg-info-light",      text: "text-info" },
  CONTRACT:  { bg: "bg-warning-light",   text: "text-warning" },
  INTERN:    { bg: "bg-surface-muted",   text: "text-text-muted" },
};

export const STATUS_BADGE_STYLE: Record<EmploymentStatus, { bg: string; text: string }> = {
  PROBATIONARY: { bg: "bg-warning-light",  text: "text-warning" },
  REGULAR:      { bg: "bg-success-light",  text: "text-success" },
  RESIGNED:     { bg: "bg-surface-muted",  text: "text-text-muted" },
  TERMINATED:   { bg: "bg-danger-light",   text: "text-danger" },
};

export const TOTAL_EMPLOYEES = 42;
export const PAGE_SIZE = 10;

export const employees: Employee[] = [
  {
    id: "PH-2023-001",
    firstName: "Maria", lastName: "Santos",
    position: "Senior Pharmacist", branch: "Metro Manila – HQ",
    employmentType: "FULL_TIME", employmentStatus: "REGULAR",
    monthlyRate: 45000, initials: "MS",
    avatarBg: "bg-primary-light", avatarText: "text-primary",
    division: "Pharmacy Div",
    governmentIds: [
      { label: "SSS Number",  icon: "CreditCard", masked: "34-*****-1" },
      { label: "PhilHealth",  icon: "ShieldPlus", masked: "12-*****-8" },
      { label: "TIN Number",  icon: "Landmark",   masked: "902-***-***" },
      { label: "Pag-IBIG",   icon: "Building2",  masked: "1212-****-****" },
    ],
    positionHistory: [
      { title: "Senior Pharmacist",  dateRange: "Jan 2023 – Present",    branch: "Manila HQ",  isCurrent: true },
      { title: "Pharmacist II",      dateRange: "Jun 2021 – Dec 2022",   branch: "Cebu City",  isCurrent: false },
      { title: "Intern Pharmacist",  dateRange: "Mar 2021 – May 2021",   branch: "Cebu City",  isCurrent: false },
    ],
  },
  {
    id: "PH-2023-042",
    firstName: "Carlos", lastName: "Reyes", suffix: "Jr.",
    position: "Lead Cashier", branch: "Cebu City Branch",
    employmentType: "FULL_TIME", employmentStatus: "PROBATIONARY",
    monthlyRate: 18500, initials: "CR",
    avatarBg: "bg-info-light", avatarText: "text-info",
    division: "Operations",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "45-*****-3" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "34-*****-7" },
      { label: "TIN Number", icon: "Landmark",   masked: "801-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0909-****-****" },
    ],
    positionHistory: [
      { title: "Lead Cashier", dateRange: "Mar 2023 – Present",  branch: "Cebu City", isCurrent: true },
      { title: "Cashier",      dateRange: "Jan 2023 – Feb 2023", branch: "Cebu City", isCurrent: false },
    ],
  },
  {
    id: "PH-2022-109",
    firstName: "Elena", lastName: "Garcia",
    position: "Pharmacist Assistant", branch: "Davao North",
    employmentType: "PART_TIME", employmentStatus: "REGULAR",
    monthlyRate: 15000, initials: "EG",
    avatarBg: "bg-success-light", avatarText: "text-success",
    division: "Pharmacy Div",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "22-*****-9" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "11-*****-4" },
      { label: "TIN Number", icon: "Landmark",   masked: "701-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0808-****-****" },
    ],
    positionHistory: [
      { title: "Pharmacist Assistant", dateRange: "Aug 2022 – Present", branch: "Davao North", isCurrent: true },
    ],
  },
  {
    id: "PH-2023-078",
    firstName: "Juan", lastName: "Dela Cruz",
    position: "Delivery Rider", branch: "Metro Manila – HQ",
    employmentType: "CONTRACT", employmentStatus: "REGULAR",
    monthlyRate: 12000, initials: "JD",
    division: "Logistics",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "67-*****-2" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "55-*****-6" },
      { label: "TIN Number", icon: "Landmark",   masked: "505-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0303-****-****" },
    ],
    positionHistory: [
      { title: "Delivery Rider", dateRange: "Feb 2023 – Present", branch: "Metro Manila", isCurrent: true },
    ],
  },
  {
    id: "PH-2021-033",
    firstName: "Teresa", lastName: "Magbanua",
    position: "Pharmacy Manager", branch: "Iloilo Central",
    employmentType: "FULL_TIME", employmentStatus: "REGULAR",
    monthlyRate: 55000, initials: "TM",
    avatarBg: "bg-secondary-light", avatarText: "text-secondary-teal",
    division: "Pharmacy Div",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "11-*****-5" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "33-*****-1" },
      { label: "TIN Number", icon: "Landmark",   masked: "303-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0101-****-****" },
    ],
    positionHistory: [
      { title: "Pharmacy Manager",  dateRange: "Sep 2022 – Present",  branch: "Iloilo Central", isCurrent: true },
      { title: "Senior Pharmacist", dateRange: "Jan 2021 – Aug 2022", branch: "Iloilo Central", isCurrent: false },
    ],
  },
  {
    id: "PH-2024-005",
    firstName: "Antonio", lastName: "Luna",
    position: "Stock Clerk", branch: "Metro Manila – HQ",
    employmentType: "FULL_TIME", employmentStatus: "PROBATIONARY",
    monthlyRate: 14500, initials: "AL",
    division: "Inventory",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "78-*****-3" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "66-*****-9" },
      { label: "TIN Number", icon: "Landmark",   masked: "606-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0404-****-****" },
    ],
    positionHistory: [
      { title: "Stock Clerk", dateRange: "Jan 2024 – Present", branch: "Metro Manila", isCurrent: true },
    ],
  },
  {
    id: "PH-2020-017",
    firstName: "Gloria", lastName: "Macapagal",
    position: "Lead Pharmacist", branch: "Pampanga North",
    employmentType: "FULL_TIME", employmentStatus: "REGULAR",
    monthlyRate: 42000, initials: "GM",
    avatarBg: "bg-primary-light", avatarText: "text-primary",
    division: "Pharmacy Div",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "99-*****-7" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "88-*****-2" },
      { label: "TIN Number", icon: "Landmark",   masked: "404-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0202-****-****" },
    ],
    positionHistory: [
      { title: "Lead Pharmacist", dateRange: "Jun 2021 – Present",  branch: "Pampanga North", isCurrent: true },
      { title: "Pharmacist",      dateRange: "Jan 2020 – May 2021", branch: "Metro Manila",   isCurrent: false },
    ],
  },
  {
    id: "PH-2022-088",
    firstName: "Corazon", lastName: "Cojuangco",
    position: "HR Associate", branch: "Metro Manila – HQ",
    employmentType: "FULL_TIME", employmentStatus: "REGULAR",
    monthlyRate: 28000, initials: "CC",
    avatarBg: "bg-info-light", avatarText: "text-info",
    division: "HR Division",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "55-*****-4" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "44-*****-8" },
      { label: "TIN Number", icon: "Landmark",   masked: "202-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0606-****-****" },
    ],
    positionHistory: [
      { title: "HR Associate", dateRange: "Oct 2022 – Present",  branch: "Metro Manila", isCurrent: true },
      { title: "HR Intern",    dateRange: "Jul 2022 – Sep 2022", branch: "Metro Manila", isCurrent: false },
    ],
  },
  {
    id: "PH-2019-004",
    firstName: "Benigno", lastName: "Simeon",
    position: "Logistics Manager", branch: "Tarlac South",
    employmentType: "FULL_TIME", employmentStatus: "REGULAR",
    monthlyRate: 38500, initials: "BS",
    division: "Logistics",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "21-*****-6" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "77-*****-3" },
      { label: "TIN Number", icon: "Landmark",   masked: "101-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0505-****-****" },
    ],
    positionHistory: [
      { title: "Logistics Manager",    dateRange: "Mar 2021 – Present",  branch: "Tarlac South", isCurrent: true },
      { title: "Logistics Supervisor", dateRange: "Jan 2019 – Feb 2021", branch: "Metro Manila", isCurrent: false },
    ],
  },
  {
    id: "PH-2024-012",
    firstName: "Rodrigo", lastName: "Roa",
    position: "Security Detail", branch: "Davao North",
    employmentType: "CONTRACT", employmentStatus: "REGULAR",
    monthlyRate: 22000, initials: "RR",
    division: "Operations",
    governmentIds: [
      { label: "SSS Number", icon: "CreditCard", masked: "88-*****-0" },
      { label: "PhilHealth", icon: "ShieldPlus", masked: "99-*****-5" },
      { label: "TIN Number", icon: "Landmark",   masked: "707-***-***" },
      { label: "Pag-IBIG",  icon: "Building2",  masked: "0707-****-****" },
    ],
    positionHistory: [
      { title: "Security Detail", dateRange: "Feb 2024 – Present", branch: "Davao North", isCurrent: true },
    ],
  },
];
