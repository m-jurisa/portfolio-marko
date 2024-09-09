import React from 'react';
import { motion } from 'framer-motion';
import csharpLogo from '../images/cards/card-img-c-sharp.webp';
import webDevLogo from '../images/cards/card-img-webdev-pc.webp';
import javaScriptLogo from '../images/cards/card-img-javascript.webp';


function Projects() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger appearance for child elements
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 }, // Cards start hidden and slightly below
        show: { opacity: 1, y: 0 }, // Cards animate to visible and move up
    };
    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="sub-section-alternative py-12 bg-gray-100" id="projects">
            <motion.h2
                className="text-center text-7xl"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
            >
                Projekte
            </motion.h2>

            <motion.div
                className="project-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-32 mt-16 mx-auto w-[80vw]"
                variants={container} // Apply container variants
                initial="hidden"
                whileInView="show" // Trigger animation on scroll
                viewport={{ once: true, amount: 0.3 }} // Ensures animation happens once, when 30% of the section is in view
            >
                {/* First Project Card */}
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={csharpLogo} alt="C# Projects" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">C Sharp</h2>
                        <p className="text-secondary-content">
                            Dies ist ein Abschnitt für meine Webentwicklungsprojekte.
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-grad">Mehr Info</button>
                        </div>
                    </div>
                </motion.div>

                {/* Second Project Card */}
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={webDevLogo} alt="Web Dev Project" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Web Dev</h2>
                        <p className="text-secondary-content">
                            Dies ist ein Abschnitt für meine Webentwicklungsprojekte.
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-grad ">Mehr Info</button>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Project Cards */}
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={javaScriptLogo} alt="JavaScript Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">JavaScript</h2>
                        <p className="text-secondary-content">
                            Dies ist ein Abschnitt für meine Webentwicklungsprojekte.
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-grad ">Mehr Info</button>
                        </div>
                    </div>
                </motion.div>

                {/* More project cards */}
                {/* You can add the rest of your project cards using similar structure */}
            </motion.div>
        </section>
    );
}

export default Projects;
