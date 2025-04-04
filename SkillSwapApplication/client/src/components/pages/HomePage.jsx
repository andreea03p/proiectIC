import React from 'react';
import './HomePage.css';
import './SignUp';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import background from '../../assets/background.jpg';

const HomePage = () => {
  return (
    <div className="homepage-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="text-container">
        <h1>Welcome to our Website</h1>
        <p>The easiest way to exchange skills. Connect with people, share your expertise, and trade knowledge effortlessly! 
        </p>
      </div>
      <div className="button-container">
        <Link to="/signup" className="link-button">
          Join us!
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
