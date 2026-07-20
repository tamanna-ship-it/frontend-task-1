import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo } from 'react-icons/lu';

export const ClientsReport: React.FC = () => {
  const cards = [
    { title: "HIGH-VALUE CLIENT %", value: "24.6%", change: "+7.9%", isPositive: true },
    { title: "REPEAT REVENUE %", value: "72.8%", change: "+6.4%", isPositive: true, border: true },
    { title: "CLIENT LIFETIME VALUE", value: "₹18,400", change: "+9.5%", isPositive: true },
    { title: "CLIENT DROP-OFF %", value: "8.2%", change: "+28.1%", isPositive: false },
    { title: "MEMBERSHIP ROI", value: "1.82x", change: "+11%", isPositive: true, border: true }
  ];

  const repeatSeries = [65, 35];
  const repeatOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#6366f1', '#64748b'],
    labels: ['Repeat Clients', 'New Clients'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Repeat',
              formatter: () => '65%',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#6366f1'
            }
          }
        }
      }
    }
  };

  const tierSeries = [69, 11, 15, 4];
  const tierOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#94a3b8', '#cbd5e1', '#f59e0b', '#8b5cf6'],
    labels: ['Non-member', 'Silver', 'Gold', 'Platinum'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Members',
              formatter: () => '31%',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#f59e0b'
            }
          }
        }
      }
    }
  };

  const topClients = [
    { client: "Anjali Verma", visits: 28, spend: "₹86,500", lastVisit: "Today", tier: "Platinum", badgeClass: "bg-yellow-50 text-yellow-600 border border-yellow-250" },
    { client: "Priya Kapoor", visits: 22, spend: "₹62,400", lastVisit: "Yesterday", tier: "Gold", badgeClass: "bg-amber-50 text-amber-600 border border-amber-250" },
    { client: "Rahul Kumar", visits: 18, spend: "₹48,200", lastVisit: "3 days ago", tier: "-", badgeClass: "text-gray-400" },
    { client: "Sneha Patel", visits: 15, spend: "₹38,500", lastVisit: "1 week ago", tier: "Silver", badgeClass: "bg-gray-100 text-gray-650 border border-gray-200" },
    { client: "Vikram Singh", visits: 12, spend: "₹32,800", lastVisit: "2 days ago", tier: "Gold", badgeClass: "bg-amber-50 text-amber-600 border border-amber-250" }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-xl p-4 bg-white border flex flex-col justify-between shadow-sm min-h-[140px] ${card.border ? 'border-yellow-200 bg-yellow-50/10' : 'border-gray-100'}`}>
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{card.title}</span>
              <LuInfo className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <div className="my-2"><span className="text-xl font-extrabold text-gray-900">{card.value}</span></div>
            <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold">
              <span>vs last period</span>
              <span className={card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>{card.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Banner / Stat Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Repeat Revenue Trend */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" /> Repeat Revenue Trend
            </span>
            <h4 className="text-xl font-extrabold text-[#10b981]">72.8%</h4>
            <p className="text-[10px] text-gray-400">of revenue from repeat clients</p>
          </div>
          <span className="text-xs font-bold text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-lg">
            +4.4% vs last period <span className="text-[9px] block text-gray-400 font-semibold text-center mt-0.5">Growing loyalty base</span>
          </span>
        </div>

        {/* Drop-off Change */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" /> Drop-off Change
            </span>
            <h4 className="text-xl font-extrabold text-rose-500">28 clients</h4>
            <p className="text-[10px] text-gray-400">inactive for 45+ days</p>
          </div>
          <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-lg">
            +1.8% vs last period <span className="text-[9px] block text-gray-400 font-semibold text-center mt-0.5">Re-engagement needed</span>
          </span>
        </div>
      </div>

      {/* Donut Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New vs Repeat */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-around">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-800">New vs Repeat</h3>
            <div className="space-y-1 mt-4">
              <div className="flex items-center gap-6 justify-between text-xs">
                <span className="flex items-center gap-2 font-medium text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-650" /> Repeat Clients
                </span>
                <span className="font-bold text-gray-800">65%</span>
              </div>
              <div className="flex items-center gap-6 justify-between text-xs">
                <span className="flex items-center gap-2 font-medium text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> New Clients
                </span>
                <span className="font-bold text-gray-800">35%</span>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 mt-4 md:mt-0 flex items-center justify-center">
            <Chart options={repeatOptions} series={repeatSeries} type="donut" width="100%" />
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-around">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-800">Membership Tiers</h3>
            <p className="text-[10px] text-gray-400">Client membership status</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-4 text-xs">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-slate-400" /> Non-member
                </span>
                <span className="font-bold text-gray-800">69%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b]" /> Gold
                </span>
                <span className="font-bold text-gray-800">15%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-slate-300" /> Silver
                </span>
                <span className="font-bold text-gray-800">11%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-purple-550" /> Platinum
                </span>
                <span className="font-bold text-gray-800">4%</span>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 mt-4 md:mt-0 flex items-center justify-center">
            <Chart options={tierOptions} series={tierSeries} type="donut" width="100%" />
          </div>
        </div>
      </div>

      {/* Top Clients Table */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-gray-800">Top Clients</h3>
          <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
        </div>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-450 font-semibold">
              <th className="pb-2">Client</th>
              <th className="pb-2 text-center">Visits ↑↓</th>
              <th className="pb-2 text-center">Total Spend ↑↓</th>
              <th className="pb-2 text-center">Last Visit</th>
              <th className="pb-2 text-center">Membership</th>
            </tr>
          </thead>
          <tbody>
            {topClients.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-none hover:bg-slate-50 transition-colors">
                <td className="py-3 font-semibold text-gray-700">{item.client}</td>
                <td className="py-3 text-center text-gray-600 font-bold">{item.visits}</td>
                <td className="py-3 text-center text-gray-800 font-extrabold">{item.spend}</td>
                <td className="py-3 text-center text-gray-500">{item.lastVisit}</td>
                <td className="py-3 text-center">
                  <span className={`px-3 py-0.5 rounded-full text-[9px] font-bold ${item.badgeClass}`}>
                    {item.tier}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsReport;
