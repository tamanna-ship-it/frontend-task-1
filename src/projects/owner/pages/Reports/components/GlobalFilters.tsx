import React, { useState } from 'react';
import { LuCalendar, LuFilter, LuChevronDown } from 'react-icons/lu';

export const GlobalFilters: React.FC = () => {
  const [date] = useState('Jan 30, 2026');
  const [staff, setStaff] = useState('All Staff');
  const [service, setService] = useState('All Services');
  const [category, setCategory] = useState('All Categories');
  const [module, setModule] = useState('Show All Modules');

  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100/80 shadow-xs space-y-3.5 font-sans">
      <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
        <LuFilter className="w-4 h-4 text-gray-500" />
        <span>Global Filters</span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Date Filter */}
        <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-2xs">
          <LuCalendar className="w-4 h-4 text-gray-700 mr-2 shrink-0" />
          <span>{date}</span>
        </div>

        {/* All Staff */}
        <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-2xs">
          <select
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            className="appearance-none bg-transparent pr-6 focus:outline-none cursor-pointer text-gray-700 font-medium"
          >
            <option>All Staff</option>
            <option>Priya Sharma</option>
            <option>Amit Kumar</option>
            <option>Neha Mehta</option>
          </select>
          <LuChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
        </div>

        {/* All Services */}
        <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-2xs">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="appearance-none bg-transparent pr-6 focus:outline-none cursor-pointer text-gray-700 font-medium"
          >
            <option>All Services</option>
            <option>Hair Spa</option>
            <option>Facials</option>
            <option>Massages</option>
          </select>
          <LuChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
        </div>

        {/* All Categories */}
        <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-2xs">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none bg-transparent pr-6 focus:outline-none cursor-pointer text-gray-700 font-medium"
          >
            <option>All Categories</option>
            <option>Hair Care</option>
            <option>Skin Care</option>
            <option>Nail Products</option>
          </select>
          <LuChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
        </div>

        {/* Show All Modules */}
        <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-2xs">
          <select
            value={module}
            onChange={(e) => setModule(e.target.value)}
            className="appearance-none bg-transparent pr-6 focus:outline-none cursor-pointer text-gray-700 font-medium"
          >
            <option>Show All Modules</option>
            <option>Sales Module</option>
            <option>Appointments Module</option>
            <option>Staff Module</option>
          </select>
          <LuChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default GlobalFilters;
