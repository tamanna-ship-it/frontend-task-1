import type { MenuItem } from './employeeMenu';
import { LayoutGrid, Calendar, Users } from 'lucide-react';

export const managerMenuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/manager/dashboard', icon: LayoutGrid },
  { name: 'Schedule', path: '/manager/schedule', icon: Calendar },
  { name: 'Team', path: '/manager/team', icon: Users },
];

export default managerMenuItems;
