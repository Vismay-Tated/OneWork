import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Import our modular dashboards
import ClientDashboard from '../clientdashboard/ClientDashboard.jsx';
// import FreelancerDashboard from '../components/FreelancerDashboard';
// import AgencyDashboard from '../components/AgencyDashboard';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Inter' }}>Loading workspace...</div>;

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Dashboard Navbar */}
      <nav className="navbar" style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: '800', color: '#2563eb', letterSpacing: '-0.5px' }}>OneWork Workspace</div>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontWeight: '600', color: '#64748b' }}>
            Logged in as: <span style={{ color: '#0f172a' }}>{user.name}</span> <span style={{ fontSize: '12px', background: '#e2e8f0', padding: '4px 8px', borderRadius: '12px', marginLeft: '5px' }}>{user.role}</span>
          </span>
          <button onClick={handleLogout} className="btn-outline" style={{ cursor: 'pointer', padding: '8px 16px', fontSize: '14px' }}>
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          
          {/* THE MAGIC SWITCH */}
          {user.role === 'Client' && <ClientDashboard user={user} />}
          {user.role === 'Freelancer' && <FreelancerDashboard user={user} />}
          {user.role === 'Agency' && <AgencyDashboard user={user} />}

        </div>
      </div>
    </div>
  );
}