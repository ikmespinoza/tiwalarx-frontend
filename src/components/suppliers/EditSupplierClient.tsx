"use client";

import Link from "next/link";
import { ChevronRight, Save } from "lucide-react";
import type { Supplier } from "@/lib/mock-data/suppliers";
import EditCompanyInfo from "./EditCompanyInfo";
import ContactPersonsSection from "./ContactPersonsSection";
import TermsPreferencesPanel from "./TermsPreferencesPanel";
import SupplierMetaCard from "./SupplierMetaCard";

interface EditSupplierClientProps {
  supplier: Supplier;
}

export default function EditSupplierClient({
  supplier,
}: EditSupplierClientProps) {
  return (
    <div className="p-2 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-medium text-text-secondary uppercase tracking-widest mb-4">
        <Link
          href="/suppliers"
          className="hover:text-primary transition-colors"
        >
          Suppliers
        </Link>
        <ChevronRight size={14} strokeWidth={1.75} />
        <span className="text-text-primary">Edit Supplier</span>
      </nav>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-headline font-bold text-2xl lg:text-3xl text-text-primary tracking-tight mb-1">
          Edit Supplier
        </h1>
        <p className="text-text-secondary text-sm">
          Update company details and procurement settings for{" "}
          <span className="font-semibold text-text-primary">
            {supplier.name}
          </span>
        </p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* Left column: company info + contacts */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <EditCompanyInfo supplier={supplier} />
          <ContactPersonsSection contacts={supplier.contacts} />
        </div>

        {/* Right column: terms + meta */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <TermsPreferencesPanel supplier={supplier} />
          <SupplierMetaCard supplier={supplier} />
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-10 flex items-center justify-end gap-4 pb-10">
        <button className="rounded-lg px-5 py-2.5 text-sm font-semibold bg-muted text-text-secondary hover:text-text-primary transition-colors">
          Discard Changes
        </button>
        <button className="flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
          <Save size={15} strokeWidth={1.75} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
