import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CaseStudy.css';

const CaseStudy = () => {
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

  return (
    <div className="case-study">
      <header className="case-study-header">
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
          <Link to="/oop" onClick={() => navigateToPage('/oop')}>OOP</Link>
          <Link to="/case-study" onClick={() => navigateToPage('/case-study')}>Case Study</Link>
          <Link to="/projects" onClick={() => navigateToPage('/projects')}>Asteroid Game Project</Link>
        </div>
      </div>
      
      <div className="case-study-content">
        <h1 className="case-study-title">Case Study - Nomad</h1>
        <p className="case-study-description">
          I am currently working on a case study in Alpha Kappa Psi where I am building a full app from frontend to backend called Nomad. I am working in a team with 4 other pledges where I am the frontend lead. The app aims to help remote work employees find their ideal workspaces. The project is currently under development.
        </p>
      </div>
    </div>
  );
};

export default CaseStudy; 