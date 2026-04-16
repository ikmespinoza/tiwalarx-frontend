import { SidebarProvider } from "@/components/layout/SidebarContext";
import { RightPanelProvider } from "@/components/layout/RightPanelContext";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { InventorySummaryPanel } from "@/components/inventory/InventorySummaryPanel";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <RightPanelProvider>
        <DashboardShell rightPanel={<InventorySummaryPanel />}>
          {children}
        </DashboardShell>
      </RightPanelProvider>
    </SidebarProvider>
  );
}
