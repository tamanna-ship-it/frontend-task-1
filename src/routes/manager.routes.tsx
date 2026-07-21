import type { RouteObject } from 'react-router-dom';
import ComingSoon from '@/shared/components/ComingSoon';
import { LayoutGrid } from 'lucide-react';

export const managerRoutes: RouteObject = {
  path: 'manager',
  children: [
    {
      path: '*',
      element: <ComingSoon title="Manager Module" icon={LayoutGrid} />,
    },
  ],
};

export default managerRoutes;
