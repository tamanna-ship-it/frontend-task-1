import React from 'react';

const TodaysOverviewCard: React.FC = () => {
  return (
    <div className='bg-white p-4 rounded-3xl'>
      <h3 className="text-base font-bold text-gray-800 tracking-tight">Today's Overview</h3>
      <p className="text-xs text-gray-400 mt-0.5">Keep up the pace — you're on track for a productive day 🚀</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {/* Card 1: Attendance */}
        <div className="bg-[#eaf7f2] rounded-2xl p-5 border border-[#cbebe0] transition-transform hover:-translate-y-1 duration-200">
          <span className="text-[#107e59] text-xs font-semibold">Attendance</span>
          <div className="text-3xl font-extrabold text-[#065f46] mt-2">94%</div>
        </div>

        {/* Card 2: Total Hours */}
        <div className="bg-[#fff7ed] rounded-2xl p-5 border border-[#fed7aa] transition-transform hover:-translate-y-1 duration-200">
          <span className="text-[#c2410c] text-xs font-semibold">Total Hours</span>
          <div className="text-3xl font-extrabold text-[#9a3412] mt-2">164h</div>
        </div>

        {/* Card 3: Clients Served */}
        <div className="bg-[#f5f3ff] rounded-2xl p-5 border border-[#ddd6fe] transition-transform hover:-translate-y-1 duration-200">
          <span className="text-[#6d28d9] text-xs font-semibold">Clients Served</span>
          <div className="text-3xl font-extrabold text-[#5b21b6] mt-2">52</div>
        </div>

        {/* Card 4: Avg Rating */}
        <div className="bg-[#fefce8] rounded-2xl p-5 border border-[#fef08a] transition-transform hover:-translate-y-1 duration-200">
          <span className="text-[#a16207] text-xs font-semibold">Avg. Rating</span>
          <div className="text-3xl font-extrabold text-[#854d0e] mt-2 flex items-center gap-1.5">
            <span className="text-2xl">⭐</span> 4.8
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysOverviewCard;
