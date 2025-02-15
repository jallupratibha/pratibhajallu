import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - navbarHeight - 20; // Offset to prevent overlap

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pratibha Jallu</div>
      <ul className="navbar-links">
        <li>
          <a onClick={(e) => handleScroll(e, 'home')}>
            Home
          </a>
        </li>
        <li>
          <a onClick={(e) => handleScroll(e, 'projects-section')}>
            Projects
          </a>
        </li>
        <li>
          <a onClick={(e) => handleScroll(e, 'skills')}>
            My Skills
          </a>
        </li>
        <li>
          <a onClick={(e) => handleScroll(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
