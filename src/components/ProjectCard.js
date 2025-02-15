import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, skills, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        <p className="project-skills"><strong>Skills Used:</strong> {skills}</p>
        <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
