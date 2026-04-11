import { useState } from 'react';

export default function ClientNavbar({ user }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <nav className="client-navbar">
      <div className="nav-left">
        <div className="logo">OneWork<span>.</span></div>
      </div>

      <div className="nav-right">
        {/* Community & Inbox Links */}
        <div className="nav-actions">
          <button className="nav-btn-link" title="Global Chat & Groups">
            <span className="icon">👥</span> Community
          </button>
          <button className="nav-btn-link" title="Project Updates">
            <span className="icon">📩</span> Inbox
            <span className="unread-dot"></span>
          </button>
        </div>

        {/* Gemini-style Profile Icon */}
        <div className="profile-wrapper">
          <div 
            className="profile-icon-circle" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {user?.name?.[0]?.toUpperCase() || 'C'}
          </div>

          {showDropdown && (
            <div className="profile-dropdown">
              <div className="user-info">
                <strong>{user?.name}</strong>
                <p>{user?.email}</p>
              </div>
              <hr />
              <button className="dropdown-opt">👤 Profile Details</button>
              <button className="dropdown-opt">📄 Gigs Posted</button>
              <button className="dropdown-opt">⚙️ Settings</button>
              <hr />
              <button className="dropdown-opt signout" onClick={handleSignOut}>
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
