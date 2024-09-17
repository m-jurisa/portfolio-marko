import React from 'react';


function Hero() {
    return (
        <section className="custom-gradient text-white text-lg leading-snug h-screen ">

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
