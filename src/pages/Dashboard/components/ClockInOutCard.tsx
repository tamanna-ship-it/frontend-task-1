import React from 'react';

interface ClockInOutCardProps {
  clockInTime: string;
  isClockedIn: boolean;
  isOnBreak: boolean;
  onBreakToggle: () => void;
  onClockOutToggle: () => void;
}

const ClockInOutCard: React.FC<ClockInOutCardProps> = ({
  clockInTime,
  isClockedIn,
  isOnBreak,
  onBreakToggle,
  onClockOutToggle
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <div>
        <span className="text-gray-400 font-medium text-lg">Welcome!</span>
        <h2 className="text-xl font-bold text-gray-800 mt-1">
          It's <span className="text-violet-600 font-extrabold">{clockInTime}</span>, 23 March, Sat
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onBreakToggle}
          className={`px-5 py-2.5 rounded-md border border-violet-700 text-sm font-semibold transition-all ${
            isOnBreak
              ? 'bg-violet-700 border-violet-700 text-white shadow-sm'
              : 'border-violet-200 text-violet-700 bg-violet-50/50 hover:bg-violet-100'
          }`}
        >
          {isOnBreak ? 'Resume Work' : 'Take Break'}
        </button>
        <button
          onClick={onClockOutToggle}
          className="px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-violet-700 hover:bg-violet-800 transition-all shadow-md"
        >
          {isClockedIn ? 'Clockout' : 'Clock In'}
        </button>
      </div>
    </div>
  );
};

export default ClockInOutCard;
