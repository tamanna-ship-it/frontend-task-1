import type { CSSProperties } from 'react';

type IconProps = { size?: number; style?: CSSProperties; className?: string };

const base = (size: number): CSSProperties => ({
  width: size,
  height: size,
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

const wrap = (p: IconProps, path: React.ReactNode) => (
  <svg
    className={p.className}
    style={{ ...base(p.size ?? 18), ...p.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

export const IconGrid = (p: IconProps) =>
  wrap(p, <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>);

export const IconCalendar = (p: IconProps) =>
  wrap(p, <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>);

export const IconPos = (p: IconProps) =>
  wrap(p, <><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>);

export const IconServices = (p: IconProps) =>
  wrap(p, <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>);

export const IconInventory = (p: IconProps) =>
  wrap(p, <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7 12 12l8.7-5M12 22V12" /></>);

export const IconTodo = (p: IconProps) =>
  wrap(p, <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>);

export const IconHistory = (p: IconProps) =>
  wrap(p, <><path d="M3 3v5h5" /><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" /><path d="M12 7v5l4 2" /></>);

export const IconStaff = (p: IconProps) =>
  wrap(p, <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>);

export const IconAdmin = (p: IconProps) =>
  wrap(p, <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>);

export const IconClients = (p: IconProps) =>
  wrap(p, <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></>);

export const IconMembership = (p: IconProps) =>
  wrap(p, <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>);

export const IconBanner = (p: IconProps) =>
  wrap(p, <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20l4-3 4 3" /></>);

export const IconCoupon = (p: IconProps) =>
  wrap(p, <><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" /><path d="M9 6v12" strokeDasharray="2 2" /></>);

export const IconReels = (p: IconProps) =>
  wrap(p, <><rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" /></>);

export const IconCampaign = (p: IconProps) =>
  wrap(p, <><path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" /></>);

export const IconTransactions = (p: IconProps) =>
  wrap(p, <><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>);

export const IconReports = (p: IconProps) =>
  wrap(p, <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" /></>);

export const IconSettings = (p: IconProps) => IconAdmin(p);

export const IconReviews = (p: IconProps) =>
  wrap(p, <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>);

export const IconSearch = (p: IconProps) =>
  wrap(p, <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);

export const IconBell = (p: IconProps) =>
  wrap(p, <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>);

export const IconChevronDown = (p: IconProps) =>
  wrap(p, <path d="m6 9 6 6 6-6" />);

export const IconChevronLeft = (p: IconProps) =>
  wrap(p, <path d="m15 18-6-6 6-6" />);

export const IconChevronRight = (p: IconProps) =>
  wrap(p, <path d="m9 18 6-6-6-6" />);

export const IconPlus = (p: IconProps) =>
  wrap(p, <path d="M12 5v14M5 12h14" />);

export const IconExport = (p: IconProps) =>
  wrap(p, <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5-5 5 5M12 5v13" /></>);

export const IconRefresh = (p: IconProps) =>
  wrap(p, <><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>);

export const IconStar = (p: IconProps) => (
  <svg style={{ ...base(p.size ?? 14), ...p.style }} viewBox="0 0 24 24" fill="#f5a623" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
  </svg>
);

export const IconClock = (p: IconProps) =>
  wrap(p, <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>);

export const IconRupee = (p: IconProps) =>
  wrap(p, <path d="M6 3h12M6 8h12M9 13H6l7 8M6 8c0 3.5 2 5 5 5" />);

export const IconWarning = (p: IconProps) =>
  wrap(p, <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><path d="M12 9v4M12 17h.01" /></>);

export const IconTrendingUp = (p: IconProps) =>
  wrap(p, <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></>);

export const IconDollar = (p: IconProps) =>
  wrap(p, <><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>);

export const IconUserPlus = (p: IconProps) =>
  wrap(p, <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></>);

export const IconUserCheck = (p: IconProps) =>
  wrap(p, <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m17 11 2 2 4-4" /></>);

export const IconCheckCircle = (p: IconProps) =>
  wrap(p, <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>);

export const IconXCircle = (p: IconProps) =>
  wrap(p, <><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></>);

export const IconAlertCircle = (p: IconProps) =>
  wrap(p, <><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></>);

export const IconPie = (p: IconProps) =>
  wrap(p, <><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></>);

export const IconTrophy = (p: IconProps) => (
  <svg style={{ ...base(p.size ?? 18), ...p.style }} viewBox="0 0 24 24" fill="none"
    stroke="#d99312" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

export const IconExternalLink = (p: IconProps) =>
  wrap(p, <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></>);

export const IconPanel = (p: IconProps) =>
  wrap(p, <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></>);

export const IconBox = (p: IconProps) =>
  wrap(p, <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7 12 12l8.7-5M12 22V12" /></>);
