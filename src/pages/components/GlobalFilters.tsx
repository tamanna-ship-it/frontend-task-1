import React from 'react';
import { LuCalendar, LuChevronDown, LuFilter, LuX } from 'react-icons/lu';

export const GlobalFilters: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm w-full font-sans">
      {/* Title */}
      <div className="flex items-center gap-2 text-gray-700 font-bold text-xs mb-4">
        <LuFilter className="w-4 h-4 text-gray-400" />
        <span className="uppercase tracking-wider">Global Filters</span>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {/* Date Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold">Date Filter</label>
          <div className="flex items-center gap-2.5 px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors cursor-pointer text-sm font-medium text-gray-700">
            <LuCalendar className="w-4 h-4 text-gray-400" />
            <span>All Time</span>
          </div>
        </div>

        {/* Staff Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold">Staff</label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors cursor-pointer text-sm font-medium text-gray-700">
            <span>All Staff</span>
            <div className="flex items-center gap-1.5">
              <button className="text-gray-400 hover:text-gray-600 p-0.5 rounded transition-colors">
                <LuX className="w-3.5 h-3.5" />
              </button>
              <LuChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold">Category</label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors cursor-pointer text-sm font-medium text-gray-700">
            <span>All Categories</span>
            <LuChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Module Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold">Module</label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-gray-300 transition-colors cursor-pointer text-sm font-medium text-gray-700">
            <span>All Modules</span>
            <LuChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilters;
