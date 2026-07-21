import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, PanelLeft, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import companyLogo from '@/assets/company.png';

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 select-none z-10">
      <div className="flex items-center gap-2">
        {/* Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="p-2.5 rounded-xl text-gray-600 border border-transparent hover:text-violet-600 transition-colors duration-200 focus:outline-none cursor-pointer flex items-center justify-center mr-1"
          aria-label={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          <PanelLeft className="w-5 h-5 transition-transform duration-200" />
        </button>
        {/* Brand Logo */}
        <img src={companyLogo} alt="logo" className="rounded-xl" />
        {/* Welcome Greeting */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Welcome Back, Rajesh</h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Hello, here you can manage your orders by zone
          </p>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-600" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-xl text-sm border-0 border-2 focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all text-gray-600 placeholder-gray-600"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors group">
          <Bell className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-12" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* User Info / Profile */}
        <div className="relative flex items-center" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 pl-2 border-l border-gray-100 cursor-pointer group focus:outline-none bg-transparent border-0 py-1"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-md">
              RA
            </div>
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-sm font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">Rajesh</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-gray-100 shadow-xl py-1.5 z-50 origin-top-right overflow-hidden">
              <div className="px-4 py-3 text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">Rajesh</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Glamour Studio</p>
              </div>
              <div className="border-t border-gray-100 my-1" />

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left focus:outline-none border-0 bg-transparent cursor-pointer">
                <User className="w-4 h-4 text-gray-500" />
                <span className="font-medium">Profile</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left focus:outline-none border-0 bg-transparent cursor-pointer">
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="font-medium">Settings</span>
              </button>

              <div className="border-t border-gray-100 my-1" />

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50/50 transition-colors text-left focus:outline-none border-0 bg-transparent cursor-pointer">
                <LogOut className="w-4 h-4 text-rose-500" />
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
