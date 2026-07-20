import React, { useState } from 'react';
import SideNavBar from './components/SideNavBar';
import TopNavBar from './components/TopNavBar';
import GlobalFilters from './components/GlobalFilters';

// Import all report pages
import SalesReport from './reports/SalesReport';
import AppointmentsReport from './reports/AppointmentsReport';
import ClientsReport from './reports/ClientsReport';
import StaffReport from './reports/StaffReport';
import ProductInventoryReport from './reports/ProductInventoryReport';
import PaymentsTaxesReport from './reports/PaymentsTaxesReport';

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
  const [activeTab, setActiveTab] = useState('Dashboards');



  return (
    <div className="flex h-screen bg-[#f4f7fe] w-full text-gray-800 font-sans overflow-hidden">
      {/* Side Navigation Bar */}
      <SideNavBar activeItem={activeTab} onItemClick={setActiveTab} />

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top Navigation Bar */}
        <TopNavBar salonName="Raju's Salon&Clinic" userName="Raju" notificationCount={10} />

        {/* Content Container */}
        <main className="p-6 space-y-10 overflow-y-auto h-[calc(100vh-64px)] no-scrollbar overflow-x-hidden">
          
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Master Operations Dashboard</h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Step-by-step complete business analysis reports</p>
            </div>
            
            {/* Header Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-600 rounded-lg shadow-sm transition-colors cursor-pointer">
                Expand All
              </button>
              <button className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-600 rounded-lg shadow-sm transition-colors cursor-pointer">
                Collapse All
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-600 rounded-lg shadow-sm transition-colors cursor-pointer">
                <LuDownload className="w-3.5 h-3.5" />
                <span>Export All</span>
              </button>
            </div>
          </div>

          {/* Global Filters Component */}
          <GlobalFilters />

          {/*  Sales Reports Section */}
          <div id="sales" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-50 text-indigo-650 rounded-full flex items-center justify-center">
                  <LuTrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Sales Reports</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <SalesReport />
          </div>

          {/* Appointments & Scheduling Section */}
          <div id="appointments" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-50 text-emerald-650 rounded-full flex items-center justify-center">
                  <LuCalendarDays className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Appointments & Scheduling</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <AppointmentsReport />
          </div>

          {/* Clients Reports Section */}
          <div id="clients" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-purple-50 text-purple-650 rounded-full flex items-center justify-center">
                  <LuCircleUser className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Clients Reports</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <ClientsReport />
          </div>

          {/* Staff Reports Section */}
          <div id="staff" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-50 text-amber-650 rounded-full flex items-center justify-center">
                  <LuUsers className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Staff Reports</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <StaffReport />
          </div>

          {/* Product & Inventory Section */}
          <div id="inventory" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 text-blue-650 rounded-full flex items-center justify-center">
                  <LuBox className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Product & Inventory</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <ProductInventoryReport />
          </div>

          {/* Payments & Taxes Section */}
          <div id="payments-taxes" className="space-y-4">
            <div className="flex items-center justify-between px-5 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-rose-50 text-rose-650 rounded-full flex items-center justify-center">
                  <LuCreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm"> Payments & Taxes</h3>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 hover:bg-gray-50 rounded-xl bg-white text-gray-700 font-bold text-xs transition-colors shadow-sm cursor-pointer">
                  <LuDownload className="w-3.5 h-3.5 text-gray-405" />
                  <span>Export Report</span>
                </button>
                <LuChevronUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <PaymentsTaxesReport />
          </div>

        </main>
      </div>
    </div>
  );
};

export default DetailedReport;
