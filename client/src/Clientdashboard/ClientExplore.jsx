import { useState } from 'react';

export default function ClientExplore() {
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Design', 'App Dev', 'Marketing', 'Video'];

  const mockTalent = [
    { id: 1, name: "Nexus Agency", type: "Agency", service: "Web Development", rate: "$1000+", rating: 4.9 },
    { id: 2, name: "Arjun Sharma", type: "Freelancer", service: "Design", rate: "$45/hr", rating: 5.0 },
    { id: 3, name: "CodeCraft Ltd", type: "Agency", service: "App Dev", rate: "$5000+", rating: 4.7 }
  ];

  const filtered = category === 'All' ? mockTalent : mockTalent.filter(t => t.service === category);

  return (
    <div className="explore-view">
      <header className="explore-header">
        <h1>Explore Services</h1>
        <p>Connect with the best agencies and freelancers in the industry.</p>
        
        {/* Category Filter */}
        <div className="category-scroll">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-pill ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Discovery Grid */}
      <div className="talent-grid">
        {filtered.map(item => (
          <div key={item.id} className="talent-card-premium">
            <div className="card-badge">{item.type}</div>
            <h3>{item.name}</h3>
            <p className="specialty">{item.service}</p>
            <div className="card-footer">
              <span className="price">{item.rate}</span>
              <button className="portfolio-btn">View Portfolio</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}