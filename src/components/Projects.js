import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import WebProjectCard from './WebProjectCard';

const Projects = () => {
  return (
    <div id="projects-section">
      {/* UI/UX Designing Section */}
      <div className="projects-section white-background">
        <h2 className="projects-title">My Projects</h2>
        <h3 className="projects-subtitle">UI/UX Designing</h3>

        <div className="projects-container">
          {/* First UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number">
              <span>1</span>
            </div>
            <div className="project-content">
              <div className="project-left">
              <ProjectCard
                title="Mentor Bridge - Student"
                description="A secure platform connecting learners with mentors in fields like UI/UX, coding, and more. With mentor profiles, test sessions, in-app communication, recorded classes, and escrow payments, it ensures transparency, fairness, and seamless collaboration."
                skills="Figma, UI/UX Designing, iOS Design"
                image={`${process.env.PUBLIC_URL}/assets/student-image.png`}
                link="/case-study/mentorBridgeStudent"  
              />
              </div>
              <div className="project-right">
                <img src={`${process.env.PUBLIC_URL}/assets/mockup1.png`} alt="Mockup 1" className="mockup-screen mockup-first" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup2.png`} alt="Mockup 2" className="mockup-screen mockup-second" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup3.png`} alt="Mockup 3" className="mockup-screen mockup-third" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
