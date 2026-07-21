import React from 'react';
import { Megaphone, User } from 'lucide-react';

const AnnouncementsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Megaphone className="w-5 h-5 text-violet-500" />
          <h4 className="text-base font-bold text-gray-800">Announcements</h4>
        </div>

        <div className="bg-violet-50/20 border border-violet-100/40 rounded-2xl p-5">
          <h5 className="text-sm font-bold text-gray-800">Company-wide Holiday Schedule Update</h5>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold mt-2 border-b border-gray-100/80 pb-3">
            <span className="flex items-center gap-1 text-gray-500">
              <User className="w-4 h-4 text-violet-500" />
              Rajesh Alachandra
            </span>
            <span>•</span>
            <span>Monday, January 15, at 04:00 PM</span>
          </div>

          <div className="text-xs text-gray-600 mt-3 space-y-2 leading-relaxed">
            <p>
              We're excited to announce updates to our 2024 holiday schedule, which now includes three additional
              wellness days throughout the year. These changes reflect our ongoing commitment to employee well-being
              and work-life balance.
            </p>
            <p className="font-bold text-gray-700">Key Updates:</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-500 font-medium">
              <li>Memorial Day extended weekend (May 25-27, 2024)</li>
              <li>Summer wellness days in July (July 15 and July 29, 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCard;
