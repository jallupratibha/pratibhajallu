import React, { useState, useEffect } from 'react';
import '../styles/BottomNav.css';

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();

      // Check if the "Contact" section is visible in the viewport
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bottom-nav ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-icon">
        <a href="/" className="logo">
          <span className="logo-text">P</span>
        </a>
      </div>
      <div className="nav-links">
        <a
          href="https://drive.google.com/file/d/1jZ0PHIZrg5ju-946GnwfTENyeWz_NAly/view?usp=sharing"
          className="nav-link"
        >
          <i className="fas fa-download"></i> Resume
        </a>
        <a
          href="https://github.com/jallupratibha"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pratibha-jallu-b749a5227/"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.behance.net/pratibhajallu"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          <i className="fab fa-behance"></i>
        </a>
        <a href="mailto:JAP508@pitt.edu" className="nav-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;
