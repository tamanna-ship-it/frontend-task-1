import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo } from 'react-icons/lu';

export const SalesReport: React.FC = () => {
  const cards = [
    { title: "NET TAKE REVENUE", value: "₹3.82L", previousValue: "₹2.5L", lastPeriod: "+11.7%", lastMonthValue: "₹2.5L", lastMonth: "+4.7%", border: true, showLastPeriod: true, showLastMonth: true },
    { title: "TOTAL OPERATING COST", value: "₹1.98L", previousValue: "₹2.5L", lastPeriod: "+42.7%", lastMonthValue: "₹2.5L", lastMonth: "+42.7%", border: false, showLastPeriod: true, showLastMonth: true },
    { title: "NET PROFIT / LOSS", value: "₹1.84L", previousValue: "₹2.5L", lastPeriod: "+42.7%", lastMonthValue: "₹2.5L", lastMonth: "+42.7%", border: false, showLastPeriod: true, showLastMonth: true },
    { title: "PROFIT MARGIN %", value: "68.4%", previousValue: "₹2.5L", lastPeriod: "+42.7%", lastMonthValue: "₹2.5L", lastMonth: "-2.2%", border: false, showLastPeriod: true, showLastMonth: true },
    { title: "REVENUE GROWTH %", value: "20.4%", previousValue: "₹2.5L", lastPeriod: "+20.4%", lastMonthValue: "₹2.5L", lastMonth: "+42.7%", border: false, showLastPeriod: false, showLastMonth: true },
    { title: "EXPENSE GROWTH %", value: "11.2%", previousValue: "₹2.5L", lastPeriod: "+11.2%", lastMonthValue: "₹2.5L", lastMonth: "+64.7%", border: false, showLastPeriod: false, showLastMonth: true },
    { title: "SERVICE REVENUE %", value: "68.4%", previousValue: "₹2.5L", lastPeriod: "+4.9%", lastMonthValue: "₹2.5L", lastMonth: "+4.9%", border: true, showLastPeriod: true, showLastMonth: false },
    { title: "PRODUCT RATE", value: "68.4%", previousValue: "₹2.5L", lastPeriod: "+7.5%", lastMonthValue: "₹2.5L", lastMonth: "+7.5%", border: true, showLastPeriod: true, showLastMonth: false },
    { title: "REVENUE PER CLIENT", value: "₹2,840", previousValue: "₹2.5L", lastPeriod: "+8.4%", lastMonthValue: "₹2.5L", lastMonth: "+8.4%", border: false, showLastPeriod: true, showLastMonth: false },
    { title: "DISCOUNT %", value: "12.4%", previousValue: "₹2.5L", lastPeriod: "+14.8%", lastMonthValue: "₹2.5L", lastMonth: "+14.8%", border: true, showLastPeriod: true, showLastMonth: false },
    { title: "MEMBERSHIP REVENUE", value: "18.6%", previousValue: "₹2.5L", lastPeriod: "+14.8%", lastMonthValue: "₹2.5L", lastMonth: "+14.8%", border: true, showLastPeriod: true, showLastMonth: false },
    { title: "REVENUE PER HOUR", value: "₹3,180", previousValue: "₹2.5L", lastPeriod: "+8.2%", lastMonthValue: "₹2.5L", lastMonth: "+8.2%", border: false, showLastPeriod: true, showLastMonth: false }
  ];

  const trendSeries = [
    { name: 'This Week', data: [45, 52, 49, 62, 59, 78, 55] },
    { name: 'Last Week', data: [40, 48, 50, 60, 52, 69, 58] }
  ];

  const trendOptions: ApexCharts.ApexOptions = {
    chart: { type: 'area', toolbar: { show: false }, sparkline: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#10b981', '#94a3b8'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.25, opacityTo: 0.05 } },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], labels: { style: { colors: '#94a3b8', fontSize: '10px' } } },
    yaxis: { labels: { formatter: (val) => `₹${val}K`, style: { colors: '#94a3b8', fontSize: '10px' } } },
    grid: { borderColor: '#f1f5f9' }
  };

  const paymentSeries = [45, 35, 15, 5, 5];
  const paymentOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#6366f1'],
    labels: ['Card', 'UPI', 'Cash', 'Wallet', 'Gateway'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: { show: true, label: 'Total', formatter: () => '₹3.46L', fontSize: '14px', fontWeight: 'bold' }
          }
        }
      }
    }
  };

  const serviceSales = [
    { service: "Hair Spa Premium", revenue: "₹68,500", quantity: "42", avgPrice: "₹1,631" },
    { service: "Facial Gold", revenue: "₹52,300", quantity: "38", avgPrice: "₹1,376" },
    { service: "Hair Color", revenue: "₹45,200", quantity: "32", avgPrice: "₹1,413" },
    { service: "Body Massage 60min", revenue: "₹38,400", quantity: "28", avgPrice: "₹1,371" },
    { service: "Manicure Deluxe", revenue: "₹28,500", quantity: "22", avgPrice: "₹1,295" }
  ];

  const productSales = [
    { product: "Hair Serum Pro", revenue: "₹68,500", qtySold: "42", stock: "45", status: "OK" },
    { product: "Face Cream Premium", revenue: "₹52,300", qtySold: "38", stock: "8", status: "Low" },
    { product: "Shampoo Organic", revenue: "₹45,200", qtySold: "32", stock: "45", status: "OK" },
    { product: "Nail Polish Set", revenue: "₹38,400", qtySold: "28", stock: "0", status: "Out" },
    { product: "Body Lotion Luxe", revenue: "₹28,500", qtySold: "22", stock: "45", status: "OK" }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-xl p-3.5 bg-white border flex flex-col justify-between shadow-sm min-h-[145px] ${card.border ? 'border-yellow-200 bg-yellow-50/10' : 'border-gray-150'}`}>
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300" />
            </div>
            <div className="my-2"><span className="text-lg font-extrabold text-gray-800">{card.value}</span></div>
            <div className="space-y-0.5 text-[9px] text-gray-400">
              {card.showLastPeriod && (
                <div className="flex justify-between">
                  <span>vs last period</span>
                  <span className="font-semibold text-gray-650 flex items-center gap-0.5">
                    {card.previousValue}
                    <span className={card.lastPeriod.startsWith('-') ? 'text-rose-500 font-bold' : 'text-emerald-500 font-bold'}>{card.lastPeriod}</span>
                  </span>
                </div>
              )}
              {card.showLastMonth && (
                <div className="flex justify-between">
                  <span>vs last month</span>
                  <span className="font-semibold text-gray-650 flex items-center gap-0.5">
                    {card.lastMonthValue}
                    <span className={card.lastMonth.startsWith('-') ? 'text-rose-500 font-bold' : 'text-emerald-500 font-bold'}>{card.lastMonth}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800">Revenue Trend</h3>
          <p className="text-[10px] text-gray-400">This week vs last week comparison</p>
          <div className="h-64 mt-4">
            <Chart options={trendOptions} series={trendSeries} type="area" height="100%" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Payment Methods</h3>
            <p className="text-[10px] text-gray-400 font-medium">Revenue by payment mode</p>
            <div className="flex items-center justify-center mt-6">
              <Chart options={paymentOptions} series={paymentSeries} type="donut" width="100%" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6 text-[10px] font-bold text-gray-500">
            {paymentOptions.labels?.map((label, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: paymentOptions.colors?.[idx] as string }} />
                <span>{label} {paymentSeries[idx]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales by Service */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Sales by Service</h3>
            <button className="text-xs text-indigo-600 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-semibold">
                <th className="pb-2">Service</th>
                <th className="pb-2 text-right">Revenue ↑↓</th>
                <th className="pb-2 text-right">Quantity ↑↓</th>
                <th className="pb-2 text-right">Avg Price ↑↓</th>
              </tr>
            </thead>
            <tbody>
              {serviceSales.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3 font-semibold text-gray-700">{item.service}</td>
                  <td className="py-3 text-right font-bold text-gray-800">{item.revenue}</td>
                  <td className="py-3 text-right text-gray-600 font-medium">{item.quantity}</td>
                  <td className="py-3 text-right text-gray-600 font-medium">{item.avgPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales by Products */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Sales by Products</h3>
            <button className="text-xs text-indigo-600 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-semibold">
                <th className="pb-2">Product</th>
                <th className="pb-2 text-right">Revenue ↑↓</th>
                <th className="pb-2 text-right">Qty Sold ↑↓</th>
                <th className="pb-2 text-right">Stock Left ↑↓</th>
              </tr>
            </thead>
            <tbody>
              {productSales.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3 font-semibold text-gray-700">{item.product}</td>
                  <td className="py-3 text-right font-bold text-gray-800">{item.revenue}</td>
                  <td className="py-3 text-right text-gray-600 font-medium">{item.qtySold}</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5 font-medium">
                      <span className="text-gray-650">{item.stock}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        item.status === 'OK' ? 'bg-green-50 text-green-600' :
                        item.status === 'Low' ? 'bg-amber-50 text-amber-600' :
                        'bg-rose-50 text-rose-600'
                      }`}>{item.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
