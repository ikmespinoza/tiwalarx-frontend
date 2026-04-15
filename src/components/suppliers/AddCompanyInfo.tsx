import { Building2, MapPin } from "lucide-react";

export default function AddCompanyInfo() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 lg:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Building2
          size={18}
          strokeWidth={1.75}
          className="text-primary shrink-0"
        />
        <h2 className="font-headline font-bold text-base text-text-primary">
          Company Information
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div className="sm:col-span-2 space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g. Zuellig Pharma Inc."
            className="w-full bg-surface-muted border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary font-medium placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Address */}
        <div className="sm:col-span-2 space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            Address
          </label>
          <div className="relative">
            <MapPin
              size={15}
              strokeWidth={1.75}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              placeholder="Complete business address"
              className="w-full bg-surface-muted border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* TIN */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            TIN (Tax Identification No.)
          </label>
          <input
            type="text"
            placeholder="000-000-000-000"
            className="w-full bg-surface-muted border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary tracking-widest placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* LTO Number */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            LTO Number
          </label>
          <input
            type="text"
            placeholder="LTO-000000000000"
            className="w-full bg-surface-muted border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
    </div>
  );
}
