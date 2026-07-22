import { IconCalendar, IconChevronDown, IconChevronLeft, IconChevronRight, IconClock, IconClients, IconPie, IconSearch, IconTrendingUp } from '@/projects/components/icons';
import { employees, kpis, liveServiceBusy, liveServiceFree, newVsReturning, revenueRows } from '@/shared/data/dashboardData';
import type { KpiMetric } from '@/shared/types/dashboard';

export function KpiOverview() {
  return (
    <div className="card kpi-card">
      <div className="kpi-head">
        <div className="card-title">KPI's Overview</div>
        <div className="card-sub">Keep up the pace — you're on track for a productive day 🚀</div>
      </div>
      <div className="kpi-grid">
        {kpis.map((k: KpiMetric) => (
          <div className="kpi-tile" key={k.label}>
            <div className="kpi-tile-head">
              <span className="kpi-label">{k.label}</span>
              <span className="kpi-ic"><k.Icon size={15} /></span>
            </div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-delta"><IconTrendingUp size={13} /> {k.delta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmployeeStatus() {
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
          {employees.map((e: any) => (
            <div className="emp-item" key={e.name}>
              <div className="emp-avatar-wrap"><img className="emp-avatar" src={e.img} alt={e.name} /></div>
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

export function LiveServiceFloor() {
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
          {liveServiceBusy.map((b: any) => (
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
          {liveServiceFree.map((f: string) => (
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

export function RevenueBreakdown() {
  return (
    <div className="card rev-card">
      <div className="card-title icon-title"><IconPie size={17} style={{ color: 'var(--accent)' }} /> Revenue Breakdown</div>
      <div className="rev-list">
        {revenueRows.map((r: any) => (
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

export function NewVsReturning() {
  return (
    <div className="card nvr-card">
      <div className="card-title icon-title"><IconClients size={17} style={{ color: 'var(--accent)' }} /> New vs Returning</div>
      <div className="nvr-body">
        <div className="nvr-col">
          <div className="nvr-label">New Customers</div>
          <div className="nvr-val">{newVsReturning.newCustomers}</div>
          <span className="nvr-pct blue">28.3%</span>
        </div>
        <div className="nvr-div" />
        <div className="nvr-col right">
          <div className="nvr-label">Returning</div>
          <div className="nvr-val">{newVsReturning.returningCustomers}</div>
          <span className="nvr-pct green">71.7%</span>
        </div>
      </div>
      <div className="nvr-delta"><IconTrendingUp size={13} /> +12.5% from yesterday</div>
    </div>
  );
}