import React, { Component } from 'react';
import Navi from './Navi';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page-full">
        <Navi />
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
