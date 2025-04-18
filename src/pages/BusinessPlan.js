import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/BusinessPlan.css';
import '../styles/Menu.css';

const BusinessPlan = () => {
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

  const handleLogoClick = () => {
    window.open('https://drive.google.com/file/d/1Jm_Vszmk6vil5jovUXjF0JCqSEgzDgm6/view?usp=sharing', '_blank');
  };

  return (
    <div className="business-plan">
      <header className="business-plan-header">
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
      
      <div className="business-plan-content">
        <h1 className="business-plan-title">Business Plan</h1>
        <p className="business-plan-description">
          This is my business plan project from my pledge in Alpha Kappa Psi during Spring 2025. It is a new privatized gym experience, please click on the logo to read more!
        </p>
        <div className="logo-container" onClick={handleLogoClick}>
          <img 
            src={process.env.PUBLIC_URL + "/CaelumLogo.jpeg"} 
            alt="Caelum Logo" 
            className="logo-image"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
