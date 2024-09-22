import React from 'react';
import Hero from './hero.page.jsx'; // Import SSR-rendered Hero section
import Experience from './experience.page.jsx'; // Import SSR-rendered Experience section
import Projects from './projects.page.jsx'; // Import SSR-rendered Projects section
import About from './about.page.jsx'; // Import SSR-rendered About section
import Contact from './contact.page.jsx'; // Import SSR-rendered Contact section
import Skills from './skills.page.jsx'; // Import SSR-rendered Skills section
import Navbar from './navbar.page.jsx'; // Import Navbar
import Footer from './footer.page.jsx'; // Import Footer


export function Page() {
    return (
        <>
            <main>
                <Hero />

                <div className="max-w-7xl mx-auto overflow-x-hidden">
                    <Navbar />
                    <About />
                    <Projects />
                    <Experience />
                    <Skills />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
