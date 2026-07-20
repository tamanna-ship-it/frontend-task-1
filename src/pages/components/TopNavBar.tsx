import React from 'react';
import { LuBell, LuChevronDown, LuRefreshCw, LuLayoutGrid } from 'react-icons/lu';

interface TopNavBarProps {
  salonName?: string;
  userName?: string;
  notificationCount?: number;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  salonName = "Raju's Salon&Clinic",
  userName = "Raju",
  notificationCount = 10
}) => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 border-b border-[#e5e7eb] w-full font-sans">
      {/* Left side: Collapse Icon, Salon logo, Welcome Message */}
      <div className="flex items-center gap-4">
        {/* Toggle Sidebar Button */}
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <LuLayoutGrid className="w-5 h-5" />
        </button>

        {/* Salon Logo Icon (Green Circle with Custom Plus) */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-50/50">
          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>

        {/* Welcome Back & Description */}
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-gray-900 leading-tight">
            Welcome Back, {salonName}
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Hello, here you can manage your business
          </p>
        </div>
      </div>

      {/* Right side: Switch CRM, Notifications, User Profile */}
      <div className="flex items-center gap-4">
        {/* Switch to Old CRM Button */}
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-full border border-indigo-100 transition-colors shadow-sm cursor-pointer">
          <LuRefreshCw className="w-3.5 h-3.5" />
          <span>Switch to Old CRM</span>
        </button>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <LuBell className="w-5.5 h-5.5" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 flex items-center justify-center px-1.5 py-0.5 text-[9px] font-extrabold leading-none text-white bg-red-500 rounded-full">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-2 pl-2 border-l border-gray-200 cursor-pointer group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs shadow-sm">
            {userName.slice(0, 2).toUpperCase()}
          </div>
          <span className="text-xs font-bold text-gray-700 group-hover:text-gray-900">
            {userName}
          </span>
          <LuChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform" />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
