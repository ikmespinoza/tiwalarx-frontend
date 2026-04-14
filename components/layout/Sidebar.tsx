"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package2,
  ShoppingCart,
  FileText,
  Users,
  BadgeDollarSign,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

const navGroups = [
  {
    label: "Main",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/inventory", label: "Inventory", icon: Package2 },
      { href: "/pos", label: "POS", icon: ShoppingCart },
    ],
  },
  {
    label: "Management",
    items: [
      { href: "/prescriptions", label: "Prescriptions", icon: FileText },
      { href: "/customers", label: "Customers", icon: Users },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/hr", label: "HR & Payroll", icon: BadgeDollarSign },
      { href: "/reports", label: "Reports", icon: BarChart2 },
    ],
  },
  {
    label: "System",
    items: [{ href: "/settings", label: "Settings", icon: Settings }],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-white border-r border-border flex flex-col py-6 px-4 z-40 hidden lg:flex">
      {/* Logo */}
      <div className="mb-8 px-2">
        <span className="text-xl font-bold text-primary font-headline tracking-tight">
          TiwalaRx
        </span>
        <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold mt-0.5">
          Pharmaceutical ERP
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-6 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="px-3 mb-1 text-[10px] uppercase tracking-widest text-text-muted font-semibold font-headline">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map(({ href, label, icon: Icon }) => {
                const isActive =
                  pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={[
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary-light text-primary border-primary pl-[9px]"
                          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
                      ].join(" ")}
                    >
                      <Icon size={16} strokeWidth={1.75} />
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User card */}
      <div className="mt-auto pt-5 border-t border-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center shrink-0">
            <span className="text-primary text-xs font-bold font-headline">
              JD
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold truncate text-text-primary">
              Dr. John Doe
            </p>
            <p className="text-[10px] text-text-muted truncate">
              Chief Pharmacist
            </p>
          </div>
          <button
            className="text-text-muted hover:text-danger transition-colors"
            aria-label="Log out"
          >
            <LogOut size={14} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </aside>
  );
}
