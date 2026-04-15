import { SidebarProvider } from "@/context/SidebarContext";
import { RightPanelProvider } from "@/context/RightPanelContext";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { AttendanceSummaryPanel } from "@/components/hr/AttendanceSummaryPanel";

export default function HrLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <RightPanelProvider>
        <DashboardShell rightPanel={<AttendanceSummaryPanel />}>
          {children}
        </DashboardShell>
      </RightPanelProvider>
    </SidebarProvider>
  );
}
