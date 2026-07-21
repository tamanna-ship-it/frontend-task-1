import {
  LayoutGrid,
  Calendar,
  UserCheck,
  Megaphone,
  Stars,
  Palmtree,
  Calendar1,
  ClockArrowUp,
  NotepadText,
  HandCoins,
  type LucideIcon
} from 'lucide-react';

export interface MenuItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

export const employeeMenuItems: MenuItem[] = [
  { name: 'Dashboards', path: '/employee/dashboard', icon: LayoutGrid },
  { name: 'Bookings', path: '/employee/bookings', icon: Calendar },
  { name: 'Attendance', path: '/employee/attendance', icon: UserCheck },
  { name: 'Leaves', path: '/employee/leaves', icon: Calendar1 },
  { name: 'Shifts Management', path: '/employee/shifts', icon: ClockArrowUp },
  { name: 'Payslips', path: '/employee/payslips', icon: NotepadText },
  { name: 'Announcements', path: '/employee/announcements', icon: Megaphone },
  { name: 'Revenue', path: '/employee/revenue', icon: HandCoins },
  { name: 'Reviews & Ratings', path: '/employee/reviews', icon: Stars },
  { name: 'Holidays', path: '/employee/holidays', icon: Palmtree },
];

export default employeeMenuItems;
