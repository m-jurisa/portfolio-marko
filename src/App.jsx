import React from 'react';

import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Footer from './sections/Footer';
import Expirience from './sections/Expirience';

import './index.css';

function App() {
    return (
        <>
            <main>
                <Hero />

        <div className="max-w-7xl mx-auto overflow-x-hidden">
                <Navbar />
                <About />
                <Projects />
                <Expirience />
                <Skills />
                <Contact />
        </div>
        </main>
        <Footer />
        </>
    );
}

export default App;