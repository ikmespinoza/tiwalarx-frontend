"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package2,
  Users,
  MoreHorizontal,
} from "lucide-react";

const tabs = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pos", label: "POS", icon: ShoppingCart },
  { href: "/inventory", label: "Inventory", icon: Package2 },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/more", label: "More", icon: MoreHorizontal },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-border flex items-center justify-around px-2 z-40 lg:hidden">
      {tabs.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={[
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors min-w-0",
              isActive
                ? "text-primary"
                : "text-text-muted hover:text-text-secondary",
            ].join(" ")}
          >
            <Icon size={20} strokeWidth={isActive ? 2 : 1.75} />
            <span className="text-[10px] font-medium truncate">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
