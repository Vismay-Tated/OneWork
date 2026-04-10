// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Register() {
//   // State to hold what the user types into the form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'Client' // Default role
//   });

//   const navigate = useNavigate(); // Used to redirect the user after success

//   // Updates the state when the user types
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Sends the data to your Node.js backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("🚀 Frontend is trying to send:", formData);
//     try {
//       // This is the bridge! Sending a POST request to your backend
//       const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
//       alert(response.data.message); // Will pop up "User registered successfully!"
//       navigate('/login'); // Instantly redirect them to the login page

//     } catch (error) {
//       // If the backend sends an error (like "User already exists")
//       alert(error.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
//       <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Join OneWork</h2>
      
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
//         <input 
//           type="text" name="name" placeholder="Full Name" 
//           onChange={handleChange} required 
//           style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
//         />
//         <input 
//           type="email" name="email" placeholder="Email Address" 
//           onChange={handleChange} required 
//           style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
//         />
//         <input 
//           type="password" name="password" placeholder="Password" 
//           onChange={handleChange} required 
//           style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
//         />
        
//         <select 
//           name="role" value={formData.role} 
//           onChange={handleChange} required 
//           style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
//         >
//           <option value="Client">I am a Client hiring talent</option>
//           <option value="Freelancer">I am a Freelancer looking for gigs</option>
//           <option value="Agency">I am an Agency building a team</option>
//         </select>

//         <button type="submit" style={{ padding: '12px', background: '#4A90E2', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
//           Create Account
//         </button>
//       </form>

//       <p style={{ marginTop: '20px', color: '#555' }}>
//         Already have an account? <Link to="/login" style={{ color: '#4A90E2', fontWeight: 'bold', textDecoration: 'none' }}>Login here</Link>
//       </p>
//     </div>
//   );
// }

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // New CSS file

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Client'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* LEFT SIDE: The Form (Flipped) */}
      <div className="signup-form-wrapper">
        <div className="signup-form-box">
          <h2>Create Account</h2>
          <p className="subtitle">Join the OneWork ecosystem today.</p>

          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="name@company.com" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create a strong password" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>I am a...</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="Client">Client hiring talent</option>
                <option value="Freelancer">Freelancer looking for work</option>
                <option value="Agency">Agency managing teams</option>
              </select>
            </div>

            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Get Started'}
            </button>
          </form>

          <p className="login-prompt">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Branding/Photo Panel (Flipped) */}
      <div className="signup-branding">
        <div className="branding-content">
          <div className="badge">New Era of Work</div>
          <h1>Empowering the next generation of teams.</h1>
          <p>Whether you're a solo talent or a growing agency, OneWork provides the tools you need to succeed.</p>
        </div>
      </div>
    </div>
  );
}