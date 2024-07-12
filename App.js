import React from 'react';
import MainHeader from './components/Header/MainHeader';
import Presentation from './components/Presentation/presentation';
import Projects from './components/Projects/Projects';
import Sampler from './components/Sampler/Sampler';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MainHeader />
      <div className="content">
        <div>
          <Presentation />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="sampler">
          <Sampler />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;