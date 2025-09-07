"use client";
import { useState } from 'react';
import Button from './Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('marko.jurisa@proton.me');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20 pt-16" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hallo, ich bin Marko, </p>
              <p className="grid-subtext">
                Ein kroatischer Staatsbürger, der seit über 7,5 Jahren in Deutschland lebt. Ursprünglich aus dem Bauwesen, habe ich mich zum Softwareentwickler umgeschult, weil mich IT schon immer fasziniert hat. Heute arbeite ich leidenschaftlich an innovativen Weblösungen und entwickle ständig meine Fähigkeiten weiter.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Fokus auf JavaScript/React, ergänzt durch Erfahrung mit CSS/Tailwind, Design-Tools und mehr. Täglich am Lernen, um Full-Stack-JavaScript-Entwickler zu werden.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 ">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mt-16" />
            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">marko.jurisa@proton.me</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* 3D globe removed for SSG; replaced with CTA */}
            <div>
              <p className="grid-headtext">Ich bin flexibel und remote-verfügbar.</p>
              <p className="grid-subtext">Ich lebe in Mitteldeutschland und bin weltweit für Remote-Arbeit verfügbar.</p>
              <Button name="Kontaktiere mich" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Meine Leidenschaft für das Programmieren</p>
              <p className="grid-subtext">Als leidenschaftlicher Junior-Entwickler möchte ich in die Welt des JavaScript eintauchen und meine Fähigkeiten ständig erweitern.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

