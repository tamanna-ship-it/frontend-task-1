import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo, LuChevronDown } from 'react-icons/lu';

export const StaffReport: React.FC = () => {
  const kpis = [
    { title: "STAFF REVENUE", value: "₹3.28L", change: "+7.9%", isPositive: true },
    { title: "PROFIT PER STAFF", value: "₹25,620", change: "+7.9%", isPositive: true },
    { title: "REVENUE PER HOUR", value: "₹390", change: "+7.9%", isPositive: true },
    { title: "REPEAT CLIENT %", value: "68.4%", change: "+7.9%", isPositive: true },
    { title: "HIGH PERFORMERS", value: "2", note: "of 5", change: "10%", isPositive: true }
  ];

  const warningCards = [
    { title: "LOSS-MAKING STAFF", value: "1", change: "+7.9%", isPositive: false, border: true },
    { title: "LOW UTILIZATION STAFF", value: "2", note: "40%", border: true },
    { title: "IDLE SALARY COST", value: "₹48,200", change: "268 hrs +12.6%", isPositive: false, border: true },
    { title: "HIGH DISCOUNT STAFF", value: "2", border: true }
  ];

  const barSeries = [{
    data: [78000, 65000, 52000, 45000, 38000, 45500, 32200]
  }];
  const barOptions: ApexCharts.ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, borderRadius: 4, barHeight: '55%' } },
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
    { staff: "Priya S.", services: 48, revenue: "₹1,25,000", products: "₹18,500", commission: "₹18,500", incentive: "₹15,000", attendance: "95%" },
    { staff: "Amit K.", services: 42, revenue: "₹98,500", products: "₹12,800", commission: "₹12,800", incentive: "₹11,820", attendance: "85%" },
    { staff: "Neha M.", services: 38, revenue: "₹85,000", products: "₹15,200", commission: "₹15,200", incentive: "₹10,200", attendance: "83%" },
    { staff: "Rajesh P.", services: 32, revenue: "₹68,500", products: "₹8,500", commission: "₹8,500", incentive: "₹8,220", attendance: "90%" },
    { staff: "Suman L.", services: 28, revenue: "₹52,000", products: "₹6,200", commission: "₹6,200", incentive: "₹6,240", attendance: "100%" }
  ];

  const topPerformers = [
    { rank: 1, name: "Neha", value: "₹78,000" },
    { rank: 2, name: "Priya", value: "₹65,000" },
    { rank: 3, name: "Amit", value: "₹52,000" },
    { rank: 4, name: "Amit", value: "₹52,000" },
    { rank: 5, name: "Amit", value: "₹52,000" }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* Top KPIs Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((card, idx) => (
          <div key={idx} className="rounded-xl p-4 bg-white border border-gray-100 flex flex-col justify-between shadow-sm min-h-[135px]">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{card.title}</span>
              <LuInfo className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <div className="my-2">
              <span className="text-xl font-extrabold text-gray-900">{card.value}</span>
              {card.note && <span className="text-[10px] text-gray-400 font-medium ml-1">{card.note}</span>}
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold">
              <span>vs last month</span>
              <span className={card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>{card.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Warning Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {warningCards.map((card, idx) => (
          <div key={idx} className="rounded-xl p-4 bg-yellow-50/10 border border-yellow-200 flex flex-col justify-between shadow-sm min-h-[120px]">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{card.title}</span>
              <LuInfo className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <div className="my-1.5">
              <span className="text-xl font-extrabold text-gray-900">{card.value}</span>
              {card.note && <span className="text-[10px] text-gray-400 font-medium ml-1.5">{card.note}</span>}
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold">
              {card.change ? (
                <>
                  <span>vs last month</span>
                  <span className={card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>{card.change}</span>
                </>
              ) : (
                <span className="text-[9px] text-[#fb923c] font-bold">Requires attention</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Leaderboard Table */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Staff Revenue Leaderboard</h3>
            <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-450 font-semibold">
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
                  <td className="py-3 font-semibold text-gray-700">{item.staff}</td>
                  <td className="py-3 text-center font-bold text-gray-800">{item.services}</td>
                  <td className="py-3 text-right font-extrabold text-emerald-600">{item.revenue}</td>
                  <td className="py-3 text-right text-gray-650 font-semibold">{item.products}</td>
                  <td className="py-3 text-right text-gray-650 font-semibold">{item.commission}</td>
                  <td className="py-3 text-right text-indigo-600 font-extrabold bg-indigo-50/20 rounded-lg px-2">{item.incentive}</td>
                  <td className="py-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-green-50 text-green-600">
                      {item.attendance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Performers list */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-800">Top Performers</h3>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 font-semibold cursor-pointer">
                <span>Revenue</span> <LuChevronDown className="w-3 h-3" />
              </div>
            </div>
            <div className="space-y-2.5">
              {topPerformers.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-xs ${
                      item.rank === 1 ? 'bg-amber-100 text-amber-700' :
                      item.rank === 2 ? 'bg-slate-200 text-slate-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>{item.rank}</span>
                    <span className="text-xs font-bold text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-xs font-extrabold text-gray-800">{item.value}</span>
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
