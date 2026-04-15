export type ShiftType = "morning" | "afternoon" | "graveyard" | "off";

export interface EmployeeSchedule {
  id: string;
  name: string;
  role: string;
  avatarInitials: string;
  shifts: ShiftType[]; // index 0 = Monday … index 6 = Sunday
}

export interface OvertimeRequest {
  id: string;
  employeeName: string;
  avatarInitials: string;
  avatarColor: string;
  avatarTextColor: string;
  date: string;
  duration: string;
  reason: string;
  status: "pending" | "approved";
}

export interface ShiftSummaryData {
  totalShifts: number;
  unfilledSlots: number;
  overtimeHours: number;
}

export interface ShiftTemplate {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  dotColor: string;
  cardBg: string;
  borderColor: string;
  textColor: string;
  timeColor: string;
}

// Week of Apr 14–20, 2026
export const weekLabel = "Apr 14 – Apr 20, 2026";
export const weekDays = [
  { abbr: "Mon", date: 14 },
  { abbr: "Tue", date: 15 },
  { abbr: "Wed", date: 16 },
  { abbr: "Thu", date: 17 },
  { abbr: "Fri", date: 18 },
  { abbr: "Sat", date: 19 },
  { abbr: "Sun", date: 20 },
];

// Today = Tuesday → index 1 (Mon-based)
export const TODAY_DAY_INDEX = 1;

export const employeeSchedules: EmployeeSchedule[] = [
  {
    id: "1",
    name: "Maria Clara Reyes",
    role: "Sr. Pharmacist",
    avatarInitials: "MC",
    shifts: ["morning", "morning", "off", "morning", "morning", "morning", "off"],
  },
  {
    id: "2",
    name: "Juan Dela Cruz",
    role: "Pharmacy Aide",
    avatarInitials: "JD",
    shifts: ["afternoon", "afternoon", "afternoon", "off", "off", "afternoon", "afternoon"],
  },
  {
    id: "3",
    name: "Elena Gomez",
    role: "Night Pharmacist",
    avatarInitials: "EG",
    shifts: ["off", "graveyard", "graveyard", "graveyard", "graveyard", "graveyard", "off"],
  },
  {
    id: "4",
    name: "Carlo Bautista",
    role: "Pharmacist",
    avatarInitials: "CB",
    shifts: ["morning", "off", "morning", "morning", "morning", "afternoon", "off"],
  },
  {
    id: "5",
    name: "Liza Mendoza",
    role: "HR Staff",
    avatarInitials: "LM",
    shifts: ["off", "morning", "morning", "afternoon", "afternoon", "off", "off"],
  },
];

export const shiftSummary: ShiftSummaryData = {
  totalShifts: 28,
  unfilledSlots: 3,
  overtimeHours: 12,
};

export const overtimeRequests: OvertimeRequest[] = [
  {
    id: "1",
    employeeName: "Jose Dalisay",
    avatarInitials: "JD",
    avatarColor: "bg-primary-light",
    avatarTextColor: "text-primary",
    date: "Apr 17, 2026",
    duration: "4.5 Hours",
    reason: "High foot traffic during promo period",
    status: "pending",
  },
  {
    id: "2",
    employeeName: "Ana Santos",
    avatarInitials: "AS",
    avatarColor: "bg-info-light",
    avatarTextColor: "text-info",
    date: "Apr 16, 2026",
    duration: "2.0 Hours",
    reason: "Inventory audit assistance",
    status: "approved",
  },
];

export const shiftTemplates: ShiftTemplate[] = [
  {
    id: "m",
    name: "Morning Shift",
    startTime: "06:00 AM",
    endTime: "02:00 PM",
    dotColor: "bg-primary",
    cardBg: "bg-primary-light",
    borderColor: "border-primary/20",
    textColor: "text-primary",
    timeColor: "text-primary/70",
  },
  {
    id: "a",
    name: "Afternoon Shift",
    startTime: "02:00 PM",
    endTime: "10:00 PM",
    dotColor: "bg-success",
    cardBg: "bg-success-light",
    borderColor: "border-success/20",
    textColor: "text-success",
    timeColor: "text-success/70",
  },
  {
    id: "g",
    name: "Graveyard Shift",
    startTime: "10:00 PM",
    endTime: "06:00 AM",
    dotColor: "bg-info",
    cardBg: "bg-info-light",
    borderColor: "border-info/20",
    textColor: "text-info",
    timeColor: "text-info/70",
  },
  {
    id: "o",
    name: "Rest Day",
    startTime: "Off Duty",
    endTime: "",
    dotColor: "bg-text-muted",
    cardBg: "bg-surface-muted",
    borderColor: "border-border",
    textColor: "text-text-secondary",
    timeColor: "text-text-muted",
  },
];

export const weeklyAnalytics = {
  totalHours: 2480,
  label: "Scheduled",
};
