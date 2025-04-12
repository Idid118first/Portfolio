import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/OOP.css';

const OOP = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigateToPage = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleImageClick = () => {
    window.open('https://github.com/Idid118first/OOP-project.git', '_blank');
  };

  return (
    <div className="oop">
      <header className="oop-header">
        <Link to="/" className="logo">Arnav Roy</Link>
        <button className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Background overlay */}
      <div 
        className={`menu-overlay-background ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="menu-links">
          <Link to="/" onClick={() => navigateToPage('/')}>About Me</Link>
          <Link to="/business-plan" onClick={() => navigateToPage('/business-plan')}>Business Plan</Link>
          <Link to="/resume" onClick={() => navigateToPage('/resume')}>Resume</Link>
          <Link to="/oop" onClick={() => navigateToPage('/oop')}>OOP Project</Link>
          <Link to="/case-study" onClick={() => navigateToPage('/case-study')}>Case Study</Link>
          <Link to="/projects" onClick={() => navigateToPage('/projects')}>Asteroid Game Project</Link>
        </div>
      </div>
      
      <div className="oop-content">
        <h1 className="oop-title">OOP Project - Ticket Booking</h1>
        <p className="oop-description">
          The image below links to an OOP project I worked on which is a small scale booking system for a mock airline named Ghost Airways.
        </p>
        <div className="project-image-container" onClick={handleImageClick}>
          <img 
            src="/OOP-pic.png" 
            alt="Ghost Airways Ticket Booking System" 
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OOP; 