"use client";

import type { ExpiryBatchItem } from "@/lib/mock-data/inventory-expiry";
import { ExpiryBatchRow } from "./ExpiryBatchRow";

type Variant = "critical" | "warning" | "info";

type Props = {
  variant: Variant;
  title: string;
  subtitle: string;
  financialRisk: string;
  items: ExpiryBatchItem[];
  showCta?: boolean;
};

const variantStyles: Record<
  Variant,
  {
    wrapper: string;
    header: string;
    titleColor: string;
    subtitleColor: string;
    riskColor: string;
    riskLabelColor: string;
    ctaBg?: string;
    ctaFooter?: string;
  }
> = {
  critical: {
    wrapper: "bg-danger-light/30 border-danger/5",
    header: "bg-danger-light/50 border-danger/10",
    titleColor: "text-danger",
    subtitleColor: "text-danger/70",
    riskColor: "text-danger",
    riskLabelColor: "text-danger/70",
    ctaBg: "bg-danger text-white hover:opacity-90",
    ctaFooter: "bg-danger-light/20",
  },
  warning: {
    wrapper: "bg-amber-50 dark:bg-amber-950/20 border-amber-200/20",
    header: "bg-amber-100/30 border-amber-200/30",
    titleColor: "text-amber-800 dark:text-amber-400",
    subtitleColor: "text-amber-700/70 dark:text-amber-500/70",
    riskColor: "text-amber-800 dark:text-amber-400",
    riskLabelColor: "text-amber-800/70 dark:text-amber-400/70",
  },
  info: {
    wrapper: "bg-surface-muted border-primary/5",
    header: "bg-muted/30 border-primary/10",
    titleColor: "text-primary",
    subtitleColor: "text-primary/70",
    riskColor: "text-primary",
    riskLabelColor: "text-primary/70",
  },
};

export function ExpiryRiskColumn({
  variant,
  title,
  subtitle,
  financialRisk,
  items,
  showCta = false,
}: Props) {
  const s = variantStyles[variant];

  return (
    <div
      className={["rounded-xl overflow-hidden shadow-sm flex flex-col border", s.wrapper].join(" ")}
    >
      {/* Column header */}
      <div className={["p-5 flex justify-between items-start border-b", s.header].join(" ")}>
        <div>
          <h3 className={["font-bold font-headline text-lg", s.titleColor].join(" ")}>{title}</h3>
          <p className={["text-[11px] font-medium uppercase tracking-wider", s.subtitleColor].join(" ")}>
            {subtitle}
          </p>
        </div>
        <div className="text-right">
          <p className={["text-[10px] font-bold uppercase tracking-tight", s.riskLabelColor].join(" ")}>
            Financial Risk
          </p>
          <p className={["font-extrabold font-headline", s.riskColor].join(" ")}>{financialRisk}</p>
        </div>
      </div>

      {/* Product rows */}
      <div className="p-4 flex-1 space-y-3">
        {items.map((item) => (
          <ExpiryBatchRow key={item.id} item={item} />
        ))}
      </div>

      {/* CTA — critical only */}
      {showCta && s.ctaBg && (
        <div className={["p-4", s.ctaFooter].join(" ")}>
          <button
            className={["w-full py-2 text-xs font-bold rounded-lg transition-opacity", s.ctaBg].join(" ")}
          >
            Execute AI Action Batch
          </button>
        </div>
      )}
    </div>
  );
}
