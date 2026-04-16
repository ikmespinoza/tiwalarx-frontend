"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  UserPlus,
  User,
  Briefcase,
  Landmark,
  Wallet,
  HeartPulse,
  KeyRound,
  Info,
  CircleUserRound,
} from "lucide-react";

/* ── Helpers ── */

const inputCls =
  "w-full bg-surface-muted border border-border rounded-lg py-2.5 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow";

const labelCls =
  "block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5";

function SectionCard({
  icon,
  title,
  badge,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-6 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            {icon}
          </div>
          <h3 className="font-headline font-bold text-text-primary text-lg leading-tight">
            {title}
          </h3>
        </div>
        {badge}
      </div>
      {children}
    </div>
  );
}

function SegmentedGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex bg-surface-muted rounded-lg p-1 gap-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={[
            "flex-1 py-2 px-2 rounded-md text-xs sm:text-sm font-semibold transition-all",
            value === opt
              ? "bg-card text-primary shadow-sm"
              : "text-text-muted hover:text-text-secondary",
          ].join(" ")}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={[
        "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/30",
        checked ? "bg-primary" : "bg-border",
      ].join(" ")}
    >
      <span
        className={[
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

/* ── Sections ── */

function PersonalInfoSection() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Row 1 */}
      <div className="col-span-12 sm:col-span-2">
        <label className={labelCls}>Prefix</label>
        <select className={inputCls}>
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
          <option>Dr.</option>
          <option>Engr.</option>
          <option>RPh</option>
        </select>
      </div>

      <div className="col-span-12 sm:col-span-5">
        <label className={labelCls}>
          First Name <span className="text-danger">*</span>
        </label>
        <input type="text" placeholder="Juan" className={inputCls} />
      </div>

      <div className="col-span-12 sm:col-span-5">
        <label className={labelCls}>Middle Name</label>
        <input type="text" placeholder="Santos" className={inputCls} />
      </div>

      {/* Row 2 */}
      <div className="col-span-12 sm:col-span-7">
        <label className={labelCls}>
          Last Name <span className="text-danger">*</span>
        </label>
        <input type="text" placeholder="Dela Cruz" className={inputCls} />
      </div>

      <div className="col-span-12 sm:col-span-2">
        <label className={labelCls}>Suffix</label>
        <input
          type="text"
          placeholder="Jr., Sr., III, IV"
          className={inputCls}
        />
      </div>

      <div className="col-span-12 sm:col-span-3">
        <label className={labelCls}>Nickname</label>
        <input type="text" placeholder="Johnny" className={inputCls} />
      </div>

      {/* Row 3 */}
      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Phone Number <span className="text-danger">*</span>
        </label>
        <input type="tel" placeholder="+63 917 123 4567" className={inputCls} />
      </div>

      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Email Address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          placeholder="j.delacruz@tiwalarx.ph"
          className={inputCls}
        />
      </div>
    </div>
  );
}

type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Intern";

function EmploymentDetailsSection({
  employmentType,
  setEmploymentType,
}: {
  employmentType: EmploymentType;
  setEmploymentType: (v: EmploymentType) => void;
}) {
  const [empStatus, setEmpStatus] = useState<"Probationary" | "Regular">(
    "Probationary",
  );
  const isContract = employmentType === "Contract";

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Row 1 */}
      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Position <span className="text-danger">*</span>
        </label>
        <select className={inputCls}>
          <option>Pharmacist</option>
          <option>Pharmacy Assistant</option>
          <option>Cashier</option>
          <option>Branch Manager</option>
          <option>Inventory Clerk</option>
          <option>HR Staff</option>
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Assigned Branch <span className="text-danger">*</span>
        </label>
        <select className={inputCls}>
          <option>TiwalaRx Main</option>
          <option>TiwalaRx Poblacion</option>
          <option>TiwalaRx SM City Branch</option>
        </select>
      </div>

      {/* Row 2 */}
      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Employment Type <span className="text-danger">*</span>
        </label>
        <SegmentedGroup
          options={["Full-time", "Part-time", "Contract", "Intern"] as const}
          value={
            employmentType as "Full-time" | "Part-time" | "Contract" | "Intern"
          }
          onChange={setEmploymentType}
        />
      </div>

      <div className="col-span-12 sm:col-span-6">
        <label className={labelCls}>
          Employment Status <span className="text-danger">*</span>
        </label>
        <SegmentedGroup
          options={["Probationary", "Regular"] as const}
          value={empStatus}
          onChange={setEmpStatus}
        />
      </div>

      {/* Row 3 */}
      <div
        className={`col-span-12 ${isContract ? "sm:col-span-4" : "sm:col-span-6"}`}
      >
        <label className={labelCls}>
          Date Hired <span className="text-danger">*</span>
        </label>
        <input type="date" className={inputCls} />
      </div>

      <div
        className={`col-span-12 ${isContract ? "sm:col-span-4" : "sm:col-span-6"}`}
      >
        <label className={labelCls}>
          Monthly Rate (₱) <span className="text-danger">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-bold">
            ₱
          </span>
          <input
            type="number"
            placeholder="0.00"
            className={`${inputCls} pl-8`}
          />
        </div>
      </div>

      {isContract && (
        <div className="col-span-12 sm:col-span-4">
          <label className={labelCls}>Contract End Date</label>
          <input type="date" className={inputCls} />
        </div>
      )}
    </div>
  );
}

function GovernmentIdsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className={labelCls}>SSS Number</label>
        <input type="text" placeholder="XX-XXXXXXX-X" className={inputCls} />
        <p className="text-[11px] text-text-muted mt-1 italic">
          Social Security System identifier
        </p>
      </div>
      <div>
        <label className={labelCls}>PhilHealth ID</label>
        <input type="text" placeholder="XXXX-XXXX-XXXX" className={inputCls} />
        <p className="text-[11px] text-text-muted mt-1 italic">
          Health insurance system ID
        </p>
      </div>
      <div>
        <label className={labelCls}>Pag-IBIG MID</label>
        <input type="text" placeholder="XXXXXXXXXXXX" className={inputCls} />
        <p className="text-[11px] text-text-muted mt-1 italic">
          Home Development Mutual Fund
        </p>
      </div>
      <div>
        <label className={labelCls}>TIN (Tax ID)</label>
        <input type="text" placeholder="XXX-XXX-XXX-XXX" className={inputCls} />
        <p className="text-[11px] text-text-muted mt-1 italic">
          BIR statutory tax identifier
        </p>
      </div>
    </div>
  );
}

function BankAccountSection({
  preferred,
  setPreferred,
}: {
  preferred: boolean;
  setPreferred: () => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelCls}>Bank Name</label>
        <select className={inputCls}>
          <option>BDO Unibank</option>
          <option>BPI (Bank of the Philippine Islands)</option>
          <option>Metrobank</option>
          <option>UnionBank</option>
          <option>GCash</option>
          <option>Maya</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Account Holder Name</label>
          <input
            type="text"
            placeholder="Juan S. Dela Cruz"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Account Number</label>
          <input
            type="text"
            placeholder="00123-456-7890"
            className={`${inputCls} tracking-widest`}
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-surface-muted rounded-lg p-4">
        <div>
          <p className="text-sm font-semibold text-text-primary">
            Set as Preferred Account
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            Primary account for automated payroll disbursement
          </p>
        </div>
        <Toggle checked={preferred} onChange={setPreferred} />
      </div>
    </div>
  );
}

function EmergencyContactSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <label className={labelCls}>Full Name</label>
        <input type="text" placeholder="Maria Dela Cruz" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Relationship</label>
        <select className={inputCls}>
          <option>Spouse</option>
          <option>Father</option>
          <option>Mother</option>
          <option>Sibling</option>
          <option>Guardian</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Phone Number</label>
        <input type="tel" placeholder="+63 918 888 7766" className={inputCls} />
      </div>
      <div className="sm:col-span-2 lg:col-span-3">
        <label className={labelCls}>Email Address</label>
        <input
          type="email"
          placeholder="m.delacruz@email.com"
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2 lg:col-span-3">
        <label className={labelCls}>Residential Address</label>
        <textarea
          rows={2}
          placeholder="123 Sampaguita St., Brgy. Bel-Air, Makati City"
          className={`${inputCls} resize-none`}
        />
      </div>
    </div>
  );
}

function SystemAccessSection({ createAccount }: { createAccount: boolean }) {
  const [sendEmail, setSendEmail] = useState(true);

  return (
    <div>
      {createAccount ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <div>
              <label className={labelCls}>System Role</label>
              <select className={inputCls}>
                <option>Cashier</option>
                <option>Pharmacist</option>
                <option>HR Staff</option>
                <option>Branch Manager</option>
                <option>Admin</option>
              </select>
              <p className="text-[11px] text-text-secondary mt-2 leading-relaxed">
                A user account allows this employee to log in to TiwalaRx. You
                can also create or manage their account later from{" "}
                <span className="font-semibold">Settings › Users & Roles</span>.
              </p>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={sendEmail}
                onChange={() => setSendEmail((p) => !p)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-semibold text-text-primary">
                Send login credentials via email
              </span>
            </label>
          </div>

          {/* Preview identity card */}
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">
              Preview Identity
            </p>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-surface-muted flex items-center justify-center text-text-muted shrink-0">
                <CircleUserRound size={28} strokeWidth={1.25} />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">
                  j.delacruz@tiwalarx.ph
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  New Employee
                </p>
              </div>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-text-secondary">Access Level</span>
                <span className="font-bold text-primary">Standard</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Auth Method</span>
                <span className="font-bold text-text-primary">
                  OAuth / Password
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Security</span>
                <span className="font-bold text-success">2FA Required</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 bg-surface-muted rounded-lg p-4">
          <Info size={16} className="text-text-muted mt-0.5 shrink-0" />
          <p className="text-sm text-text-secondary leading-relaxed">
            This employee will not have system access. You can grant access
            later in{" "}
            <span className="font-semibold text-text-primary">
              Settings › Users & Roles
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Main component ── */

export function AddEmployeeClient() {
  const router = useRouter();
  const [employmentType, setEmploymentType] = useState<
    "Full-time" | "Part-time" | "Contract" | "Intern"
  >("Full-time");
  const [createAccount, setCreateAccount] = useState(true);
  const [preferred, setPreferred] = useState(true);

  function handleCancel() {
    router.push("/hr");
  }

  function handleSave() {
    router.push("/hr");
  }

  const actionButtons = (
    <div className="flex items-center gap-3 shrink-0">
      <button
        type="button"
        onClick={handleCancel}
        className="px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleSave}
        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity shadow-sm"
      >
        <UserPlus size={15} strokeWidth={2} />
        Save Employee
      </button>
    </div>
  );

  return (
    <div className="p-2 pb-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-medium text-text-secondary uppercase tracking-widest mb-6">
        <Link href="/hr" className="hover:text-primary transition-colors">
          HR & Payroll
        </Link>
        <ChevronRight size={14} strokeWidth={1.75} />
        <Link href="/hr" className="hover:text-primary transition-colors">
          Employees
        </Link>
        <ChevronRight size={14} strokeWidth={1.75} />
        <span className="text-text-primary">Add Employee</span>
      </nav>

      {/* Page header + top action buttons */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-headline font-extrabold text-2xl lg:text-3xl text-text-primary tracking-tight">
            Add Employee
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Register a new staff member to TiwalaRx.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Info size={14} className="text-text-muted shrink-0" />
          <span>
            Fields marked <span className="text-danger font-bold">*</span> are
            required for payroll processing.
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* 1. Personal Information */}
        <SectionCard
          icon={<User size={16} strokeWidth={2} />}
          title="Personal Information"
        >
          <PersonalInfoSection />
        </SectionCard>

        {/* 2. Employment Details */}
        <SectionCard
          icon={<Briefcase size={16} strokeWidth={2} />}
          title="Employment Details"
        >
          <EmploymentDetailsSection
            employmentType={employmentType}
            setEmploymentType={setEmploymentType}
          />
        </SectionCard>

        {/* 3. Government IDs */}
        <SectionCard
          icon={<Landmark size={16} strokeWidth={2} />}
          title="Government IDs"
        >
          <GovernmentIdsSection />
        </SectionCard>

        {/* 4. Bank Account */}
        <SectionCard
          icon={<Wallet size={16} strokeWidth={2} />}
          title="Bank Account"
        >
          <BankAccountSection
            preferred={preferred}
            setPreferred={() => setPreferred((p) => !p)}
          />
        </SectionCard>

        {/* 5. Emergency Contact */}
        <SectionCard
          icon={<HeartPulse size={16} strokeWidth={2} />}
          title="Emergency Contact"
          badge={
            <span className="text-xs font-medium text-text-muted bg-surface-muted px-2 py-1 rounded-md">
              Optional
            </span>
          }
        >
          <EmergencyContactSection />
        </SectionCard>

        {/* 6. System Access */}
        <SectionCard
          icon={<KeyRound size={16} strokeWidth={2} />}
          title="System Access"
          badge={
            <Toggle
              checked={createAccount}
              onChange={() => setCreateAccount((p) => !p)}
            />
          }
          className="bg-primary/5 border-primary/20"
        >
          <SystemAccessSection createAccount={createAccount} />
        </SectionCard>
      </div>

      {/* Footer action row */}
      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Info size={14} className="text-text-muted shrink-0" />
          <span>
            Fields marked <span className="text-danger font-bold">*</span> are
            required for payroll processing.
          </span>
        </div>
        {actionButtons}
      </div>
    </div>
  );
}
