import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DetailedReport from '@/projects/owner/pages/Reports/DetailedReport';
import ComingSoon from '@/shared/components/ComingSoon';
import DashboardPage from '@/projects/owner/pages/dashboard/DashboardPage';
import { LayoutGrid, Calendar, Users, Settings } from 'lucide-react';

export const ownerRoutes: RouteObject = {
  path: 'owner',
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    {
      path: 'reports',
      element: <DetailedReport />,
    },
    {
      path: 'dashboard',
      element: <DashboardPage />,
    },
    {
      path: 'appointments',
      element: <ComingSoon title="Appointments" icon={Calendar} />,
    },
    {
      path: 'staff',
      element: <ComingSoon title="Staff Management" icon={Users} />,
    },
    {
      path: 'settings',
      element: <ComingSoon title="Settings" icon={Settings} />,
    },
    {
      path: '*',
      element: <ComingSoon title="Owner Module" icon={LayoutGrid} />,
    },
  ],
};

export default ownerRoutes;
