import { SidebarProvider } from "@/context/SidebarContext";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function HrLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardShell>{children}</DashboardShell>
    </SidebarProvider>
  );
}
