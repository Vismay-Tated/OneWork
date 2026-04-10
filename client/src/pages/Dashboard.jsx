import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // When the dashboard loads, check who is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      // If no one is logged in, kick them back to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>OneWork Workspace</h2>
        <button onClick={handleLogout} style={{ padding: '5px 15px', cursor: 'pointer' }}>Logout</button>
      </header>
      
      <hr />

      {/* --- DYNAMIC UI MAGIC STARTS HERE --- */}
      <h3>Welcome, {user.name}! ({user.role})</h3>

      {user.role === 'Client' && (
        <div style={{ background: '#f0f8ff', padding: '15px', borderRadius: '8px' }}>
          <h4>Client Control Center</h4>
          <p>Here you can post new gigs and review agency proposals.</p>
          <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none' }}>+ Post a New Gig</button>
        </div>
      )}

      {user.role === 'Freelancer' && (
        <div style={{ background: '#e6ffe6', padding: '15px', borderRadius: '8px' }}>
          <h4>Freelancer Job Board</h4>
          <p>Here are the latest open gigs from clients and agencies.</p>
          <button style={{ padding: '10px', background: 'green', color: 'white', border: 'none' }}>View Open Gigs</button>
        </div>
      )}

      {user.role === 'Agency' && (
        <div style={{ background: '#fff0f5', padding: '15px', borderRadius: '8px' }}>
          <h4>Agency Roster</h4>
          <p>Manage your affiliated freelancers and bid on large client projects.</p>
          <button style={{ padding: '10px', background: 'purple', color: 'white', border: 'none' }}>View Talent Pool</button>
        </div>
      )}
    </div>
  );
}