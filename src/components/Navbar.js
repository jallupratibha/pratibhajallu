import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - navbarHeight - 20; // Adjust for navbar height
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1300; // Adjust duration (800ms = slower, 500ms = faster)
      let startTime = null;

      function smoothScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't overshoot

        // Easing function for smooth scrolling effect
        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(smoothScroll);
        }
      }

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pratibha Jallu</div>
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects-section" onClick={(e) => handleScroll(e, 'projects-section')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>
            My Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
