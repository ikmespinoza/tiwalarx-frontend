import { Search } from "lucide-react";

export function SupplierFilters() {
  return (
    <div className="bg-surface-muted rounded-xl p-4 flex flex-wrap gap-4 items-center">
      {/* Search */}
      <div className="relative flex-1 min-w-60">
        <Search
          size={15}
          strokeWidth={1.75}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          placeholder="Search by supplier name, contact person, or product..."
          className="w-full bg-card border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
          readOnly
        />
      </div>

      {/* Status */}
      <select className="bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 min-w-32">
        <option>All</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      {/* Payment Terms */}
      <select className="bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 min-w-36">
        <option>All Terms</option>
        <option>COD</option>
        <option>Net 7</option>
        <option>Net 15</option>
        <option>Net 30</option>
        <option>Net 60</option>
      </select>

      {/* Preferred Only toggle */}
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-text-secondary font-medium">
          Preferred Only
        </span>
        <button
          type="button"
          role="switch"
          aria-checked="true"
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors"
        >
          <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform" />
        </button>
      </div>
    </div>
  );
}
