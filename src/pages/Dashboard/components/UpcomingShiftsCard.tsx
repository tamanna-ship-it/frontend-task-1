import React from 'react';
import { CalendarCheck } from 'lucide-react';

const UpcomingShiftsCard: React.FC = () => {
  const shifts = [
    { date: 'Oct 8', time: '10:00 AM to 6:00 PM', type: 'work' },
    { date: 'Oct 9', time: '12:00 PM to 8:00 PM', type: 'work' },
    { date: 'Oct 10', time: 'Weekly Off', type: 'off' },
    { date: 'Oct 11', time: 'Holiday', type: 'holiday' },
    { date: 'Oct 12', time: 'Approved Leave', type: 'leave' },
    { date: 'Oct 13', time: '10:00 AM to 6:00 PM', type: 'work' }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
        <CalendarCheck className="w-5 h-5 text-indigo-500" />
        Upcoming Shifts
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {shifts.map((shift, idx) => (
          <div key={idx} className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  shift.type === 'work'
                    ? 'bg-emerald-500'
                    : shift.type === 'off'
                    ? 'bg-gray-400'
                    : shift.type === 'holiday'
                    ? 'bg-orange-500'
                    : 'bg-rose-500'
                }`}
              />
              <span className="text-sm font-bold text-gray-800">{shift.date}</span>
            </div>
            <span className="text-[11px] font-semibold text-gray-500 mt-2.5 block leading-tight">
              {shift.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingShiftsCard;
