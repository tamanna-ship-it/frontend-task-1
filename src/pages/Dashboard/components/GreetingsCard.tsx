import React from 'react';

interface GreetingsCardProps {
  clockInTime: string;
  clockOutTime: string;
}

const GreetingsCard: React.FC<GreetingsCardProps> = ({ clockInTime, clockOutTime }) => {
  const inParts = clockInTime.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i) || [null, clockInTime, ''];
  const outParts = clockOutTime.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i) || [null, clockOutTime, ''];

  return (
    <div className="bg-[#1e2022] text-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl border border-[#2a2e35] gap-6">
      {/* Subtle design accents */}
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-5 z-10 w-full md:w-auto">
        {/* Avatar (Grey Circle) */}
        <div className="w-16 h-16 rounded-full bg-[#2a2d31] flex-shrink-0" />
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold tracking-tight">Good Afternoon, Rajesh</h3>
            <span className="text-xl animate-pulse">👋</span>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Welcome back! Here's a quick view of your day at Glamour Studio.
          </p>
          <span className="inline-block bg-[#22252a] text-gray-300 text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mt-3 border border-gray-700/50">
            Stylist
          </span>
        </div>
      </div>

      {/* Clock In / Out Stats Card */}
      <div className="bg-[#121416] text-white rounded-2xl px-6 py-4 flex items-center justify-center border border-[#2a2e35] shadow-xl relative overflow-hidden z-10 w-full md:w-auto gap-5 min-w-[240px]">
        <div className="flex flex-col items-center flex-1">
          <div className="text-2xl font-black text-white flex items-baseline">
            {inParts[1]}
            {inParts[2] && <span className="text-xs font-bold text-gray-400 ml-0.5">{inParts[2]}</span>}
          </div>
          <span className="text-gray-400 text-[10px] font-semibold mt-1">Clock in</span>
        </div>
        
        <div className="text-violet-500 text-xl font-extrabold pb-4 self-center">:</div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="text-2xl font-black text-white flex items-baseline">
            {outParts[1]}
            {outParts[2] && <span className="text-xs font-bold text-gray-400 ml-0.5">{outParts[2]}</span>}
          </div>
          <span className="text-gray-400 text-[10px] font-semibold mt-1">Clock Out</span>
        </div>
      </div>
    </div>
  );
};

export default GreetingsCard;
