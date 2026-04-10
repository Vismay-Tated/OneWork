import { Link } from 'react-router-dom';

export default function Hero() {
  // Styles for the category pills
  const pillStyle = {
    background: 'white',
    border: '1px solid #e2e8f0',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#475569',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    transition: 'all 0.2s'
  };

  return (
    <header className="hero">
      <h1>End the Chaos of Fragmented Workflows.</h1>
      <p>
        OneWork is the ultimate Modular Commons. A unified digital ecosystem designed 
        to solve the coordination problem between enterprise clients, independent freelancers, 
        and scaling digital agencies.
      </p>
      
      <div className="hero-buttons">
        <Link to="/register" className="btn-solid">Start Building</Link>
        <Link to="/login" className="btn-outline">Access Workspace</Link>
      </div>

      {/* NEW CATEGORY SECTION */}
      <div style={{ marginTop: '50px' }}>
        <p style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '15px' }}>
          Discover Top Talent Networks
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={pillStyle}>💻 Web Development</div>
          <div style={pillStyle}>🎬 Video Editing</div>
          <div style={pillStyle}>🎨 Graphic Design</div>
          <div style={pillStyle}>📱 UI/UX Design</div>
          <div style={pillStyle}>📈 Digital Marketing</div>
          <div style={pillStyle}>✍️ Copywriting</div>
        </div>
      </div>
    </header>
  );
}