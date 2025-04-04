import React, { useState } from 'react';
import { registerUser } from '../../services/api';
import './SignUp.css';  // Ensure the path is correct based on your folder structure

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the register endpoint
      const response = await registerUser(formData);
      alert(response.data.message); 
      // On success, you might redirect to /login
    } catch (error) {
      alert(error.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;
