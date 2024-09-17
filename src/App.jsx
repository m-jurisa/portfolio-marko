import React from 'react';

import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

import './index.css';

function App() {
    return (
        <>

        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <AboutMe />
            <Timeline />
            <Projects />
            <Skills />
        </main>
        <Footer />
        </>
    );
}

export default App;