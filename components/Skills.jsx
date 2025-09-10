"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "../lib/constants";

function Skills() {
  // Parent controls enter animation (children only have variants)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  // Each child animates when parent goes to "show"
  const item = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <section className="py-12 c-space max-w-7xl mx-auto" id="skills">
      <p className="head-text">My Skills</p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 mb-32 mt-10 sm:mt-16 mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        // Mobile-friendly: trigger a bit earlier and only once
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      >
        {skillsData.map((skill, i) => (
          <SkillCard
            key={i}
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
