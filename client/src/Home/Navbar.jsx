import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">OneWork</Link>
      <div className="nav-links">
        <Link to="/login">Sign In</Link>
        <Link to="/register" className="btn-primary">Create Free Account</Link>
      </div>
    </nav>
  );
}