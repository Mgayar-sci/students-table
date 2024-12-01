import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="link">
          <img src={logo} alt="MyApp" className="logo" />
          <span>My App</span>
        </Link>
      </div>
      <div className="navbar-links">
        <div>
          <Link to="/posts">Posts</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        {/* <div className="navbar-profile">
                    <img src={logo} alt="Profile" className="profile-image" />
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
