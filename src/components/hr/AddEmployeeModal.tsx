"use client";

import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  CreditCard,
  Shield,
  Home,
  Wallet,
  ShieldCheck,
  BadgeCheck,
  Phone,
} from "lucide-react";

interface AddEmployeeModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

const STEP_LABELS: Record<Step, string> = {
  1: "Personal",
  2: "Employment",
  3: "Gov IDs",
  4: "Bank",
  5: "Contact",
};

const STEP_SUBTITLES: Record<Step, string> = {
  1: "Start by providing the basic personal details of the new hire.",
  2: "Provide employment classification and compensation details.",
  3: "Provide mandatory IDs for statutory compliance and payroll reporting.",
  4: "Enter the disbursement details for payroll processing.",
  5: "Complete the final steps to finalize the staff record.",
};

const TOTAL_STEPS = 5;

function StepIndicator({ current }: { current: Step }) {
  const steps = [1, 2, 3, 4, 5] as Step[];
  const progressPct = ((current - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <div className="relative flex items-center justify-between w-full mt-6 px-2">
      {/* Track */}
      <div className="absolute top-5 left-0 w-full h-[2px] bg-border -z-0" />
      <div
        className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500 -z-0"
        style={{ width: `${progressPct}%` }}
      />

      {steps.map((step) => {
        const isCompleted = step < current;
        const isActive = step === current;
        const isPending = step > current;

        return (
          <div
            key={step}
            className="relative z-10 flex flex-col items-center gap-2"
          >
            <div
              className={[
                "flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300",
                isCompleted
                  ? "w-8 h-8 bg-primary text-white shadow-md"
                  : isActive
                    ? "w-10 h-10 bg-primary text-white shadow-lg ring-4 ring-primary/20"
                    : "w-8 h-8 bg-surface-muted text-text-muted border border-border",
              ].join(" ")}
            >
              {isCompleted ? <Check size={14} strokeWidth={2.5} /> : step}
            </div>
            <span
              className={[
                "text-[10px] font-bold uppercase tracking-wider hidden sm:block",
                isCompleted || isActive ? "text-primary" : "text-text-muted",
              ].join(" ")}
            >
              {STEP_LABELS[step]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-primary-light/30 rounded-xl p-4 border border-primary/10">
      <Info size={16} className="text-primary mt-0.5 flex-shrink-0" />
      <p className="text-xs text-text-secondary leading-relaxed">{children}</p>
    </div>
  );
}

function inputCls() {
  return "w-full bg-surface-muted border border-border rounded-lg py-3 px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow";
}

function labelCls() {
  return "block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5";
}

/* ── Step forms ── */

function Step1Personal() {
  return (
    <div className="space-y-5">
      {/* Row 1: Prefix + First Name */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <label className={labelCls()}>Prefix</label>
          <select className={inputCls()}>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Dr.</option>
            <option>Engr.</option>
          </select>
        </div>
        <div className="col-span-9">
          <label className={labelCls()}>
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Jose Maria"
            className={inputCls()}
          />
        </div>
      </div>

      {/* Row 2: Middle + Last */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>Middle Name</label>
          <input
            type="text"
            placeholder="e.g. Panganiban"
            className={inputCls()}
          />
        </div>
        <div>
          <label className={labelCls()}>
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Dela Cruz"
            className={inputCls()}
          />
        </div>
      </div>

      {/* Row 3: Suffix + Nickname */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <label className={labelCls()}>Suffix</label>
          <select className={inputCls()}>
            <option value="">None</option>
            <option>Jr.</option>
            <option>Sr.</option>
            <option>III</option>
            <option>IV</option>
          </select>
        </div>
        <div className="col-span-8">
          <label className={labelCls()}>Nickname</label>
          <input
            type="text"
            placeholder="e.g. Jun-Jun"
            className={inputCls()}
          />
        </div>
      </div>

      {/* Row 4: Phone + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>
            Phone Number <span className="text-danger">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-medium">
              +63
            </span>
            <input
              type="tel"
              placeholder="917 123 4567"
              className={`${inputCls()} pl-12`}
            />
          </div>
        </div>
        <div>
          <label className={labelCls()}>
            Personal Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            placeholder="j.delacruz@gmail.com"
            className={inputCls()}
          />
        </div>
      </div>

      <InfoCallout>
        Ensure all mandatory fields (<span className="text-danger">*</span>) are
        accurate. This information will be used for official payroll processing
        and government reporting.
      </InfoCallout>
    </div>
  );
}

function Step2Employment() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>
            Employment Type <span className="text-danger">*</span>
          </label>
          <select className={inputCls()}>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Intern</option>
          </select>
        </div>
        <div>
          <label className={labelCls()}>
            Employment Status <span className="text-danger">*</span>
          </label>
          <select className={inputCls()}>
            <option>Probationary</option>
            <option>Regular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>
            Date Hired <span className="text-danger">*</span>
          </label>
          <input type="date" className={inputCls()} />
        </div>
        <div>
          <label className={labelCls()}>
            Assigned Branch <span className="text-danger">*</span>
          </label>
          <select className={inputCls()}>
            <option>TiwalaRx Main</option>
            <option>TiwalaRx Poblacion</option>
            <option>TiwalaRx SM City Branch</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>
            Position <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Registered Pharmacist"
            className={inputCls()}
          />
        </div>
        <div>
          <label className={labelCls()}>
            Daily or Monthly Rate <span className="text-danger">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-bold">
              ₱
            </span>
            <input
              type="number"
              placeholder="0.00"
              className={`${inputCls()} pl-8 font-bold`}
            />
          </div>
        </div>
      </div>

      <InfoCallout>
        TiwalaRx rates are calculated based on a 26-day working month for
        regular employees. Please ensure SSS/PhilHealth/Pag-IBIG deductions are
        configured in Step 3.
      </InfoCallout>
    </div>
  );
}

function Step3GovIds() {
  const fields = [
    {
      icon: <CreditCard size={14} className="text-primary" />,
      label: "SSS Number",
      placeholder: "03-1234567-8",
      helper: "Social Security System identifier",
    },
    {
      icon: <Shield size={14} className="text-primary" />,
      label: "PhilHealth Number",
      placeholder: "12-012345678-9",
      helper: "Health insurance system ID",
    },
    {
      icon: <Home size={14} className="text-primary" />,
      label: "Pag-IBIG Number",
      placeholder: "1210-1234-5678",
      helper: "Home Development Mutual Fund",
    },
    {
      icon: <Wallet size={14} className="text-primary" />,
      label: "Taxpayer ID (TIN)",
      placeholder: "123-456-789-000",
      helper: "BIR statutory tax identifier",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((f) => (
          <div key={f.label} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {f.icon}
              <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                {f.label}
              </label>
            </div>
            <input
              type="text"
              placeholder={f.placeholder}
              className={inputCls()}
            />
            <p className="text-[11px] text-text-muted italic">{f.helper}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-4 p-5 bg-info-light/40 rounded-xl">
        <Shield size={18} className="text-info mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-text-primary">
            Data Privacy Compliance
          </p>
          <p className="text-xs text-text-secondary leading-relaxed mt-1">
            These identifiers are stored using AES-256 encryption in compliance
            with the Data Privacy Act of 2012.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step4Bank() {
  const [preferred, setPreferred] = useState(true);

  return (
    <div className="space-y-5">
      {/* Bank name */}
      <div>
        <label className={labelCls()}>Bank Name</label>
        <select className={inputCls()}>
          <option>Select a Bank</option>
          <option>BDO Unibank, Inc.</option>
          <option>Bank of the Philippine Islands (BPI)</option>
          <option>Metropolitan Bank and Trust Company (Metrobank)</option>
          <option>Land Bank of the Philippines</option>
          <option>Security Bank Corporation</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls()}>Account Name</label>
          <input
            type="text"
            placeholder="Full name as in bank records"
            className={inputCls()}
          />
        </div>
        <div>
          <label className={labelCls()}>Account Number</label>
          <input
            type="text"
            placeholder="0000 0000 0000"
            className={`${inputCls()} tracking-widest`}
          />
        </div>
      </div>

      {/* Preferred toggle */}
      <div className="flex items-center justify-between bg-surface-muted rounded-xl p-4">
        <div className="flex items-center gap-3">
          <ShieldCheck size={18} className="text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-text-primary">
              Set as Preferred Account
            </p>
            <p className="text-xs text-text-secondary">
              Use this as the primary account for automated payroll
              disbursement.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPreferred((p) => !p)}
          className={[
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
            preferred ? "bg-primary" : "bg-border",
          ].join(" ")}
          role="switch"
          aria-checked={preferred}
        >
          <span
            className={[
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
              preferred ? "translate-x-5" : "translate-x-0",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Warning note */}
      <div className="flex items-start gap-3 bg-warning-light/40 rounded-xl p-4">
        <Info size={16} className="text-warning mt-0.5 flex-shrink-0" />
        <p className="text-xs text-text-secondary leading-relaxed">
          Ensure bank details match the employee&apos;s official documents to
          avoid payroll delays. Errors in account numbers may lead to returned
          disbursements.
        </p>
      </div>
    </div>
  );
}

function Step5Contact() {
  return (
    <div className="space-y-5">
      <div className="bg-surface-muted rounded-xl p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-info-light text-info flex items-center justify-center flex-shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <h3 className="font-headline font-bold text-text-primary text-sm">
              Emergency Contact Information
            </h3>
            <p className="text-xs text-text-secondary">
              Who should we notify in case of an emergency?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          <div>
            <label className={labelCls()}>
              Contact Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="Full legal name"
              className={inputCls()}
            />
          </div>
          <div>
            <label className={labelCls()}>Relationship</label>
            <select className={inputCls()}>
              <option>Spouse</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Sibling</option>
              <option>Guardian</option>
            </select>
          </div>

          <div>
            <label className={labelCls()}>Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">
                PH
              </span>
              <input
                type="tel"
                placeholder="+63 917 000 0000"
                className={`${inputCls()} pl-12`}
              />
            </div>
          </div>
          <div>
            <label className={labelCls()}>Email Address</label>
            <input
              type="email"
              placeholder="contact@email.com"
              className={inputCls()}
            />
          </div>

          <div className="col-span-2">
            <label className={labelCls()}>Full Residential Address</label>
            <textarea
              rows={3}
              placeholder="House No., Street, Brgy, City, Province, Zip Code"
              className={`${inputCls()} resize-none`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main modal ── */

export function AddEmployeeModal({ open, onClose }: AddEmployeeModalProps) {
  const [step, setStep] = useState<Step>(1);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    onClose();
    // Reset step after animation
    setTimeout(() => setStep(1), 300);
  }

  function handleContinue() {
    if (step < 5) setStep((s) => (s + 1) as Step);
  }

  function handleBack() {
    if (step > 1) setStep((s) => (s - 1) as Step);
  }

  if (!open) return null;

  const stepBody: Record<Step, React.ReactNode> = {
    1: <Step1Personal />,
    2: <Step2Employment />,
    3: <Step3GovIds />,
    4: <Step4Bank />,
    5: <Step5Contact />,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Container */}
      <div className="relative bg-card w-full sm:max-w-[800px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[95dvh]">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 flex-shrink-0 bg-card border-b border-border">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-headline font-bold text-text-primary text-2xl leading-tight">
                Add New Employee
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                {STEP_SUBTITLES[step]}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <StepIndicator current={step} />
        </div>

        {/* Body */}
        <div className="px-8 py-6 overflow-y-auto flex-1">{stepBody[step]}</div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-border bg-card flex items-center justify-between flex-shrink-0">
          {step === 1 ? (
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
            >
              Cancel
            </button>
          ) : (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-lg text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}

          <div className="flex items-center gap-3">
            {step >= 2 && step <= 4 && (
              <button
                type="button"
                className="px-5 py-2.5 text-text-muted hover:text-text-secondary font-semibold text-sm transition-colors"
              >
                Save Draft
              </button>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleContinue}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-sm"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClose}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-sm"
              >
                Complete Onboarding
                <BadgeCheck size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
