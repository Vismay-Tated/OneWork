import { useState } from 'react';
// import ClientDashboard from './Hero.jsx';

export default function ClientDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'create', 'inbox'

  // Mock Data for the Hackathon Demo
  const activeProjects = [
    { id: 1, title: 'MERN E-Commerce Backend', status: 'In Progress', assigned: 'Vatsal T.' },
    { id: 2, title: 'Company Rebranding & Logo', status: 'In Review', assigned: 'DesignStudio Agency' }
  ];

  const proposals = [
    { id: 101, gig: 'React Landing Page', freelancer: 'Alex WebDev', bid: '$400', cover: 'I have 5 years of experience building fast Vite+React sites.' },
    { id: 102, gig: 'React Landing Page', freelancer: 'Charmi Designs', bid: '$350', cover: 'I can build this and include a custom Figma mockup.' }
  ];

  const handlePostGig = (e) => {
    e.preventDefault();
    alert("Gig successfully posted to the OneWork Network! Freelancers will be notified instantly.");
    setActiveTab('overview'); // Send them back to the main dashboard
  };

  return (
    <div>
      {/* HEADER & TABS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#0f172a', margin: 0 }}>Client Command Center</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setActiveTab('overview')} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: activeTab === 'overview' ? '#e2e8f0' : 'transparent', fontWeight: 'bold', color: '#0f172a' }}>Overview</button>
          <button onClick={() => setActiveTab('inbox')} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: activeTab === 'inbox' ? '#e2e8f0' : 'transparent', fontWeight: 'bold', color: '#0f172a' }}>Inbox ({proposals.length})</button>
          <button onClick={() => setActiveTab('create')} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>+ Post Gig</button>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

      {/* VIEW 1: OVERVIEW (Kanban-style Projects) */}
      {activeTab === 'overview' && (
        <div>
          <h3 style={{ color: '#475569', marginBottom: '15px' }}>Active Projects (Kanban)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {activeProjects.map(project => (
              <div key={project.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', background: project.status === 'In Review' ? '#fef08a' : '#dcfce7', color: project.status === 'In Review' ? '#854d0e' : '#166534', padding: '4px 10px', borderRadius: '12px' }}>
                    {project.status}
                  </span>
                </div>
                <h4 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '18px' }}>{project.title}</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Assigned to: <strong>{project.assigned}</strong></p>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <button style={{ flex: 1, padding: '8px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>View Files</button>
                  <button style={{ flex: 1, padding: '8px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>Message</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: PROPOSAL INBOX */}
      {activeTab === 'inbox' && (
        <div>
          <h3 style={{ color: '#475569', marginBottom: '15px' }}>Incoming Proposals</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {proposals.map(prop => (
              <div key={prop.id} style={{ background: 'white', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 5px 0', color: '#0f172a' }}>{prop.freelancer}</h4>
                  <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#64748b' }}>Applying for: <strong>{prop.gig}</strong> | Bid: <span style={{ color: '#16a34a', fontWeight: 'bold' }}>{prop.bid}</span></p>
                  <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', color: '#475569' }}>"{prop.cover}"</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '20px' }}>
                  <button className="btn-primary" style={{ backgroundColor: '#16a34a', border: 'none', padding: '8px 20px', cursor: 'pointer' }}>Accept Bid</button>
                  <button style={{ background: 'white', border: '1px solid #cbd5e1', color: '#64748b', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer' }}>Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: GIG CREATION WIZARD */}
      {activeTab === 'create' && (
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#0f172a', marginTop: 0 }}>Create a New Project Gig</h3>
          <form onSubmit={handlePostGig} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Project Title</label>
              <input type="text" placeholder="e.g., Need a 5-page React Website" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px' }} />
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Budget ($)</label>
                <input type="number" placeholder="500" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Category</label>
                <select style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px', background: 'white' }}>
                  <option>Web Development</option>
                  <option>Video Editing</option>
                  <option>Graphic Design</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>Detailed Description</label>
              <textarea placeholder="Describe exactly what you need built..." required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '16px', minHeight: '120px', fontFamily: 'inherit' }}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ border: 'none', padding: '14px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
              Deploy to Network
            </button>
          </form>
        </div>
      )}

    </div>
  );
}