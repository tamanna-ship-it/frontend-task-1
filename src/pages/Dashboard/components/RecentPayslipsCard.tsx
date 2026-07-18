import React from 'react';
import { FileText, Download } from 'lucide-react';

const RecentPayslipsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-indigo-500" />
          <h4 className="text-base font-bold text-gray-800">Recent Pay slips</h4>
        </div>

        <div className="bg-[#fdfdfd] border border-gray-100 rounded-2xl p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Pay slip Month</span>
              <div className="text-sm font-extrabold text-gray-800 mt-0.5">September</div>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Employee ID</span>
              <div className="text-sm font-extrabold text-gray-800 mt-0.5">#12345</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-3">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Earnings this month</span>
              <div className="text-sm font-extrabold text-violet-700 mt-0.5">₹42,500</div>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Designation</span>
              <div className="text-sm font-extrabold text-gray-800 mt-0.5">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 mt-5">
        <button className="flex-1 border border-violet-100 text-violet-700 bg-violet-50/50 hover:bg-violet-100 transition-colors py-2 rounded-xl text-xs font-bold">
          View details
        </button>
        <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white transition-colors py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
          <Download className="w-3.5 h-3.5" />
          Download
        </button>
      </div>
    </div>
  );
};

export default RecentPayslipsCard;
