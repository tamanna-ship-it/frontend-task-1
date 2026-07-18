import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const HolidaysAndEventsCard: React.FC = () => {
  const events = [
    { event: 'Dussehra', date: 'Oct 15' },
    { event: 'Foundation Day', date: 'Nov 1' },
    { event: 'Christmas 🎄', date: 'Dec 25' }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-500" />
            <h4 className="text-base font-bold text-gray-800">Holidays & Events</h4>
          </div>
        </div>

        <div className="space-y-3">
          {events.map((e, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/40 border border-gray-100/50 rounded-2xl">
              <span className="text-sm font-bold text-gray-800">{e.event}</span>
              <span className="text-xs font-bold text-gray-500">{e.date}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 text-center text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors flex items-center justify-center gap-1">
        View Full Calendar
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default HolidaysAndEventsCard;
