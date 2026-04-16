import { SidebarProvider } from "@/components/layout/SidebarContext";
import { RightPanelProvider } from "@/components/layout/RightPanelContext";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { AttendanceSummaryPanel } from "@/components/hr/attendance/AttendanceSummaryPanel";

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
