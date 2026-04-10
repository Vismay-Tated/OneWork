import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [role, setRole] = useState('Freelancer');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration logic coming soon for role: ${role}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Join OneWork</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="Client">I am a Client hiring talent</option>
          <option value="Freelancer">I am a Freelancer looking for gigs</option>
          <option value="Agency">I am an Agency building a team</option>
        </select>

        <button type="submit">Create Account</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}