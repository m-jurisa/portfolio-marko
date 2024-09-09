import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

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
                staggerChildren: 0.10,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const skillsData = [
        { logo: javascriptLogo, alt: "JavaScript Skill", name: "JavaScript" },
        { logo: reactLogo, alt: "React Skill", name: "React" },
        { logo: nodejsLogo, alt: "Node.js Skill", name: "Node.js" },
        { logo: pythonLogo, alt: "Python Skill", name: "Python" },
        { logo: blenderLogo, alt: "Blender 3D Modeling Software", name: "Blender" },
        { logo: clickupLogo, alt: "ClickUp Project Management Tool", name: "ClickUp" },
        { logo: csharpLogo, alt: "C# Programming Language", name: "C#" },
        { logo: cyberlinkLogo, alt: "Cyberlink Video Editing Software", name: "Cyberlink" },
        { logo: githubLogo, alt: "GitHub Version Control", name: "GitHub" },
        { logo: htmlCssLogo, alt: "HTML5 Skill", name: "HTML5" },
        { logo: CssLogo, alt: "CSS3 Stylesheet Language", name: "CSS3" },
        { logo: illustratorLogo, alt: "Adobe Illustrator", name: "Illustrator" },
        { logo: jiraLogo, alt: "Jira Project Management Tool", name: "Jira" },
        { logo: mysqlLogo, alt: "MySQL Database Management System", name: "MySQL" },
        { logo: photoshopLogo, alt: "Adobe Photoshop", name: "Photoshop" },
        { logo: premiereProLogo, alt: "Adobe Premiere Pro", name: "Premiere Pro" },
        { logo: siemensLogo, alt: "Siemens Software", name: "Siemens" },
        { logo: slackLogo, alt: "Slack Communication Tool", name: "Slack" },
        { logo: ubuntuLogo, alt: "Ubuntu Linux Operating System", name: "Ubuntu" }
    ];
    
    return (
        <section className="sub-section-alternative py-12 bg-gray-100" id="skills">
            <motion.h2
                className="text-center text-7xl"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                Skills
            </motion.h2>
            <motion.div
                className="skills-container grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-8 gap-8 mb-32 mt-16 mx-auto w-[80vw]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={index}
                        logoSrc={skill.logo}
                        altText={skill.alt}
                        skillName={skill.name}
                        variants={item}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;
