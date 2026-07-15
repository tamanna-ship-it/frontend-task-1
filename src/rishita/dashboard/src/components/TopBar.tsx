import { IconSearch, IconBell, IconPanel } from './icons';
import logoAbc from '../assets/logo-abc.png';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-toggle"><IconPanel size={18} /></button>
        <img className="topbar-logo" src={logoAbc} alt="ABC Saloon Makeup" />
        <div>
          <div className="topbar-title">Welcome Back, Rajesh</div>
          <div className="topbar-sub">Hello, here you can manage your orders by zone</div>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <IconSearch size={16} />
          <input placeholder="Search..." />
        </div>
        <button className="topbar-bell">
          <IconBell size={18} />
          <span className="bell-dot" />
        </button>
        <button className="topbar-profile">
          <span className="profile-avatar">AD</span>
          <span className="profile-name">Profile</span>
        </button>
      </div>
    </header>
  );
}
