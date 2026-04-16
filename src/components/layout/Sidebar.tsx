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
  PanelLeftClose,
  PanelLeftOpen,
  Truck,
  FileCheckCorner,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";

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
    label: "Procurement",
    items: [
      { href: "/procurement", label: "Purchase Orders", icon: FileCheckCorner },
      { href: "/suppliers", label: "Suppliers", icon: Truck },
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
  const { collapsed, toggleCollapsed } = useSidebar();

  return (
    <aside
      className={[
        "fixed left-0 top-0 h-full bg-card border-r border-border flex-col py-6 z-40 hidden lg:flex overflow-hidden transition-all duration-300",
        collapsed ? "w-16 px-2" : "w-60 px-4",
      ].join(" ")}
    >
      {/* Logo — hidden when collapsed */}
      {!collapsed && (
        <div className="mb-5 px-2">
          <span className="text-xl font-bold text-primary font-headline tracking-tight">
            TiwalaRx
          </span>
          <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold mt-0.5">
            Pharmaceutical ERP
          </p>
        </div>
      )}

      {/* Navigation header row with collapse toggle */}
      <div
        className={[
          "flex items-center mb-3",
          collapsed ? "justify-center" : "justify-between px-2",
        ].join(" ")}
      >
        {!collapsed && (
          <span className="text-[11px] uppercase tracking-widest text-text-muted font-semibold font-headline select-none">
            Navigation
          </span>
        )}
        <button
          onClick={toggleCollapsed}
          className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen size={15} strokeWidth={1.75} />
          ) : (
            <PanelLeftClose size={15} strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-6 overflow-y-auto overflow-x-hidden">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="px-3 mb-1 text-[10px] uppercase tracking-widest text-text-muted font-semibold font-headline">
                {group.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map(({ href, label, icon: Icon }) => {
                const isActive =
                  pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      title={collapsed ? label : undefined}
                      className={[
                        "flex items-center rounded-lg text-sm font-medium transition-colors py-2.5",
                        collapsed ? "justify-center px-0" : "gap-3 px-3",
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
                      ].join(" ")}
                    >
                      <Icon size={16} strokeWidth={1.75} />
                      {!collapsed && <span>{label}</span>}
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
        {collapsed ? (
          <div className="flex justify-center">
            <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center shrink-0">
              <span className="text-primary text-xs font-bold font-headline">
                JD
              </span>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </aside>
  );
}
