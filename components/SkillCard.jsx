"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ logoSrc, altText, skillName, percentage, variants }) => {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(!hovered);

  return (
    <motion.div
      className="w-full md:w-auto shadow-xl relative bg-black/80 rounded-2xl border border-black-300"
      variants={variants}
      initial="hidden"
      whileInView="show"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleHover}
    >
      <figure className="relative">
        <img src={logoSrc} alt={altText} className="rounded-2xl" />
        {hovered && (
          <div className="absolute bottom-0 left-0 w-full h-3 bg-transparent">
            <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-width duration-300 ease-out" style={{ width: `${percentage}%` }} />
          </div>
        )}
      </figure>
      <div className="p-4 text-center">
        <p className="text-sm text-white">{skillName}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;

