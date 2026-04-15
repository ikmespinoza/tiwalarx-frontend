"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Employees", href: "/hr" },
  { label: "Attendance", href: "/hr/attendance" },
  { label: "Leave", href: "/hr/leave" },
  { label: "Payroll", href: "/hr/payroll" },
  { label: "Shifts & Scheduling", href: "/hr/shifts" },
];

export function HrTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-border mb-6">
      <nav className="flex gap-1 overflow-x-auto no-scrollbar -mb-px">
        {tabs.map(({ label, href }) => {
          const isActive =
            href === "/hr"
              ? pathname === "/hr"
              : pathname === href || pathname.startsWith(href + "/");

          return (
            <Link
              key={href}
              href={href}
              className={[
                "whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors border-b-2",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-text-primary",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
