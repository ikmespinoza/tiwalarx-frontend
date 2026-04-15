import { HrTabs } from "@/components/hr/HrTabs";
import { ShiftsClient } from "@/components/hr/ShiftsClient";

export default function ShiftsPage() {
  return (
    <div className="space-y-6">
      <HrTabs />
      <ShiftsClient />
    </div>
  );
}
