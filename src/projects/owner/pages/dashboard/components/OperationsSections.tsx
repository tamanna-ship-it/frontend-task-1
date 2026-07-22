import { IconAlertCircle, IconClients, IconClock, IconExternalLink, IconXCircle } from '@/projects/components/icons';
import { inventoryItems, membershipsSoon, performanceRates, todoTasks } from '@/shared/data/dashboardData';
import type { DashboardItemWithIcon } from '@/shared/types/dashboard';

export function PerformanceRatesCard() {
  return (
    <div className="card prate-card">
      <div className="card-title icon-title"><IconXCircle size={17} style={{ color: 'var(--accent)' }} /> Performance Rates</div>
      <div className="prate-list">
        {performanceRates.map((r: any) => (
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

export function MembershipsCard() {
  return (
    <div className="card mem-card">
      <div className="card-title">Memberships</div>
      <div className="mem-stats">
        <div className="mem-stat"><div className="mem-num">342</div><div className="mem-slabel">Active Members</div></div>
        <div className="mem-stat"><div className="mem-num">7</div><div className="mem-slabel">Expiring Soon</div></div>
      </div>
      <div className="mem-subtitle icon-title"><IconAlertCircle size={16} style={{ color: '#e0541f' }} /> Expiring Soon</div>
      <div className="mem-list">
        {membershipsSoon.map((m: any) => (
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

export function InventoryStatusCard() {
  return (
    <div className="card inv-card">
      <div className="inv-head">
        <div className="card-title">Inventory Status</div>
        <a className="view-all" href="#">View All <IconExternalLink size={14} /></a>
      </div>
      <div className="inv-top">
        <div className="inv-box low"><div className="inv-box-label">Low Stock Items</div><div className="inv-box-num">1</div></div>
        <div className="inv-box out"><div className="inv-box-label">Out of Stock</div><div className="inv-box-num">1</div></div>
      </div>
      <div className="inv-list">
        {inventoryItems.map((it: DashboardItemWithIcon) => (
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

export function ToDoOverviewCard() {
  return (
    <div className="card todo-card">
      <div className="card-title">To Do Overview</div>
      <div className="todo-filters">
        <span className="tf active">All <b className="tf-count">4</b></span>
        <span className="tf">Mine <b className="tf-count">2</b></span>
        <span className="tf">Overdue <b className="tf-count red">2</b></span>
      </div>
      <div className="todo-list">
        {todoTasks.map((t: any) => (
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