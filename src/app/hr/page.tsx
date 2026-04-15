import { HrTabs } from "@/components/hr/HrTabs";
import { EmployeesClient } from "@/components/hr/EmployeesClient";

export default function HrPage() {
  return (
    <div className="space-y-6">
      <HrTabs />
      <EmployeesClient />
    </div>
  );
}
