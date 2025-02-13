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
                image="/assets/student-image.png"
                link="/case-study/mentorBridgeStudent"  // Navigate to case study page
              />




              </div>
              <div className="project-right">
                <img
                  src="/assets/mockup1.png"
                  alt="Mockup Mentor Bridge - Student 1"
                  className="mockup-screen mockup-first"
                />
                <img
                  src="/assets/mockup2.png"
                  alt="Mockup Mentor Bridge - Student 2"
                  className="mockup-screen mockup-second"
                />
                <img
                  src="/assets/mockup3.png"
                  alt="Mockup Mentor Bridge - Student 3"
                  className="mockup-screen mockup-third"
                />
              </div>
            </div>
          </div>

          {/* Second UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number">
              <span>2</span>
            </div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Mentor Bridge - Mentor"
                  description="Mentor Bridge connects mentors with eager learners through detailed profiles, in-app messaging, test classes, and secure escrow payments. Automatic session recordings ensure transparency, so you can focus on teaching while we handle the rest."
                  skills="Figma, UI/UX Designing, iOS Design"
                  image="/assets/second-project-image.png"
                  link="/case-study/mentorBridgeMentor"

                />
              </div>
              <div className="project-right">
                <img
                  src="/assets/mockup4.png"
                  alt="Mockup Mentor Bridge - Mentor 1"
                  className="mockup-screen mockup-first"
                />
                <img
                  src="/assets/mockup5.png"
                  alt="Mockup Mentor Bridge - Mentor 2"
                  className="mockup-screen mockup-second"
                />
                <img
                  src="/assets/mockup6.png"
                  alt="Mockup Mentor Bridge - Mentor 3"
                  className="mockup-screen mockup-third"
                />
              </div>
            </div>
          </div>

          {/* Third UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number">
              <span>3</span>
            </div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Cabo - Pristine Rides, Perfect Safety"
                  description="Cabo was created to provide clean, safe, and reliable rides, turning ordinary journeys into exceptional experiences. Inspired by global standards, every ride ensures unmatched comfort, professionalism, and safety, all at standard market rates, because everyone deserves better rides."
                  skills="Figma, UI/UX Designing, Android Design"
                  image="/assets/cabo-image.png"
                  link="/case-study/cabo"
                />
              </div>
              <div className="project-right">
                <img
                  src="/assets/mockup7.png"
                  alt="Mockup Cabo 1"
                  className="mockup-screen mockup-first"
                />
                <img
                  src="/assets/mockup8.png"
                  alt="Mockup Cabo 2"
                  className="mockup-screen mockup-second"
                />
                <img
                  src="/assets/mockup9.png"
                  alt="Mockup Cabo 3"
                  className="mockup-screen mockup-third"
                />
              </div>
            </div>
          </div>

          {/* Fourth UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number">
              <span>4</span>
            </div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Nykaa-UX Research"
                  description="As a loyal Nykaa user, I noticed editing the delivery address during checkout is inconvenient, requiring extra steps after proceeding to payment. Allowing direct address edits on the cart page would simplify the process and enhance the user experience."
                  skills="Figma, UX Research, Usability Testing"
                  image="/assets/nykaa-image.png"
                  link="/case-study/nykaa"
                />
              </div>
              <div className="project-right">
                <img
                  src="/assets/mockup10.png"
                  alt="Mockup Nykaa 1"
                  className="mockup-screen mockup-first"
                />
                <img
                  src="/assets/mockup11.png"
                  alt="Mockup Nykaa 2"
                  className="mockup-screen mockup-second"
                />
                <img
                  src="/assets/mockup12.png"
                  alt="Mockup Nykaa 3"
                  className="mockup-screen mockup-third"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web Development Section */}
      <div className="blue-background">
      <div className="waves"></div>

        <h3 className="projects-subtitle">Web Development</h3>
        <div className="projects-container">
          <div className="project-content">
            <div className="project-left">
              <WebProjectCard
                title="Emporium"
                description="Emporium is an e-commerce platform that curates a selection of luxury handbags for discerning shoppers worldwide. Focused on quality, craftsmanship, and exclusivity, it delivers a personalized and immersive shopping experience, rivaling the ambiance of a luxury boutique."
                skills="HTML, CSS, JavaScript, React JS, Django"
                image="/assets/WB1.png"
                link="https://github.com/jallupratibha/Emporium"
                videoLink="https://drive.google.com/file/d/1CCx8A_uxuN-d4pf5dSMLIGWpNykHdKow/view?usp=sharing"
              />
            </div>
            <div className="project-left">
              <WebProjectCard
                title="Flavors of India: A Culinary Exploration"
                description="Flavors of India is a digital platform designed to celebrate the rich and diverse culinary heritage of India. With a passion for food exploration and cultural appreciation, the app aims to connect users with the authentic flavors and traditional dishes from every corner of the country."
                skills="HTML, CSS, JavaScript"
                image="/assets/flavors-image.png"
                link="https://github.com/jallupratibha/Flavors-of-India"
                videoLink="https://drive.google.com/file/d/1IzIFmD030GimBtmU63LFRHIROn9PlMZJ/view?usp=sharing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
