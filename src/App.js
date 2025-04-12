import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusinessPlan from './pages/BusinessPlan';
import Resume from './pages/Resume';
import OOP from './pages/OOP';
import CaseStudy from './pages/CaseStudy';
import Projects from './pages/Projects';

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-plan" element={<BusinessPlan />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/oop" element={<OOP />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
