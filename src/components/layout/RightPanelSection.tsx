"use client";

import { useContext, type ReactNode } from "react";
import { useRightPanel, RightPanelForceExpandedContext } from "@/context/RightPanelContext";

type Props = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

export function RightPanelSection({ icon, label, children }: Props) {
  const { collapsed } = useRightPanel();
  const forceExpanded = useContext(RightPanelForceExpandedContext);

  if (collapsed && !forceExpanded) {
    return (
      <div
        className="flex justify-center py-3 text-text-muted hover:text-text-primary transition-colors cursor-default"
        title={label}
      >
        {icon}
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-text-muted">{icon}</span>
        <h3 className="text-sm font-bold text-text-primary font-headline">{label}</h3>
      </div>
      {children}
    </div>
  );
}
