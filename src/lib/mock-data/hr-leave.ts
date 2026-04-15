export type LeaveType =
  | "vacation"
  | "sick"
  | "emergency"
  | "maternity"
  | "paternity";

export type LeaveStatus = "pending" | "approved" | "rejected";

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  position: string;
  initials: string;
  avatarColor: { bg: string; text: string };
  leaveType: LeaveType;
  dateFrom: string;
  dateTo: string;
  days: number;
  status: LeaveStatus;
  approvedBy: string | null;
  filedDate: string;
}

export interface LeaveBalance {
  type: string;
  label: string;
  used: number;
  total: number;
  barColorClass: string;
}

export interface EmployeeLeaveBalance {
  employeeId: string;
  employeeName: string;
  position: string;
  initials: string;
  avatarColor: { bg: string; text: string };
  activePeriodLabel: string;
  balances: LeaveBalance[];
  nextRefreshDate: string;
  eligibleFor: string[];
}

export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  vacation: "Vacation",
  sick: "Sick Leave",
  emergency: "Emergency",
  maternity: "Maternity",
  paternity: "Paternity",
};

export const LEAVE_TYPE_BADGE_STYLES: Record<
  LeaveType,
  { bg: string; text: string }
> = {
  vacation: { bg: "bg-primary-light", text: "text-primary" },
  sick: { bg: "bg-warning-light", text: "text-warning" },
  emergency: { bg: "bg-danger-light", text: "text-danger" },
  maternity: { bg: "bg-info-light", text: "text-info" },
  paternity: { bg: "bg-info-light", text: "text-info" },
};

export const STATUS_BADGE_STYLES: Record<
  LeaveStatus,
  { bg: string; text: string; dot: string }
> = {
  pending: {
    bg: "bg-warning-light",
    text: "text-warning",
    dot: "bg-warning",
  },
  approved: {
    bg: "bg-success-light",
    text: "text-success",
    dot: "bg-success",
  },
  rejected: {
    bg: "bg-danger-light",
    text: "text-danger",
    dot: "bg-danger",
  },
};

export const LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: "LR-001",
    employeeId: "EMP-001",
    employeeName: "Maria Santos",
    position: "Head Pharmacist",
    initials: "MS",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
    leaveType: "vacation",
    dateFrom: "Apr 24, 2026",
    dateTo: "Apr 28, 2026",
    days: 5,
    status: "pending",
    approvedBy: null,
    filedDate: "Apr 15, 2026",
  },
  {
    id: "LR-002",
    employeeId: "EMP-002",
    employeeName: "Carlos Reyes Jr.",
    position: "Pharmacy Assistant",
    initials: "CR",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
    leaveType: "sick",
    dateFrom: "Apr 15, 2026",
    dateTo: "Apr 17, 2026",
    days: 3,
    status: "approved",
    approvedBy: "Maria Santos",
    filedDate: "Apr 14, 2026",
  },
  {
    id: "LR-003",
    employeeId: "EMP-003",
    employeeName: "Elena Garcia",
    position: "Inventory Specialist",
    initials: "EG",
    avatarColor: { bg: "bg-danger-light", text: "text-danger" },
    leaveType: "emergency",
    dateFrom: "Apr 10, 2026",
    dateTo: "Apr 11, 2026",
    days: 2,
    status: "rejected",
    approvedBy: null,
    filedDate: "Apr 9, 2026",
  },
  {
    id: "LR-004",
    employeeId: "EMP-004",
    employeeName: "Ricardo Bautista",
    position: "Cashier",
    initials: "RB",
    avatarColor: { bg: "bg-success-light", text: "text-success" },
    leaveType: "vacation",
    dateFrom: "May 2, 2026",
    dateTo: "May 6, 2026",
    days: 5,
    status: "pending",
    approvedBy: null,
    filedDate: "Apr 20, 2026",
  },
  {
    id: "LR-005",
    employeeId: "EMP-005",
    employeeName: "Lourdes Aquino",
    position: "Pharmacist",
    initials: "LA",
    avatarColor: { bg: "bg-info-light", text: "text-info" },
    leaveType: "maternity",
    dateFrom: "May 10, 2026",
    dateTo: "Jul 9, 2026",
    days: 60,
    status: "approved",
    approvedBy: "Maria Santos",
    filedDate: "Apr 18, 2026",
  },
  {
    id: "LR-006",
    employeeId: "EMP-006",
    employeeName: "Antonio Villanueva",
    position: "Branch Manager",
    initials: "AV",
    avatarColor: { bg: "bg-secondary-light", text: "text-secondary" },
    leaveType: "sick",
    dateFrom: "Apr 22, 2026",
    dateTo: "Apr 22, 2026",
    days: 1,
    status: "approved",
    approvedBy: "Maria Santos",
    filedDate: "Apr 21, 2026",
  },
  {
    id: "LR-007",
    employeeId: "EMP-007",
    employeeName: "Rosario Tan",
    position: "HR Officer",
    initials: "RT",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
    leaveType: "vacation",
    dateFrom: "Apr 30, 2026",
    dateTo: "May 2, 2026",
    days: 3,
    status: "pending",
    approvedBy: null,
    filedDate: "Apr 22, 2026",
  },
  {
    id: "LR-008",
    employeeId: "EMP-008",
    employeeName: "Juan dela Cruz Jr.",
    position: "Stock Clerk",
    initials: "JC",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
    leaveType: "emergency",
    dateFrom: "Apr 8, 2026",
    dateTo: "Apr 9, 2026",
    days: 2,
    status: "rejected",
    approvedBy: null,
    filedDate: "Apr 7, 2026",
  },
];

export const LEAVE_BALANCES_BY_EMPLOYEE_ID: Record<
  string,
  EmployeeLeaveBalance
> = {
  "EMP-001": {
    employeeId: "EMP-001",
    employeeName: "Maria Santos",
    position: "Head Pharmacist",
    initials: "MS",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 5,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 3,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 2,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: ["Maternity Leave"],
  },
  "EMP-002": {
    employeeId: "EMP-002",
    employeeName: "Carlos Reyes Jr.",
    position: "Pharmacy Assistant",
    initials: "CR",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 2,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 3,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 0,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: [],
  },
  "EMP-003": {
    employeeId: "EMP-003",
    employeeName: "Elena Garcia",
    position: "Inventory Specialist",
    initials: "EG",
    avatarColor: { bg: "bg-danger-light", text: "text-danger" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 7,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 1,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 2,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: ["Maternity Leave"],
  },
  "EMP-004": {
    employeeId: "EMP-004",
    employeeName: "Ricardo Bautista",
    position: "Cashier",
    initials: "RB",
    avatarColor: { bg: "bg-success-light", text: "text-success" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 0,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 0,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 0,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: [],
  },
  "EMP-005": {
    employeeId: "EMP-005",
    employeeName: "Lourdes Aquino",
    position: "Pharmacist",
    initials: "LA",
    avatarColor: { bg: "bg-info-light", text: "text-info" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 3,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 2,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "maternity",
        label: "Maternity Leave",
        used: 60,
        total: 105,
        barColorClass: "bg-info",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: ["Maternity Leave"],
  },
  "EMP-006": {
    employeeId: "EMP-006",
    employeeName: "Antonio Villanueva",
    position: "Branch Manager",
    initials: "AV",
    avatarColor: { bg: "bg-secondary-light", text: "text-secondary" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 4,
        total: 15,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 1,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 0,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: [],
  },
  "EMP-007": {
    employeeId: "EMP-007",
    employeeName: "Rosario Tan",
    position: "HR Officer",
    initials: "RT",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 3,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 0,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 1,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: ["Maternity Leave"],
  },
  "EMP-008": {
    employeeId: "EMP-008",
    employeeName: "Juan dela Cruz Jr.",
    position: "Stock Clerk",
    initials: "JC",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
    activePeriodLabel: "Active Balance Apr 2026",
    balances: [
      {
        type: "vacation",
        label: "Vacation Leave",
        used: 1,
        total: 10,
        barColorClass: "bg-primary",
      },
      {
        type: "sick",
        label: "Sick Leave",
        used: 2,
        total: 5,
        barColorClass: "bg-warning",
      },
      {
        type: "emergency",
        label: "Emergency Leave",
        used: 2,
        total: 3,
        barColorClass: "bg-danger",
      },
    ],
    nextRefreshDate: "Jan 1, 2027",
    eligibleFor: [],
  },
};
