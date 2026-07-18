import React from 'react';
import { Gift } from 'lucide-react';

const TodaysCelebrationsCard: React.FC = () => {
  const celebrations = [
    { name: 'Anjali', type: 'Birthday 🎂', date: 'Oct 10' },
    { name: 'Ramesh', type: 'Work Anniversary 🏆', date: 'Oct 12' },
    { name: 'Ramesh', type: 'Work Anniversary 🏆', date: 'Oct 12' }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-rose-500" />
          <h4 className="text-base font-bold text-gray-800">Today's Celebrations 🎉</h4>
        </div>

        <div className="space-y-3">
          {celebrations.map((c, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/40 border border-gray-100/50 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">{c.name}</span>
                  <span className="text-[10px] text-gray-400 font-semibold">{c.type}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-500">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysCelebrationsCard;
