import { KpiCards } from "@/components/dashboard/KpiCards";
import { RevenueTrendChart } from "@/components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "@/components/dashboard/SalesByCategoryChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AiInsightsFeed } from "@/components/dashboard/AiInsightsFeed";
import { ExpiryWatchlist } from "@/components/dashboard/ExpiryWatchlist";
import { QuickActionsBar } from "@/components/dashboard/QuickActionsBar";
import { MobileFab } from "@/components/dashboard/MobileFab";

export default function DashboardPage() {
  return (
    <>
      <div className="p-4 lg:p-8 pb-32">
        {/* Page heading */}
        <div className="mb-8">
          <h1 className="font-headline font-bold text-2xl text-text-primary">
            Pharmacy Overview
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Welcome back, Dr. John Doe. Here&apos;s what&apos;s happening at
            TiwalaRx today.
          </p>
        </div>

        {/* KPI Cards */}
        <KpiCards className="mb-8" />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8">
          <div className="lg:col-span-6">
            <RevenueTrendChart />
          </div>
          <div className="lg:col-span-4">
            <SalesByCategoryChart />
          </div>
        </div>

        {/* Data Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="md:col-span-2 lg:col-span-5">
            <RecentTransactions />
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <AiInsightsFeed />
          </div>
          <div className="md:col-span-1 lg:col-span-4">
            <ExpiryWatchlist />
          </div>
        </div>
      </div>

      <QuickActionsBar />
      <MobileFab />
    </>
  );
}
