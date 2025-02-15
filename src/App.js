import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // ✅ FIXED: Using HashRouter
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './styles/Projects.css';

import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import BottomNav from "./components/BottomNav";
import CaseStudy from "./components/CaseStudy";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}> {/* ✅ FIXED: Added basename */}
    <Routes>
      {/* Home Page */}
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <Projects />
          <MySkills />
          <Contact />
          <BottomNav />
        </>
      } />

      {/* Case Study Page */}
      <Route path="/case-study/:id" element={<CaseStudy />} />
    </Routes>
  </Router>
);

export default App;
