import {
  criticalItems,
  warningItems,
  infoItems,
  financialRisks,
} from "@/lib/mock-data/inventory-expiry";
import { ExpiryRiskColumn } from "./ExpiryRiskColumn";

export function ExpiryRiskGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <ExpiryRiskColumn
        variant="critical"
        title="Expiring This Month"
        subtitle="Critical Action Required"
        financialRisk={financialRisks.thisMonthRisk}
        items={criticalItems}
        showCta
      />
      <ExpiryRiskColumn
        variant="warning"
        title="Expiring 1–3 Months"
        subtitle="Promotion Suggested"
        financialRisk={financialRisks.oneToThreeRisk}
        items={warningItems}
      />
      <ExpiryRiskColumn
        variant="info"
        title="Expiring 3–6 Months"
        subtitle="Logistical Planning"
        financialRisk={financialRisks.threeToSixRisk}
        items={infoItems}
      />
    </div>
  );
}
