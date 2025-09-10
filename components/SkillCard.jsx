"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ logoSrc, altText, skillName, percentage, variants }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-full shadow-xl relative bg-black/80 rounded-2xl border border-black-300"
      variants={variants}                 // ← NO initial/whileInView here
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(h => !h)} // tap toggles bar on mobile
    >
      <figure className="relative p-6 flex items-center justify-center">
        <img
          src={logoSrc}
          alt={altText}
          className="rounded-xl max-h-14 sm:max-h-16 object-contain"
          loading="lazy"
          decoding="async"
        />
        {hovered && (
          <div className="absolute bottom-0 left-0 w-full h-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-[width] duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
      </figure>

      <div className="px-4 pb-4 pt-1 text-center">
        <p className="text-sm text-white">{skillName}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
