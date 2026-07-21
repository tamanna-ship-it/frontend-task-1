import React from 'react';
import Chart from 'react-apexcharts';
import { LuInfo } from 'react-icons/lu';

export const PaymentsTaxesReport: React.FC = () => {
  const cards = [
    { title: "CASH VS SYSTEM GAP", value: "₹4,200", change: "+100%", isPositive: false, border: true },
    { title: "PENDING PAYMENTS VALUE", value: "₹38,400", change: "+17.8%", isPositive: false },
    { title: "REFUND RATIO %", value: "3.2%", change: "+33.3%", isPositive: false },
    { title: "DIGITAL PAYMENT ADOPTION %", value: "68.4%", change: "+8.9%", isPositive: true },
    { title: "TAX COLLECTED VS PAYABLE", value: "₹42,800", change: "+8.9%", isPositive: true }
  ];

  const splitSeries = [38, 29, 14, 10, 9];
  const splitOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#2563eb', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b'],
    labels: ['Cash', 'Card', 'UPI', 'Membership', 'Payment Gateway'],
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

  const taxSeries = [69, 24, 7];
  const taxOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#2563eb', '#10b981', '#f59e0b'],
    labels: ['GST 18%', 'GST 12%', 'GST 5%'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: { show: true, label: 'GST', formatter: () => '₹75K', fontSize: '14px', fontWeight: 'bold' }
          }
        }
      }
    }
  };

  const paymentBreakdown = [
    { service: "Cash", amount: "₹68,500", transactions: "42", share: "29%" },
    { service: "Card", amount: "₹52,300", transactions: "38", share: "29%" },
    { service: "UPI", amount: "₹45,200", transactions: "32", share: "29%" },
    { service: "Payment Gateway", amount: "₹38,400", transactions: "28", share: "29%" }
  ];

  const taxBreakdown = [
    { service: "GST 18%", taxable: "₹68,500", taxCollected: "₹68,500" },
    { service: "GST 12%", taxable: "₹52,300", taxCollected: "₹52,300" },
    { service: "GST 5%", taxable: "₹45,200", taxCollected: "₹45,200" }
  ];

  return (
    <div className="space-y-6 w-full font-sans">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-xl p-3 bg-white border flex flex-col justify-between shadow-xs min-h-[115px] ${card.border ? 'border-rose-200 bg-rose-50/20' : 'border-gray-200'}`}>

            <div className="flex justify-between items-start gap-1">
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide truncate">{card.title}</span>
              <LuInfo className="w-3 h-3 text-gray-300 shrink-0" />
            </div>
            <div className="my-1.5"><span className="text-xl font-extrabold text-gray-900 truncate block">{card.value}</span></div>
            <div className="flex justify-between items-center text-[9px] text-gray-400 font-semibold gap-1 overflow-hidden">
              <span className="truncate">vs last period</span>
              <span className={`shrink-0 ${card.isPositive ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}`}>{card.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Split and Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Donut Split */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Payment Mode Split</h3>
            <div className="flex items-center justify-center mt-4">
              <Chart options={splitOptions} series={splitSeries} type="donut" width="85%" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 mt-4 text-[10px] font-bold text-gray-500">
            {splitOptions.labels?.map((label, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: splitOptions.colors?.[idx] as string }} />
                <span>{label} {splitSeries[idx]}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Table 1 */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Breakdown</h3>
            <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-455 font-semibold">
                <th className="pb-2">Service</th>
                <th className="pb-2 text-right">Amount ↑↓</th>
                <th className="pb-2 text-center">Transactions ↑↓</th>
                <th className="pb-2 text-right">% Share</th>
              </tr>
            </thead>
            <tbody>
              {paymentBreakdown.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3 font-semibold text-gray-700">{item.service}</td>
                  <td className="py-3 text-right font-bold text-gray-800">{item.amount}</td>
                  <td className="py-3 text-center text-gray-600 font-semibold">{item.transactions}</td>
                  <td className="py-3 text-right text-gray-500 font-semibold">{item.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tax Split and Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Breakdown Table 2 */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">Breakdown</h3>
            <button className="text-xs text-indigo-650 font-semibold hover:underline">See All&gt;&gt;</button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-455 font-semibold">
                <th className="pb-2">Service</th>
                <th className="pb-2 text-right">Taxable Amount ↑↓</th>
                <th className="pb-2 text-right">Tax Collected ↑↓</th>
              </tr>
            </thead>
            <tbody>
              {taxBreakdown.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-none">
                  <td className="py-3.5 font-semibold text-gray-700">{item.service}</td>
                  <td className="py-3.5 text-right font-bold text-gray-800">{item.taxable}</td>
                  <td className="py-3.5 text-right font-extrabold text-indigo-600">{item.taxCollected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tax Collected Donut */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Tax Collected</h3>
            <div className="flex items-center justify-center mt-4">
              <Chart options={taxOptions} series={taxSeries} type="donut" width="85%" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-y-2 mt-4 text-[10px] font-bold text-gray-500">
            {taxOptions.labels?.map((label, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: taxOptions.colors?.[idx] as string }} />
                <span>{label} {taxSeries[idx]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTaxesReport;
