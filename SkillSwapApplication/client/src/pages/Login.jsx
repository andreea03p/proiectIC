import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: responseData } = await axios.post("/login", {
        email,
        password,
      });
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          email: "",
          password: "",
        });
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("login failed, please try again");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login-footer">
          <button
            className="footer-btn"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
          <button
            className="footer-btn"
            onClick={() => navigate("/reset-pass")}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
