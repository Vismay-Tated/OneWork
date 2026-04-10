import { Link } from 'react-router-dom';

export default function Hero() {
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
    </header>
  );
}