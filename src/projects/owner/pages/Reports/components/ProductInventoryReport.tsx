import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo } from 'react-icons/lu';

export const ProductInventoryReport: React.FC = () => {
  const kpis = [
    { title: "INVENTORY VALUE", value: "₹2.48L", change: "+100%", isPositive: true },
    { title: "INVENTORY PROFIT", value: "₹92,400", change: "+100%", isPositive: true },
    { title: "FAST-MOVING PRODUCTS", value: "12", change: "+100%", isPositive: true },
    { title: "AVG DAYS TO SELL", value: "28 days", change: "-12.5%", isPositive: true },
    { title: "HIGH MARGIN PRODUCTS %", value: "34.2%", change: "+7.5%", isPositive: true }
  ];

  const warningCards = [
    { title: "WASTAGE STOCK VALUE", value: "₹24,600", note: "18 Items", change: "+35.2%", isPositive: false },
    { title: "LOW-MOVEMENT %", value: "28.4%", note: "12 products", change: "+17.4%", isPositive: false },
    { title: "NEAR-EXPIRY VALUE", value: "₹12,200", note: "8 Items", change: "+41.9%", isPositive: false },
    { title: "STOCK-OUT LOSS", value: "₹8,400", note: "4 SKUs", change: "+100%", isPositive: false }
  ];

  const categorySeries = [38, 29, 14, 19];
  const categoryOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#2563eb', '#10b981', '#8b5cf6', '#f59e0b'],
    labels: ['Hair Care', 'Skin Care', 'Nail Products', 'Spa Supplies'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: { show: true, label: 'Total', formatter: () => '₹4.9L', fontSize: '14px', fontWeight: 'bold' }
          }
        }
      }
    }
  };

  const topSelling = [
    { name: "Keratin Shampoo", value: 245 },
    { name: "Hair Serum Pro", value: 198 },
    { name: "Face Moisturizer", value: 167 },
    { name: "Nail Polish Set", value: 145 }
  ];

  const lowStock = [
    { item: "Keratin Treatment", stock: 5, total: 20, percent: 25 },
    { item: "Hair Color - Black", stock: 8, total: 25, percent: 32 },
    { item: "Facial Cleanser", stock: 12, total: 30, percent: 40 },
    { item: "Massage Oil", stock: 6, total: 15, percent: 40 }
  ];

  const details = [
    { product: "Hair Serum Pro", sold: 48, stock: 45, revenue: "₹1,25,000", totalSold: "₹18,500", margin: "95%" },
    { product: "Face Cream Premium", sold: 42, stock: 42, revenue: "₹98,500", totalSold: "₹12,800", margin: "85%" },
    { product: "Shampoo Organic", sold: 38, stock: 38, revenue: "₹85,000", totalSold: "₹15,200", margin: "83%" },
    { product: "Nail Polish Set", sold: 32, stock: 32, revenue: "₹68,500", totalSold: "₹8,500", margin: "90%" },
    { product: "Body Lotion Luxe", sold: 28, stock: 28, revenue: "₹52,050", totalSold: "₹6,200", margin: "100%" }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {kpis.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-3.5 bg-white border border-gray-100 flex flex-col justify-between shadow-xs"
          >
            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>

            <div className="my-1.5 flex items-baseline">
              <span className="text-xl font-black text-gray-900 tracking-tight truncate block">{card.value}</span>
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

      {/* Warnings Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {warningCards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-3.5 bg-white border-2 border-amber-300 flex flex-col justify-between shadow-xs"
          >
            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>

            <div className="my-1.5 flex items-baseline justify-between truncate">
              <span className="text-xl font-black text-rose-500 tracking-tight truncate">{card.value}</span>
              {card.note && <span className="text-[9px] text-gray-400 font-medium shrink-0 ml-1.5">{card.note}</span>}
            </div>

            <div className="flex justify-between items-center text-[9px] text-gray-400 font-medium gap-1 overflow-hidden">
              <span className="truncate">vs last period</span>
              <span className="font-semibold text-gray-400 flex items-center gap-1 shrink-0">
                <span className={card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                  {card.change}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>


      {/* Donut and Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stock Value by Category */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Stock Value by Category</h3>
            <p className="text-[10px] text-gray-400">Distribution overview</p>
            <div className="flex items-center justify-center mt-4">
              <Chart options={categoryOptions} series={categorySeries} type="donut" width="85%" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 mt-4 text-[10px] font-bold text-gray-500">
            {categoryOptions.labels?.map((label, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryOptions.colors?.[idx] as string }} />
                <span>{label} {categorySeries[idx]}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Top Selling Products</h3>
            <p className="text-[10px] text-gray-400 mb-4">Units sold this month</p>
            <div className="space-y-3.5">
              {topSelling.map((prod, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-gray-700">
                    <span>{prod.name}</span>
                    <span className="text-emerald-600 font-bold">₹{prod.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${(prod.value / 250) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {lowStock.map((alert, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span>⚠️ {alert.item}</span>
                  <span>{alert.stock}/{alert.total}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full" style={{ width: `${alert.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details Table */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-gray-800">Product Sales Details</h3>
          <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
        </div>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-455 font-semibold">
              <th className="pb-2">Product</th>
              <th className="pb-2 text-center">Units Sold</th>
              <th className="pb-2 text-center">Current Stock</th>
              <th className="pb-2 text-right">Revenue</th>
              <th className="pb-2 text-right">Sold this Month</th>
              <th className="pb-2 text-center">Margin %↑↓</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-none">
                <td className="py-3 font-semibold text-gray-700">{item.product}</td>
                <td className="py-3 text-center font-bold text-gray-800">{item.sold}</td>
                <td className="py-3 text-center text-gray-600 font-medium">{item.stock}</td>
                <td className="py-3 text-right font-extrabold text-emerald-600">{item.revenue}</td>
                <td className="py-3 text-right text-gray-600 font-semibold">{item.totalSold}</td>
                <td className="py-3 text-center">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-green-50 text-green-600">
                    {item.margin}
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

export default ProductInventoryReport;
