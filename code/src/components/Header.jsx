import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className={`fade-in-down ${isLoaded ? 'visible' : ''}`} 
     style={{transitionDelay: '0.5s'}}>
    <header className="HEADER">
      <div className="NAV">
        <Link to="/" className="LOGO" style={{ textDecoration: 'none' }}>
          <span className="text-wrapper-4">SAIYED</span>
          <span className="text-wrapper-5">&nbsp;</span>
          <span className="text-wrapper-6">MADNI</span>
        </Link>
        <div className="PAGE-LINKS">
          <div className="frame">
            <Link to="/projects" className="text-wrapper-7">PROJECTS</Link>
            <Link to="/about" className="text-wrapper-7">ABOUT</Link>
            <Link to="/contact" className="text-wrapper-7">CONTACT</Link>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};