import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import background from '../assets/background.jpg';

const HomePage = () => {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1>Welcome to our Website</h1>
          <p>
            The easiest way to exchange skills. Connect with people, share your
            expertise, and trade knowledge effortlessly!
          </p>
        </div>
        <div className="button-container">
          <Link to="/register" className="link-button">
            Join us!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
