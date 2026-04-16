"use client";

import { useState } from "react";
import { employees } from "@/lib/mock-data/hr-employees";
import { EmployeeFilters } from "./EmployeeFilters";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeDetailPanel } from "./EmployeeDetailPanel";

export function EmployeesClient() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleClose() {
    setSelectedId(null);
  }

  const selectedEmployee = employees.find((e) => e.id === selectedId) ?? null;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold font-headline text-text-primary">
            Employees
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Manage staff profiles, roles, and information.
          </p>
        </div>
      </div>

      <EmployeeFilters />

      <EmployeeTable
        employees={employees}
        selectedId={selectedId}
        onToggle={handleToggle}
      />

      <EmployeeDetailPanel employee={selectedEmployee} onClose={handleClose} />
    </div>
  );
}
