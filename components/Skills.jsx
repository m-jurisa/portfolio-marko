"use client";
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillsData } from '../lib/constants';

function Skills() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="head-text py-12 c-space max-w-7xl mx-auto" id="skills">
      <p className="head-text">My Skills</p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-8 gap-8 mb-32 mt-16 mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.map((skill, index) => (
          <SkillCard key={index} logoSrc={skill.logo} altText={skill.alt} skillName={skill.name} percentage={skill.percentage} variants={item} />
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

