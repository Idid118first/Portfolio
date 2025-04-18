import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Resume.css';
import '../styles/Menu.css';

const Resume = () => {
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
    <div className="resume">
      <header className="resume-header">
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
      
      <div className="resume-content">
        <h1 className="resume-title">Resume</h1>
        <div className="pdf-container">
          <object
            data={process.env.PUBLIC_URL + "/resume.pdf"}
            type="application/pdf"
            className="pdf-viewer"
          >
            <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
