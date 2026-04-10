// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send login request to the backend
//       const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      
//       // The backend sends back a token and user data. Save it to the browser!
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));

//       alert('Logged in successfully!');
//       navigate('/dashboard'); // Take them to the workspace

//     } catch (error) {
//       alert(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
//       <h2>Login to OneWork</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//         <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Login</button>
//       </form>
//       <p style={{ marginTop: '15px' }}>
//         Need an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// }

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // We will create this next!

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Adds a cool loading effect

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when they start typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // The backend sends back a token and user data. Save it to the browser!
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert('Logged in successfully!');
      navigate('/dashboard'); // Take them to the workspace

    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE: Branding Panel */}
      <div className="login-branding">
        <div className="branding-content">
          <h1>Welcome back to OneWork.</h1>
          <p>Orchestrate projects, discover talent, and scale your digital workforce.</p>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="login-form-wrapper">
        <div className="login-form-box">
          <h2>Sign In</h2>
          <p className="subtitle">Enter your details to access your dashboard.</p>

          {/* Show red error box if login fails */}
          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="hello@onework.com" 
                value={formData.email}
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="register-prompt">
            Don't have an account yet? <Link to="/register">Create one here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}