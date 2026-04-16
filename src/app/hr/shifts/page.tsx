import { HrTabs } from "@/components/hr/_shared/HrTabs";
import { ShiftsClient } from "@/components/hr/shifts/ShiftsClient";

export default function ShiftsPage() {
  return (
    <div className="space-y-6">
      <HrTabs />
      <ShiftsClient />
    </div>
  );
}
