import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AOS from "aos";
import "aos/dist/aos.css";

import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects/projects";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/SkillBars/progress";
import ContactMe from "./components/ContactMe/ContactMe";
import Achievements from "./components/Achievements";
import Experience from './components/Experience';

import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Sravani Portfolio</title>
        </Helmet>
        <div className="homepage">
          <Navbar />
          <Home />
        </div>
        <AboutMe />
        <Progress />
        <Experience />
        <Projects />
        <Achievements />
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
