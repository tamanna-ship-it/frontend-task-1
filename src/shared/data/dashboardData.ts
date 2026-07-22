import logoEstetica from '../../assets/logo-esteticanow.png';
import logoAbc from '../../assets/logo-abc.png';
import avatarRajesh from '../../assets/avatar-2.png';
import avatar1 from '../../assets/avatar-1.png';
import avatar3 from '../../assets/avatar-3.png';
import avatar4 from '../../assets/avatar-4.png';
import {
  IconGrid, IconCalendar, IconPos, IconServices, IconInventory, IconTodo,
  IconHistory, IconStaff, IconAdmin, IconClients, IconMembership, IconBanner,
  IconCoupon, IconReels, IconCampaign, IconTransactions, IconReports,
  IconSettings, IconReviews, IconRupee, IconWarning, IconTrendingUp, IconDollar,
  IconUserPlus, IconUserCheck, IconCheckCircle, IconXCircle, IconAlertCircle,
  IconBox,
} from '@/projects/components/icons';
import type {
  AvatarRecord,
  DashboardItemWithIcon,
  KpiMetric,
  SidebarSection,
  TimelineActivity,
} from '../types/dashboard';

export const sidebarLogo = logoEstetica;
export const topBarLogo = logoAbc;
export const greetingAvatar = avatarRajesh;

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      { label: 'Dashboards', icon: IconGrid, active: true },
      { label: 'Appointments', icon: IconCalendar },
      { label: 'POS', icon: IconPos },
      { label: 'Services', icon: IconServices },
      { label: 'Inventory', icon: IconInventory },
      { label: 'To Do', icon: IconTodo },
      { label: 'History', icon: IconHistory },
    ],
  },
  {
    heading: 'Management',
    items: [
      { label: 'Staff Management', icon: IconStaff },
      { label: 'Administration', icon: IconAdmin },
      { label: 'Clients', icon: IconClients },
    ],
  },
  {
    heading: 'Offers & Promotions',
    items: [
      { label: 'Memberships', icon: IconMembership },
      { label: 'Banners', icon: IconBanner },
      { label: 'Coupons', icon: IconCoupon },
      { label: 'Reels Management', icon: IconReels },
      { label: 'Campaign', icon: IconCampaign },
    ],
  },
  {
    heading: 'Transactions & Reports',
    items: [
      { label: 'Transactions', icon: IconTransactions },
      { label: 'Reports', icon: IconReports },
    ],
  },
  {
    heading: 'Setup',
    items: [
      { label: 'Settings', icon: IconSettings },
      { label: 'Reviews', icon: IconReviews },
    ],
  },
];

export const kpis: KpiMetric[] = [
  { label: 'Total Revenue', value: '₹2,45,680', delta: '+8.2% from Yesterday', Icon: IconDollar },
  { label: 'Total Bookings', value: '156', delta: '+8.2% from Yesterday', Icon: IconCalendar },
  { label: 'Total Clients', value: '1,245', delta: '+8.2% from last period', Icon: IconClients },
  { label: 'New Clients', value: '34', delta: '+8.2% from Yesterday', Icon: IconUserPlus },
  { label: 'Returning Clients', value: '108', delta: '+8.2% from Yesterday', Icon: IconUserCheck },
  { label: 'Completed Appointments', value: '150', delta: '+8.2% from Yesterday', Icon: IconCheckCircle },
  { label: 'Cancelled Appointments', value: '12', delta: '+8.2% from Yesterday', Icon: IconXCircle },
  { label: 'No Show %', value: '6.4%', delta: '+8.2% from Yesterday', Icon: IconAlertCircle },
  { label: 'Membership Revenue', value: '₹1,800.00', delta: '↑ 200%vs last period', Icon: IconRupee },
];

export const employeeAvatars: AvatarRecord = { avatar1, avatar3, avatar4, avatarRajesh };

export const employees = [
  { name: 'Rajesh Alachandra', role: 'Senior Stylyst', time: '10:30', leave: false, img: avatarRajesh },
  { name: 'Maya Johnson', role: 'Junior Stylist', time: '11:00', leave: false, img: avatar3 },
  { name: 'David Kim', role: 'Lead Stylist', time: '', leave: true, img: avatar4 },
  { name: 'Sara Patel', role: 'Associate Stylist', time: '9:45', leave: false, img: avatar1 },
];

export const liveServiceBusy = [
  { staff: 'Abhinav Reddy', client: 'Meera Iyer', svc: 'Hair Color, Haircut', rem: '45 min remaining' },
  { staff: 'Tejaswini Rao', client: 'Rahul Singh', svc: 'Haircut, Hair Color, Haircut', rem: '20 min remaining' },
  { staff: 'Priya Sharma', client: 'Anjali Verma', svc: 'Facial Treatment, Hair Color', rem: '30 min remaining' },
];

export const liveServiceFree = ['Avinash', 'Rajesh', 'Sai pavan'];

export const revenueRows = [
  { label: 'Services', value: '₹185.4K (62%)', pct: 62 },
  { label: 'Retail', value: '₹68.2K (23%)', pct: 23 },
  { label: 'Memberships', value: '₹44.2K (15%)', pct: 15 },
];

export const newVsReturning = {
  newCustomers: 34,
  returningCustomers: 86,
};

export const salesBars = [
  { t: '9 AM', h: 22 }, { t: '10 AM', h: 42 }, { t: '11 AM', h: 48 },
  { t: '12 PM', h: 62 }, { t: '1 PM', h: 80 }, { t: '2 PM', h: 88 }, { t: '3 PM', h: 70 },
];

export const performers = [
  { rank: 1, init: 'AR', name: 'Abhinav Reddy', svc: '8 services', rating: '4.9', amt: '₹12,400', up: '+12%', cls: 'gold' },
  { rank: 2, init: 'TR', name: 'Tejaswini Rao', svc: '6 services', rating: '4.8', amt: '₹9,800', up: '+12%', cls: 'plain' },
  { rank: 3, init: 'PS', name: 'Priya Sharma', svc: '5 services', rating: '4.7', amt: '₹8,200', up: '+12%', cls: 'bronze' },
];

export const productsExpiring = [
  { period: 'This Week', num: '15', tag: 'Urgent', cls: 'urgent' },
  { period: 'Next Week', num: '28', tag: 'Upcoming', cls: 'upcoming' },
  { period: 'This Month', num: '67', tag: 'Pending', cls: 'pending' },
];

export const performanceRates = [
  { label: 'No Show Rate', val: '3.2%', sub: '-1.2% from last week', pct: 8, down: true },
  { label: 'Cancellation Rate', val: '5.8%', sub: '+0.8% from last week', pct: 14, down: false },
  { label: 'Completion Rate', val: '87.3%', sub: '+3.5% from last week', pct: 87, down: true },
];

export const membershipsSoon = [
  { name: 'Anjali Verma', plan: 'Gold Plan', days: '2 days', date: 'Mar 25' },
  { name: 'Rahul Singh', plan: 'Platinum Plan', days: '4 days', date: 'Mar 27' },
  { name: 'Meera Iyer', plan: 'Silver Plan', days: '5 days', date: 'Mar 28' },
];

export const inventoryItems: DashboardItemWithIcon[] = [
  { name: 'Hair Serum Pro', cat: 'Hair Care', qty: 'Qty: 8', tag: 'Low Stock', cls: 'lowstock', Icon: IconWarning, ic: '#e0902a' },
  { name: 'Face Cream Deluxe', cat: 'Skin Care', qty: 'Qty: 0', tag: 'Out of Stock', cls: 'outstock', Icon: IconBox, ic: '#e05a4f' },
  { name: 'Nail Polish Set', cat: 'Nails', qty: 'Qty: 45', tag: 'Fast Moving', cls: 'fast', Icon: IconTrendingUp, ic: '#22b573' },
  { name: 'Vitamin C Serum', cat: 'Skin Care', qty: 'Qty: 12 • 15 days left', tag: 'Expiring Soon', cls: 'expiring', Icon: IconCalendar, ic: '#e0902a' },
];

export const todoTasks = [
  { title: 'Follow up with Meera Iyer', desc: 'Discuss membership renewal options', when: 'Today, 4:00 PM', who: 'Priya Sharma', tag: 'Pending', cls: 'pending' },
  { title: "Confirm tomorrow's appointments", desc: 'Send confirmation SMS to 12 clients', when: 'Today, 5:00 PM', who: 'Reception', tag: 'Pending', cls: 'pending' },
  { title: 'Review inventory order', desc: 'Check low stock items and place orders', when: 'Tomorrow, 10:00 AM', who: 'Manager', tag: 'Ongoing', cls: 'ongoing' },
  { title: 'Schedule staff training', desc: 'Organize product knowledge session', when: 'This Week', who: 'HR', tag: 'Completed', cls: 'completed' },
];

export const recentActivities: TimelineActivity[] = [
  { t: 'New Appointment Booked', d: 'Priya Sharma booked Hair Color service', ago: '5 mins ago', c: '#5b6ef5', Icon: IconCalendar },
  { t: 'Payment Collected', d: '₹3,500 received for Facial treatment', ago: '12 mins ago', c: '#22a06b', Icon: IconMembership },
  { t: 'Inventory Item Added', d: 'Hair Serum Pro (50 units) added to stock', ago: '28 mins ago', c: '#8b5cf6', Icon: IconBox },
  { t: 'New Member Joined', d: 'Rahul Verma subscribed to Gold Membership', ago: '1 hour ago', c: '#e0902a', Icon: IconUserPlus },
  { t: 'Appointment Cancelled', d: 'Sneha Patel cancelled Manicure appointment', ago: '2 hours ago', c: '#e0541f', Icon: IconXCircle },
  { t: 'Service Completed', d: 'Keratin Treatment completed for Amit Kumar', ago: '3 hours ago', c: '#22a06b', Icon: IconCheckCircle },
];

export const headerIntro = {
  welcome: 'Welcome!',
  time: "It's",
  date: '1.43pm, 23 March, Sat',
};