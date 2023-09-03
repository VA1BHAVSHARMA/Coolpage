import React from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
