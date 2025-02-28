import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import '../styles/Hero.css';

const Hero = () => (
  <div id="home" className="hero-container">
    
    <BackgroundAnimation /> {/* Add animated background */}
    <div className="hero-content">
      <p className="hero-intro">
        Hello! It's Me <br />
        <span className="hero-name">
          PRATIBHA JALLU <span className="wave">👋</span>
        </span>


      </p>
      <p className="hero-description">
        Your Go-To UI/UX Designer for Exceptional Digital Experiences. I craft user-centric designs that blend creativity and functionality, transforming ideas into stunning, seamless interfaces for apps, websites, and more.
      </p>
      <p className="hero-subtext">
        UI/UX Design, Product Design, Interaction Design? Consider it handled. 
        <span className="drop-target">🎯</span>
      </p>

      <div className="stars-container">
        {/* Generate multiple stars */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>



      <p className="hero-call-to-action">
        Simple, yet impactful! Let’s create something amazing together!
      </p>
      <div className="hero-links">
        <h3>FIND ME HERE!</h3>
        <div className="links-container">
          <div className="social-icons">
            <a href="https://github.com/jallupratibha" target="_blank" rel="noreferrer">
              <img src="/assets/github-icon.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/pratibha-jallu-b749a5227/" target="_blank" rel="noreferrer">
              <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://www.behance.net/pratibhajallu" target="_blank" rel="noreferrer">
              <img src="/assets/behance-icon.png" alt="Behance" />
            </a>
            <a href="mailto:JAP508@pitt.edu">
              <img src="/assets/mail-icon.png" alt="Email" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1zGL6XyJ7JuXX3EiYDigH0ALmWXDMT2d-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume-btn">
            Resume
          </a>
        </div>
      </div>
    </div>
    <div className="hero-image">
    <img src="/assets/Pratibha.jpg" alt="Pratibha Jallu" />

    


    </div>
  </div>
);

export default Hero;
