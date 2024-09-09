import React from 'react';
import logo from '../images/logo.png';

function Hero() {
    return (
        <section className="custom-gradient text-white text-lg leading-snug h-screen">
            <nav className="flex justify-between items-center p-6 bg-transparent">
                <img className="logo w-20" src={logo} alt="Marko logo" />

                <ul className="flex space-x-4 text-white text-base sm:text-base md:text-lg lg:text-xl font-medium">
                    <li>
                        <a href="#about-me" className="hover:text-secondary">
                            Über mich
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-secondary sm:ml-4">
                            Projekte
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-secondary sm:ml-4">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="mailto:marko.jurisa@proton.me" className="hover:text-secondary sm:ml-4 sm:mr-8">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="hero-area flex flex-col items-center justify-center h-full text-white text-center">
                <div className="hero-text mb-8">
                    <h1 className="text-5xl font-bold">Marko Jurisa</h1>
                    <p className="text-xl mt-4">
                        Fachhinformatiker <br />
                        Anwendungsentwicklung
                    </p>
                    <div className="button mt-6">
                        <a href="#about-me" className="btn-grad text-white py-2 px-4 rounded transition">
                            Über mich
                        </a>
                    </div>
                </div>
             
            </div>
        </section>
    );
}

export default Hero;
