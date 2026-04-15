"use client";

import { useEffect, useState } from "react";
import { X, CalendarDays, Store, ChevronDown, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface CreateScheduleModalProps {
  open: boolean;
  onClose: () => void;
}

type Template = "morning" | "afternoon" | "graveyard" | "blank";

const TEMPLATES: { id: Template; label: string; time: string }[] = [
  { id: "morning", label: "Morning", time: "06:00 AM – 02:00 PM" },
  { id: "afternoon", label: "Afternoon", time: "02:00 PM – 10:00 PM" },
  { id: "graveyard", label: "Graveyard", time: "10:00 PM – 06:00 AM" },
  { id: "blank", label: "Blank", time: "Manual shift creation" },
];

export function CreateScheduleModal({ open, onClose }: CreateScheduleModalProps) {
  const [template, setTemplate] = useState<Template>("morning");
  const [autoAssign, setAutoAssign] = useState(true);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative bg-card w-full sm:max-w-[560px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[95dvh]">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="font-headline font-bold text-text-primary text-xl leading-tight">
              Create New Schedule
            </h2>
            <p className="text-text-secondary text-sm mt-1">
              Configure parameters for the next clinical rotation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-4 space-y-6 overflow-y-auto flex-1">
          {/* Schedule Period */}
          <div>
            <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
              Schedule Period
            </label>
            <div className="relative">
              <CalendarDays
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
              />
              <input
                type="text"
                readOnly
                defaultValue="Apr 28 – May 4, 2026"
                className="w-full bg-surface-muted border border-border rounded-lg py-3 pl-10 pr-4 text-sm text-text-primary cursor-default focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Pharmacy Branch */}
          <div>
            <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2">
              Pharmacy Branch
            </label>
            <div className="relative">
              <Store
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
              />
              <select className="w-full appearance-none bg-surface-muted border border-border rounded-lg py-3 pl-10 pr-10 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>TiwalaRx Main</option>
                <option>TiwalaRx Poblacion</option>
                <option>TiwalaRx SM City Branch</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />
            </div>
          </div>

          {/* Schedule Template */}
          <div>
            <label className="block text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-3">
              Schedule Template
            </label>
            <div className="grid grid-cols-2 gap-3">
              {TEMPLATES.map((t) => {
                const isSelected = template === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTemplate(t.id)}
                    className={[
                      "p-4 rounded-xl border-2 text-left transition-all cursor-pointer",
                      isSelected
                        ? "border-primary bg-card shadow-sm"
                        : "border-border bg-surface-muted hover:bg-surface-muted/80",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-text-primary">
                        {t.label}
                      </span>
                      <CheckCircle2
                        size={16}
                        className={[
                          "text-primary transition-opacity",
                          isSelected ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        fill="currentColor"
                      />
                    </div>
                    <p className="text-[11px] text-text-muted">{t.time}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-assign toggle */}
          <div className="flex items-center justify-between bg-info-light/30 rounded-xl border border-info/10 p-4">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-info flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-text-primary">
                  Auto-assign staff
                </p>
                <p className="text-xs text-text-secondary">
                  Based on availability &amp; license priority
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAutoAssign((v) => !v)}
              className={[
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                autoAssign ? "bg-primary" : "bg-border",
              ].join(" ")}
              role="switch"
              aria-checked={autoAssign}
            >
              <span
                className={[
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  autoAssign ? "translate-x-5" : "translate-x-0",
                ].join(" ")}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-border flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 border border-border text-text-secondary hover:bg-surface-muted font-semibold rounded-xl text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-[2] py-3 bg-primary text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center gap-2 shadow-sm"
          >
            Create Schedule
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
