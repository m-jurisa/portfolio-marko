// components/Projects.jsx
"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { myProjects } from "../lib/constants";

const projectCount = myProjects.length;

export default function Projects({ locale = "de" }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) =>
      direction === "previous" ? (prev === 0 ? projectCount - 1 : prev - 1)
                               : (prev === projectCount - 1 ? 0 : prev + 1)
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const p = myProjects[selectedProjectIndex];

  // Locale-aware text with safe fallbacks
  const title   = locale === "en" ? p.title_en   || p.title   : p.title;
  const desc    = locale === "en" ? p.desc_en    || p.desc    : p.desc;
  const subdesc = locale === "en" ? p.subdesc_en || p.subdesc : p.subdesc;
  const ctaText = locale === "en" ? "Check Live Site" : "Live ansehen";

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">
        {locale === "en" ? "My Selected Work" : "Ausgewählte Arbeiten"}
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 bg-black/90 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={p.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={p.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={p.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{title}</p>
            <p className="animatedText">{desc}</p>
            <p className="animatedText">{subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {p.tags.map((tag) => (
                <div key={tag.id} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            {p.href && (
              <a className="flex items-center gap-2 cursor-pointer text-white-600"
                 href={p.href} target="_blank" rel="noreferrer">
                <p>{ctaText}</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center p-4">
          {p.texture?.endsWith(".mp4") ? (
            <video
              src={p.texture}
              className="w-full h-full object-contain rounded-lg"
              autoPlay loop muted playsInline
            />
          ) : (
            <img src={p.texture} className="w-full h-full object-contain rounded-lg" alt="project" />
          )}
        </div>
      </div>
    </section>
  );
}
