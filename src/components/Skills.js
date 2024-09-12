import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

import afterEffectsLogo from '../images/cards/card-img-after-effects.webp';
import blenderLogo from '../images/cards/card-img-blender.webp';
import clickupLogo from '../images/cards/card-img-click-up.webp';
import csharpLogo from '../images/cards/card-img-c-sharp.webp';
import CssLogo from '../images/cards/card-img-css.webp';
import cyberlinkLogo from '../images/cards/card-img-cyberlink.webp';
import dasLightLogo from '../images/cards/card-img-das-light.webp';
import githubLogo from '../images/cards/card-img-github.webp';
import htmlCssLogo from '../images/cards/card-img-html.webp';
import illustratorLogo from '../images/cards/card-img-illustrator.webp';
import javascriptLogo from '../images/cards/card-img-javascript.webp';
import jiraLogo from '../images/cards/card-img-jira.webp';
import mysqlLogo from '../images/cards/card-img-mysql.webp';
import nodejsLogo from '../images/cards/card-img-nodejs.webp';
import photoshopLogo from '../images/cards/card-img-photoshop.webp';
import premiereProLogo from '../images/cards/card-img-premiere-pro.webp';
import prusaSlicerLogo from '../images/cards/card-img-prusa-slicer.webp';
import pythonLogo from '../images/cards/card-img-python.webp';
import reactLogo from '../images/cards/card-img-react.webp';
import siemensLogo from '../images/cards/card-img-siemens.webp';
import slackLogo from '../images/cards/card-img-slack.webp';
import ubuntuLogo from '../images/cards/card-img-ubuntu.webp';
import wledLogo from '../images/cards/card-img-wled.webp';
import wordpressLogo from '../images/cards/card-img-wordpress.webp';

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
        { logo: afterEffectsLogo, alt: "Adobe After Effects", name: "After Effects", percentage: 10 },
        { logo: blenderLogo, alt: "Blender 3D Modeling Software", name: "Blender", percentage: 15 },
        { logo: clickupLogo, alt: "ClickUp Project Management Tool", name: "ClickUp", percentage: 30 },
        { logo: CssLogo, alt: "CSS3 Stylesheet Language", name: "CSS3", percentage: 40 },
        { logo: csharpLogo, alt: "C# Programming Language", name: "C#", percentage: 15 },
        { logo: cyberlinkLogo, alt: "Cyberlink Video Editing Software", name: "Cyberlink", percentage: 25 },
        { logo: dasLightLogo, alt: "DAS Light", name: "DAS Light", percentage: 30 },
        { logo: githubLogo, alt: "GitHub Version Control", name: "GitHub", percentage: 15 },
        { logo: htmlCssLogo, alt: "HTML5 Skill", name: "HTML5", percentage: 50 },
        { logo: illustratorLogo, alt: "Adobe Illustrator", name: "Illustrator", percentage: 30 },
        { logo: javascriptLogo, alt: "JavaScript Skill", name: "JavaScript", percentage: 10 },
        { logo: jiraLogo, alt: "Jira Project Management Tool", name: "Jira", percentage: 25 },
        { logo: mysqlLogo, alt: "MySQL Database Management System", name: "MySQL", percentage: 25 },
        { logo: nodejsLogo, alt: "Node.js Skill", name: "Node.js", percentage: 15 },
        { logo: photoshopLogo, alt: "Adobe Photoshop", name: "Photoshop", percentage: 60 },
        { logo: premiereProLogo, alt: "Adobe Premiere Pro", name: "Premiere Pro", percentage: 20 },
        { logo: prusaSlicerLogo, alt: "Prusa Slicer", name: "Prusa Slicer", percentage: 40 },
        { logo: pythonLogo, alt: "Python Skill", name: "Python", percentage: 5 },
        { logo: reactLogo, alt: "React Skill", name: "React", percentage: 15 },
        { logo: siemensLogo, alt: "Siemens Software", name: "Siemens", percentage: 20 },
        { logo: slackLogo, alt: "Slack Communication Tool", name: "Slack", percentage: 80 },
        { logo: ubuntuLogo, alt: "Ubuntu Linux Operating System", name: "Ubuntu", percentage: 10 },
        { logo: wledLogo, alt: "WLED Lighting Software", name: "WLED", percentage: 45 },
        { logo: wordpressLogo, alt: "WordPress", name: "WordPress", percentage: 50 }
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
                        percentage={skill.percentage} 
                        variants={item}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;
