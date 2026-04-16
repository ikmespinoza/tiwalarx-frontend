import { HrTabs } from "@/components/hr/_shared/HrTabs";
import { EmployeesClient } from "@/components/hr/employees/EmployeesClient";

export default function HrPage() {
  return (
    <div className="space-y-6">
      <HrTabs />
      <EmployeesClient />
    </div>
  );
}
