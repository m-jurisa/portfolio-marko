import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import './index.css';


function App() {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Timeline/>
            <Projects />
            <Skills />
            <Footer />
        
        </div>
    );
}

export default App;
