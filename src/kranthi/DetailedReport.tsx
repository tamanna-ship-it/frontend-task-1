import React from "react";
import { LuChartSpline, LuCalendarRange, LuUsers, LuTrendingDown, LuSearch, LuBell, LuChevronDown, LuBox, LuCreditCard } from "react-icons/lu";
import { FiSidebar, FiAlertTriangle } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { LiaFilterSolid } from "react-icons/lia";
import Chart from "react-apexcharts";
import SideNavBar from "./components/SideNavBar";

const DetailedReport: React.FC = () => {
  const cards = [
    {
      title: "NET TAKE REVENUE",
      value: "₹3.82L",
      previousValue: "₹2.5L",
      lastPeriod: "+11.7%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+4.7%",
      border: true,
      showLastPeriod: true,
      showLastMonth: true,
    },
    {
      title: "TOTAL OPERATING COST",
      value: "₹1.98L",
      previousValue: "₹2.5L",
      lastPeriod: "+42.7%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+42.7%",
      border: false,
      showLastPeriod: true,
      showLastMonth: true,
    },
    {
      title: "NET PROFIT / LOSS",
      value: "₹1.84L",
      previousValue: "₹2.5L",
      lastPeriod: "+42.7%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+42.7%",
      border: false,
      showLastPeriod: true,
      showLastMonth: true,
    },
    {
      title: "PROFIT MARGIN %",
      value: "₹3.82L",
      percentage: "68.4%",
      previousValue: "₹2.5L",
      lastPeriod: "+42.7%",
      lastMonthValue: "₹2.5L",
      lastMonth: "-2.2%",
      border: false,
      showLastPeriod: true,
      showLastMonth: true,
    },
    {
      title: "REVENUE GROWTH %",
      value: "₹3L",
      percentage: "20.4%",
      previousValue: "₹2.5L",
      lastPeriod: "+20.4%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+42.7%",
      border: false,
      showLastPeriod: false,
      showLastMonth: true,
    },
    {
      title: "EXPENSE GROWTH %",
      value: "₹3.82L",
      percentage: "11.2%",
      previousValue: "₹2.5L",
      lastPeriod: "+11.2%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+64.7%",
      border: false,
      showLastPeriod: false,
      showLastMonth: true,
    },
    {
      title: "SERVICE REVENUE %",
      value: "₹3.82L",
      percentage: "68.4%",
      previousValue: "₹2.5L",
      lastPeriod: "+4.9%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+4.9%",
      border: true,
      showLastPeriod: true,
      showLastMonth: false,
    },
    {
      title: "PRODUCT RATE",
      value: "₹3.82L",
      percentage: "68.4%",
      previousValue: "₹2.5L",
      lastPeriod: "+7.5%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+7.5%",
      border: true,
      showLastPeriod: true,
      showLastMonth: false,
    },
    {
      title: "REVENUE PER CLIENT",
      value: "₹2,840",
      previousValue: "₹2.5L",
      lastPeriod: "+8.4%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+8.4%",
      border: false,
      showLastPeriod: true,
      showLastMonth: false,
    },
    {
      title: "DISCOUNT %",
      value: "12.4%",
      previousValue: "₹2.5L",
      lastPeriod: "+14.8%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+14.8%",
      border: true,
      showLastPeriod: true,
      showLastMonth: false,
    },
    {
      title: "MEMBERSHIP REVENUE",
      value: "18.6%",
      previousValue: "₹2.5L",
      lastPeriod: "+14.8%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+14.8%",
      border: true,
      showLastPeriod: true,
      showLastMonth: false,
    },
    {
      title: "REVENUE PER HOUR",
      value: "₹3,180",
      previousValue: "₹2.5L",
      lastPeriod: "+8.2%",
      lastMonthValue: "₹2.5L",
      lastMonth: "+8.2%",
      border: false,
      showLastPeriod: true,
      showLastMonth: false,
    },
  ];

  // Revenue Trend Options & Data
  const revenueTrendSeries = [
    {
      name: "This Week",
      data: [45, 52, 49, 60, 55, 78, 42],
    },
    {
      name: "Last Week",
      data: [41, 48, 51, 55, 52, 70, 45],
    },
  ];

  const revenueTrendOptions: any = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#10b981", "#64748b"], // Green, Gray
    stroke: {
      curve: "smooth",
      width: [3, 2.5],
      dashArray: [0, 6], // Solid for This Week, dashed for Last Week
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#94a3b8",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
      labels: {
        formatter: (val: number) => `₹${val}K`,
        style: {
          colors: "#94a3b8",
          fontSize: "12px",
        },
      },
    },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val: number) => `₹${val}K`,
      },
    },
  };

  // Payment Methods Options & Data
  const paymentMethodsSeries = [45, 35, 15, 5, 5];
  const paymentMethodsLabels = ["Card", "UPI", "Cash", "Wallet", "Gateway"];
  const paymentMethodsColors = ["#2563eb", "#10b981", "#f59e0b", "#7c3aed", "#6366f1"];

  const paymentMethodsOptions: any = {
    chart: {
      type: "donut",
    },
    colors: paymentMethodsColors,
    labels: paymentMethodsLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "11px",
              color: "#94a3b8",
              fontWeight: 500,
              formatter: () => "₹3.46L",
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e293b",
              formatter: () => "₹3.46L",
            },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
  };

  const legendItems = [
    { name: "Card", percentage: "45%", color: "#2563eb" },
    { name: "UPI", percentage: "35%", color: "#10b981" },
    { name: "Cash", percentage: "15%", color: "#f59e0b" },
    { name: "Wallet", percentage: "5%", color: "#7c3aed" },
    { name: "Gateway", percentage: "5%", color: "#6366f1" },
  ];

  // Helper datasets for the new sections
  const serviceSales = [
    { service: "Hair Spa Premium", revenue: "₹68,500", quantity: 42, avgPrice: "₹1,631" },
    { service: "Facial Gold", revenue: "₹52,300", quantity: 38, avgPrice: "₹1,376" },
    { service: "Hair Color", revenue: "₹45,200", quantity: 32, avgPrice: "₹1,413" },
    { service: "Body Massage 60min", revenue: "₹38,400", quantity: 28, avgPrice: "₹1,371" },
    { service: "Manicure Deluxe", revenue: "₹28,500", quantity: 22, avgPrice: "₹1,295" },
  ];

  const productSales = [
    { product: "Hair Serum Pro", revenue: "₹68,500", qtySold: 42, stock: 45, status: "OK" },
    { product: "Face Cream Premium", revenue: "₹52,300", qtySold: 38, stock: 8, status: "Low" },
    { product: "Shampoo Organic", revenue: "₹45,200", qtySold: 32, stock: 45, status: "OK" },
    { product: "Nail Polish Set", revenue: "₹38,400", qtySold: 28, stock: 0, status: "Out" },
    { product: "Body Lotion Luxe", revenue: "₹28,500", qtySold: 22, stock: 45, status: "OK" },
  ];

  const appointmentsKpis = [
    { title: "CAPACITY UTILIZATION %", value: "72.4%", previousValue: "₹2.5L", change: "+5.2%", border: true },
    { title: "REVENUE PER SLOT", value: "₹1,840", previousValue: "₹2.5L", change: "+7%", border: false },
    { title: "CANCELLATION LOSS VALUE", value: "₹28,400", previousValue: "₹2.5L", change: "+25.7%", border: false },
    { title: "NO-SHOW LOSS VALUE", value: "₹18,600", orders: "(90 Orders)", previousValue: "₹2.5L", change: "+7%", border: false },
    { title: "PEAK HOUR REVENUE %", value: "62.4%", previousValue: "₹2.5L", change: "+7%", border: false },
  ];

  const dailyBreakdown = [
    { date: "Jan 27, 2026", source: "Services", gross: "₹315,000", discount: "-₹18,500", net: "₹296,500", orders: 45 },
    { date: "Jan 26, 2026", source: "Products", gross: "₹98,500", discount: "-₹8,200", net: "₹90,300", orders: 45 },
    { date: "Jan 25, 2026", source: "Memberships", gross: "₹52,000", discount: "-₹2,500", net: "₹49,500", orders: 45 },
    { date: "Jan 24, 2026", source: "Gift Cards", gross: "₹13,000", discount: "-₹0", net: "₹13,000", orders: 45 },
    { date: "Jan 24, 2026", source: "Gift Cards", gross: "₹13,000", discount: "-₹0", net: "₹13,000", orders: 45 },
    { date: "Jan 24, 2026", source: "Gift Cards", gross: "₹13,000", discount: "-₹0", net: "₹13,000", orders: 45 },
  ];

  const staffSales = [
    { avatar: "PS", name: "Priya Sharma", revenue: "₹68,500", orders: 42, avgBill: "₹1,631" },
    { avatar: "AK", name: "Amit Kumar", revenue: "₹52,300", orders: 38, avgBill: "₹1,376" },
    { avatar: "NM", name: "Neha Mehta", revenue: "₹45,200", orders: 32, avgBill: "₹1,413" },
    { avatar: "RP", name: "Rajesh Patel", revenue: "₹38,400", orders: 28, avgBill: "₹1,371" },
    { avatar: "SL", name: "Suman Lata", revenue: "₹28,500", orders: 22, avgBill: "₹1,295" },
  ];

  const heatmapData = [
    { hour: "9AM", days: [45, 52, 48, 58, 65, 78, 35] },
    { hour: "10AM", days: [62, 68, 58, 72, 78, 88, 42] },
    { hour: "11AM", days: [78, 82, 72, 85, 88, 95, 55] },
    { hour: "12PM", days: [72, 75, 68, 78, 82, 88, 48] },
    { hour: "2PM", days: [65, 68, 62, 72, 75, 82, 45] },
    { hour: "4PM", days: [88, 92, 85, 95, 98, 100, 82] },
    { hour: "6PM", days: [68, 72, 65, 75, 82, 85, 42] },
  ];

  const cancellationReasons = [
    { reason: "Schedule Conflict", count: 6, lost: "₹8,500" },
    { reason: "Feeling Unwell", count: 4, lost: "₹5,200" },
    { reason: "Changed Mind", count: 3, lost: "₹4,100" },
    { reason: "Found Alternative", count: 3, lost: "₹4,100" },
    { reason: "Personal Emergency", count: 5, lost: "₹7,000" },
    { reason: "Travel Delays", count: 7, lost: "₹9,300" },
    { reason: "Budget Constraints", count: 1, lost: "₹1,500" },
  ];

  // Clients Reports KPI dataset
  const clientsKpis = [
    { title: "HIGH-VALUE CLIENT %", value: "24.6%", previousValue: "₹2.5L", change: "+7.9%", border: false },
    { title: "REPEAT REVENUE %", value: "72.8%", previousValue: "₹2.5L", change: "+6.4%", border: true },
    { title: "CLIENT LIFETIME VALUE", value: "₹18,400", previousValue: "₹2.5L", change: "+9.5%", border: false },
    { title: "CLIENT DROP-OFF %", value: "8.2%", previousValue: "₹2.5L", change: "+28.1%", isNegative: true, border: false },
    { title: "MEMBERSHIP ROI", value: "1.82x", previousValue: "₹2.5L", change: "+11%", border: true },
  ];

  // New vs Repeat Chart
  const newVsRepeatSeries = [65, 35];
  const newVsRepeatLabels = ["Repeat Clients", "New Clients"];
  const newVsRepeatColors = ["#6366f1", "#64748b"];

  const newVsRepeatOptions: any = {
    chart: { type: "donut" },
    colors: newVsRepeatColors,
    labels: newVsRepeatLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
  };

  const newVsRepeatLegend = [
    { name: "Repeat Clients", percentage: "65%", color: "#6366f1" },
    { name: "New Clients", percentage: "35%", color: "#64748b" },
  ];

  // Membership Tiers Chart
  const membershipTiersSeries = [69, 11, 15, 4];
  const membershipTiersLabels = ["Non-member", "Silver", "Gold", "Platinum"];
  const membershipTiersColors = ["#475569", "#cbd5e1", "#f59e0b", "#6366f1"];

  const membershipTiersOptions: any = {
    chart: { type: "donut" },
    colors: membershipTiersColors,
    labels: membershipTiersLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Members",
              fontSize: "12px",
              color: "#94a3b8",
              fontWeight: 500,
              formatter: () => "31%",
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1e293b",
              formatter: () => "31%",
            },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
  };

  const membershipTiersLegend = [
    { name: "Non-member", percentage: "69%", color: "#475569" },
    { name: "Silver", percentage: "11%", color: "#cbd5e1" },
    { name: "Gold", percentage: "15%", color: "#f59e0b" },
    { name: "Platinum", percentage: "4%", color: "#6366f1" },
  ];

  const topClients = [ 
    {client:"Anjali Verma", visits:28, totalspend:"₹86,500", lastvisit:"Today",membership:"Platinum", initials:"AV"},
    {client:"Priya Kapoor", visits:22, totalspend:"₹62,400", lastvisit:"Yesterday",membership:"Gold", initials:"PK"},
    {client:"Rahul Kumar", visits:18, totalspend:"₹48,400", lastvisit:"3 days ago",membership:"-", initials:"RK"},
    {client:"Sneha Patel", visits:15, totalspend:"₹38,500", lastvisit:"1 week ago",membership:"Silver", initials:"SP"},
    {client:"Vikram Singh", visits:12, totalspend:"₹32,800", lastvisit:"2 days ago",membership:"Gold", initials:"VS"},
  ];

  const staffKpisRow1 = [
    { title: "STAFF REVENUE", value: "₹3.28L", previousValue: "₹2.5L", change: "+7.9%", border: false },
    { title: "PROFIT PER STAFF", value: "₹25,620", previousValue: "₹2.5L", change: "+7.9%", border: false },
    { title: "REVENUE PER HOUR", value: "₹390", previousValue: "₹2.5L", change: "+7.9%", border: false },
    { title: "REPEAT CLIENT %", value: "68.4%", previousValue: "₹2.5L", change: "+7.9%", border: false },
    { title: "HIGH PERFORMERS", value: "2", previousValue: "↗ 10%", change: "of 5", border: false },
  ];

  const staffKpisRow2 = [
    { title: "LOSS-MAKING STAFF", value: "1", previousValue: "₹2.5L", change: "+7.9%", border: true, isNegativeValue: true },
    { title: "LOW UTILIZATION STAFF", value: "2", previousValue: "40%", border: true, isOrangeValue: true, isCustomRightBottom: true },
    { title: "IDLE SALARY COST", value: "₹48,200", previousValue: "268 hrs", change: "+12.6%", border: true, isOrangeValue: true },
    { title: "HIGH DISCOUNT STAFF", value: "2", border: true, isNegativeValue: true, noBottom: true },
  ];

  const weeklyPerformanceSeries = [
    { name: "Neha Patel", data: [11000, 12500, 11500, 14000, 12500, 17500, 10500] },
    { name: "Priya Sharma", data: [10000, 11500, 12000, 13000, 11500, 15000, 9500] },
    { name: "Amit Kumar", data: [7500, 9000, 8500, 10000, 9500, 12000, 7000] },
  ];

  const weeklyPerformanceOptions: any = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#10b981", "#2563eb", "#f59e0b"],
    stroke: {
      curve: "smooth",
      width: 2.5,
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: { size: 6 }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: "#94a3b8", fontSize: "11px" },
      },
    },
    yaxis: {
      min: 0,
      max: 18000,
      tickAmount: 4,
      labels: {
        formatter: (val: number) => val === 0 ? "0" : `${val}`,
        style: { colors: "#94a3b8", fontSize: "11px" },
      },
    },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val: number) => `₹${val.toLocaleString()}`,
      },
    },
  };

  const staffRevenueProgress = [
    { name: "Neha", amount: "₹78,000", percentage: 100 },
    { name: "Priya", amount: "₹65,000", percentage: 83.3 },
    { name: "Amit", amount: "₹52,000", percentage: 66.6 },
    { name: "Ravi", amount: "₹45,000", percentage: 57.7 },
    { name: "Sunita", amount: "₹38,000", percentage: 48.7 },
    { name: "Rajesh", amount: "₹45,500", percentage: 58.3 },
    { name: "Meera", amount: "₹32,200", percentage: 41.2 },
  ];

  const staffLeaderboard = [
    { name: "Priya S.", services: 48, revenue: "₹125,000", products: "₹18,500", commission: "₹18,500", incentive: "₹15,000", attendance: "95%", badge: "🥇", attendanceColor: "green" },
    { name: "Amit K.", services: 42, revenue: "₹98,500", products: "₹12,800", commission: "₹12,800", incentive: "₹11,820", attendance: "85%", badge: "🥈", attendanceColor: "green" },
    { name: "Neha M.", services: 38, revenue: "₹85,000", products: "₹15,200", commission: "₹15,200", incentive: "₹10,200", attendance: "83%", badge: "🥉", attendanceColor: "orange" },
    { name: "Rajesh P.", services: 32, revenue: "₹68,500", products: "₹8,500", commission: "₹8,500", incentive: "₹8,220", attendance: "90%", badge: "", attendanceColor: "green" },
    { name: "Suman L.", services: 28, revenue: "₹52,000", products: "₹6,200", commission: "₹6,200", incentive: "₹6,240", attendance: "100%", badge: "", attendanceColor: "green" },
  ];

  const topPerformers = [
    { name: "Neha", value: "₹78,000", medal: "🥇" },
    { name: "Priya", value: "₹65,000", medal: "🥈" },
    { name: "Amit", value: "₹52,000", medal: "🥉" },
    { name: "Amit", value: "₹52,000", medal: "" },
    { name: "Amit", value: "₹52,000", medal: "" },
  ];

  const productKpisRow1 = [
    { title: "INVENTORY VALUE", value: "₹2.48L", previousValue: "₹2.5L", change: "+100%", border: false },
    { title: "INVENTORY PROFIT", value: "₹92,400", previousValue: "₹2.5L", change: "+100%", border: false },
    { title: "FAST-MOVING PRODUCTS", value: "12", previousValue: "of 42", change: "+100%", border: false, isCustomBottom: true },
    { title: "AVG DAYS TO SELL", value: "28 days", previousValue: "", change: "-12.5%", border: false, isNegative: true },
    { title: "HIGH MARGIN PRODUCTS %", value: "34.2%", previousValue: "↗", change: "+7.5%", border: false },
  ];

  const productKpisRow2 = [
    { title: "WASTAGE STOCK VALUE", value: "₹24,600", previousValue: "18 Items", change: "+35.2%", border: true, isNegativeValue: true, isCustomRightBottom: true },
    { title: "LOW-MOVEMENT %", value: "28.4%", previousValue: "12 products", change: "+17.4%", border: true, isNegativeValue: true, isCustomRightBottom: true },
    { title: "NEAR-EXPIRY VALUE", value: "₹12,200", previousValue: "8 items", change: "+41.9%", border: true, isNegativeValue: true, isCustomRightBottom: true },
    { title: "STOCK-OUT LOSS", value: "₹8,400", previousValue: "4 SKUs", change: "+100%", border: true, isNegativeValue: true, isCustomRightBottom: true },
  ];

  // Product & Inventory Sub-components
  const stockCategorySeries = [38, 29, 14, 19];
  const stockCategoryLabels = ["Hair Care", "Skin Care", "Nail Products", "Spa Supplies"];
  const stockCategoryColors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];

  const stockCategoryOptions: any = {
    chart: { type: "donut" },
    colors: stockCategoryColors,
    labels: stockCategoryLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "11px",
              color: "#94a3b8",
              fontWeight: 500,
              formatter: () => "₹4.9L",
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e293b",
              formatter: () => "₹4.9L",
            },
          },
        },
      },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val}%` },
    },
  };

  const stockCategoryLegend = [
    { name: "Hair Care", percentage: "38%", color: "#3b82f6" },
    { name: "Skin Care", percentage: "29%", color: "#10b981" },
    { name: "Nail Products", percentage: "14%", color: "#8b5cf6" },
    { name: "Spa Supplies", percentage: "19%", color: "#f59e0b" },
  ];

  const topSellingProducts = [
    { name: "Keratin Shampoo", price: "₹245", percentage: 100 },
    { name: "Hair Serum Pro", price: "₹198", percentage: 80.8 },
    { name: "Face Moisturizer", price: "₹167", percentage: 68.1 },
    { name: "Nail Polish Set", price: "₹145", percentage: 59.1 },
  ];

  const lowStockAlerts = [
    { name: "Keratin Treatment", ratio: "5/20", percentage: 25 },
    { name: "Hair Color - Black", ratio: "8/25", percentage: 32 },
    { name: "Facial Cleanser", ratio: "12/30", percentage: 40 },
    { name: "Massage Oil", ratio: "6/15", percentage: 40 },
  ];

  const productSalesDetails = [
    { product: "Hair Serum Pro", unitsSold: 48, currentStock: 45, revenue: "₹125,000", soldThisMonth: "₹18,500", margin: "95%" },
    { product: "Face Cream Premium", unitsSold: 42, currentStock: 42, revenue: "₹98,500", soldThisMonth: "₹12,800", margin: "85%" },
    { product: "Shampoo Organic", unitsSold: 38, currentStock: 38, revenue: "₹85,000", soldThisMonth: "₹15,200", margin: "83%" },
    { product: "Nail Polish Set", unitsSold: 32, currentStock: 32, revenue: "₹68,500", soldThisMonth: "₹8,500", margin: "90%" },
    { product: "Body Lotion Luxe", unitsSold: 28, currentStock: 28, revenue: "₹52,000", soldThisMonth: "₹6,200", margin: "100%" },
  ];

  // Payments & Taxes KPI Cards
  const paymentsKpis = [
    { title: "CASH VS SYSTEM GAP", value: "₹4,200", previousValue: "₹2.5L", change: "+100%", isNegativeValue: true, border: true },
    { title: "PENDING PAYMENTS VALUE", value: "₹38,400", previousValue: "₹2.5L", change: "+17.8%", border: false },
    { title: "REFUND RATIO %", value: "3.2%", previousValue: "₹2.5L", change: "+33.3%", border: false },
    { title: "DIGITAL PAYMENT ADOPTION %", value: "68.4%", previousValue: "₹2.5L", change: "+8.9%", border: false },
    { title: "TAX COLLECTED VS PAYABLE", value: "₹42,800", previousValue: "₹2.5L", change: "+8.9%", border: false },
  ];

  // Payment Mode Split Chart
  const paymentModeSeries = [38, 29, 14, 19, 19];
  const paymentModeLabels = ["Cash", "Card", "UPI", "Membership", "Payment Gateway"];
  const paymentModeColors = ["#2563eb", "#10b981", "#8b5cf6", "#ef4444", "#f59e0b"];

  const paymentModeOptions: any = {
    chart: { type: "donut" },
    colors: paymentModeColors,
    labels: paymentModeLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "11px",
              color: "#94a3b8",
              fontWeight: 500,
              formatter: () => "₹4.9L",
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e293b",
              formatter: () => "₹4.9L",
            },
          },
        },
      },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val}%` },
    },
  };

  const paymentModeLegend = [
    { name: "Cash", percentage: "38%", color: "#2563eb" },
    { name: "Card", percentage: "29%", color: "#10b981" },
    { name: "UPI", percentage: "14%", color: "#8b5cf6" },
    { name: "Membership", percentage: "19%", color: "#ef4444" },
    { name: "Payment Gateway", percentage: "19%", color: "#f59e0b" },
  ];

  const paymentBreakdown = [
    { service: "Cash", amount: "₹68,500", transactions: 42, share: "29%" },
    { service: "Card", amount: "₹52,300", transactions: 38, share: "29%" },
    { service: "UPI", amount: "₹45,200", transactions: 32, share: "29%" },
    { service: "Payment Gateway", amount: "₹38,400", transactions: 28, share: "29%" },
  ];

  const taxBreakdown = [
    { service: "GST 18%", amount: "₹68,500", taxCollected: "₹68,500" },
    { service: "GST 12%", amount: "₹52,300", taxCollected: "₹52,300" },
    { service: "GST 5%", amount: "₹45,200", taxCollected: "₹45,200" },
  ];

  // Tax Collected Chart
  const taxCollectedSeries = [69, 24, 7];
  const taxCollectedLabels = ["GST 18%", "GST 12%", "GST 5%"];
  const taxCollectedColors = ["#2563eb", "#10b981", "#f59e0b"];

  const taxCollectedOptions: any = {
    chart: { type: "donut" },
    colors: taxCollectedColors,
    labels: taxCollectedLabels,
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "GST",
              fontSize: "11px",
              color: "#94a3b8",
              fontWeight: 500,
              formatter: () => "₹75K",
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e293b",
              formatter: () => "₹75K",
            },
          },
        },
      },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val}%` },
    },
  };

  const taxCollectedLegend = [
    { name: "GST 18%", percentage: "69%", color: "#2563eb" },
    { name: "GST 12%", percentage: "24%", color: "#10b981" },
    { name: "GST 5%", percentage: "7%", color: "#f59e0b" },
  ];

  return (
    <div className="flex min-h-screen bg-[#eff6ff] w-full">
      <SideNavBar />
      <div className="flex-1 flex flex-col min-w-0">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-1.5 border-b border-slate-100 w-full">
        {/* Left Side: Sidebar Toggle, Logo, Muted Welcome */}
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-slate-800 transition">
            <FiSidebar size={18} />
          </button>
          
          {/* Logo container */}
          <div className="bg-[#fcf8f5] border border-orange-100 rounded-xl px-4 py-0.5 flex flex-col items-center justify-center min-w-[120px] h-[38px]">
            <span className="text-xs font-extrabold text-[#785b46] leading-none">ABC</span>
            <span className="text-[6px] font-bold text-[#a08575] uppercase tracking-widest mt-0.5">SALOON & MAKEUP</span>
          </div>

          {/* Welcome Text */}
          <div className="flex flex-col ml-2">
            <h5 className="text-xs font-extrabold text-slate-800 leading-tight">Welcome Back, Rajesh</h5>
            <span className="text-[9px] text-slate-400 font-medium">Hello, here you can manage your orders by zone</span>
          </div>
        </div>

        {/* Right Side: Search, Notifications, Profile */}
        <div className="flex items-center gap-5">
          {/* Search bar */}
          <div className="relative w-[240px]">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <LuSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-50 border border-slate-200 text-xs rounded-full pl-9 pr-4 py-1.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-300"
            />
          </div>

          {/* Bell Notifications */}
          <button className="relative text-slate-500 hover:text-slate-800 transition p-1">
            <LuBell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
          </button>

          {/* Profile Badge */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px]">
              AD
            </div>
            <span className="text-xs font-semibold text-slate-700">Profile</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="px-6 pb-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mt-6 w-full">
          <div>
            <h1 className="text-xl font-extrabold text-[#2e2640] tracking-tight">All Reports</h1>
            <p className="text-xs text-slate-400 mt-0.5">Complete operational reports dashboard</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 bg-white text-xs font-bold text-slate-600 rounded-full hover:bg-slate-50 transition shadow-sm">
              Expand All
            </button>
            <button className="px-4 py-2 border border-slate-200 bg-white text-xs font-bold text-slate-600 rounded-full hover:bg-slate-50 transition shadow-sm">
              Collapse All
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 bg-white text-xs font-bold text-slate-600 rounded-full hover:bg-slate-50 transition shadow-sm">
              <GoDownload size={14} /> Export All
            </button>
          </div>
        </div>

        {/* Global Filters Section */}
        <div className="mt-4 p-4 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-3 w-full">
          <div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs mr-3">
            <LiaFilterSolid size={16} /> Global Filters
          </div>
          
          {/* Date Filter */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-xs font-semibold text-slate-700 rounded-xl shadow-sm hover:bg-slate-50">
            <LuCalendarRange size={14} className="text-slate-400" />
            Jan 30, 2026
          </button>

          {/* Staff Filter */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-xs font-semibold text-slate-700 rounded-xl shadow-sm hover:bg-slate-50">
            All Staff
            <LuChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Services Filter */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-xs font-semibold text-slate-700 rounded-xl shadow-sm hover:bg-slate-50">
            All Services
            <LuChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Categories Filter */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-xs font-semibold text-slate-700 rounded-xl shadow-sm hover:bg-slate-50">
            All Categories
            <LuChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Modules Filter */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-xs font-semibold text-slate-700 rounded-xl shadow-sm hover:bg-slate-50">
            Show All Modules
            <LuChevronDown size={14} className="text-slate-400" />
          </button>
        </div>

        {/* Sales Reports Section Header */}
        <div className="mt-4 flex items-center justify-between px-5 py-3.5 bg-white rounded-3xl border border-slate-100 shadow-sm w-full">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <LuChartSpline size={18} />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm">Sales Reports</h4>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
              Export All <GoDownload size={14} className="text-slate-500" />
            </button>
            <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
          </div>
        </div>

      <div className="grid grid-cols-6 gap-2 px-0 py-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[160px] shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-extrabold text-slate-850">
                {card.value}
              </h3>
              {card.percentage && (
                <span className="text-[10px] font-bold text-green-600">
                  {card.percentage}
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-[10px] whitespace-nowrap">
              {card.showLastPeriod && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">vs last period</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400 font-medium">{card.previousValue}</span>
                    <span className={`font-semibold ${card.lastPeriod.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                      {card.lastPeriod}
                    </span>
                  </div>
                </div>
              )}

              {card.showLastMonth && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">vs last month</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400 font-medium">{card.lastMonthValue}</span>
                    <span className={`font-semibold ${card.lastMonth.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                      {card.lastMonth}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-0 py-4 w-full">
        <div className="lg:col-span-2 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between h-[280px]">
          <div>
            <h4 className="text-base font-bold text-slate-800">Revenue Trend</h4>
            <p className="text-xs text-slate-400 mb-2">This week vs last week comparison</p>
            <div className="h-[170px]">
              <Chart
                options={revenueTrendOptions}
                series={revenueTrendSeries}
                type="area"
                height="100%"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-1 text-xs font-bold text-slate-600">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center relative w-6">
                <span className="w-5 h-[2px] bg-emerald-500 block"></span>
                <span className="w-2.5 h-2.5 bg-white border-2 border-emerald-500 rounded-full absolute"></span>
              </span>
              This Week
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center relative w-6">
                <span className="w-5 h-[2px] bg-slate-400 block" style={{ borderTop: "1.5px dashed" }}></span>
                <span className="w-2.5 h-2.5 bg-white border-2 border-slate-400 rounded-full absolute"></span>
              </span>
              Last Week
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between h-[280px]">
          <div>
            <h4 className="text-base font-bold text-slate-800">Payment Methods</h4>
            <p className="text-xs text-slate-400 mb-2">Revenue by payment mode</p>
            <div className="flex items-center justify-around h-[180px]">
              <div className="w-[130px] h-[130px]">
                <Chart
                  options={paymentMethodsOptions}
                  series={paymentMethodsSeries}
                  type="donut"
                  height="100%"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center min-w-[110px]">
                {legendItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400 font-medium text-[11px]">{item.name}</span>
                    </div>
                    <span className="text-slate-800 font-bold text-[11px]">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales by Service & Sales by Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Sales by Service */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-base font-bold text-slate-800">Sales by Service</h4>
            <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Service</th>
                  <th className="pb-3 text-right font-semibold">Revenue ⇅</th>
                  <th className="pb-3 text-right font-semibold">Quantity ⇅</th>
                  <th className="pb-3 text-right font-semibold">Avg Price ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {serviceSales.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3.5 font-semibold text-slate-700">{item.service}</td>
                    <td className="py-3.5 text-right font-bold text-slate-800">{item.revenue}</td>
                    <td className="py-3.5 text-right font-semibold text-slate-600">{item.quantity}</td>
                    <td className="py-3.5 text-right font-semibold text-slate-600">{item.avgPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales by Products */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-base font-bold text-slate-800">Sales by Products</h4>
            <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Product</th>
                  <th className="pb-3 text-right font-semibold">Revenue ⇅</th>
                  <th className="pb-3 text-right font-semibold">Qty Sold ⇅</th>
                  <th className="pb-3 text-right font-semibold">Stock Left ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {productSales.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3.5 font-semibold text-slate-700">{item.product}</td>
                    <td className="py-3.5 text-right font-bold text-slate-800">{item.revenue}</td>
                    <td className="py-3.5 text-right font-semibold text-slate-600">{item.qtySold}</td>
                    <td className="py-3.5 text-right font-semibold">
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="font-semibold text-slate-600">{item.stock}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === "OK" ? "bg-green-50 text-green-600" :
                          item.status === "Low" ? "bg-amber-50 text-amber-600" :
                          "bg-red-50 text-red-600"
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

      {/* Appointments & Scheduling Banner */}
      <div className="mt-4 flex items-center justify-between px-6 py-3 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <LuCalendarRange size={20} />
          </div>
          <h4 className="font-bold text-slate-800 text-base">Appointments & Scheduling</h4>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
            Export All <GoDownload size={14} className="text-slate-500" />
          </button>
          <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
        </div>
      </div>

      {/* Appointments Cards (5 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-0 py-4 w-full">
        {appointmentsKpis.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-extrabold text-slate-850">
                {card.value}
                {card.orders && <span className="text-[10px] text-gray-400 font-normal ml-1">{card.orders}</span>}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs last period</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 font-medium">{card.previousValue}</span>
                  <span className={`font-semibold ${card.change.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Breakdown & Sales by Staff */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Daily Breakdown */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-base font-bold text-slate-800">Daily Breakdown</h4>
            <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">Revenue Source</th>
                  <th className="pb-3 text-right font-semibold">Gross</th>
                  <th className="pb-3 text-right font-semibold">Discounts</th>
                  <th className="pb-3 text-right font-semibold">Net</th>
                  <th className="pb-3 text-right font-semibold">Orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {dailyBreakdown.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3.5 font-semibold text-slate-700">{item.date}</td>
                    <td className="py-3.5 font-semibold text-slate-600">{item.source}</td>
                    <td className="py-3.5 text-right font-bold text-slate-800">{item.gross}</td>
                    <td className="py-3.5 text-right font-bold text-amber-600">{item.discount}</td>
                    <td className="py-3.5 text-right font-bold text-emerald-600">{item.net}</td>
                    <td className="py-3.5 text-right font-semibold text-slate-600">{item.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales by Staff */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-base font-bold text-slate-800">Sales by Staff</h4>
            <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Staff</th>
                  <th className="pb-3 text-right font-semibold">Revenue ⇅</th>
                  <th className="pb-3 text-right font-semibold">Orders ⇅</th>
                  <th className="pb-3 text-right font-semibold">Avg Bill ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {staffSales.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3 flex items-center gap-2.5 font-semibold text-slate-700">
                      <div className="w-7 h-7 rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-600 flex items-center justify-center">
                        {item.avatar}
                      </div>
                      {item.name}
                    </td>
                    <td className="py-3 text-right font-bold text-slate-800">{item.revenue}</td>
                    <td className="py-3 text-right font-semibold text-slate-600">{item.orders}</td>
                    <td className="py-3 text-right font-semibold text-slate-600">{item.avgBill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Heatmap & Cancellation Reasons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Heatmap */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <h4 className="text-base font-bold text-slate-800 mb-1">Peak Hours Heatmap (Utilization %)</h4>
          <p className="text-xs text-slate-400 mb-4">Hourly capacity utilization comparison across weekdays</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] text-slate-600 text-center border-collapse">
              <thead>
                <tr className="text-slate-400 font-semibold border-b border-slate-50">
                  <th className="pb-3 text-left font-semibold">Hour</th>
                  <th className="pb-3 font-semibold">Mon</th>
                  <th className="pb-3 font-semibold">Tue</th>
                  <th className="pb-3 font-semibold">Wed</th>
                  <th className="pb-3 font-semibold">Thu</th>
                  <th className="pb-3 font-semibold">Fri</th>
                  <th className="pb-3 font-semibold">Sat</th>
                  <th className="pb-3 font-semibold">Sun</th>
                </tr>
              </thead>
              <tbody>
                {heatmapData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-1 text-left font-semibold text-slate-500 w-12">{row.hour}</td>
                    {row.days.map((val, dIdx) => {
                      const opacity = Math.max(0.1, (val - 20) / 80);
                      return (
                        <td key={dIdx} className="p-0.5">
                          <div
                            style={{
                              backgroundColor: `rgba(99, 102, 241, ${opacity})`,
                              color: val > 65 ? "#ffffff" : "#4f46e5",
                            }}
                            className="h-7 rounded font-bold flex items-center justify-center text-[10px]"
                          >
                            {val}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancellation Reasons */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <h4 className="text-base font-bold text-slate-800 mb-1">Cancellation Reasons & Revenue Lost</h4>
          <p className="text-xs text-slate-400 mb-4">Breakdown of reasons for missed or cancelled slots</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Reason</th>
                  <th className="pb-3 text-right font-semibold">Count</th>
                  <th className="pb-3 text-right font-semibold">Revenue Lost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {cancellationReasons.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3.5 font-semibold text-slate-700">{item.reason}</td>
                    <td className="py-3.5 text-right font-bold text-slate-800">{item.count}</td>
                    <td className="py-3.5 text-right font-bold text-red-500">{item.lost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Clients Reports Banner */}
      <div className="mt-4 flex items-center justify-between px-6 py-3 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
            <LuUsers size={20} />
          </div>
          <h4 className="font-bold text-slate-800 text-base">Clients Reports</h4>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
            Export All <GoDownload size={14} className="text-slate-500" />
          </button>
          <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
        </div>
      </div>

      {/* Clients KPI Cards (5 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-0 py-4 w-full">
        {clientsKpis.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-extrabold text-slate-855">
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs last period</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 font-medium">{card.previousValue}</span>
                  <span className={`font-semibold ${card.isNegative ? "text-red-500" : "text-green-600"}`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Repeat Revenue Trend & Drop-off Change (Status Banners) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-2 w-full">
        {/* Repeat Revenue Trend banner card */}
        <div className="bg-white rounded-3xl p-3.5 min-h-[100px] border border-slate-100 shadow-sm flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-pink-50 rounded-2xl text-pink-500 flex items-center justify-center shrink-0">
              <LuUsers size={22} />
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Repeat Revenue Trend</h5>
              <h3 className="text-2xl font-extrabold text-emerald-600 my-0.5">72.8%</h3>
              <p className="text-[10px] text-slate-400 font-medium">of revenue from repeat clients</p>
            </div>
          </div>
          <div className="text-right flex flex-col justify-center shrink-0">
            <span className="text-[11px] font-bold text-emerald-600 block">+4.4% vs last period</span>
            <span className="text-[9px] text-slate-400 font-semibold block mt-0.5">Growing loyalty base</span>
          </div>
        </div>

        {/* Drop-off Change banner card */}
        <div className="bg-white rounded-3xl p-3.5 min-h-[100px] border border-slate-100 shadow-sm flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50 rounded-2xl text-red-500 flex items-center justify-center shrink-0">
              <LuTrendingDown size={22} />
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Drop-off Change</h5>
              <h3 className="text-2xl font-extrabold text-red-600 my-0.5">28 clients</h3>
              <p className="text-[10px] text-slate-400 font-medium">inactive for 45+ days</p>
            </div>
          </div>
          <div className="text-right flex flex-col justify-center shrink-0">
            <span className="text-[11px] font-bold text-red-500 block">+1.8% vs last period</span>
            <span className="text-[9px] text-slate-400 font-semibold block mt-0.5">Re-engagement needed</span>
          </div>
        </div>
      </div>

      {/* Donut Charts side-by-side (New vs Repeat & Membership Tiers) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full mb-6">
        {/* New vs Repeat */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <h4 className="text-base font-bold text-slate-800 mb-1">New vs Repeat</h4>
          <p className="text-xs text-slate-400 mb-6">Ratio of repeat customers vs new customer acquisitions</p>
          <div className="flex items-center justify-around h-[180px]">
            <div className="w-[140px] h-[140px]">
              <Chart
                options={newVsRepeatOptions}
                series={newVsRepeatSeries}
                type="donut"
                height="100%"
              />
            </div>
            <div className="flex flex-col gap-3 justify-center min-w-[130px]">
              {newVsRepeatLegend.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-400 font-medium">{item.name}</span>
                  </div>
                  <span className="text-slate-800 font-bold">{item.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <h4 className="text-base font-bold text-slate-800 mb-1">Membership Tiers</h4>
          <p className="text-xs text-slate-400 mb-6">Client membership status</p>
          <div className="flex items-center justify-around h-[180px]">
            <div className="w-[140px] h-[140px]">
              <Chart
                options={membershipTiersOptions}
                series={membershipTiersSeries}
                type="donut"
                height="100%"
              />
            </div>
            <div className="flex flex-col gap-2.5 justify-center min-w-[130px]">
              {membershipTiersLegend.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-400 font-medium">{item.name}</span>
                  </div>
                  <span className="text-slate-800 font-bold">{item.percentage}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

      {/* Top Clients Table Section */}
      <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm mt-4 w-full">
        <div className="flex justify-between items-center mb-3 px-1">
          <h4 className="text-base font-extrabold text-[#2e2640] tracking-tight">Top Clients</h4>
          <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                <th className="pb-2 font-semibold px-2">Client</th>
                <th className="pb-2 text-center font-semibold">Visits ↑↓</th>
                <th className="pb-2 text-center font-semibold">Total Spend ↑↓</th>
                <th className="pb-2 text-center font-semibold">Last Visit</th>
                <th className="pb-2 text-right font-semibold pr-4">Membership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topClients.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="py-2 px-2 font-semibold text-slate-700 flex items-center gap-3">
                    {/* Circle avatar badge */}
                    <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center font-bold text-[10px]">
                      {item.initials}
                    </div>
                    {item.client}
                  </td>
                  <td className="py-2 text-center font-bold text-slate-700">{item.visits}</td>
                  <td className="py-2 text-center font-bold text-slate-700">{item.totalspend}</td>
                  <td className="py-2 text-center font-semibold text-slate-600">{item.lastvisit}</td>
                  <td className="py-2 text-right pr-4 font-semibold">
                    {item.membership !== "-" ? (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        item.membership === "Platinum" ? "bg-[#fef3c7] text-[#b45309]" :
                        item.membership === "Gold" ? "bg-[#fef9c3] text-[#a16207]" :
                        item.membership === "Silver" ? "bg-[#fef3c7] text-[#a16207]" : ""
                      }`}>
                        {item.membership}
                      </span>
                    ) : (
                      <span className="text-slate-400 pr-4">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staff Reports Header Banner */}
      <div className="mt-6 flex items-center justify-between px-6 py-3 bg-white rounded-3xl border border-slate-100 shadow-sm w-full">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
            <LuUsers size={18} />
          </div>
          <h2 className="font-extrabold text-slate-800 text-sm">Staff Reports</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
            Export All <GoDownload size={14} className="text-slate-500" />
          </button>
          <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
        </div>
      </div>

      {/* Staff KPI Cards Row 1 (5 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-0 py-4 w-full">
        {staffKpisRow1.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-extrabold text-slate-855">
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs last period</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 font-medium">{card.previousValue}</span>
                  <span className={`font-semibold text-green-600`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Staff KPI Cards Row 2 (4 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-0 py-2 w-full">
        {staffKpisRow2.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3.5 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className={`text-2xl font-extrabold ${card.isNegativeValue ? "text-red-500" : card.isOrangeValue ? "text-orange-500" : "text-slate-850"}`}>
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              {!card.noBottom && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">vs last period</span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400 font-medium">{card.previousValue}</span>
                    {card.change && (
                      <span className={`font-semibold ${card.change.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                        {card.change}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Staff Performers Side-by-side Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Horizontal Progress bar chart - Revenue by Staff */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Revenue by Staff</h4>
            <p className="text-xs text-slate-400 mb-4">Top performers this period</p>
            
            <div className="flex flex-col gap-3">
              {staffRevenueProgress.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs font-semibold">
                  <span className="w-12 text-slate-500">{item.name}</span>
                  {/* Progress Bar Container */}
                  <div className="flex-1 bg-slate-50 h-6 rounded-full overflow-hidden relative">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="bg-[#f59e0b] h-full rounded-full transition-all duration-500"
                    />
                    {/* Amount inside Progress Bar */}
                    <span className="absolute inset-y-0 right-3 flex items-center text-[10px] text-slate-700 font-bold">
                      {item.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Line Chart - Weekly Performance Trend */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Weekly Performance Trend</h4>
            <p className="text-xs text-slate-400 mb-4">Top 3 staff daily revenue</p>
            <div className="h-[250px]">
              <Chart
                options={weeklyPerformanceOptions}
                series={weeklyPerformanceSeries}
                type="line"
                height="100%"
              />
            </div>
          </div>
          {/* Custom Legend */}
          <div className="flex justify-center items-center gap-6 mt-4 text-xs font-bold text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Neha Patel
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              Priya Sharma
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Amit Kumar
            </div>
          </div>
        </div>
      </div>

      {/* Staff Leaderboard & Top Performers List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-0 py-4 w-full">
        {/* Staff Revenue Leaderboard */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-4 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-base font-bold text-slate-800">Staff Revenue Leaderboard</h4>
            <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-2 font-semibold">Staff</th>
                  <th className="pb-2 text-right font-semibold">Services</th>
                  <th className="pb-2 text-right font-semibold">Revenue</th>
                  <th className="pb-2 text-right font-semibold">Products</th>
                  <th className="pb-2 text-right font-semibold">Commissions</th>
                  <th className="pb-2 text-right font-semibold">Incentives</th>
                  <th className="pb-2 text-right font-semibold">Attendance %⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {staffLeaderboard.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-2 font-semibold text-slate-700 flex items-center gap-1.5">
                      <span className="text-base">{item.badge}</span>
                      {item.name}
                    </td>
                    <td className="py-2 text-right font-semibold text-slate-600">{item.services}</td>
                    <td className="py-2 text-right font-bold text-emerald-600">{item.revenue}</td>
                    <td className="py-2 text-right font-semibold text-slate-600">{item.products}</td>
                    <td className="py-2 text-right font-semibold text-slate-600">{item.commission}</td>
                    <td className="py-2 text-right font-semibold">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-50 text-purple-600 font-bold">
                        {item.incentive}
                      </span>
                    </td>
                    <td className="py-2 text-right font-semibold">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.attendanceColor === "green" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
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

        {/* Top Performers List */}
        <div className="lg:col-span-1 bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-base font-bold text-slate-800">Top Performers</h4>
              <button className="flex items-center gap-1 px-2.5 py-1 border border-slate-200 bg-white text-[10px] font-bold text-slate-600 rounded-xl hover:bg-slate-50">
                Revenue <LuChevronDown size={12} />
              </button>
            </div>
            
            <div className="flex flex-col gap-1.5">
              {topPerformers.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition">
                  <div className="flex items-center gap-3">
                    {/* Position circle */}
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                      {idx + 1}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">{item.name}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{item.value}</span>
                    </div>
                  </div>
                  {/* Ribbon icon */}
                  {item.medal && (
                    <span className="text-lg">{item.medal}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product & Inventory Header Banner */}
      <div className="mt-6 flex items-center justify-between px-6 py-3 bg-white rounded-3xl border border-slate-100 shadow-sm w-full">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center">
            <LuBox size={18} />
          </div>
          <h2 className="font-extrabold text-slate-800 text-sm">Product & Inventory</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
            Export All <GoDownload size={14} className="text-slate-500" />
          </button>
          <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
        </div>
      </div>

      {/* Product & Inventory KPI Cards Row 1 (5 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-0 py-4 w-full">
        {productKpisRow1.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-extrabold text-slate-855">
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs last period</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 font-medium">{card.previousValue}</span>
                  <span className={`font-semibold ${card.isNegative ? "text-red-500" : "text-green-600"}`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product & Inventory KPI Cards Row 2 (4 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-0 py-2 w-full mb-6">
        {productKpisRow2.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #fb923c" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fff7ed" : "#ffffff",
            }}
            className="rounded-2xl p-3.5 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className={`text-2xl font-extrabold text-red-500`}>
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{card.previousValue}</span>
                <div className="flex items-center gap-1">
                  <span className={`font-semibold text-red-500`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product & Inventory Charts Grid (3 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-0 py-4 w-full">
        {/* Stock Value by Category */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Stock Value by Category</h4>
            <p className="text-xs text-slate-400 mb-4">Distribution overview</p>
            <div className="flex items-center justify-around h-[160px]">
              <div className="w-[120px] h-[120px]">
                <Chart
                  options={stockCategoryOptions}
                  series={stockCategorySeries}
                  type="donut"
                  height="100%"
                />
              </div>
              <div className="flex flex-col gap-2.5 justify-center min-w-[110px]">
                {stockCategoryLegend.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2/5 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400 font-medium">{item.name}</span>
                    </div>
                    <span className="text-slate-800 font-bold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Top Selling Products</h4>
            <p className="text-xs text-slate-400 mb-4">Units sold this month</p>
            <div className="flex flex-col gap-3">
              {topSellingProducts.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-xs font-semibold">
                  <div className="flex justify-between items-center text-slate-500 font-medium">
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-50 h-5 rounded-full overflow-hidden relative">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className="bg-[#10b981] h-full rounded-full transition-all duration-500"
                      />
                      <span className="absolute inset-y-0 right-2 flex items-center text-[10px] text-slate-700 font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Low Stock Alerts</h4>
            <p className="text-xs text-slate-400 mb-4">Items needing reorder</p>
            <div className="flex flex-col gap-3.5">
              {lowStockAlerts.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold">
                  <span className="text-amber-500 shrink-0">
                    <FiAlertTriangle size={15} />
                  </span>
                  <span className="w-28 text-slate-600 font-medium truncate">{item.name}</span>
                  {/* Progress bar container */}
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="bg-indigo-500 h-full rounded-full"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold w-8 text-right">{item.ratio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Sales Details Table */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm mt-4 w-full">
        <div className="flex justify-between items-center mb-4 px-2">
          <h4 className="text-base font-extrabold text-[#2e2640] tracking-tight">Product Sales Details</h4>
          <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                <th className="pb-3 font-semibold px-2">Product</th>
                <th className="pb-3 text-center font-semibold">Units Sold</th>
                <th className="pb-3 text-center font-semibold">Current Stock</th>
                <th className="pb-3 text-center font-semibold">Revenue</th>
                <th className="pb-3 text-center font-semibold">Sold this Month</th>
                <th className="pb-3 text-right font-semibold pr-4">Margin % ↑↓</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {productSalesDetails.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="py-3 px-2 font-semibold text-slate-700">{item.product}</td>
                  <td className="py-3 text-center font-bold text-slate-700">{item.unitsSold}</td>
                  <td className="py-3 text-center font-bold text-slate-700">{item.currentStock}</td>
                  <td className="py-3 text-center font-bold text-emerald-600">{item.revenue}</td>
                  <td className="py-3 text-center font-semibold text-slate-600">{item.soldThisMonth}</td>
                  <td className="py-3 text-right pr-4 font-semibold">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      parseInt(item.margin) < 90 ? "bg-amber-50 text-amber-600" : "bg-green-50 text-green-600"
                    }`}>
                      {item.margin}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payments & Taxes Header Banner */}
      <div className="mt-6 flex items-center justify-between px-6 py-3 bg-white rounded-3xl border border-slate-100 shadow-sm w-full">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center">
            <LuCreditCard size={18} />
          </div>
          <h2 className="font-extrabold text-slate-800 text-sm">Payments & Taxes</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition shadow-sm">
            Export All <GoDownload size={14} className="text-slate-500" />
          </button>
          <LuChevronDown size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition" />
        </div>
      </div>

      {/* Payments KPI Cards Grid (5 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-0 py-4 w-full">
        {paymentsKpis.map((card, index) => (
          <div
            key={index}
            style={{
              border: card.border ? "2px solid #ef4444" : "1px solid #e5e7eb",
              backgroundColor: card.border ? "#fef2f2" : "#ffffff",
            }}
            className="rounded-2xl p-3 h-[140px] shadow-sm flex flex-col justify-between"
          >
            {/* Title */}
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider w-[90%]">
                {card.title}
              </p>
              <span className="text-gray-300 text-xs">ⓘ</span>
            </div>

            {/* Value */}
            <div className="flex justify-between items-baseline">
              <h3 className={`text-2xl font-extrabold ${card.isNegativeValue ? "text-red-600" : "text-slate-850"}`}>
                {card.value}
              </h3>
            </div>

            {/* Bottom */}
            <div className="text-[10px] whitespace-nowrap">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">vs last period</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 font-medium">{card.previousValue}</span>
                  <span className={`font-semibold ${card.isNegativeValue ? "text-red-500" : "text-green-600"}`}>
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Split & Breakdown (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Payment Mode Split */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Payment Mode Split</h4>
            <p className="text-xs text-slate-400 mb-4">Ratio of transaction modes</p>
            <div className="flex items-center justify-around h-[180px]">
              <div className="w-[125px] h-[125px]">
                <Chart
                  options={paymentModeOptions}
                  series={paymentModeSeries}
                  type="donut"
                  height="100%"
                />
              </div>
              <div className="flex flex-col gap-2.5 justify-center min-w-[130px]">
                {paymentModeLegend.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400 font-medium">{item.name}</span>
                    </div>
                    <span className="text-slate-800 font-bold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payments Breakdown Table */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 px-1">
              <h4 className="text-base font-bold text-slate-800">Breakdown</h4>
              <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-3 font-semibold">Service</th>
                    <th className="pb-3 text-center font-semibold">Amount ↑↓</th>
                    <th className="pb-3 text-center font-semibold">Transactions ↑↓</th>
                    <th className="pb-3 text-right font-semibold pr-3">% Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {paymentBreakdown.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="py-3 font-semibold text-slate-700">{item.service}</td>
                      <td className="py-3 text-center font-bold text-slate-800">{item.amount}</td>
                      <td className="py-3 text-center font-bold text-slate-700">{item.transactions}</td>
                      <td className="py-3 text-right pr-3 font-semibold text-slate-600">{item.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Taxes Split & Breakdown (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-0 py-4 w-full">
        {/* Taxes Breakdown Table */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 px-1">
              <h4 className="text-base font-bold text-slate-800">Breakdown</h4>
              <a href="#" className="text-xs text-slate-400 font-semibold hover:underline">See All&gt;&gt;</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-3 font-semibold">Service</th>
                    <th className="pb-3 text-center font-semibold">Taxable Amount ↑↓</th>
                    <th className="pb-3 text-right font-semibold pr-3">Tax Collected ↑↓</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {taxBreakdown.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="py-3.5 font-semibold text-slate-700">{item.service}</td>
                      <td className="py-3.5 text-center font-bold text-slate-800">{item.amount}</td>
                      <td className="py-3.5 text-right pr-3 font-bold text-slate-800">{item.taxCollected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tax Collected Chart */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-800 mb-1">Tax Collected</h4>
            <p className="text-xs text-slate-400 mb-4">GST breakdown overview</p>
            <div className="flex items-center justify-around h-[180px]">
              <div className="w-[125px] h-[125px]">
                <Chart
                  options={taxCollectedOptions}
                  series={taxCollectedSeries}
                  type="donut"
                  height="100%"
                />
              </div>
              <div className="flex flex-col gap-2.5 justify-center min-w-[130px]">
                {taxCollectedLegend.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400 font-medium">{item.name}</span>
                    </div>
                    <span className="text-slate-800 font-bold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default DetailedReport;