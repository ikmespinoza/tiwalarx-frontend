import { Sparkles } from "lucide-react";
import { aiInsights } from "@/lib/mock-data/dashboard";

const moduleStyles: Record<string, string> = {
  danger: "bg-danger-light text-danger",
  secondary: "bg-secondary-light text-secondary-teal",
  warning: "bg-warning-light text-warning",
  info: "bg-info-light text-info",
};

const dotStyles: Record<string, string> = {
  danger: "bg-danger",
  secondary: "bg-secondary-teal",
  warning: "bg-warning",
  info: "bg-info",
};

export function AiInsightsFeed() {
  return (
    <div className="bg-surface-muted/50 border border-accent rounded-xl p-6 backdrop-blur-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-primary" strokeWidth={1.75} />
        <h2 className="font-headline font-bold text-sm text-text-primary">
          AI Clinical Insights
        </h2>
      </div>

      <ul className="space-y-3">
        {aiInsights.map((insight, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className={[
                "mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0",
                dotStyles[insight.severity],
              ].join(" ")}
            />
            <div className="min-w-0">
              <span
                className={[
                  "inline-block text-[10px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded mb-1",
                  moduleStyles[insight.severity],
                ].join(" ")}
              >
                {insight.module}
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {insight.message}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
