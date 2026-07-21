import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '@/layout/RootLayout';
import employeeRoutes from './employee.routes';
import ownerRoutes from './owner.routes';
import managerRoutes from './manager.routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/employee/dashboard" replace />,
      },
      employeeRoutes,
      ownerRoutes,
      managerRoutes,
      {
        path: '*',
        element: <Navigate to="/employee/dashboard" replace />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
