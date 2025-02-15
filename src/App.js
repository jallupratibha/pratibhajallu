import React from "react";
import { Route, Routes } from "react-router-dom";  // ✅ Only import Routes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import BottomNav from "./components/BottomNav";
import CaseStudy from "./components/CaseStudy";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
  <>
    <Navbar />
    <Routes>  {/* ✅ Keep only <Routes> */}
      <Route path="/" element={
        <>
          <Hero />
          <Projects />
          <MySkills />
          <Contact />
          <BottomNav />
        </>
      } />
      <Route path="/case-study/:id" element={<CaseStudy />} />
    </Routes>
  </>
);

export default App;
