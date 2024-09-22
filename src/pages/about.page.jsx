import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('marko.jurisa@proton.me');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 pt-16" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png " alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hallo, ich bin Marko, </p>
              <p className="grid-subtext">
                Ein kroatischer Staatsbürger, der seit über 7,5 Jahren in Deutschland lebt.   Ursprünglich aus dem Bauwesen, habe ich mich zum Softwareentwickler umgeschult, weil  mich IT schon immer fasziniert hat. Heute arbeite ich leidenschaftlich an innovativen    Weblösungen und entwickle ständig meine Fähigkeiten weiter. Meine Motivation liegt     darin, die Technologie zu nutzen, um positive Veränderungen zu bewirken.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                 In der Schule lag mein Fokus auf C#, aber ich lernte auch andere Sprachen. Im Praktikum erlernte ich PHP und entwickelte in meinem Abschlussprojekt ein Dashboard mit JavaScript und API. Das weckte meine Begeisterung für JavaScript, und heute lerne ich täglich, um Full-Stack-JavaScript-Entwickler zu werden. Zusätzlich habe ich Skills in Photoshop, Blender und mehr.


              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2 ">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mt-16"
            />

            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">marko.jurisa@proton.me</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 48.7831, lng: 9.1818, text: 'Stuttgart, Germany', color: 'white', size: 15  }]}
              />
            </div>
            <div>
            <p className="grid-headtext">Ich bin sehr flexibel bei der Kommunikation über Zeitzonen hinweg und bei verschiedenen Standorten.</p>
            <p className="grid-subtext">Ich lebe in Mitteldeutschland und bin weltweit für Remote-Arbeit verfügbar.</p>
            <Button name="Kontaktiere mich" isBeam containerClass="w-full mt-10" />
            </div>

          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Meine Leidenschaft für das Programmieren</p>
              <p className="grid-subtext">
              Als leidenschaftlicher Junior-Entwickler möchte ich in die Welt des JavaScript eintauchen und meine Fähigkeiten ständig erweitern. Ich freue mich auf neue Herausforderungen und Chancen, weiter zu wachsen.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;