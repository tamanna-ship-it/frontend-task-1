import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '@/layout/RootLayout';
import Login from '@/pages/Login';
import employeeRoutes from './employee.routes';
import ownerRoutes from './owner.routes';
import managerRoutes from './manager.routes';
import { useAuth } from '@/pages/auth/AuthContext';

// Protected Route Wrapper for main app layout
const ProtectedLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <RootLayout />;
};

// Route wrapper for Login page to prevent logged in users from seeing login screen
const PublicLoginRoute: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (isAuthenticated && user) {
    if (user.role === 'owner') return <Navigate to="/owner/dashboard" replace />;
    if (user.role === 'manager') return <Navigate to="/manager/dashboard" replace />;
    return <Navigate to="/employee/dashboard" replace />;
  }

  return <Login />;
};

// Root index redirect component based on active auth user role
const RootRedirect: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'owner') return <Navigate to="/owner/dashboard" replace />;
  if (user.role === 'manager') return <Navigate to="/manager/dashboard" replace />;
  return <Navigate to="/employee/dashboard" replace />;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicLoginRoute />,
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <RootRedirect />,
      },
      employeeRoutes,
      ownerRoutes,
      managerRoutes,
      {
        path: '*',
        element: <RootRedirect />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
