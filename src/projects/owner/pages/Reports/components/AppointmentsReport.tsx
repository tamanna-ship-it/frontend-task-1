import React from 'react';
import { LuInfo } from 'react-icons/lu';

export const AppointmentsReport: React.FC = () => {
  const cards = [
    { title: "CAPACITY UTILIZATION %", value: "72.4%", change: "+5.2%", isPositive: true, border: true },
    { title: "REVENUE PER SLOT", value: "₹1,840", change: "+7%", isPositive: true },
    { title: "CANCELLATION LOSS VALUE", value: "₹28,400", change: "+25.7%", isPositive: false },
    { title: "NO-SHOW LOSS VALUE", value: "₹18,600", note: "(90 Orders)", change: "+7%", isPositive: false },
    { title: "PEAK HOUR REVENUE %", value: "62.4%", change: "+7%", isPositive: true }
  ];

  const dailyBreakdown = [
    { date: "Jan 27, 2026", source: "Services", gross: "₹3,15,000", discount: "-₹18,500", net: "₹2,96,500", orders: "45" },
    { date: "Jan 26, 2026", source: "Products", gross: "₹98,550", discount: "-₹8,200", net: "₹90,300", orders: "45" },
    { date: "Jan 25, 2026", source: "Memberships", gross: "₹52,000", discount: "-₹2,500", net: "₹49,500", orders: "45" },
    { date: "Jan 24, 2026", source: "Gift Cards", gross: "₹13,000", discount: "-₹0", net: "₹13,000", orders: "45" },
    { date: "Jan 24, 2026", source: "Gift Cards", gross: "₹13,000", discount: "-₹0", net: "₹13,000", orders: "45" }
  ];

  const salesByStaff = [
    { staff: "Priya Sharma", initial: "PS", revenue: "₹68,500", orders: "42", avgBill: "₹1,631" },
    { staff: "Amit Kumar", initial: "AK", revenue: "₹52,300", orders: "38", avgBill: "₹1,376" },
    { staff: "Neha Mehta", initial: "NM", revenue: "₹45,200", orders: "32", avgBill: "₹1,413" },
    { staff: "Rajesh Patel", initial: "RP", revenue: "₹38,400", orders: "28", avgBill: "₹1,371" },
    { staff: "Suman Lata", initial: "SL", revenue: "₹28,500", orders: "22", avgBill: "₹1,295" }
  ];

  const cancellationReasons = [
    { reason: "Schedule Conflict", count: 6, lost: "₹8,500" },
    { reason: "Feeling Unwell", count: 4, lost: "₹5,200" },
    { reason: "Changed Mind", count: 3, lost: "₹4,100" },
    { reason: "Found Alternative", count: 3, lost: "₹4,100" },
    { reason: "Personal Emergency", count: 5, lost: "₹7,000" },
    { reason: "Travel Delays", count: 7, lost: "₹9,300" },
    { reason: "Budget Constraints", count: 1, lost: "₹1,500" }
  ];

  const heatmap = [
    { hour: "9AM", values: [45, 52, 48, 58, 65, 78, 35] },
    { hour: "10AM", values: [62, 68, 58, 72, 78, 88, 42] },
    { hour: "11AM", values: [78, 82, 72, 85, 88, 95, 55] },
    { hour: "12PM", values: [72, 75, 68, 78, 82, 88, 48] },
    { hour: "2PM", values: [65, 68, 62, 72, 75, 82, 45] },
    { hour: "4PM", values: [88, 92, 85, 95, 98, 100, 62] },
    { hour: "6PM", values: [68, 72, 65, 75, 82, 88, 42] }
  ];

  const getHeatmapColor = (val: number) => {
    if (val >= 90) return 'bg-[#8b5cf6] text-white';
    if (val >= 75) return 'bg-[#a78bfa] text-white';
    if (val >= 60) return 'bg-[#c084fc] text-slate-900';
    if (val >= 45) return 'bg-[#ddd6fe] text-slate-800';
    return 'bg-[#f3e8ff] text-slate-700';
  };

  return (
    <div className="space-y-6 w-full font-sans">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-3 bg-white flex flex-col justify-between shadow-xs transition-shadow ${
              card.border ? 'border-2 border-amber-300' : 'border border-gray-100'
            }`}
          >
            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>

            <div className="my-1.5 flex items-baseline truncate">
              <span className="text-xl font-black text-gray-900 tracking-tight truncate">{card.value}</span>
              {card.note && <span className="text-[9px] text-gray-400 font-medium ml-1.5 shrink-0">{card.note}</span>}
            </div>

            <div className="flex justify-between items-center text-[9px] text-gray-400 font-medium gap-1 overflow-hidden">
              <span className="truncate">vs last period</span>
              <span className="font-semibold text-gray-400 flex items-center gap-1 shrink-0">
                <span>₹2.5L</span>
                <span className={card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                  {card.change}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>


      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Daily Breakdown */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Daily Breakdown</h3>
            <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-450 font-semibold">
                <th className="pb-2">Date</th>
                <th className="pb-2">Revenue Source</th>
                <th className="pb-2 text-right">Gross</th>
                <th className="pb-2 text-right">Discounts</th>
                <th className="pb-2 text-right text-emerald-600">Net</th>
                <th className="pb-2 text-right">Orders</th>
              </tr>
            </thead>
            <tbody>
              {dailyBreakdown.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3 font-semibold text-gray-700">{item.date}</td>
                  <td className="py-3 text-gray-550">{item.source}</td>
                  <td className="py-3 text-right text-gray-700 font-semibold">{item.gross}</td>
                  <td className="py-3 text-right text-amber-600 font-semibold">{item.discount}</td>
                  <td className="py-3 text-right text-emerald-600 font-extrabold">{item.net}</td>
                  <td className="py-3 text-right text-gray-500">{item.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales by Staff */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Sales by Staff</h3>
            <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-450 font-semibold">
                <th className="pb-2">Staff</th>
                <th className="pb-2 text-right">Revenue ↑↓</th>
                <th className="pb-2 text-right">Orders ↑↓</th>
                <th className="pb-2 text-right">Avg Bill ↑↓</th>
              </tr>
            </thead>
            <tbody>
              {salesByStaff.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
                        {item.initial}
                      </div>
                      <span className="font-semibold text-gray-700">{item.staff}</span>
                    </div>
                  </td>
                  <td className="py-3 text-right font-bold text-gray-800">{item.revenue}</td>
                  <td className="py-3 text-right text-gray-500 font-semibold">{item.orders}</td>
                  <td className="py-3 text-right text-gray-500 font-semibold">{item.avgBill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Heatmap & Cancellation Reasons */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Heatmap */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800">Peak Hours Heatmap (Utilization %)</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="text-xs text-gray-400 font-semibold">
                  <th className="pb-2 text-left">Hour</th>
                  <th className="pb-2">Mon</th>
                  <th className="pb-2">Tue</th>
                  <th className="pb-2">Wed</th>
                  <th className="pb-2">Thu</th>
                  <th className="pb-2">Fri</th>
                  <th className="pb-2">Sat</th>
                  <th className="pb-2">Sun</th>
                </tr>
              </thead>
              <tbody>
                {heatmap.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-1 text-xs text-left font-semibold text-gray-500">{row.hour}</td>
                    {row.values.map((val, valIdx) => (
                      <td key={valIdx} className="p-0.5">
                        <div className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold ${getHeatmapColor(val)}`}>
                          {val}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancellation Reasons */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Cancellation Reasons & Revenue Lost</h3>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-450 font-semibold">
                <th className="pb-2">Reason</th>
                <th className="pb-2 text-center">Count</th>
                <th className="pb-2 text-right">Revenue Lost</th>
              </tr>
            </thead>
            <tbody>
              {cancellationReasons.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-2.5 font-semibold text-gray-700">{item.reason}</td>
                  <td className="py-2.5 text-center font-bold text-gray-800">{item.count}</td>
                  <td className="py-2.5 text-right font-extrabold text-rose-500">{item.lost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsReport;
