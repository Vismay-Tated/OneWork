// import { useState } from 'react';
// // import ClientDashboard from './Hero.jsx';

// export default function ClientDashboard({ user }) {
//   const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'create', 'inbox'

//   // Mock Data for the Hackathon Demo
//   const activeProjects = [
//     { id: 1, title: 'MERN E-Commerce Backend', status: 'In Progress', assigned: 'Vatsal T.' },
//     { id: 2, title: 'Company Rebranding & Logo', status: 'In Review', assigned: 'DesignStudio Agency' }
//   ];

//   const proposals = [
//     { id: 101, gig: 'React Landing Page', freelancer: 'Alex WebDev', bid: '$400', cover: 'I have 5 years of experience building fast Vite+React sites.' },
//     { id: 102, gig: 'React Landing Page', freelancer: 'Charmi Designs', bid: '$350', cover: 'I can build this and include a custom Figma mockup.' }
//   ];

//   const handlePostGig = (e) => {
//     e.preventDefault();
//     alert("Gig successfully posted to the OneWork Network! Freelancers will be notified instantly.");
//     setActiveTab('overview'); // Send them back to the main dashboard
//   };

//   return (
//     <div>
//       {/* HEADER & TABS */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//         <h2 style={{ color: '#0f172a', margin: 0 }}>Client Command Center</h2>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setActiveTab('overview')} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: activeTab === 'overview' ? '#e2e8f0' : 'transparent', fontWeight: 'bold', color: '#0f172a' }}>Overview</button>
//           <button onClick={() => setActiveTab('inbox')} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: activeTab === 'inbox' ? '#e2e8f0' : 'transparent', fontWeight: 'bold', color: '#0f172a' }}>Inbox ({proposals.length})</button>
//           <button onClick={() => setActiveTab('create')} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>+ Post Gig</button>
//         </div>
//       </div>
//       <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

//       {/* VIEW 1: OVERVIEW (Kanban-style Projects) */}
//       {activeTab === 'overview' && (
//         <div>
//           <h3 style={{ color: '#475569', marginBottom: '15px' }}>Active Projects (Kanban)</h3>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//             {activeProjects.map(project => (
//               <div key={project.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
//                   <span style={{ fontSize: '12px', fontWeight: 'bold', background: project.status === 'In Review' ? '#fef08a' : '#dcfce7', color: project.status === 'In Review' ? '#854d0e' : '#166534', padding: '4px 10px', borderRadius: '12px' }}>
//                     {project.status}
//                   </span>
//                 </div>
//                 <h4 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '18px' }}>{project.title}</h4>
//                 <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Assigned to: <strong>{project.assigned}</strong></p>
//                 <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
//                   <button style={{ flex: 1, padding: '8px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>View Files</button>
//                   <button style={{ flex: 1, padding: '8px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>Message</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* VIEW 2: PROPOSAL INBOX */}
//       {activeTab === 'inbox' && (
//         <div>
//           <h3 style={{ color: '#475569', marginBottom: '15px' }}>Incoming Proposals</h3>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//             {proposals.map(prop => (
//               <div key={prop.id} style={{ background: 'white', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <div style={{ flex: 1 }}>
//                   <h4 style={{ margin: '0 0 5px 0', color: '#0f172a' }}>{prop.freelancer}</h4>
//                   <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#64748b' }}>Applying for: <strong>{prop.gig}</strong> | Bid: <span style={{ color: '#16a34a', fontWeight: 'bold' }}>{prop.bid}</span></p>
//                   <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', color: '#475569' }}>"{prop.cover}"</p>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '20px' }}>
//                   <button className="btn-primary" style={{ backgroundColor: '#16a34a', border: 'none', padding: '8px 20px', cursor: 'pointer' }}>Accept Bid</button>
//                   <button style={{ background: 'white', border: '1px solid #cbd5e1', color: '#64748b', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer' }}>Decline</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* VIEW 3: GIG CREATION WIZARD */}
//       {activeTab === 'create' && (
//         <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
//           <h3 style={{ color: '#0f172a', marginTop: 0 }}>Create a New Project Gig</h3>
//           <form onSubmit={handlePostGig} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
//             <div>
//               <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Project Title</label>
//               <input type="text" placeholder="e.g., Need a 5-page React Website" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px' }} />
//             </div>

//             <div style={{ display: 'flex', gap: '20px' }}>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Budget ($)</label>
//                 <input type="number" placeholder="500" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px' }} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Category</label>
//                 <select style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px', background: 'white' }}>
//                   <option>Web Development</option>
//                   <option>Video Editing</option>
//                   <option>Graphic Design</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Detailed Description</label>
//               <textarea placeholder="Describe exactly what you need built..." required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px', minHeight: '120px', fontFamily: 'inherit' }}></textarea>
//             </div>

//             <button type="submit" className="btn-primary" style={{ border: 'none', padding: '14px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
//               Deploy to Network
//             </button>
//           </form>
//         </div>
//       )}

//     </div>
//   );
// }


// import { useState } from 'react';
// import './ClientDashboard.css';

// export default function ClientDashboard({ user }) {
//   const [activeTab, setActiveTab] = useState('overview');

//   const stats = [
//     { label: 'Total Spend', value: '$4,250', change: '+12%', color: '#10b981' },
//     { label: 'Active Gigs', value: '3', change: 'Stable', color: '#6366f1' },
//     { label: 'New Proposals', value: '8', change: 'Action Required', color: '#f59e0b' },
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* SIDEBAR */}
//       <aside className="dashboard-sidebar">
//         <div className="logo-section">OneWork<span>.</span></div>
//         <nav className="sidebar-nav">
//           <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
//             <i className="icon">📊</i> Overview
//           </button>
//           <button className={activeTab === 'discovery' ? 'active' : ''} onClick={() => setActiveTab('discovery')}>
//             <i className="icon">🔍</i> Discovery
//           </button>
//           <button className={activeTab === 'inbox' ? 'active' : ''} onClick={() => setActiveTab('inbox')}>
//             <i className="icon">📩</i> Messages
//           </button>
//           <button className={activeTab === 'create' ? 'active' : ''} onClick={() => setActiveTab('create')}>
//             <i className="icon">➕</i> Post a Gig
//           </button>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="dashboard-main">
//         <header className="main-header">
//           <div className="header-info">
//             <h1>Client Command Center</h1>
//             <p>Welcome back, {user?.name || 'Project Manager'}</p>
//           </div>
//           <button className="post-btn" onClick={() => setActiveTab('create')}>Post New Project</button>
//         </header>

//         {/* STATS TICKER */}
//         <section className="stats-grid">
//           {stats.map((stat, i) => (
//             <div key={i} className="stat-card">
//               <span className="stat-label">{stat.label}</span>
//               <div className="stat-value-row">
//                 <span className="stat-value">{stat.value}</span>
//                 <span className="stat-change" style={{ color: stat.color }}>{stat.change}</span>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* DYNAMIC CONTENT AREA */}
//         <section className="content-area">
//           {activeTab === 'overview' && (
//             <div className="glass-panel">
//               <div className="panel-header">
//                 <h3>Active Projects</h3>
//                 <button className="text-link">View All</button>
//               </div>
//               <table className="custom-table">
//                 <thead>
//                   <tr>
//                     <th>Project Name</th>
//                     <th>Status</th>
//                     <th>Assigned To</th>
//                     <th>Progress</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>MERN E-Commerce</td>
//                     <td><span className="status-tag ongoing">In Progress</span></td>
//                     <td>Vatsal T.</td>
//                     <td><div className="progress-bar"><div className="fill" style={{width: '70%'}}></div></div></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//           {/* Other tabs go here... */}
//         </section>
//       </main>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientDashboard.css';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 1. Initialize User and Security
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  // 2. Mock Data for Categories & Talent
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Design', 'Marketing', 'Video Editing'];

  const talentPool = [
    { id: 1, name: 'Nexus Digital', type: 'Agency', cat: 'Web Development', rating: 4.9, bio: 'Enterprise-grade MERN solutions.' },
    { id: 2, name: 'Ishita Designs', type: 'Freelancer', cat: 'Design', rating: 5.0, bio: 'Minimalist UI/UX & Branding.' },
    { id: 3, name: 'Vortex Studio', type: 'Agency', cat: 'Video Editing', rating: 4.8, bio: 'High-end corporate motion graphics.' },
    { id: 4, name: 'Rahul K.', type: 'Freelancer', cat: 'Web Development', rating: 4.7, bio: 'React & Tailwind specialist.' },
  ];

  // 3. Filtering Logic
  const filteredTalent = activeTab === 'All' 
    ? talentPool 
    : talentPool.filter(t => t.cat === activeTab);

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return <div className="loader">Loading Workspace...</div>;

  return (
    <div className="dashboard-master">
      
      {/* --- ELITE NAVBAR --- */}
      <nav className="workspace-nav">
        <div className="nav-left">
          <div className="logo">OneWork<span>.</span></div>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <button className="nav-item">
              <span className="nav-icon">👥</span> Community
            </button>
            <button className="nav-item">
              <span className="nav-icon">📥</span> Inbox
              <div className="badge-dot"></div>
            </button>
          </div>

          <div className="profile-container">
            {/* Gemini-style Circular Avatar */}
            <div 
              className="avatar-circle" 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              {user.name?.[0].toUpperCase()}
            </div>

            {/* Profile Dropdown Logic */}
            {isProfileOpen && (
              <div className="avatar-dropdown">
                <div className="dropdown-user-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <hr />
                <button className="dropdown-link">👤 Profile Details</button>
                <button className="dropdown-link">📄 Gigs Posted</button>
                <button className="dropdown-link">⚙️ Settings</button>
                <hr />
                <button className="dropdown-link signout" onClick={handleSignOut}>
                  🚪 Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --- MAIN EXPLORE SECTION --- */}
      <main className="explore-container">
        <header className="explore-header">
          <h1>Explore Services</h1>
          <p>Find vetted {activeTab === 'All' ? 'talents' : activeTab} to scale your next project.</p>
        </header>

        {/* Categories Horizontal Selector */}
        <div className="category-scroll-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-pill ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Discovery Grid */}
        <div className="talent-grid-display">
          {filteredTalent.map(talent => (
            <div key={talent.id} className="talent-card-v3">
              <div className="card-header">
                <span className={`role-label ${talent.type.toLowerCase()}`}>{talent.type}</span>
                <span className="rating-tag">⭐ {talent.rating}</span>
              </div>
              <h3>{talent.name}</h3>
              <p className="talent-bio">{talent.bio}</p>
              <div className="card-footer-v3">
                <span className="cat-text">{talent.cat}</span>
                <button className="portfolio-btn-elite">View Portfolio</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}