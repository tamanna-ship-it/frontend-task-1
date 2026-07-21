import type { MenuItem } from './employeeMenu';
import { LayoutGrid, Users, Calendar, Settings, FileBarChart } from 'lucide-react';

export const ownerMenuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/owner/dashboard', icon: LayoutGrid },
  { name: 'Reports', path: '/owner/reports', icon: FileBarChart },
  { name: 'Appointments', path: '/owner/appointments', icon: Calendar },
  { name: 'Staff', path: '/owner/staff', icon: Users },
  { name: 'Settings', path: '/owner/settings', icon: Settings },
];

export default ownerMenuItems;
