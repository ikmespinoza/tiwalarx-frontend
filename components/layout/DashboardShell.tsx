"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { MobileBottomNav } from "./MobileBottomNav";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar />
      <main
        className={[
          "pt-16 pb-16 lg:pb-0 transition-[padding-left] duration-300",
          collapsed ? "lg:pl-16" : "lg:pl-60",
        ].join(" ")}
      >
        <div className="p-6">{children}</div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
