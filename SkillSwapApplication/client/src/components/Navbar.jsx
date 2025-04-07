import { Link } from "react-router-dom";
import { Home, Bell, Search } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Home */}
        <Link to="/" className="nav-link">
          <Home size={20} />
          <span>Home</span>
        </Link>

        {/* Profile */}
        <Link to="/profile" className="nav-link">
          <span>Profile</span>
        </Link>

        {/* Search bar */}
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
          />
        </div>

        {/* Notifications */}
        <Link to="/notifications" className="nav-link">
          <Bell size={20} />
        </Link>
        
      </div>
    </nav>
  );
}
