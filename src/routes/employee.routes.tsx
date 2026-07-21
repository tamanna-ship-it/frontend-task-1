import { type RouteObject, Navigate } from 'react-router-dom';
import Dashboard from '@/projects/employee/pages/Dashboard/Dashboard';
import ComingSoon from '@/shared/components/ComingSoon';
import {
  Calendar,
  UserCheck,
  CalendarOff,
  Clock,
  FileText,
  Megaphone,
  IndianRupee,
  Star,
  Palmtree
} from 'lucide-react';

export const employeeRoutes: RouteObject = {
  path: 'employee',
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      path: 'bookings',
      element: <ComingSoon title="Bookings" icon={Calendar} />,
    },
    {
      path: 'attendance',
      element: <ComingSoon title="Attendance" icon={UserCheck} />,
    },
    {
      path: 'leaves',
      element: <ComingSoon title="Leaves" icon={CalendarOff} />,
    },
    {
      path: 'shifts',
      element: <ComingSoon title="Shifts Management" icon={Clock} />,
    },
    {
      path: 'payslips',
      element: <ComingSoon title="Payslips" icon={FileText} />,
    },
    {
      path: 'announcements',
      element: <ComingSoon title="Announcements" icon={Megaphone} />,
    },
    {
      path: 'revenue',
      element: <ComingSoon title="Revenue" icon={IndianRupee} />,
    },
    {
      path: 'reviews',
      element: <ComingSoon title="Reviews & Ratings" icon={Star} />,
    },
    {
      path: 'holidays',
      element: <ComingSoon title="Holidays" icon={Palmtree} />,
    },
  ],
};

export default employeeRoutes;
