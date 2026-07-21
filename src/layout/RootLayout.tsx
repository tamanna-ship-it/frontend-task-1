import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar';

const RootLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#f8f9fa] overflow-hidden relative">
      {/* Sidebar Navigation */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-20 md:hidden transition-opacity duration-300 cursor-pointer border-none outline-none"
          aria-label="Close Sidebar backdrop"
        />
      )}

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header/Navbar Section */}
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

        {/* Dynamic Route View */}
        <main className="flex-1 overflow-y-auto px-8 py-6 bg-[#3B82F615] custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
