import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="h1">Job Board</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/jobs">Job Listings</Link>
        </li>
        <li className="navbar-item">
          <Link to="/upload-resume">Upload Resume</Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Adminlogin">Admin Login</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/post-job">Post a Job</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
