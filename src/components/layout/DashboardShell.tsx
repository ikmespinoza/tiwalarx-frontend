"use client";

import type { ReactNode } from "react";
import { useSidebar } from "./SidebarContext";
import { useOptionalRightPanel } from "./RightPanelContext";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { RightPanelShell } from "./RightPanelShell";
import { MobileBottomNav } from "./MobileBottomNav";

type Props = {
  children: ReactNode;
  rightPanel?: ReactNode;
};

export function DashboardShell({ children, rightPanel }: Props) {
  const { collapsed } = useSidebar();
  const rightCtx = useOptionalRightPanel();

  const rightPadding = rightPanel
    ? rightCtx?.collapsed
      ? "lg:pr-12"
      : "lg:pr-72"
    : "";

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar />
      {rightPanel && <RightPanelShell>{rightPanel}</RightPanelShell>}
      <main
        className={[
          "pt-16 pb-16 lg:pb-0 transition-all duration-300",
          collapsed ? "lg:pl-16" : "lg:pl-60",
          rightPadding,
        ].join(" ")}
      >
        <div className="p-6">{children}</div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
