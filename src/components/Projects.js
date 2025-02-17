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
            <div className="project-number"><span>1</span></div>
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

          {/* Second UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number"><span>2</span></div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Mentor Bridge - Mentor"
                  description="Mentor Bridge connects mentors with eager learners through detailed profiles, in-app messaging, test classes, and secure escrow payments. Automatic session recordings ensure transparency, so you can focus on teaching while we handle the rest."
                  skills="Figma, UI/UX Designing, iOS Design"
                  image={`${process.env.PUBLIC_URL}/assets/second-project-image.png`}
                  link="/case-study/mentorBridgeMentor"
                />
              </div>
              <div className="project-right">
                <img src={`${process.env.PUBLIC_URL}/assets/mockup4.png`} alt="Mockup 4" className="mockup-screen mockup-first" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup5.png`} alt="Mockup 5" className="mockup-screen mockup-second" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup6.png`} alt="Mockup 6" className="mockup-screen mockup-third" />
              </div>
            </div>
          </div>

          {/* Third UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number"><span>3</span></div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Cabo - Pristine Rides, Perfect Safety"
                  description="Cabo was created to provide clean, safe, and reliable rides, turning ordinary journeys into exceptional experiences. Inspired by global standards, every ride ensures unmatched comfort, professionalism, and safety, all at standard market rates, because everyone deserves better rides."
                  skills="Figma, UI/UX Designing, Android Design"
                  image={`${process.env.PUBLIC_URL}/assets/cabo-image.png`}
                  link="/case-study/cabo"
                />
              </div>
              <div className="project-right">
                <img src={`${process.env.PUBLIC_URL}/assets/mockup7.png`} alt="Mockup 7" className="mockup-screen mockup-first" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup8.png`} alt="Mockup 8" className="mockup-screen mockup-second" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup9.png`} alt="Mockup 9" className="mockup-screen mockup-third" />
              </div>
            </div>
          </div>

          {/* Fourth UI/UX Project */}
          <div className="unique-project-block">
            <div className="project-number"><span>4</span></div>
            <div className="project-content">
              <div className="project-left">
                <ProjectCard
                  title="Nykaa-UX Research"
                  description="As a loyal Nykaa user, I noticed editing the delivery address during checkout is inconvenient, requiring extra steps after proceeding to payment. Allowing direct address edits on the cart page would simplify the process and enhance the user experience."
                  skills="Figma, UX Research, Usability Testing"
                  image={`${process.env.PUBLIC_URL}/assets/nykaa-image.png`}
                  link="/case-study/nykaa"
                />
              </div>
              <div className="project-right">
                <img src={`${process.env.PUBLIC_URL}/assets/mockup10.png`} alt="Mockup 10" className="mockup-screen mockup-first" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup11.png`} alt="Mockup 11" className="mockup-screen mockup-second" />
                <img src={`${process.env.PUBLIC_URL}/assets/mockup12.png`} alt="Mockup 12" className="mockup-screen mockup-third" />
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
                image={`${process.env.PUBLIC_URL}/assets/WB1.png`}
                link="https://github.com/jallupratibha/Emporium"
                videoLink="https://drive.google.com/file/d/1CCx8A_uxuN-d4pf5dSMLIGWpNykHdKow/view?usp=sharing"
              />
            </div>
            <div className="project-left">
              <WebProjectCard
                title="Flavors of India: A Culinary Exploration"
                description="Flavors of India is a digital platform designed to celebrate the rich and diverse culinary heritage of India. With a passion for food exploration and cultural appreciation, the app aims to connect users with the authentic flavors and traditional dishes from every corner of the country."
                skills="HTML, CSS, JavaScript"
                image={`${process.env.PUBLIC_URL}/assets/flavors-image.png`}
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
