import { IconBox, IconStar, IconTrophy, IconTrendingUp } from '@/projects/components/icons';
import { performers, productsExpiring, salesBars } from '@/shared/data/dashboardData';

export function SalesCollections() {
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
        <div className="ss-item green"><div className="ss-label">Total Collected</div><div className="ss-val">₹45,280</div></div>
        <div className="ss-item blue"><div className="ss-label">Cash</div><div className="ss-val">₹18,500</div></div>
        <div className="ss-item purple"><div className="ss-label">Card / Digital</div><div className="ss-val">₹26,780</div></div>
      </div>
      <div className="chart">
        <div className="chart-yaxis">
          <span>8000</span><span>6000</span><span>4000</span><span>2000</span><span>0</span>
        </div>
        <div className="chart-plot">
          <div className="chart-grid"><span /><span /><span /><span /><span /></div>
          <div className="chart-bars">
            {salesBars.map((b: any) => (
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

export function BestPerformers() {
  return (
    <div className="card best-card">
      <div className="card-title icon-title"><IconTrophy size={18} /> Best Performers</div>
      <div className="best-tabs">
        <button className="stab active">Today</button>
        <button className="stab">This Week</button>
        <button className="stab">This Month</button>
      </div>
      <div className="best-list">
        {performers.map((p: any) => (
          <div className={`best-item ${p.cls}`} key={p.rank}>
            <div className="best-av">
              <span className="best-avatar">{p.init}</span>
              <span className={`best-badge ${p.cls}`}>{p.rank === 1 ? <IconTrophy size={11} style={{ color: '#fff' }} /> : p.rank}</span>
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

export function ProductsExpiring() {
  return (
    <div className="card pexp-card">
      <div className="card-title icon-title"><IconBox size={17} style={{ color: 'var(--accent)' }} /> Products Expiring</div>
      <div className="pexp-list">
        {productsExpiring.map((r: any) => (
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