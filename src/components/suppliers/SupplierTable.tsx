"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Pencil,
  X,
  MoreVertical,
} from "lucide-react";
import {
  SUPPLIERS,
  PAYMENT_TERMS_BADGE_STYLES,
  STATUS_BADGE_STYLES,
  type Supplier,
  TOTAL_SUPPLIERS,
} from "@/lib/mock-data/suppliers";

interface MenuPos {
  top?: number;
  bottom?: number;
  right: number;
}

function ActionMenu({ supplierId }: { supplierId: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<MenuPos>({ top: 0, right: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (btnRef.current && btnRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function handleOpen() {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const menuHeight = 132; // approx height of dropdown
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < menuHeight) {
      setPos({
        bottom: window.innerHeight - rect.top + 4,
        right: window.innerWidth - rect.right,
      });
    } else {
      setPos({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
    }
    setOpen((v) => !v);
  }

  const menu = open ? (
    <div
      style={{
        position: "fixed",
        top: pos.top,
        bottom: pos.bottom,
        right: pos.right,
        width: 176,
        zIndex: 9999,
      }}
      className="bg-card border border-border rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.12)] py-1"
    >
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => {
          setOpen(false);
          router.push(`/suppliers/${supplierId}/edit`);
        }}
      >
        <Pencil size={14} strokeWidth={1.75} className="text-text-secondary" />
        Edit Supplier
      </button>
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors"
        onClick={() => setOpen(false)}
      >
        <Star size={14} strokeWidth={1.75} className="text-warning" />
        Set as Primary
      </button>
      <div className="my-1 border-t border-border" />
      <button
        className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-danger hover:bg-danger-light transition-colors"
        onClick={() => setOpen(false)}
      >
        <X size={14} strokeWidth={1.75} />
        Remove Supplier
      </button>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleOpen}
        className="p-1.5 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-light transition-colors"
      >
        <MoreVertical size={15} strokeWidth={1.75} />
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(menu, document.body)
        : null}
    </>
  );
}

function formatPeso(amount: number) {
  return amount.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
}

function ContactCell({ supplier }: { supplier: Supplier }) {
  if (!supplier.primaryContact) {
    return (
      <div>
        <span className="text-text-muted">—</span>
        <p className="text-xs text-text-muted italic mt-0.5">
          Supplier Contact
        </p>
      </div>
    );
  }
  const { name, email, phone } = supplier.primaryContact;
  return (
    <div>
      <p className="text-sm font-semibold text-text-primary">{name}</p>
      <p className="text-xs text-text-muted italic">{email}</p>
      <p className="text-xs text-text-muted">{phone}</p>
    </div>
  );
}

export function SupplierTable() {
  const totalPages = Math.ceil(TOTAL_SUPPLIERS / SUPPLIERS.length);
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm">
      {/* Desktop table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-muted border-b border-border">
              <th className="text-left px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide rounded-tl-xl">
                Supplier Name
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide">
                Primary Contact
              </th>
              <th className="text-center px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide">
                Payment Terms
              </th>
              <th className="text-center px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide hidden lg:table-cell">
                Lead Time
              </th>
              <th className="text-center px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide hidden lg:table-cell">
                Active POs
              </th>
              <th className="text-right px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide">
                Purchases YTD
              </th>
              <th className="text-center px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-wide">
                Status
              </th>
              <th className="px-6 py-4 rounded-tr-xl" />
            </tr>
          </thead>
          <tbody>
            {SUPPLIERS.map((supplier, idx) => {
              const termStyle =
                PAYMENT_TERMS_BADGE_STYLES[supplier.paymentTerms];
              const statusStyle = STATUS_BADGE_STYLES[supplier.status];
              return (
                <tr
                  key={supplier.id}
                  className={[
                    "border-b border-border last:border-0 hover:bg-primary-light/30 transition-colors",
                    idx % 2 === 1 ? "bg-surface-muted/40" : "",
                  ].join(" ")}
                >
                  {/* Supplier Name */}
                  <td className="px-5 py-4">
                    <div className="flex items-start gap-2">
                      <Star
                        size={14}
                        strokeWidth={1.75}
                        className={
                          supplier.isPreferred
                            ? "text-amber-500 fill-amber-500 mt-0.5 shrink-0"
                            : "text-text-muted mt-0.5 shrink-0"
                        }
                      />
                      <div>
                        <p className="font-semibold text-primary hover:underline cursor-default">
                          {supplier.name}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          {supplier.distributorId}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-5 py-4">
                    <ContactCell supplier={supplier} />
                  </td>

                  {/* Payment Terms */}
                  <td className="px-5 py-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${termStyle.bg} ${termStyle.text}`}
                    >
                      {supplier.paymentTerms}
                    </span>
                  </td>

                  {/* Lead Time */}
                  <td className="px-5 py-4 text-center text-text-secondary hidden lg:table-cell">
                    {supplier.leadTimeDays} days
                  </td>

                  {/* Active POs */}
                  <td className="px-5 py-4 text-center hidden lg:table-cell">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold ${
                        supplier.activePOs > 0
                          ? "bg-primary-light text-primary"
                          : "bg-surface-muted text-text-muted"
                      }`}
                    >
                      {supplier.activePOs}
                    </span>
                  </td>

                  {/* Purchases YTD */}
                  <td className="px-5 py-4 text-right font-bold font-headline text-text-primary">
                    {formatPeso(supplier.purchasesYTD)}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {supplier.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-center">
                    <ActionMenu supplierId={supplier.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <div className="md:hidden divide-y divide-border">
        {SUPPLIERS.map((supplier) => {
          const termStyle = PAYMENT_TERMS_BADGE_STYLES[supplier.paymentTerms];
          const statusStyle = STATUS_BADGE_STYLES[supplier.status];
          return (
            <div key={supplier.id} className="p-4 flex items-start gap-3">
              <Star
                size={14}
                strokeWidth={1.75}
                className={
                  supplier.isPreferred
                    ? "text-amber-500 fill-amber-500 mt-1 shrink-0"
                    : "text-text-muted mt-1 shrink-0"
                }
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-primary text-sm">
                  {supplier.name}
                </p>
                <p className="text-xs text-text-muted">
                  {supplier.distributorId}
                </p>
                {supplier.primaryContact ? (
                  <p className="text-xs text-text-secondary mt-1">
                    {supplier.primaryContact.name} ·{" "}
                    {supplier.primaryContact.role}
                  </p>
                ) : (
                  <p className="text-xs text-text-muted italic mt-1">
                    Supplier Contact
                  </p>
                )}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${termStyle.bg} ${termStyle.text}`}
                  >
                    {supplier.paymentTerms}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${statusStyle.bg} ${statusStyle.text}`}
                  >
                    {supplier.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination footer */}
      <div className="px-6 py-4 bg-surface-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-xs text-text-secondary font-medium">
          Showing 1 to {SUPPLIERS.length} of {TOTAL_SUPPLIERS} employees
        </p>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-border text-text-muted transition-colors">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={[
                "w-8 h-8 rounded text-xs font-bold transition-colors",
                page === 1
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-border text-text-secondary",
              ].join(" ")}
            >
              {page}
            </button>
          ))}
          {totalPages > 3 && (
            <span className="text-xs text-text-muted px-1">…</span>
          )}
          <button className="p-1 rounded hover:bg-border text-text-muted transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
