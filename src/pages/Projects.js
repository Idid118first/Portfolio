import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
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
    window.open('https://github.com/Idid118first/Asteroid-Game.git', '_blank');
  };

  return (
    <div className="projects">
      <header className="projects-header">
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
      
      <div className="projects-content">
        <h1 className="projects-title">Asteroid Game Project</h1>
        <p className="projects-description">
          The image below links to an asteroid game I worked on as my intro to coding. It is written in processing and Java and is fully functional. You play as a space ship and destroy asteroids with missiles as the game updates your score.
        </p>
        <div className="game-image-container" onClick={handleImageClick}>
          <img 
            src="/game.png" 
            alt="Asteroid Game Project" 
            className="game-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects; 