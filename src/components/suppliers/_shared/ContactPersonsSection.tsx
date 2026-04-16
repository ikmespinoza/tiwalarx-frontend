"use client";

import { useState } from "react";
import {
  Users,
  Plus,
  Phone,
  Mail,
  FileText,
  Pencil,
  Trash2,
} from "lucide-react";
import type { SupplierContact } from "@/lib/mock-data/suppliers";
import { AddContact as AddContactModal } from "./modals/AddContact";

interface ContactPersonsSectionProps {
  contacts: SupplierContact[];
}

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ContactPersonsSection({
  contacts,
}: ContactPersonsSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users
              size={18}
              strokeWidth={1.75}
              className="text-primary shrink-0"
            />
            <h2 className="font-headline font-bold text-base text-text-primary">
              Contact Persons
            </h2>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:bg-primary-light px-3 py-1.5 rounded-full transition-colors"
          >
            <Plus size={13} strokeWidth={2} />
            Add Contact
          </button>
        </div>

        {contacts.length === 0 ? (
          /* Empty state */
          <div className="bg-card rounded-xl border border-border p-10 flex flex-col items-center text-center shadow-sm">
            <Users
              size={48}
              strokeWidth={1.25}
              className="text-text-muted mb-3"
            />
            <p className="font-headline font-bold text-base text-text-primary mb-1">
              No contact persons added
            </p>
            <p className="text-sm text-text-secondary max-w-sm mb-5">
              The company phone and email will be used as default for POs and
              communications.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Plus size={14} strokeWidth={2} />
              Add Contact
            </button>
          </div>
        ) : (
          /* Contact cards grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, idx) => {
              const isPrimary = !!contact.isPrimary;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl border border-border p-6 relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Primary accent bar */}
                  {isPrimary && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
                  )}

                  {/* Card header */}
                  <div className="flex items-start justify-between mb-4 pl-1">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          isPrimary
                            ? "bg-primary-light text-primary"
                            : "bg-info-light text-info"
                        }`}
                      >
                        {getInitials(contact.name)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-text-primary leading-none mb-0.5">
                          {contact.name}
                        </p>
                        <p className="text-[11px] text-text-muted">
                          {contact.role}
                        </p>
                      </div>
                    </div>
                    {isPrimary && (
                      <span className="bg-primary-light text-primary text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase shrink-0">
                        Primary
                      </span>
                    )}
                  </div>

                  {/* Contact details */}
                  <div className="space-y-2 pl-1">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Phone
                        size={13}
                        strokeWidth={1.75}
                        className="shrink-0 text-text-muted"
                      />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Mail
                        size={13}
                        strokeWidth={1.75}
                        className="shrink-0 text-text-muted"
                      />
                      <span className="truncate">{contact.email}</span>
                    </div>
                    {contact.notes && (
                      <div className="flex items-start gap-2 text-sm text-text-secondary">
                        <FileText
                          size={13}
                          strokeWidth={1.75}
                          className="shrink-0 text-text-muted mt-0.5"
                        />
                        <span className="italic">{contact.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Hover actions */}
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-colors py-1">
                      <Pencil size={12} strokeWidth={1.75} />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-bold text-text-secondary hover:text-danger transition-colors py-1">
                      <Trash2 size={12} strokeWidth={1.75} />
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AddContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
