import { Info } from "lucide-react";
import { shiftTemplates } from "@/lib/mock-data/hr-shifts";

export function ShiftTemplatesPanel() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Templates
        </span>
        <Info size={14} strokeWidth={1.75} className="text-text-muted" />
      </div>

      {/* Template cards */}
      <div className="space-y-3">
        {shiftTemplates.map((tmpl) => (
          <div
            key={tmpl.id}
            className={[
              "p-4 rounded-lg border transition-colors",
              tmpl.cardBg,
              tmpl.borderColor,
            ].join(" ")}
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <span
                className={[
                  "w-2 h-2 rounded-full shrink-0",
                  tmpl.dotColor,
                ].join(" ")}
              />
              <span
                className={["text-sm font-semibold", tmpl.textColor].join(" ")}
              >
                {tmpl.name}
              </span>
            </div>
            <p className={["text-xs font-medium", tmpl.timeColor].join(" ")}>
              {tmpl.endTime
                ? `${tmpl.startTime} – ${tmpl.endTime}`
                : tmpl.startTime}
            </p>
          </div>
        ))}
      </div>

      {/* New template button */}
      <button className="w-full mt-5 py-2 border-2 border-dashed border-border text-text-muted text-xs font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
        + NEW TEMPLATE
      </button>
    </div>
  );
}
