import type { RouteObject } from 'react-router-dom';
import ComingSoon from '@/shared/components/ComingSoon';
import { LayoutGrid } from 'lucide-react';

export const ownerRoutes: RouteObject = {
  path: 'owner',
  children: [
    {
      path: '*',
      element: <ComingSoon title="Owner Module" icon={LayoutGrid} />,
    },
  ],
};

export default ownerRoutes;
