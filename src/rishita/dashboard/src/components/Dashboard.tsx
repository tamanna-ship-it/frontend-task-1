import '../index.css';
import '../App.css';
import {
  IconPlus, IconChevronDown, IconExport, IconRefresh, IconChevronLeft,
  IconChevronRight, IconSearch, IconStar, IconRupee, IconWarning,
  IconCalendar, IconClients, IconClock, IconTrendingUp, IconDollar,
  IconUserPlus, IconUserCheck, IconCheckCircle, IconXCircle, IconAlertCircle,
  IconPie, IconTrophy, IconExternalLink, IconBox, IconMembership,
} from './icons';
import logoAbc from '../assets/logo-abc.png';
import avatarRajesh from '../assets/avatar-2.png';
import avatar1 from '../assets/avatar-1.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';

/* ---------------- Header strip ---------------- */
function HeaderStrip() {
  return (
    <div className="header-strip">
      <div>
        <div className="hs-welcome">Welcome!</div>
        <div className="hs-time"><span>It's</span> <b>1.43pm, 23 March, Sat</b></div>
      </div>
      <div className="hs-actions">
        <button className="btn btn-purple"><IconPlus size={15} /> Quick Create</button>
        <button className="btn btn-white"><IconCalendar size={15} /> Today <IconChevronDown size={14} /></button>
        <button className="btn btn-white"><IconExport size={15} /> Export</button>
        <button className="btn btn-icon"><IconRefresh size={15} /></button>
      </div>
    </div>
  );
}

/* ---------------- Greeting + What's New ---------------- */
function GreetingRow() {
  return (
    <div className="greeting-row">
      <div className="greeting-card">
        <img className="greeting-avatar" src={avatarRajesh} alt="Rajesh" />
        <div className="greeting-text">
          <div className="greeting-title">Good Afternoon, Rajesh <span>👋</span></div>
          <div className="greeting-sub">Welcome back! Here's a quick view of your day at Glamour Studio.</div>
          <button className="btn btn-explore">Explore New Features</button>
        </div>
        <img className="greeting-badge" src={logoAbc} alt="ABC Saloon Makeup" />
      </div>

      <div className="whatsnew-card">
        <div className="whatsnew-title">What's New, Today</div>
        <ul className="whatsnew-body">
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Nunc dignissim risus id metus.</li>
          <li>Cras ornare tristique elit.</li>
        </ul>
      </div>
    </div>
  );
}

/* ---------------- KPI Overview ---------------- */
const kpis = [
  { label: 'Total Revenue', value: '₹2,45,680', delta: '+8.2% from Yesterday', Icon: IconDollar },
  { label: 'Total Bookings', value: '156', delta: '+8.2% from Yesterday', Icon: IconCalendar },
  { label: 'Total Clients', value: '1,245', delta: '+8.2% from last period', Icon: IconClients },
  { label: 'New Clients', value: '34', delta: '+8.2% from Yesterday', Icon: IconUserPlus },
  { label: 'Returning Clients', value: '108', delta: '+8.2% from Yesterday', Icon: IconUserCheck },
  { label: 'Completed Appointments', value: '150', delta: '+8.2% from Yesterday', Icon: IconCheckCircle },
  { label: 'Cancelled Appointments', value: '12', delta: '+8.2% from Yesterday', Icon: IconXCircle },
  { label: 'No Show %', value: '6.4%', delta: '+8.2% from Yesterday', Icon: IconAlertCircle },
];

function KpiOverview() {
  return (
    <div className="card kpi-card">
      <div className="kpi-head">
        <div className="card-title">KPI's Overview</div>
        <div className="card-sub">Keep up the pace — you're on track for a productive day 🚀</div>
      </div>
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div className="kpi-tile" key={k.label}>
            <div className="kpi-tile-head">
              <span className="kpi-label">{k.label}</span>
              <span className="kpi-ic"><k.Icon size={15} /></span>
            </div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-delta"><IconTrendingUp size={13} /> {k.delta}</div>
          </div>
        ))}
        <div className="kpi-tile">
          <div className="kpi-tile-head">
            <span className="kpi-label">Membership Revenue</span>
            <span className="kpi-ic"><IconRupee size={14} /></span>
          </div>
          <div className="kpi-value">₹1,800.00</div>
          <div className="kpi-delta">↑ 200%vs last period</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Employee status ---------------- */
const employees = [
  { name: 'Rajesh Alachandra', role: 'Senior Stylyst', time: '10:30', leave: false, img: avatarRajesh },
  { name: 'Maya Johnson', role: 'Junior Stylist', time: '11:00', leave: false, img: avatar3 },
  { name: 'David Kim', role: 'Lead Stylist', time: '', leave: true, img: avatar4 },
  { name: 'Sara Patel', role: 'Associate Stylist', time: '9:45', leave: false, img: avatar1 },
];

function EmployeeStatus() {
  return (
    <div className="card emp-card">
      <div className="emp-head">
        <div className="card-title icon-title"><IconClock size={18} /> Today Employee Status</div>
        <div className="emp-tools">
          <div className="mini-search"><IconSearch size={14} /><input placeholder="Search for Staff !" /></div>
          <button className="btn btn-white sm"><IconCalendar size={13} /> Today <IconChevronDown size={13} /></button>
        </div>
      </div>
      <div className="emp-body">
        <button className="emp-arrow left"><IconChevronLeft size={16} /></button>
        <div className="emp-list">
          {employees.map((e) => (
            <div className="emp-item" key={e.name}>
              <div className="emp-avatar-wrap">
                <img className="emp-avatar" src={e.img} alt={e.name} />
              </div>
              <div className="emp-name">{e.name}</div>
              <div className="emp-role">{e.role}</div>
              <div className="emp-shift-label">Today Shift</div>
              <div className="emp-shift">Wednesday, Oct 8, 10:00 AM - 6:00 PM</div>
              {e.leave ? (
                <div className="emp-clockbox leave"><span className="leave-dot" /> On Leave</div>
              ) : (
                <div className="emp-clockbox">
                  <div className="ecb-col">
                    <div className="ecb-time"><b>{e.time}</b> <small>AM</small></div>
                    <div className="ecb-label">Clock in</div>
                  </div>
                  <div className="ecb-sep"><span /><span /></div>
                  <div className="ecb-col">
                    <div className="ecb-time placeholder">_ _ : _ _</div>
                    <div className="ecb-label">Clock Out</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="emp-arrow right"><IconChevronRight size={16} /></button>
      </div>
    </div>
  );
}

/* ---------------- Live Service Floor ---------------- */
const busy = [
  { staff: 'Abhinav Reddy', client: 'Meera Iyer', svc: 'Hair Color, Haircut', rem: '45 min remaining' },
  { staff: 'Tejaswini Rao', client: 'Rahul Singh', svc: 'Haircut, Hair Color, Haircut', rem: '20 min remaining' },
  { staff: 'Priya Sharma', client: 'Anjali Verma', svc: 'Facial Treatment, Hair Color', rem: '30 min remaining' },
];
const free = ['Avinash', 'Rajesh', 'Sai pavan'];

function LiveServiceFloor() {
  return (
    <div className="card floor-card">
      <div className="floor-head">
        <div className="card-title">Live Service Floor</div>
        <div className="emp-tools">
          <div className="mini-search"><IconSearch size={14} /><input placeholder="Search for Staff !" /></div>
          <button className="btn btn-white sm">Staff Status <IconChevronDown size={13} /></button>
        </div>
      </div>
      <div className="floor-body">
        <button className="emp-arrow left"><IconChevronLeft size={16} /></button>
        <div className="floor-grid">
          {busy.map((b) => (
            <div className="floor-item busy" key={b.staff}>
              <div className="floor-top">
                <span className="floor-staff">{b.staff}</span>
                <span className="tag tag-busy">Busy</span>
              </div>
              <div className="floor-inner">
                <div className="floor-client">{b.client}</div>
                <div className="floor-svc">{b.svc}</div>
                <div className="floor-rem"><IconClock size={13} /> {b.rem}</div>
              </div>
            </div>
          ))}
          {free.map((f) => (
            <div className="floor-item free" key={f}>
              <div className="floor-top">
                <span className="floor-staff">{f}</span>
                <span className="tag tag-free">Free</span>
              </div>
              <div className="floor-inner floor-avail">Available for service</div>
            </div>
          ))}
        </div>
        <button className="emp-arrow right"><IconChevronRight size={16} /></button>
      </div>
    </div>
  );
}

/* ---------------- Revenue Breakdown ---------------- */
function RevenueBreakdown() {
  const rows = [
    { label: 'Services', value: '₹185.4K (62%)', pct: 62 },
    { label: 'Retail', value: '₹68.2K (23%)', pct: 23 },
    { label: 'Memberships', value: '₹44.2K (15%)', pct: 15 },
  ];
  return (
    <div className="card rev-card">
      <div className="card-title icon-title"><IconPie size={17} style={{ color: 'var(--purple)' }} /> Revenue Breakdown</div>
      <div className="rev-list">
        {rows.map((r) => (
          <div className="rev-row" key={r.label}>
            <div className="rev-row-top">
              <span>{r.label}</span>
              <span className="rev-val">{r.value}</span>
            </div>
            <div className="rev-bar"><div style={{ width: `${r.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- New vs Returning ---------------- */
function NewVsReturning() {
  return (
    <div className="card nvr-card">
      <div className="card-title icon-title"><IconClients size={17} style={{ color: 'var(--purple)' }} /> New vs Returning</div>
      <div className="nvr-body">
        <div className="nvr-col">
          <div className="nvr-label">New Customers</div>
          <div className="nvr-val">34</div>
          <span className="nvr-pct blue">28.3%</span>
        </div>
        <div className="nvr-div" />
        <div className="nvr-col right">
          <div className="nvr-label">Returning</div>
          <div className="nvr-val">86</div>
          <span className="nvr-pct green">71.7%</span>
        </div>
      </div>
      <div className="nvr-delta"><IconTrendingUp size={13} /> +12.5% from yesterday</div>
    </div>
  );
}

/* ---------------- Sales & Daily Collections ---------------- */
function SalesCollections() {
  const bars = [
    { t: '9 AM', h: 22 }, { t: '10 AM', h: 42 }, { t: '11 AM', h: 48 },
    { t: '12 PM', h: 62 }, { t: '1 PM', h: 80 }, { t: '2 PM', h: 88 }, { t: '3 PM', h: 70 },
  ];
  return (
    <div className="card sales-card">
      <div className="card-title">Sales & Daily Collections</div>
      <div className="sales-tabs">
        <button className="stab active">Aggregate</button>
        <button className="stab">By Client</button>
        <button className="stab">By Staff</button>
        <button className="stab">Products</button>
        <button className="stab">Services</button>
      </div>
      <div className="sales-stats">
        <div className="ss-item green">
          <div className="ss-label">Total Collected</div>
          <div className="ss-val">₹45,280</div>
        </div>
        <div className="ss-item blue">
          <div className="ss-label">Cash</div>
          <div className="ss-val">₹18,500</div>
        </div>
        <div className="ss-item purple">
          <div className="ss-label">Card / Digital</div>
          <div className="ss-val">₹26,780</div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-yaxis">
          <span>8000</span><span>6000</span><span>4000</span><span>2000</span><span>0</span>
        </div>
        <div className="chart-plot">
          <div className="chart-grid"><span /><span /><span /><span /><span /></div>
          <div className="chart-bars">
            {bars.map((b) => (
              <div className="chart-col" key={b.t}>
                <div className="chart-bar" style={{ height: `${b.h}%` }} />
                <div className="chart-x">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Best Performers ---------------- */
const performers = [
  { rank: 1, init: 'AR', name: 'Abhinav Reddy', svc: '8 services', rating: '4.9', amt: '₹12,400', up: '+12%', cls: 'gold' },
  { rank: 2, init: 'TR', name: 'Tejaswini Rao', svc: '6 services', rating: '4.8', amt: '₹9,800', up: '+12%', cls: 'plain' },
  { rank: 3, init: 'PS', name: 'Priya Sharma', svc: '5 services', rating: '4.7', amt: '₹8,200', up: '+12%', cls: 'bronze' },
];
function BestPerformers() {
  return (
    <div className="card best-card">
      <div className="card-title icon-title"><IconTrophy size={18} /> Best Performers</div>
      <div className="best-tabs">
        <button className="stab active">Today</button>
        <button className="stab">This Week</button>
        <button className="stab">This Month</button>
      </div>
      <div className="best-list">
        {performers.map((p) => (
          <div className={`best-item ${p.cls}`} key={p.rank}>
            <div className="best-av">
              <span className="best-avatar">{p.init}</span>
              <span className={`best-badge ${p.cls}`}>
                {p.rank === 1 ? <IconTrophy size={11} style={{ color: '#fff' }} /> : p.rank}
              </span>
            </div>
            <div className="best-mid">
              <div className="best-name">{p.name}</div>
              <div className="best-svc">{p.svc} <span className="best-dot">•</span></div>
              <div className="best-rating"><IconStar size={13} /> {p.rating}</div>
            </div>
            <div className="best-right">
              <div className="best-amt">{p.amt}</div>
              <div className="best-up"><IconTrendingUp size={12} /> {p.up}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Products Expiring ---------------- */
function ProductsExpiring() {
  const rows = [
    { period: 'This Week', num: '15', tag: 'Urgent', cls: 'urgent' },
    { period: 'Next Week', num: '28', tag: 'Upcoming', cls: 'upcoming' },
    { period: 'This Month', num: '67', tag: 'Pending', cls: 'pending' },
  ];
  return (
    <div className="card pexp-card">
      <div className="card-title icon-title"><IconBox size={17} style={{ color: 'var(--purple)' }} /> Products Expiring</div>
      <div className="pexp-list">
        {rows.map((r) => (
          <div className={`pexp-row ${r.cls}`} key={r.period}>
            <div>
              <div className="pexp-period">{r.period}</div>
              <div className="pexp-num">{r.num}</div>
            </div>
            <span className={`tag pexp-tag ${r.cls}`}>{r.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Performance Rates ---------------- */
function PerformanceRates() {
  const rows = [
    { label: 'No Show Rate', val: '3.2%', sub: '-1.2% from last week', pct: 8, down: true },
    { label: 'Cancellation Rate', val: '5.8%', sub: '+0.8% from last week', pct: 14, down: false },
    { label: 'Completion Rate', val: '87.3%', sub: '+3.5% from last week', pct: 87, down: true },
  ];
  return (
    <div className="card prate-card">
      <div className="card-title icon-title"><IconXCircle size={17} style={{ color: 'var(--purple)' }} /> Performance Rates</div>
      <div className="prate-list">
        {rows.map((r) => (
          <div className="prate-row" key={r.label}>
            <div className="prate-top">
              <span>{r.label}</span>
              <span className="prate-val">{r.val}</span>
            </div>
            <div className="rev-bar"><div style={{ width: `${r.pct}%` }} /></div>
            <div className={`prate-sub ${r.down ? 'green' : 'red'}`}>{r.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Memberships ---------------- */
function Memberships() {
  const soon = [
    { name: 'Anjali Verma', plan: 'Gold Plan', days: '2 days', date: 'Mar 25' },
    { name: 'Rahul Singh', plan: 'Platinum Plan', days: '4 days', date: 'Mar 27' },
    { name: 'Meera Iyer', plan: 'Silver Plan', days: '5 days', date: 'Mar 28' },
  ];
  return (
    <div className="card mem-card">
      <div className="card-title">Memberships</div>
      <div className="mem-stats">
        <div className="mem-stat">
          <div className="mem-num">342</div>
          <div className="mem-slabel">Active Members</div>
        </div>
        <div className="mem-stat">
          <div className="mem-num">7</div>
          <div className="mem-slabel">Expiring Soon</div>
        </div>
      </div>
      <div className="mem-subtitle icon-title"><IconAlertCircle size={16} style={{ color: '#e0541f' }} /> Expiring Soon</div>
      <div className="mem-list">
        {soon.map((m) => (
          <div className="mem-item" key={m.name}>
            <div className="mem-info">
              <div className="mem-name">{m.name}</div>
              <div className="mem-plan">{m.plan}</div>
            </div>
            <div className="mem-right">
              <span className="mem-days">{m.days}</span>
              <span className="mem-date">{m.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Inventory Status ---------------- */
function InventoryStatus() {
  const items = [
    { name: 'Hair Serum Pro', cat: 'Hair Care', qty: 'Qty: 8', tag: 'Low Stock', cls: 'lowstock', Icon: IconWarning, ic: '#e0902a' },
    { name: 'Face Cream Deluxe', cat: 'Skin Care', qty: 'Qty: 0', tag: 'Out of Stock', cls: 'outstock', Icon: IconBox, ic: '#e05a4f' },
    { name: 'Nail Polish Set', cat: 'Nails', qty: 'Qty: 45', tag: 'Fast Moving', cls: 'fast', Icon: IconTrendingUp, ic: '#22b573' },
    { name: 'Vitamin C Serum', cat: 'Skin Care', qty: 'Qty: 12 • 15 days left', tag: 'Expiring Soon', cls: 'expiring', Icon: IconCalendar, ic: '#e0902a' },
  ];
  return (
    <div className="card inv-card">
      <div className="inv-head">
        <div className="card-title">Inventory Status</div>
        <a className="view-all" href="#">View All <IconExternalLink size={14} /></a>
      </div>
      <div className="inv-top">
        <div className="inv-box low">
          <div className="inv-box-label">Low Stock Items</div>
          <div className="inv-box-num">1</div>
        </div>
        <div className="inv-box out">
          <div className="inv-box-label">Out of Stock</div>
          <div className="inv-box-num">1</div>
        </div>
      </div>
      <div className="inv-list">
        {items.map((it) => (
          <div className="inv-item" key={it.name}>
            <span className="inv-ic" style={{ color: it.ic }}><it.Icon size={17} /></span>
            <div className="inv-info">
              <div className="inv-name">{it.name}</div>
              <div className="inv-cat">{it.cat} <span className="inv-catdot">•</span> {it.qty}</div>
            </div>
            <span className={`tag inv-tag ${it.cls}`}>{it.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- To Do Overview ---------------- */
function ToDoOverview() {
  const tasks = [
    { title: 'Follow up with Meera Iyer', desc: 'Discuss membership renewal options', when: 'Today, 4:00 PM', who: 'Priya Sharma', tag: 'Pending', cls: 'pending' },
    { title: "Confirm tomorrow's appointments", desc: 'Send confirmation SMS to 12 clients', when: 'Today, 5:00 PM', who: 'Reception', tag: 'Pending', cls: 'pending' },
    { title: 'Review inventory order', desc: 'Check low stock items and place orders', when: 'Tomorrow, 10:00 AM', who: 'Manager', tag: 'Ongoing', cls: 'ongoing' },
    { title: 'Schedule staff training', desc: 'Organize product knowledge session', when: 'This Week', who: 'HR', tag: 'Completed', cls: 'completed' },
  ];
  return (
    <div className="card todo-card">
      <div className="card-title">To Do Overview</div>
      <div className="todo-filters">
        <span className="tf active">All <b className="tf-count">4</b></span>
        <span className="tf">Mine <b className="tf-count">2</b></span>
        <span className="tf">Overdue <b className="tf-count red">2</b></span>
      </div>
      <div className="todo-list">
        {tasks.map((t) => (
          <div className="todo-item" key={t.title}>
            <div className="todo-info">
              <div className="todo-title">{t.title}</div>
              <div className="todo-desc">{t.desc}</div>
              <div className="todo-meta">
                <span><IconClock size={13} /> {t.when}</span>
                <span><IconClients size={13} /> {t.who}</span>
              </div>
            </div>
            <span className={`tag todo-tag ${t.cls}`}>{t.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Recent Activity ---------------- */
function RecentActivity() {
  const acts = [
    { t: 'New Appointment Booked', d: 'Priya Sharma booked Hair Color service', ago: '5 mins ago', c: '#5b6ef5', Icon: IconCalendar },
    { t: 'Payment Collected', d: '₹3,500 received for Facial treatment', ago: '12 mins ago', c: '#22a06b', Icon: IconMembership },
    { t: 'Inventory Item Added', d: 'Hair Serum Pro (50 units) added to stock', ago: '28 mins ago', c: '#8b5cf6', Icon: IconBox },
    { t: 'New Member Joined', d: 'Rahul Verma subscribed to Gold Membership', ago: '1 hour ago', c: '#e0902a', Icon: IconUserPlus },
    { t: 'Appointment Cancelled', d: 'Sneha Patel cancelled Manicure appointment', ago: '2 hours ago', c: '#e0541f', Icon: IconXCircle },
    { t: 'Service Completed', d: 'Keratin Treatment completed for Amit Kumar', ago: '3 hours ago', c: '#22a06b', Icon: IconCheckCircle },
  ];
  return (
    <div className="card ra-card">
      <div className="card-title">Recent Activity</div>
      <div className="ra-list">
        {acts.map((a) => (
          <div className="ra-item" key={a.t}>
            <span className="ra-ic" style={{ color: a.c, background: `${a.c}1f` }}><a.Icon size={17} /></span>
            <div className="ra-info">
              <div className="ra-title">{a.t}</div>
              <div className="ra-desc">{a.d}</div>
            </div>
            <span className="ra-ago"><IconClock size={13} /> {a.ago}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="main">
      <HeaderStrip />
      <GreetingRow />
      <KpiOverview />
      <EmployeeStatus />

      <div className="grid-2">
        <LiveServiceFloor />
        <div className="col-stack">
          <RevenueBreakdown />
          <NewVsReturning />
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="grid-bottom">
          <SalesCollections />
          <BestPerformers />
          <div className="grid-bottom-left">
            <ProductsExpiring />
            <PerformanceRates />
            <Memberships />
          </div>
          <div className="grid-bottom-right">
            <InventoryStatus />
            <ToDoOverview />
          </div>
        </div>
        <RecentActivity />
      </div>
    </main>
  );
}
