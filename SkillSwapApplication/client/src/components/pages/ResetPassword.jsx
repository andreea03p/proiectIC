import React, { useState } from 'react';
import { resetPassword } from '../../services/api';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword({ email });
      alert(response.data.message);
      // Possibly redirect or show further instructions
    } catch (error) {
      alert(error.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Instructions</button>
      </form>
    </div>
  );
}

export default ResetPassword;
