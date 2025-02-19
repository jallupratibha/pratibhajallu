import React from 'react';
import '../styles/MySkills.css';

const MySkills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3 className="skill-category">Design Skills</h3>
          <ul>
            <li>Figma</li>
            <li>Interaction Design</li>
            <li>UI/UX Designing</li>
            <li>Visual Design</li>
            <li>Design Systems</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-category">Technical Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typography</li>
            <li>Iconography</li>
            <li>Color Theory</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-category">Soft Skills</h3>
          <ul>
            <li>Collaboration</li>
            <li>Communication</li>
            <li>Empathy</li>
            <li>Problem-Solving</li>
            <li>Storytelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
