import { ChevronDown, Download, UserPlus } from "lucide-react";

interface EmployeeFiltersProps {
  onAddEmployee?: () => void;
}

export function EmployeeFilters({ onAddEmployee }: EmployeeFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Filter selects */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <select className="pl-4 pr-9 py-2 bg-card border border-border rounded-lg text-sm text-text-primary appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Branches</option>
            <option>Metro Manila – HQ</option>
            <option>Cebu City Branch</option>
            <option>Davao North</option>
            <option>Iloilo Central</option>
            <option>Pampanga North</option>
            <option>Tarlac South</option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
          />
        </div>

        <div className="relative">
          <select className="pl-4 pr-9 py-2 bg-card border border-border rounded-lg text-sm text-text-primary appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Status: All</option>
            <option>Regular</option>
            <option>Probationary</option>
            <option>Contract</option>
            <option>Intern</option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2.5 bg-surface-muted text-primary rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-border transition-colors">
          <Download size={16} strokeWidth={2} />
          Export
        </button>
        <button
          onClick={onAddEmployee}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <UserPlus size={16} strokeWidth={2} />
          Add Employee
        </button>
      </div>
    </div>
  );
}
