import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { employeeMenuItems } from './menu/employeeMenu';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

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
        {employeeMenuItems.map((item) => {
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
