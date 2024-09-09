import React, { useRef, useEffect, useState } from 'react';
import profilna from '../images/profil-picture-blue.png';

function AboutMe() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.3 }, // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`sub-section py-12 p-6 bg-gray-100 clearfix ${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
            id="about-me"
        >
            <h2
                className={`mb-8 md:mb-16 lg:mt-32 xxl:mt-64 sm:text-left  md:text-center ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}
            >
                Über mich
            </h2>
            <div className="container m-auto flex flex-col md:flex-row  ">
                <div
                    className={`information md:w-2/3 text-lg leading-relaxed font-normal ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
                >
                    <p className="mb-8">
                        Hallo, mein Name ist Marko, ich bin 29 Jahre alt und kroatischer Staatsbürger. Seit über 7,5
                        Jahren lebe ich in Deutschland und habe hier meinen beruflichen Werdegang weiterentwickelt.
                        Ursprünglich habe ich meine Ausbildung als Bauzeichner (Techniker) in Kroatien abgeschlossen,
                        wodurch ich ein ausgeprägtes technisches Verständnis entwickelt habe.
                    </p>
                    <p className="mb-8">
                        Da ich nur wenig Berufserfahrung als Bautechniker sammeln konnte, bot sich mir die großartige
                        Gelegenheit, eine Umschulung zum Fachinformatiker für Anwendungsentwicklung zu absolvieren.
                        Dafür bin ich sehr dankbar und mit großer Begeisterung dabei, mich im IT-Bereich zu
                        professionalisieren. Die IT-Branche hat mich schon immer fasziniert, und ich schätze die
                        wertvollen Erfahrungen, die ich in diesem dynamischen Umfeld sammeln konnte.
                    </p>
                    <p className="mb-8">
                        In meiner bisherigen Zeit in der IT-Branche habe ich bereits umfassende praktische Erfahrungen
                        gesammelt, die mir gezeigt haben, dass dies mein beruflicher Weg ist. Ich bin leidenschaftlich
                        daran interessiert, meine Fähigkeiten kontinuierlich weiterzuentwickeln und mich neuen
                        Herausforderungen zu stellen. Meine Motivation in der Anwendungsentwicklung liegt in der
                        Möglichkeit, innovative Lösungen zu entwickeln und Menschen durch Technologie zu unterstützen.
                    </p>
                    <p className="">
                        Ich freue mich darauf, in einem Umfeld zu arbeiten, das kontinuierliches Lernen, Teamarbeit und
                        technologische Innovation fördert. Ich bin bereit, meine Fähigkeiten und mein Engagement in
                        spannende Projekte einzubringen und meinen Beitrag zu einer zukunftsorientierten IT-Welt zu
                        leisten.
                    </p>
                </div>
                <div
                    className={`headshot-container md:w-1/3 md:p-0 mt-8 ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
                >
                    <img className="headshot rounded-full mx-auto  " src={profilna} alt="Marko headshot" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
