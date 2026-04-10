import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  // State to hold what the user types into the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Client' // Default role
  });

  const navigate = useNavigate(); // Used to redirect the user after success

  // Updates the state when the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sends the data to your Node.js backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Frontend is trying to send:", formData);
    try {
      // This is the bridge! Sending a POST request to your backend
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      alert(response.data.message); // Will pop up "User registered successfully!"
      navigate('/login'); // Instantly redirect them to the login page

    } catch (error) {
      // If the backend sends an error (like "User already exists")
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Join OneWork</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <input 
          type="text" name="name" placeholder="Full Name" 
          onChange={handleChange} required 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          onChange={handleChange} required 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <input 
          type="password" name="password" placeholder="Password" 
          onChange={handleChange} required 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        
        <select 
          name="role" value={formData.role} 
          onChange={handleChange} required 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="Client">I am a Client hiring talent</option>
          <option value="Freelancer">I am a Freelancer looking for gigs</option>
          <option value="Agency">I am an Agency building a team</option>
        </select>

        <button type="submit" style={{ padding: '12px', background: '#4A90E2', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
          Create Account
        </button>
      </form>

      <p style={{ marginTop: '20px', color: '#555' }}>
        Already have an account? <Link to="/login" style={{ color: '#4A90E2', fontWeight: 'bold', textDecoration: 'none' }}>Login here</Link>
      </p>
    </div>
  );
}