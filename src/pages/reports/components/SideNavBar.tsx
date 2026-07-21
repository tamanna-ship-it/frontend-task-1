import { 
  LuLayoutGrid, 
  LuCalendarClock, 
  LuClipboardList, 
  LuMonitor, 
  LuBox, 
  LuSquareCheck, 
  LuSparkles, 
  LuCalendarDays,
  LuUsers,
  LuUser,
  LuCircleUser,
  LuCreditCard,
  LuImage,
  LuTicket,
  LuVideo,
  LuChevronRight
} from 'react-icons/lu';
import logoImg from '../assets/esteticanow.png';

interface SideNavBarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

interface MenuItem {
  name: string;
  icon: React.ComponentType<any>;
  hasChevron?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ 
  activeItem = 'Dashboards',
  onItemClick 
}) => {
  // Navigation sections matching the user's reference picture exactly
  const sections: MenuSection[] = [
    {
      title: '', // Top section has no header
      items: [
        { name: 'Dashboards', icon: LuLayoutGrid },
        { name: 'Appointments', icon: LuCalendarClock },
        { name: 'POS', icon: LuClipboardList },
        { name: 'Services', icon: LuMonitor },
        { name: 'Inventory', icon: LuBox },
        { name: 'To Do', icon: LuSquareCheck },
        { name: 'Our AI Insights', icon: LuSparkles },
      ]
    },
    {
      title: 'ORDERS',
      items: [
        { name: 'Booking History', icon: LuCalendarDays },
      ]
    },
    {
      title: 'MANAGEMENT',
      items: [
        { name: 'Staff management', icon: LuUsers },
        { name: 'Administration', icon: LuUser, hasChevron: true },
        { name: 'Clients', icon: LuCircleUser },
      ]
    },
    {
      title: 'OFFERS & PROMOTIONS',
      items: [
        { name: 'Memberships', icon: LuCreditCard },
        { name: 'Banners', icon: LuImage },
        { name: 'Coupons', icon: LuTicket },
        { name: 'Reels Management', icon: LuVideo },
      ]
    }
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#141414] text-[#8e8e93] flex flex-col shrink-0 font-sans border-r border-[#1f1f1f]">
      {/* Brand Logo */}
      <div className="p-6 pb-4 flex items-center">
        <img 
          src={logoImg} 
          alt="esteticanow" 
          className="h-14 object-contain" 
        />
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 space-y-6 overflow-y-auto no-scrollbar py-4">
        {sections.map((section, secIdx) => (
          <div key={secIdx} className="space-y-1.5">
            {section.title && (
              <span className="px-3 text-[10px] font-bold tracking-wider text-[#545456] block uppercase">
                {section.title}
              </span>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item, itemIdx) => {
                const isActive = activeItem === item.name;
                const Icon = item.icon;
                return (
                  <li key={itemIdx}>
                    <button
                      onClick={() => onItemClick?.(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 group text-left ${
                        isActive 
                          ? 'bg-[#1c1c1e] text-[#a78bfa]' 
                          : 'hover:bg-[#1c1c1e] hover:text-[#e5e5ea]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon 
                          className={`w-[18px] h-[18px] transition-colors ${
                            isActive ? 'text-[#a855f7]' : 'text-[#8e8e93] group-hover:text-[#e5e5ea]'
                          }`} 
                        />
                        <span className={isActive ? 'text-[#a855f7]' : ''}>{item.name}</span>
                      </div>
                      
                      {isActive && !item.hasChevron && (
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[6px] border-l-[#a855f7] border-b-[5px] border-b-transparent" />
                      )}
                      
                      {item.hasChevron && (
                        <LuChevronRight className="w-3.5 h-3.5 text-[#545456] group-hover:text-[#e5e5ea]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideNavBar;
