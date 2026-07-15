import {
  IconGrid, IconCalendar, IconPos, IconServices, IconInventory, IconTodo,
  IconHistory, IconStaff, IconAdmin, IconClients, IconMembership, IconBanner,
  IconCoupon, IconReels, IconCampaign, IconTransactions, IconReports,
  IconSettings, IconReviews,
} from './icons';
import logoEstetica from '../assets/logo-esteticanow.png';

type Item = { label: string; icon: React.FC<{ size?: number }>; active?: boolean };
type Section = { heading?: string; items: Item[] };

const sections: Section[] = [
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

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img className="sidebar-logo-img" src={logoEstetica} alt="esteticanow" />
      </div>

      <nav className="sidebar-nav">
        {sections.map((s, i) => (
          <div className="nav-section" key={i}>
            {s.heading && <div className="nav-heading">{s.heading}</div>}
            {s.items.map((it) => {
              const Icon = it.icon;
              return (
                <a
                  key={it.label}
                  className={`nav-item${it.active ? ' active' : ''}`}
                  href="#"
                >
                  <Icon size={18} />
                  <span>{it.label}</span>
                  {it.active && <span className="nav-marker" />}
                </a>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
