import React from 'react';
import { Search, Bell, PanelLeft } from 'lucide-react';
import companyLogo from '../assets/company.png';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 select-none z-10">
      <div className="flex items-center gap-2">
        {/* Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="p-2.5 rounded-xl text-gray-600 border border-transparent hover:text-violet-600 transition-colors duration-200 focus:outline-none cursor-pointer flex items-center justify-center mr-1"
          aria-label={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          <PanelLeft className={`w-5 h-5 transition-transform duration-200`} />
        </button>
        {/* Brand Logo */}
        <img src={companyLogo} alt="logo" className='rounded-xl' />
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
        {/* Switch between Tasks */}
        <button className='w-fit px-4 py-2 rounded-xl text-white bg-gray-900 cursor-pointer hover:bg-black transition-colors duration-200 font-semibold text-sm shadow-sm' onClick={() => navigate('/')}>Switch Task</button>
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
        <div className="flex items-center gap-3 pl-2 border-l border-gray-100 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-amber-800 text-sm shadow-sm transition-transform group-hover:scale-[1.02]">
            AD
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
