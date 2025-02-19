import React from 'react';
import '../styles/ProjectCard.css';
import '../styles/Projects.css';


const WebProjectCard = ({ title, description, skills, image, link, videoLink, isWebDev }) => {
  return (
    <div className={`project-card ${isWebDev ? 'web-development-project' : ''}`}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        <p className="project-skills"><strong>Skills Used:</strong> {skills}</p>
        <div className="button-container">
          <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">View Project</a>
          <a href={videoLink} className="view-button secondary-button" target="_blank" rel="noopener noreferrer">Video Walkthrough</a>
        </div>
      </div>
    </div>
  );
};

export default WebProjectCard;
