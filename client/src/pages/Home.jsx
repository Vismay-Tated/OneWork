import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to OneWork</h1>
      <p>The unified ecosystem for Clients, Freelancers, and Agencies.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}