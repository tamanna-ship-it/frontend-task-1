import { HeaderStrip, GreetingRow } from '@/projects/owner/pages/dashboard/components/HeaderSections';
import { EmployeeStatus, KpiOverview, LiveServiceFloor, NewVsReturning, RevenueBreakdown } from '@/projects/owner/pages/dashboard/components/InsightsSections';
import { BestPerformers, ProductsExpiring, SalesCollections } from '@/projects/owner/pages/dashboard/components/PerformanceSections';
import { InventoryStatusCard, MembershipsCard, PerformanceRatesCard, ToDoOverviewCard } from '@/projects/owner/pages/dashboard/components/OperationsSections';
import { RecentActivity } from '@/projects/owner/pages/dashboard/components/ActivitySection';

export default function DashboardPage() {
  return (
    <main className="main">
      <HeaderStrip />
      <GreetingRow />
      <KpiOverview />
      <EmployeeStatus />
      <div className="grid-2">
        <LiveServiceFloor />
        <div className="col-stack">
          <RevenueBreakdown />
          <NewVsReturning />
        </div>
      </div>
      <div className="dashboard-bottom">
        <div className="grid-bottom">
          <SalesCollections />
          <BestPerformers />
          <div className="grid-bottom-left">
            <ProductsExpiring />
            <PerformanceRatesCard />
            <MembershipsCard />
          </div>
          <div className="grid-bottom-right">
            <InventoryStatusCard />
            <ToDoOverviewCard />
          </div>
        </div>
        <RecentActivity />
      </div>
    </main>
  );
}