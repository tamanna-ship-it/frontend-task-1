import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
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
  HandCoins
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  basePath?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose, basePath = '' }) => {
  const menuItems = [
    { name: 'Dashboards', path: '/dashboard', icon: LayoutGrid },
    { name: 'Bookings', path: '/bookings', icon: Calendar },
    { name: 'Attendance', path: '/attendance', icon: UserCheck },
    { name: 'Leaves', path: '/leaves', icon: Calendar1 },
    { name: 'Shifts Management', path: '/shifts', icon: ClockArrowUp },
    { name: 'Payslips', path: '/payslips', icon: NotepadText },
    { name: 'Announcements', path: '/announcements', icon: Megaphone },
    { name: 'Revenue', path: '/revenue', icon: HandCoins },
    { name: 'Reviews & Ratings', path: '/reviews', icon: Stars },
    { name: 'Holidays', path: '/holidays', icon: Palmtree },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 md:static flex flex-col h-screen bg-[#111315] text-[#8e9296] select-none transition-all duration-300 ease-in-out z-30 ${isOpen
        ? 'w-64 border-r border-[#1a1d20] translate-x-0'
        : 'w-0 overflow-hidden border-r-0 -translate-x-full md:translate-x-0'
      }`}>
      {/* Brand Logo & Close Action */}
      <div className="p-6 flex items-center justify-between border-b border-[#1a1d20] h-20">
        <img src={logo} alt="logo" className="h-8 object-contain" />
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none md:hidden cursor-pointer"
          aria-label="Close Sidebar"
        >
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={`${basePath}${item.path}`}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group text-[15px] font-semibold ${isActive
                  ? 'text-[#a78bfa]'
                  : 'text-[#8e9296] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-4">
                    <Icon className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
                    <span>{item.name}</span>
                  </div>

                  {/* Play icon triangle indicator on active tab */}
                  <svg
                    className={`w-3.5 h-3.5 fill-current text-[#a78bfa] transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

