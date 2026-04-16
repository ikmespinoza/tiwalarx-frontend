import { SidebarProvider } from "@/components/layout/SidebarContext";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function SuppliersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardShell>{children}</DashboardShell>
    </SidebarProvider>
  );
}
