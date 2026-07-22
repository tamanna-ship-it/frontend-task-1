import { IconClock } from '@/projects/components/icons';
import { recentActivities } from '@/shared/data/dashboardData';
import type { TimelineActivity } from '@/shared/types/dashboard';

export function RecentActivity() {
  return (
    <div className="card ra-card">
      <div className="card-title">Recent Activity</div>
      <div className="ra-list">
        {recentActivities.map((a: TimelineActivity) => (
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