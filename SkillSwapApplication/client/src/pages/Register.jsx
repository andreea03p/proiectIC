import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, address, password, confirmPassword } = data;
    try {
      const response = await axios.post('/register', {
        name,
        email,
        address,
        password,
        confirmPassword,
      });
      const resData = response.data;
      if (resData.error) {
        toast.error(resData.error);
      } else {
        setData({
          name: '',
          email: '',
          address: '',
          password: '',
          confirmPassword: '',
        });
        toast.success('Registration successful. Welcome :)');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Sign Up</h2>
        <form onSubmit={registerUser}>
          <label>Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Address</label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="register-footer">
          <button
            className="footer-btn"
            onClick={() => navigate("/login")}
          >
            Already user? Login!
            </button>
        </div>
      </div>
    </div>
  );
}
