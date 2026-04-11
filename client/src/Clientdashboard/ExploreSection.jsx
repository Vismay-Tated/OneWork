import { useState } from 'react';

export default function ExploreSection() {
  const [cat, setCat] = useState('All');
  const categories = ['All', 'Web Dev', 'Mobile Apps', 'Design', 'Marketing', 'Agencies'];

  const items = [
    { id: 1, title: 'Build SaaS Dashboard', owner: 'Google Cloud', type: 'Client', cat: 'Web Dev', price: '$2400' },
    { id: 2, title: 'Brand Identity', owner: 'Creative Hub', type: 'Agency', cat: 'Design', price: '$500' },
    { id: 3, title: 'CodeMasters Agency', owner: 'CodeMasters', type: 'Agency Roster', cat: 'Agencies', price: 'Partner' }
  ];

  const filtered = cat === 'All' ? items : items.filter(i => i.cat === cat);

  return (
    <div className="p-explore">
      <header className="p-explore-header">
        <h1>Explore Opportunities</h1>
        <div className="p-cat-bar">
          {categories.map(c => (
            <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </header>

      <div className="p-grid">
        {filtered.map(item => (
          <div key={item.id} className="p-card">
            <div className="p-card-top">
              <span className={`p-badge ${item.type === 'Agency' ? 'agency' : 'client'}`}>
                {item.type}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>Posted by {item.owner}</p>
            <div className="p-card-footer">
              <strong>{item.price}</strong>
              <button className="p-action-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}