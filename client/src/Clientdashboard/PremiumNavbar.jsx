import { useState } from 'react';

export default function PremiumNavbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-nav">
      <div className="p-nav-left">
        <div className="p-logo">OneWork<span>.</span></div>
      </div>

      <div className="p-nav-right">
        <div className="p-nav-links">
          <button className="p-icon-link">
            <span className="p-emoji">👥</span> Community
          </button>
          <button className="p-icon-link">
            <span className="p-emoji">📩</span> Inbox
            <span className="p-unread"></span>
          </button>
        </div>

        <div className="p-profile-area">
          <div className="p-avatar" onClick={() => setIsOpen(!isOpen)}>
            {user?.name?.[0].toUpperCase()}
          </div>
          
          {isOpen && (
            <div className="p-dropdown">
              <div className="p-dropdown-info">
                <strong>{user?.name}</strong>
                <span>{user?.role}</span>
              </div>
              <hr />
              <button className="p-drop-item">👤 Profile Details</button>
              <button className="p-drop-item">📄 Gigs Applied</button>
              <button className="p-drop-item">⚙️ Settings</button>
              <hr />
              <button className="p-drop-item signout" onClick={() => {localStorage.clear(); window.location.reload();}}>
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}