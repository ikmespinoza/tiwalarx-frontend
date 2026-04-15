export type AttendanceStatus = "present" | "absent" | "on_leave" | "day_off";
export type ShiftType = "morning" | "afternoon" | "graveyard";

export interface AvatarColor {
  bg: string;
  text: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  displayId: string;
  firstName: string;
  lastName: string;
  position: string;
  shift: ShiftType;
  timeIn: string | null;
  timeOut: string | null;
  totalHours: number | null;
  overtimeHours: number;
  remarks: string | null;
  status: AttendanceStatus;
  isLate: boolean;
  initials: string;
  avatarColor: AvatarColor;
}

export const SHIFT_LABELS: Record<ShiftType, string> = {
  morning: "Morning",
  afternoon: "Afternoon",
  graveyard: "Graveyard",
};

export const SHIFT_BADGE_STYLES: Record<ShiftType, { bg: string; text: string }> = {
  morning: { bg: "bg-primary/10", text: "text-primary" },
  afternoon: { bg: "bg-warning-light", text: "text-warning" },
  graveyard: { bg: "bg-surface-muted", text: "text-text-muted" },
};

export const STATUS_LABELS: Record<AttendanceStatus, string> = {
  present: "Present",
  absent: "Absent",
  on_leave: "On Leave",
  day_off: "Day Off",
};

export const STATUS_BADGE_STYLES: Record<AttendanceStatus, { bg: string; text: string }> = {
  present: { bg: "bg-success-light", text: "text-success" },
  absent: { bg: "bg-danger-light", text: "text-danger" },
  on_leave: { bg: "bg-info-light", text: "text-info" },
  day_off: { bg: "bg-surface-muted", text: "text-text-muted" },
};

// For remarks chip — keyed by remark category
export const REMARKS_LATE_STYLE = { bg: "bg-warning-light", text: "text-warning" };
export const REMARKS_ABSENT_STYLE = { bg: "bg-danger-light", text: "text-danger" };
export const REMARKS_LEAVE_STYLE = { bg: "bg-info-light", text: "text-info" };

// Summary constants
export const TOTAL_HEADCOUNT = 12;
export const PRESENT_COUNT = 9;
export const ABSENT_COUNT = 1;
export const ON_LEAVE_COUNT = 2;
export const LATE_COUNT = 2;

// OT pool
export const OT_HOURS_TOTAL = 5.5;
export const OT_VS_AVG = -1.2;

// Selected date / branch
export const SELECTED_DATE = "Oct 24, 2023";
export const BRANCH_NAME = "Main Branch";

export interface CoverageItem {
  shift: string;
  icon: string;
  statusLabel: string;
  statusStyle: { bg: string; text: string };
}

export const UPCOMING_COVERAGE: CoverageItem[] = [
  {
    shift: "Morning Shift",
    icon: "wb_sunny",
    statusLabel: "Full",
    statusStyle: { bg: "bg-success-light", text: "text-success" },
  },
  {
    shift: "Afternoon Shift",
    icon: "wb_twilight",
    statusLabel: "-1 Pharmacist",
    statusStyle: { bg: "bg-warning-light", text: "text-warning" },
  },
  {
    shift: "Graveyard Shift",
    icon: "bedtime",
    statusLabel: "Full",
    statusStyle: { bg: "bg-success-light", text: "text-success" },
  },
];

// OT sparkline bar heights (relative, 5 bars)
export const OT_SPARKLINE = [
  { opacity: "opacity-20", height: "h-4" },
  { opacity: "opacity-40", height: "h-6" },
  { opacity: "opacity-60", height: "h-8" },
  { opacity: "opacity-100", height: "h-5" },
  { opacity: "opacity-40", height: "h-7" },
];

export const ATTENDANCE_RECORDS: AttendanceRecord[] = [
  {
    id: "att-001",
    employeeId: "emp-001",
    displayId: "EMP-001",
    firstName: "Maria Clara",
    lastName: "Reyes",
    position: "Head Pharmacist",
    shift: "morning",
    timeIn: "07:55 AM",
    timeOut: "05:02 PM",
    totalHours: 9.0,
    overtimeHours: 0.0,
    remarks: null,
    status: "present",
    isLate: false,
    initials: "MR",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
  },
  {
    id: "att-002",
    employeeId: "emp-002",
    displayId: "EMP-002",
    firstName: "Juan",
    lastName: "Dela Cruz",
    position: "Junior Assistant",
    shift: "morning",
    timeIn: "08:15 AM",
    timeOut: "05:00 PM",
    totalHours: 8.75,
    overtimeHours: 0.0,
    remarks: "Late 15m",
    status: "present",
    isLate: true,
    initials: "JD",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
  },
  {
    id: "att-003",
    employeeId: "emp-003",
    displayId: "EMP-003",
    firstName: "Elena",
    lastName: "Gomez",
    position: "Pharmacist",
    shift: "afternoon",
    timeIn: null,
    timeOut: null,
    totalHours: null,
    overtimeHours: 0.0,
    remarks: "Approved VL",
    status: "on_leave",
    isLate: false,
    initials: "EG",
    avatarColor: { bg: "bg-info-light", text: "text-info" },
  },
  {
    id: "att-004",
    employeeId: "emp-004",
    displayId: "EMP-004",
    firstName: "Jose",
    lastName: "Dalisay",
    position: "Security Staff",
    shift: "graveyard",
    timeIn: null,
    timeOut: null,
    totalHours: 0,
    overtimeHours: 0.0,
    remarks: "Unexcused",
    status: "absent",
    isLate: false,
    initials: "JD",
    avatarColor: { bg: "bg-danger-light", text: "text-danger" },
  },
  {
    id: "att-005",
    employeeId: "emp-005",
    displayId: "EMP-005",
    firstName: "Ana",
    lastName: "Santos",
    position: "Cashier",
    shift: "morning",
    timeIn: "07:58 AM",
    timeOut: "05:00 PM",
    totalHours: 9.0,
    overtimeHours: 0.0,
    remarks: null,
    status: "present",
    isLate: false,
    initials: "AS",
    avatarColor: { bg: "bg-success-light", text: "text-success" },
  },
  {
    id: "att-006",
    employeeId: "emp-006",
    displayId: "EMP-006",
    firstName: "Rodel",
    lastName: "Bautista",
    position: "Inventory Clerk",
    shift: "morning",
    timeIn: "08:30 AM",
    timeOut: "05:30 PM",
    totalHours: 9.0,
    overtimeHours: 0.5,
    remarks: "Late 30m",
    status: "present",
    isLate: true,
    initials: "RB",
    avatarColor: { bg: "bg-primary/10", text: "text-primary" },
  },
  {
    id: "att-007",
    employeeId: "emp-007",
    displayId: "EMP-007",
    firstName: "Carla",
    lastName: "Mendoza",
    position: "Pharmacist",
    shift: "afternoon",
    timeIn: "01:58 PM",
    timeOut: "10:05 PM",
    totalHours: 8.1,
    overtimeHours: 0.0,
    remarks: null,
    status: "present",
    isLate: false,
    initials: "CM",
    avatarColor: { bg: "bg-info-light", text: "text-info" },
  },
  {
    id: "att-008",
    employeeId: "emp-008",
    displayId: "EMP-008",
    firstName: "Dennis",
    lastName: "Lim",
    position: "HR Staff",
    shift: "morning",
    timeIn: "08:00 AM",
    timeOut: "05:00 PM",
    totalHours: 9.0,
    overtimeHours: 0.0,
    remarks: null,
    status: "present",
    isLate: false,
    initials: "DL",
    avatarColor: { bg: "bg-warning-light", text: "text-warning" },
  },
  {
    id: "att-009",
    employeeId: "emp-009",
    displayId: "EMP-009",
    firstName: "Patricia",
    lastName: "Villanueva",
    position: "Cashier",
    shift: "afternoon",
    timeIn: null,
    timeOut: null,
    totalHours: null,
    overtimeHours: 0.0,
    remarks: "Approved SL",
    status: "on_leave",
    isLate: false,
    initials: "PV",
    avatarColor: { bg: "bg-info-light", text: "text-info" },
  },
  {
    id: "att-010",
    employeeId: "emp-010",
    displayId: "EMP-010",
    firstName: "Marco",
    lastName: "Torres",
    position: "Pharmacist",
    shift: "graveyard",
    timeIn: "10:02 PM",
    timeOut: null,
    totalHours: null,
    overtimeHours: 1.5,
    remarks: null,
    status: "present",
    isLate: false,
    initials: "MT",
    avatarColor: { bg: "bg-success-light", text: "text-success" },
  },
];
