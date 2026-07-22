import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import logoEstetica from '@/assets/logo-esteticanow.png';
import { employeeMenuItems } from './menu/employeeMenu';
import { managerMenuItems } from './menu/managerMenu';
import { sidebarSections } from '@/shared/data/dashboardData';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const getOwnerPath = (label: string): string => {
  switch (label) {
    case 'Dashboards':
      return '/owner/dashboard';
    case 'Reports':
      return '/owner/reports';
    case 'Appointments':
      return '/owner/appointments';
    case 'Staff Management':
      return '/owner/staff';
    case 'Settings':
      return '/owner/settings';
    default: {
      const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `/owner/${slug}`;
    }
  }
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const location = useLocation();

  const isOwner = location.pathname.startsWith('/owner');

  if (isOwner) {
    return (
      <aside
        className={`fixed inset-y-0 left-0 md:static flex flex-col h-screen bg-[#161616] text-[#a9a9ad] select-none transition-all duration-300 ease-in-out z-30 overflow-y-auto no-scrollbar ${
          isOpen ? 'w-64 border-r border-white/5 translate-x-0' : 'w-0 -translate-x-full overflow-hidden md:w-20 md:translate-x-0'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 h-20">
          <img src={logoEstetica} alt="esteticanow" className="h-8 object-contain" />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white md:hidden"
            aria-label="Close Sidebar"
          />
        </div>

        {/* Sectioned Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-4">
          {sidebarSections.map((section, idx) => (
            <div key={section.heading || idx} className="space-y-1">
              {section.heading && (
                <div className="text-[11px] font-semibold tracking-wider text-[#6e6e74] uppercase px-3 py-2">
                  {section.heading}
                </div>
              )}
              {section.items.map((item) => {
                const Icon = item.icon;
                const path = getOwnerPath(item.label);
                return (
                  <NavLink
                    key={item.label}
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? 'text-[#d9cfff] font-bold bg-[#7a63e6]/15'
                          : 'text-[#a9a9ad] hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span>{item.label}</span>
                        </div>
                        {isActive && <span className="nav-marker" />}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    );
  }

  const menuItems = location.pathname.startsWith('/manager') ? managerMenuItems : employeeMenuItems;

  return (
    <aside
      className={`fixed inset-y-0 left-0 md:static flex flex-col h-screen bg-[#111315] text-[#8e9296] select-none transition-all duration-300 ease-in-out z-30 ${
        isOpen
          ? 'w-64 border-r border-[#1a1d20] translate-x-0'
          : 'w-0 -translate-x-full overflow-hidden md:w-20 md:translate-x-0 md:border-r md:border-[#1a1d20]'
      }`}
    >
      {/* Brand Logo & Close Action */}
      <div
        className={`flex items-center border-b border-[#1a1d20] h-20 transition-all duration-300 ${
          isOpen ? 'p-6 justify-between' : 'p-4 justify-center'
        }`}
      >
        {isOpen ? (
          <img src={logo} alt="logo" className="h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 rounded-lg bg-[#a78bfa] flex items-center justify-center font-bold text-black text-sm transition-transform duration-200 hover:scale-105 shadow-md shadow-[#a78bfa]/20 select-none">
            E
          </div>
        )}
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none md:hidden cursor-pointer"
          aria-label="Close Sidebar"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 no-scrollbar overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={`${item.path}`}
              onMouseEnter={(e) => {
                if (!isOpen) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltipPos({
                    top: rect.top + rect.height / 2,
                    left: rect.right + 12,
                  });
                  setHoveredItem(item.name);
                }
              }}
              onMouseLeave={() => setHoveredItem(null)}
              className={({ isActive }) =>
                `flex items-center rounded-xl transition-all duration-200 group text-[15px] font-semibold relative ${
                  isOpen ? 'justify-between px-4 py-3.5' : 'justify-center p-3'
                } ${
                  isActive
                    ? 'text-[#a78bfa] bg-[#a78bfa]/10'
                    : 'text-[#8e9296] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`flex items-center ${isOpen ? 'gap-4' : 'justify-center'}`}>
                    <Icon className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
                    {isOpen && <span>{item.name}</span>}
                  </div>

                  {isOpen && (
                    <svg
                      className={`w-3.5 h-3.5 fill-current text-[#a78bfa] transition-opacity duration-200 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Tooltip for collapsed state */}
      {!isOpen && hoveredItem && (
        <div
          className="fixed z-50 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg pointer-events-none shadow-md border border-gray-800 -translate-y-1/2 flex items-center select-none"
          style={{
            top: tooltipPos.top,
            left: tooltipPos.left,
          }}
        >
          {hoveredItem}
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rotate-45 border-l border-b border-gray-800" />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
