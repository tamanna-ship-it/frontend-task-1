import React from 'react';
import { FileText, Calendar, Megaphone, Clock, Award, TrendingUp } from 'lucide-react';

const QuickActionsCard: React.FC = () => {
  const actions = [
    { label: 'Payslip', bg: 'bg-[#fef9c3]', border: 'border-[#fef08a]', text: 'text-[#854d0e]', icon: FileText },
    { label: 'My Leaves', bg: 'bg-[#dcfce7]', border: 'border-[#bbf7d0]', text: 'text-[#166534]', icon: Calendar },
    { label: 'Announcements', bg: 'bg-[#fee2e2]', border: 'border-[#fecaca]', text: 'text-[#991b1b]', icon: Megaphone },
    { label: 'Shifts', bg: 'bg-[#f3e8ff]', border: 'border-[#e9d5ff]', text: 'text-[#6b21a8]', icon: Clock },
    { label: 'TODO', bg: 'bg-[#ffedd5]', border: 'border-[#fed7aa]', text: 'text-[#9a3412]', icon: Award },
    { label: 'Expense', bg: 'bg-[#ccfbf1]', border: 'border-[#99f6e4]', text: 'text-[#115e59]', icon: TrendingUp }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <h4 className="text-base font-bold text-gray-800 mb-4">Quick Actions</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <button
              key={idx}
              className={`p-4 rounded-2xl border ${act.bg} ${act.border} hover:scale-[1.03] transition-transform duration-200 flex flex-col items-center gap-3 text-center cursor-pointer`}
            >
              <div className={`p-2.5 rounded-xl bg-white/70 shadow-sm ${act.text}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold ${act.text}`}>{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsCard;
