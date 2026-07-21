import React from 'react';
import GlobalFilters from './components/GlobalFilters';

// Import all report pages
import { SalesReport } from './components/SalesReport';
import { AppointmentsReport } from './components/AppointmentsReport';
import { ClientsReport } from './components/ClientsReport';
import { StaffReport } from './components/StaffReport';
import { ProductInventoryReport } from './components/ProductInventoryReport';
import { PaymentsTaxesReport } from './components/PaymentsTaxesReport';

import { 
  LuTrendingUp, 
  LuDownload, 
  LuChevronUp,
  LuCalendarDays,
  LuCircleUser,
  LuUsers,
  LuBox,
  LuCreditCard
} from 'react-icons/lu';

export const DetailedReport: React.FC = () => {
  return (
    <div className="space-y-6 max-w-[1280px] mx-auto w-full px-4 sm:px-6 text-gray-800 font-sans pb-10">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 pb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight">All Reports</h1>
          <p className="text-xs sm:text-sm text-[#7c78ab] font-medium mt-1">Complete operational reports dashboard</p>
        </div>
        
        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 rounded-full shadow-2xs transition-colors cursor-pointer">
            Expand All
          </button>
          <button className="px-5 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 rounded-full shadow-2xs transition-colors cursor-pointer">
            Collapse All
          </button>
          <button className="flex items-center gap-2 px-5 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 rounded-full shadow-2xs transition-colors cursor-pointer">
            <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      {/* Global Filters Component */}
      <GlobalFilters />

      {/* Sales Reports Section */}
      <div id="sales" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-100/60 text-blue-600 rounded-full flex items-center justify-center">
              <LuTrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Sales Reports</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <SalesReport />
      </div>

      {/* Appointments & Scheduling Section */}
      <div id="appointments" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-100/60 text-emerald-600 rounded-full flex items-center justify-center">
              <LuCalendarDays className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Appointments & Scheduling</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <AppointmentsReport />
      </div>

      {/* Clients Reports Section */}
      <div id="clients" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-100/60 text-purple-600 rounded-full flex items-center justify-center">
              <LuCircleUser className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Clients Reports</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <ClientsReport />
      </div>

      {/* Staff Reports Section */}
      <div id="staff" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-100/60 text-amber-600 rounded-full flex items-center justify-center">
              <LuUsers className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Staff Reports</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <StaffReport />
      </div>

      {/* Product & Inventory Section */}
      <div id="inventory" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-100/60 text-blue-600 rounded-full flex items-center justify-center">
              <LuBox className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Product & Inventory</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <ProductInventoryReport />
      </div>

      {/* Payments & Taxes Section */}
      <div id="payments-taxes" className="space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-3xl border border-gray-100/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-rose-100/60 text-rose-600 rounded-full flex items-center justify-center">
              <LuCreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg">Payments & Taxes</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-2xl bg-white text-gray-700 font-semibold text-xs transition-colors shadow-2xs cursor-pointer">
              <span>Export All</span>
              <LuDownload className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <LuChevronUp className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <PaymentsTaxesReport />
      </div>
    </div>
  );
};

export default DetailedReport;
