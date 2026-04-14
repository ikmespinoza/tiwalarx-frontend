import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar />
      <main className="pt-16 lg:pl-60 pb-16 lg:pb-0">
        <div className="p-6">{children}</div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
