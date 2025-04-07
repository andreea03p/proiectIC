import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import ResetPassword from './pages/ResetPassword.jsx';
import Notifications from './pages/Notifications.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";


axios.defaults.baseURL = 'http://localhost:5050'
axios.defaults.withCredentials = true

function App() {
  const location = useLocation();
  const showNavbar = location.pathname === './pages/Profile';

  return (
    <>
       {showNavbar && <Navbar />}
       <Toaster position ='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-pass" element={<ResetPassword />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  )
}

export default App
