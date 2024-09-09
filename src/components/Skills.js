import React from 'react';
import { motion } from 'framer-motion';
import javascriptLogo from '../images/cards/card-img-javascript.webp';
import reactLogo from '../images/cards/card-img-react.webp';
import nodejsLogo from '../images/cards/card-img-nodejs.webp';
import pythonLogo from '../images/cards/card-img-python.webp';
import blenderLogo from '../images/cards/card-img-blender.webp';
import clickupLogo from '../images/cards/card-img-click-up.webp';
import csharpLogo from '../images/cards/card-img-c-sharp.webp';
import cyberlinkLogo from '../images/cards/card-img-cyberlink.webp';
import githubLogo from '../images/cards/card-img-github.webp';
import htmlCssLogo from '../images/cards/card-img-html.webp';
import CssLogo from '../images/cards/card-img-css.webp';
import illustratorLogo from '../images/cards/card-img-illustrator.webp';
import jiraLogo from '../images/cards/card-img-jira.webp';
import mysqlLogo from '../images/cards/card-img-mysql.webp';
import photoshopLogo from '../images/cards/card-img-photoshop.webp';
import premiereProLogo from '../images/cards/card-img-premiere-pro.webp';
import siemensLogo from '../images/cards/card-img-siemens.webp';
import slackLogo from '../images/cards/card-img-slack.webp';
import ubuntuLogo from '../images/cards/card-img-ubuntu.webp';

function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Stagger appearance for child elements
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
        <section className="sub-section-alternative py-12 bg-gray-100" id="skills">
            <motion.h2
                className="text-center text-7xl"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
            >
                Skills
            </motion.h2>
            <motion.div
                className="skills-container grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-8 gap-8 mb-32 mt-16 mx-auto w-[80vw]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the section is visible
            >
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={blenderLogo} alt="Blender Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Blender</h2>
                    </div>
                </motion.div>

                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={clickupLogo} alt="ClickUp Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ClickUp</h2>
                    </div>
                </motion.div>

                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={csharpLogo} alt="C# Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">C#</h2>
                    </div>
                </motion.div>

                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={cyberlinkLogo} alt="Cyberlink Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cyberlink</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={CssLogo} alt="CSS3 Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS3</h2>
                    </div>
                </motion.div>

                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={githubLogo} alt="Git Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Git</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={htmlCssLogo} alt="HTML5 Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML5</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={illustratorLogo} alt="Illustrator Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Illustrator</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={jiraLogo} alt="Jira Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jira</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={javascriptLogo} alt="JavaScript Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={mysqlLogo} alt="MySQL Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MySQL</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={nodejsLogo} alt="Node.js Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node.js</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={photoshopLogo} alt="Photoshop Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Photoshop</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={premiereProLogo} alt="Premiere Pro Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Premiere Pro</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={pythonLogo} alt="Python Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Python</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={reactLogo} alt="React Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={siemensLogo} alt="Siemens Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Siemens</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={slackLogo} alt="Slack Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Slack</h2>
                    </div>
                </motion.div>
                <motion.div className="card bg-base-100 w-full md:w-auto shadow-xl" variants={item}>
                    <figure className="">
                        <img src={ubuntuLogo} alt="Ubuntu Skill" className="rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ubuntu</h2>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Skills;
