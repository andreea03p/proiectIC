import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "./Profile.css";
import defaultAvatar from "../assets/avatar.png";
import cream from '../assets/cream.jpg';

function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    jobTitle: '',
    skills: '',
    avatar: ''
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/user-profile', { withCredentials: true })
      .then(response => {
        console.log("User loaded:", response.data); // 👉 verifică în consolă
        setUser(response.data);
      })
      .catch(err => {
        toast.error("Error loading profile");
        console.error(err);
      });
  }, []);
  

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = () => {
    axios.put('http://localhost:5050/update-profile', user, { withCredentials: true })
      .then(response => {
        toast.success("Profile updated!");
        setIsEditing(false);
      })
      .catch(err => {
        toast.error("Error at updating your profile");
        console.error(err);
      });
  };

  return (
    <div className="homepage-container" style={{ backgroundImage: `url(${cream})` }}>
      <div className="overlay"></div>
      <Navbar />
      <div className="content">
        <div className="profile-page-container">
          <div className="profile-pic-container">
            <img src={user.avatar || defaultAvatar} alt="avatar" />
            <div className="user-default-profile-avatar">{user.name[0]}</div>
          </div>

          <div className="profile-info-container">
            <div className="user-profile-name">
              {isEditing ? (
                <input type="text" name="name" value={user.name} onChange={handleChange} />
              ) : (
                <h1>{user.name}</h1>
              )}
            </div>
            <div>
              <b>Email:</b> {isEditing ? (
                <input type="email" name="email" value={user.email} onChange={handleChange} />
              ) : (
                user.email
              )}
            </div>
            <div>
              <b>Phone:</b> {isEditing ? (
                <input type="text" name="phone" value={user.phone} onChange={handleChange} />
              ) : (
                user.phone
              )}
            </div>
            <div>
              <b>Address:</b> {isEditing ? (
                <input type="text" name="address" value={user.address} onChange={handleChange} />
              ) : (
                user.address
              )}
            </div>
            <div>
              <b>About:</b> {isEditing ? (
                <textarea name="about" value={user.about} onChange={handleChange} />
              ) : (
                user.about
              )}
            </div>
            <div>
              <b>Job Title:</b> {isEditing ? (
                <input type="text" name="jobTitle" value={user.jobTitle} onChange={handleChange} />
              ) : (
                user.jobTitle
              )}
            </div>
            <div>
              <b>Skills:</b> {isEditing ? (
                <input type="text" name="skills" value={user.skills} onChange={handleChange} />
              ) : (
                user.skills
              )}
            </div>
            <div>
              <button onClick={handleEditClick}>
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
              {isEditing && (
                <button onClick={handleSave}>Save</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

