import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo, LuChevronDown, LuTrendingUp, LuAward } from 'react-icons/lu';

export const StaffReport: React.FC = () => {
  const kpis = [
    { title: "STAFF REVENUE", value: "₹3.28L", prev: "₹2.5L", change: "+7.9%", isPositive: true },
    { title: "PROFIT PER STAFF", value: "₹25,620", prev: "₹2.5L", change: "+7.9%", isPositive: true },
    { title: "REVENUE PER HOUR", value: "₹390", prev: "₹2.5L", change: "+7.9%", isPositive: true },
    { title: "REPEAT CLIENT %", value: "68.4%", prev: "₹2.5L", change: "+7.9%", isPositive: true },
    { title: "HIGH PERFORMERS", value: "2", note: "of 5", change: "+10%", isPositive: true, isSpecial: true }
  ];

  const warningCards = [
    { title: "LOSS-MAKING STAFF", value: "1", subText: "₹2.5L +7.9%", isPositive: true },
    { title: "LOW UTILIZATION STAFF", value: "2", subText: "40%" },
    { title: "IDLE SALARY COST", value: "₹48,200", subText: "268 hrs +12.6%", isPositive: false },
    { title: "HIGH DISCOUNT STAFF", value: "2" }
  ];

  const barSeries = [{
    data: [78000, 65000, 52000, 45000, 38000, 45500, 32200]
  }];
  const barOptions: ApexCharts.ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, borderRadius: 6, barHeight: '55%' } },
    colors: ['#f59e0b'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Neha', 'Priya', 'Amit', 'Ravi', 'Sunita', 'Rajesh', 'Meera'],
      labels: { formatter: (val) => `₹${Number(val) / 1000}K`, style: { colors: '#94a3b8', fontSize: '9px' } }
    },
    yaxis: { labels: { style: { colors: '#475569', fontWeight: 600 } } },
    grid: { borderColor: '#f1f5f9' }
  };

  const lineSeries = [
    { name: 'Neha Patel', data: [12000, 14000, 11000, 13500, 11500, 18000, 10000] },
    { name: 'Priya Sharma', data: [10000, 11500, 12200, 13000, 11000, 15000, 8500] },
    { name: 'Amit Kumar', data: [8000, 9200, 8800, 9500, 9000, 12000, 7000] }
  ];
  const lineOptions: ApexCharts.ApexOptions = {
    chart: { type: 'line', toolbar: { show: false } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#10b981', '#2563eb', '#f59e0b'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], labels: { style: { colors: '#94a3b8', fontSize: '10px' } } },
    yaxis: { labels: { formatter: (val) => `₹${val}`, style: { colors: '#94a3b8', fontSize: '10px' } } },
    grid: { borderColor: '#f1f5f9' }
  };

  const leaderboard = [
    { rank: 1, staff: "Priya S.", services: 48, revenue: "₹1,25,000", products: "₹18,500", commission: "₹18,500", incentive: "₹15,000", attendance: "95%" },
    { rank: 2, staff: "Amit K.", services: 42, revenue: "₹98,500", products: "₹12,800", commission: "₹12,800", incentive: "₹11,820", attendance: "85%" },
    { rank: 3, staff: "Neha M.", services: 38, revenue: "₹85,000", products: "₹15,200", commission: "₹15,200", incentive: "₹10,200", attendance: "83%", isYellowAtt: true },
    { rank: 4, staff: "Rajesh P.", services: 32, revenue: "₹68,500", products: "₹8,500", commission: "₹8,500", incentive: "₹8,220", attendance: "90%" },
    { rank: 5, staff: "Suman L.", services: 28, revenue: "₹52,000", products: "₹6,200", commission: "₹6,200", incentive: "₹6,240", attendance: "100%" }
  ];

  const topPerformers = [
    { rank: 1, name: "Neha", value: "₹78,000", bg: "bg-amber-500 text-white", badge: true },
    { rank: 2, name: "Priya", value: "₹65,000", bg: "bg-slate-400 text-white", badge: true },
    { rank: 3, name: "Amit", value: "₹52,000", bg: "bg-amber-800 text-white", badge: true },
    { rank: 4, name: "Amit", value: "₹52,000", bg: "bg-amber-900 text-white", badge: false },
    { rank: 5, name: "Amit", value: "₹52,000", bg: "bg-amber-950 text-white", badge: false }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* Top KPIs Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {kpis.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-3 bg-white border border-gray-100 flex flex-col justify-between shadow-xs min-h-[110px]"
          >
            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>

            <div className="my-1 flex items-baseline justify-between">
              <span className="text-xl font-black text-gray-900 tracking-tight">{card.value}</span>
              {card.isSpecial && (
                <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-0.5">
                  <LuTrendingUp className="w-3 h-3" />
                  <span>{card.change}</span>
                </span>
              )}
            </div>

            <div className="flex justify-between items-center text-[9px] text-gray-400 font-medium overflow-hidden">
              <span className="truncate">vs last Month</span>
              {card.isSpecial ? (
                <span className="text-gray-400 font-medium">{card.note}</span>
              ) : (
                <span className="font-semibold text-gray-400 flex items-center gap-1 shrink-0">
                  <span>{card.prev}</span>
                  <span className="text-emerald-500 font-bold">{card.change}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Warning Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {warningCards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-3 bg-white border-2 border-amber-300 flex flex-col justify-between shadow-xs min-h-[105px]"
          >
            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>

            <div className="my-1">
              <span className="text-xl font-black text-rose-500 tracking-tight">{card.value}</span>
            </div>

            <div className="flex justify-end items-center text-[9px] text-gray-400 font-medium overflow-hidden">
              {card.subText && (
                <span className="font-semibold flex items-center gap-1 shrink-0">
                  {card.subText.includes('+') ? (
                    <>
                      <span className="text-gray-400">{card.subText.split('+')[0]}</span>
                      <span className="text-emerald-500 font-bold">+{card.subText.split('+')[1]}</span>
                    </>
                  ) : (
                    <span className="text-gray-400 font-bold">{card.subText}</span>
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Revenue by Staff */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-gray-800">Revenue by Staff</h3>
          <p className="text-[10px] text-gray-400 mb-4">Top performers this period</p>
          <div className="flex-1 min-h-[250px]">
            <Chart options={barOptions} series={barSeries} type="bar" height="100%" />
          </div>
        </div>

        {/* Weekly Performance Trend */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-gray-800">Weekly Performance Trend</h3>
          <p className="text-[10px] text-gray-400 mb-4">Top 3 staff daily revenue</p>
          <div className="flex-1 min-h-[250px]">
            <Chart options={lineOptions} series={lineSeries} type="line" height="100%" />
          </div>
          <div className="flex justify-center gap-6 mt-4 text-[10px] font-bold text-gray-500">
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" /> Neha Patel</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" /> Priya Sharma</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" /> Amit Kumar</div>
          </div>
        </div>
      </div>

      {/* Leaderboards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Leaderboard Table */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Staff Revenue Leaderboard</h3>
            <button className="text-xs text-gray-500 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-semibold">
                  <th className="pb-2">Staff</th>
                  <th className="pb-2 text-center">Services</th>
                  <th className="pb-2 text-right">Revenue</th>
                  <th className="pb-2 text-right">Products</th>
                  <th className="pb-2 text-right">Commissions</th>
                  <th className="pb-2 text-right">Incentives</th>
                  <th className="pb-2 text-center">Attendance %↑↓</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-none">
                    <td className="py-3 font-semibold text-gray-700 flex items-center gap-2">
                      {item.rank === 1 && <span className="text-amber-500">🥇</span>}
                      {item.rank === 2 && <span className="text-slate-400">🥈</span>}
                      {item.rank === 3 && <span className="text-amber-700">🥉</span>}
                      <span>{item.staff}</span>
                    </td>
                    <td className="py-3 text-center font-bold text-gray-800">{item.services}</td>
                    <td className="py-3 text-right font-extrabold text-emerald-600">{item.revenue}</td>
                    <td className="py-3 text-right text-gray-600 font-semibold">{item.products}</td>
                    <td className="py-3 text-right text-gray-600 font-semibold">{item.commission}</td>
                    <td className="py-3 text-right">
                      <span className="bg-purple-50 text-purple-600 font-extrabold rounded-full px-2.5 py-0.5 text-[10px]">
                        {item.incentive}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        item.isYellowAtt ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'
                      }`}>
                        {item.attendance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performers list */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-800">Top Performers</h3>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 font-semibold border border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
                <span>Revenue</span> <LuChevronDown className="w-3 h-3" />
              </div>
            </div>
            <div className="space-y-2.5">
              {topPerformers.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50/70 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs shadow-2xs ${item.bg}`}>
                      {item.rank}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-800">{item.name}</span>
                      <span className="text-[10px] text-gray-400 font-semibold">{item.value}</span>
                    </div>
                  </div>
                  {item.badge && <LuAward className="w-4 h-4 text-amber-500" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffReport;
