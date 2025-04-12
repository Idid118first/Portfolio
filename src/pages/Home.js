import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
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
    <div className="home">
      <header className="header">
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

      <main className="main-content">
        <img 
          src="/Portfolio-Headshot.JPEG" 
          alt="Arnav Roy" 
          className="profile-image"
        />
        <p className="welcome-text">
        Hello, my name is Arnav Roy and I am a freshman at UTD majoring in Computer Science. I enjoy the mathematical and logical challenge of computing problems, which led to me picking this specific major. I am 18 years old and am born and raised in the DFW metroplex. I enjoy hobbies such as soccer, video games, and trying new food. Additionally, part of the Alpha Zeta pledge class at Alpha Kappa Psi Mu Rho here at UTD. Lastly, I am currently looking for SWE internships for fall and summer 2026, please reach out to me if you have any opportunities. Welcome to my develepor portfolio!

        </p>
      </main>
    </div>
  );
};

export default Home; 