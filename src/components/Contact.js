import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      
      {/* ✅ Three Waves at the Bottom */}
      <div className="waves-contact"></div>  
      <div className="waves-contact-secondary"></div>  
      <div className="waves-contact-third"></div>  

      <h2 className="contact-title">CONTACT</h2>
      <h3 className="contact-subtitle">Connect with me 😊</h3>
      <p className="contact-description">
        Let’s connect! I’m available for inquiries, collaborations, and new opportunities to bring ideas to life. ✨
      </p>
      <div className="contact-buttons-container">
        <a href="mailto:JAP508@pitt.edu" className="contact-button">
          <span>Email Me</span>
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/pratibha-jallu-b749a5227/" target="_blank" rel="noreferrer" className="contact-button">
          <span>LinkedIn</span>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jallupratibha" target="_blank" rel="noreferrer" className="contact-button">
          <span>Github</span>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.behance.net/pratibhajallu" target="_blank" rel="noreferrer" className="contact-button">
          <span>Behance</span>
          <i className="fab fa-behance"></i>
        </a>
      </div>

    </div>
  );
};

export default Contact;
