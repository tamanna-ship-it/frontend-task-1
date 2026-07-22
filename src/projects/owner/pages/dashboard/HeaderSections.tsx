import { IconCalendar, IconChevronDown, IconExport, IconPlus, IconRefresh } from '@/projects/components/icons';
import { greetingAvatar, headerIntro, topBarLogo } from '@/shared/data/dashboardData';

const actions = [
  { label: 'Quick Create', icon: IconPlus, className: 'btn btn-purple' },
  { label: 'Today', icon: IconCalendar, trailingIcon: IconChevronDown, className: 'btn btn-white' },
  { label: 'Export', icon: IconExport, className: 'btn btn-white' },
  { label: 'Refresh', icon: IconRefresh, className: 'btn btn-icon' },
];

export function HeaderStrip() {
  return (
    <div className="header-strip">
      <div>
        <div className="hs-welcome">{headerIntro.welcome}</div>
        <div className="hs-time"><span>{headerIntro.time}</span> <b>{headerIntro.date}</b></div>
      </div>
      <div className="hs-actions">
        {actions.map((action) => {
          const Icon = action.icon;
          const TrailingIcon = action.trailingIcon;

          return (
            <button key={action.label} className={action.className}>
              <Icon size={15} /> {action.label}
              {TrailingIcon ? <TrailingIcon size={14} /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function GreetingRow() {
  return (
    <div className="greeting-row">
      <div className="greeting-card">
        <img className="greeting-avatar" src={greetingAvatar} alt="Rajesh" />
        <div className="greeting-text">
          <div className="greeting-title">Good Afternoon, Rajesh <span>👋</span></div>
          <div className="greeting-sub">Welcome back! Here's a quick view of your day at Glamour Studio.</div>
          <button className="btn btn-explore">Explore New Features</button>
        </div>
        <img className="greeting-badge" src={topBarLogo} alt="ABC Saloon Makeup" />
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