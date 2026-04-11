import { useState, useEffect } from 'react';
import PremiumNavbar from './PremiumNavbar';
import ExploreSection from './ExploreSection';
import './FreelancerDashboard.css';

export default function FreelancerDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) setUser(JSON.parse(data));
  }, []);

  if (!user) return <div className="p-loading">Syncing Workspace...</div>;

  return (
    <div className="p-dashboard-root">
      {/* FULL SCREEN NAVBAR */}
      <PremiumNavbar user={user} />

      {/* DYNAMIC CONTENT AREA */}
      <main className="p-main-content">
        <ExploreSection />
      </main>
    </div>
  );
}