import logo from "../assets/logo.jpg";
import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <img src={logo} alt="logo" className="nav-logo" />
        

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Internship</a>
          <a href="#">Mentorship</a>
          <a href="#">Career Support</a>
          <a href="#">About Us</a>
          <button className="login-btn">Log in</button>
        </div>

        

        {/* Mobile Menu Button */}
<button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
  ☰
</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Internship</a>
          <a href="#">Mentorship</a>
          <a href="#">Career Support</a>
          <a href="#">About Us</a>
          <button className="apply-btn">Apply</button>
        </div>
      )}
    </nav>
  );
}