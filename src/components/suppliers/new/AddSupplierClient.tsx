"use client";

import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import AddCompanyInfo from "./AddCompanyInfo";
import ContactPersonsSection from "../_shared/ContactPersonsSection";
import TermsPreferencesPanel from "../_shared/TermsPreferencesPanel";

export default function AddSupplierClient() {
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
        <span className="text-text-primary">Add Supplier</span>
      </nav>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-headline font-bold text-2xl lg:text-3xl text-text-primary tracking-tight mb-1">
          Add Supplier
        </h1>
        <p className="text-text-secondary text-sm">
          Register a new supplier and set procurement preferences.
        </p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* Left column: company info + contacts */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <AddCompanyInfo />
          <ContactPersonsSection contacts={[]} />
        </div>

        {/* Right column: terms only */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <TermsPreferencesPanel blank />
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-10 flex items-center justify-end gap-4 pb-10">
        <Link
          href="/suppliers"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold border border-border text-text-secondary hover:bg-surface-muted transition-colors"
        >
          Cancel
        </Link>
        <button className="flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
          <Plus size={15} strokeWidth={1.75} />
          Add Supplier
        </button>
      </div>
    </div>
  );
}
