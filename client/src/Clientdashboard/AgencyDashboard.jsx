// import { useState, useEffect } from 'react';
// import ClientNavbar from './ClientNavbar'; // Reusing the elite navbar
// import './AgencyDashboard.css';

// export default function AgencyDashboard() {
//   const [activeTab, setActiveTab] = useState('marketplace');
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

//   // Mock Data for the Agency Roster
//   const [roster, setRoster] = useState([
//     { id: 1, name: 'Aman K.', role: 'Frontend Dev', status: 'Active on Project' },
//     { id: 2, name: 'Sneha V.', role: 'UI/UX Designer', status: 'Available' }
//   ]);

//   const openGigs = [
//     { id: 101, title: 'Enterprise CRM Overhaul', budget: '$12,000', client: 'TechCorp', tag: 'High Budget' },
//     { id: 102, title: 'Bank Security Audit', budget: '$8,500', client: 'FinSafe', tag: 'Urgent' }
//   ];

//   return (
//     <div className="agency-wrapper">
//       <ClientNavbar user={user} />

//       <main className="agency-content">
//         <header className="agency-header">
//           <div className="agency-identity">
//             <div className="agency-logo-sq">A</div>
//             <div>
//               <h1>{user?.name || 'Agency Console'}</h1>
//               <p>Agency Partner • Verified Status</p>
//             </div>
//           </div>
//           <div className="agency-actions">
//             <button className="btn-outline">Edit Agency Portfolio</button>
//             <button className="btn-primary" onClick={() => setActiveTab('scout')}>Scout Talent</button>
//           </div>
//         </header>

//         {/* Tab Navigation */}
//         <div className="agency-tabs">
//           <button className={activeTab === 'marketplace' ? 'active' : ''} onClick={() => setActiveTab('marketplace')}>Marketplace Gigs</button>
//           <button className={activeTab === 'roster' ? 'active' : ''} onClick={() => setActiveTab('roster')}>Team Roster ({roster.length})</button>
//           <button className={activeTab === 'scout' ? 'active' : ''} onClick={() => setActiveTab('scout')}>Scout Freelancers</button>
//         </div>

//         {/* --- VIEW 1: MARKETPLACE (BIDDING) --- */}
//         {activeTab === 'marketplace' && (
//           <div className="view-container fade-in">
//             <div className="section-title">
//               <h3>High-Value Opportunities</h3>
//               <span>Agencies get priority bidding on these projects.</span>
//             </div>
//             <div className="gig-list">
//               {openGigs.map(gig => (
//                 <div key={gig.id} className="agency-gig-card">
//                   <div className="gig-info">
//                     <span className="priority-badge">{gig.tag}</span>
//                     <h4>{gig.title}</h4>
//                     <p>Posted by {gig.client} • <strong>{gig.budget}</strong></p>
//                   </div>
//                   <button className="bid-btn">Submit Agency Bid</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* --- VIEW 2: ROSTER MANAGEMENT --- */}
//         {activeTab === 'roster' && (
//           <div className="view-container fade-in">
//             <div className="roster-table-container">
//               <table className="roster-table">
//                 <thead>
//                   <tr>
//                     <th>Member Name</th>
//                     <th>Specialization</th>
//                     <th>Current Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {roster.map(member => (
//                     <tr key={member.id}>
//                       <td><strong>{member.name}</strong></td>
//                       <td>{member.role}</td>
//                       <td><span className={`status-dot ${member.status.includes('Active') ? 'busy' : 'free'}`}></span> {member.status}</td>
//                       <td><button className="text-btn">Manage</button></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* --- VIEW 3: SCOUTING (RECRUITMENT) --- */}
//         {activeTab === 'scout' && (
//           <div className="view-container fade-in">
//             <div className="scout-header">
//               <h3>Direct Recruitment</h3>
//               <p>Invite top freelancers to join your agency umbrella.</p>
//             </div>
//             <div className="scout-grid">
//               <div className="scout-card">
//                 <div className="scout-avatar">JD</div>
//                 <h4>John Doe</h4>
//                 <p>React Expert</p>
//                 <button className="invite-btn" onClick={() => alert("Invite Sent!")}>Invite to Roster</button>
//               </div>
//               {/* Add more scout cards here */}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientNavbar from './ClientNavbar'; // We use the same Elite Navbar component
import './AgencyDashboard.css';

export default function AgencyDashboard() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (!data) navigate('/login');
    else setUser(JSON.parse(data));
  }, [navigate]);

  // Mock Data for Roster & Gigs
  const roster = [
    { id: 1, name: 'Aman K.', role: 'Senior React Dev', status: 'Available', email: 'aman@dev.com' },
    { id: 2, name: 'Sneha V.', role: 'UI/UX Designer', status: 'On Project', email: 'sneha@design.com' }
  ];

  const highValueGigs = [
    { id: 101, title: 'Fortune 500 Fintech App', client: 'Bank of India', budget: '$15,000+', deadline: '3 Months' },
    { id: 102, title: 'E-Learning Platform Scale', client: 'EduTech Inc', budget: '$9,000', deadline: '2 Months' }
  ];

  if (!user) return <div className="loader">Initializing Agency Console...</div>;

  return (
    <div className="agency-master">
      {/* 1. Reuse the Elite Navbar with Logo, Community, Inbox, and Dropdown */}
      <ClientNavbar user={user} />

      <main className="agency-main-content">
        {/* Agency Header Section */}
        <header className="agency-profile-header">
          <div className="agency-brand-info">
            <div className="agency-logo-box">{user.name[0]}</div>
            <div>
              <h1>{user.name} Management Console</h1>
              <p className="agency-subtitle">Agency ID: #AG-9920 • Verified Partner</p>
            </div>
          </div>
          <div className="header-stats">
            <div className="mini-stat"><span>Team Size</span> <strong>{roster.length}</strong></div>
            <div className="mini-stat"><span>Active Bids</span> <strong>4</strong></div>
          </div>
        </header>

        {/* Professional Navigation Tabs */}
        <div className="agency-nav-tabs">
          <button className={activeTab === 'marketplace' ? 'active' : ''} onClick={() => setActiveTab('marketplace')}>
            💼 Opportunity Feed
          </button>
          <button className={activeTab === 'roster' ? 'active' : ''} onClick={() => setActiveTab('roster')}>
            👥 My Team Roster
          </button>
          <button className={activeTab === 'scout' ? 'active' : ''} onClick={() => setActiveTab('scout')}>
            🔭 Scout Talent
          </button>
        </div>

        {/* --- DYNAMIC VIEWS --- */}

        {/* VIEW 1: MARKETPLACE GIGS */}
        {activeTab === 'marketplace' && (
          <div className="agency-view fade-in">
            <div className="view-header">
              <h3>Enterprise Opportunities</h3>
              <p>Apply for projects curated for agency-level workflows.</p>
            </div>
            <div className="agency-gig-grid">
              {highValueGigs.map(gig => (
                <div key={gig.id} className="agency-gig-card-v2">
                  <div className="gig-body">
                    <span className="budget-tag">{gig.budget}</span>
                    <h4>{gig.title}</h4>
                    <p>Client: {gig.client} • Timeline: {gig.deadline}</p>
                  </div>
                  <button className="agency-apply-btn">Submit Proposal</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: ROSTER MANAGEMENT */}
        {activeTab === 'roster' && (
          <div className="agency-view fade-in">
            <div className="roster-card">
              <table className="agency-table">
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Specialization</th>
                    <th>Availability</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map(member => (
                    <tr key={member.id}>
                      <td><strong>{member.name}</strong></td>
                      <td>{member.role}</td>
                      <td>
                        <span className={`status-pill ${member.status === 'Available' ? 'green' : 'orange'}`}>
                          {member.status}
                        </span>
                      </td>
                      <td><button className="table-action-btn">Manage</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="add-roster-btn">+ Add Team Member Manually</button>
            </div>
          </div>
        )}

        {/* VIEW 3: SCOUTING (Recruitment) */}
        {activeTab === 'scout' && (
          <div className="agency-view fade-in">
            <div className="view-header">
              <h3>Scout Global Talent</h3>
              <p>Recruit top-rated freelancers directly into your agency.</p>
            </div>
            <div className="scout-talent-grid">
              {/* This would be a dynamic list of freelancers */}
              <div className="scout-card-v2">
                <div className="scout-avatar-circle">RJ</div>
                <h4>Rohan J.</h4>
                <p>MERN Stack Expert</p>
                <div className="scout-actions">
                  <button className="secondary-btn">View Portfolio</button>
                  <button className="primary-btn-sm" onClick={() => alert("Roster Invite Sent!")}>Invite to Roster</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}