import React from 'react';
import iconBook from '../images/icons/icon-books.webp';
import { motion } from 'framer-motion';

import iconPhone from '../images/icons/icon-phone.webp';
import iconHelpdesk from '../images/icons/icon-helpdesk.webp';
import iconCleaner from '../images/icons/icon-cleaner.webp';
import iconCleanerTwo from '../images/icons/icon-cleaner-2.webp';
import iconKitchen from '../images/icons/icon-kitchen.webp';
import iconSchool from '../images/icons/icon-school.webp';
import iconWascher from '../images/icons/icon-wasching-maschine.webp';
import iconWebDev from '../images/icons/icon-web-dev.webp';

const Timeline = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const dotVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="sub-section-alternative py-12 " id="timeline">
            <div className="container mx-auto p-6 sm:mt-96 md:mt-16 w-5/6">
                {/* Timeline Container */}
                <div className="relative flex flex-col md:grid md:grid-cols-9 items-center text-center md:text-left text  ">
                    {/* Line running through the timeline */}
                    <div className="absolute md:block border border-gray-300 w-0.5 h-full  left-1/2 transform -translate-x-1/2 hidden"></div>

                    {/* Timeline Items */}
                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4  mb-8 flex justify-end order-3 md:order-1 md:text-right "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold ">Berufsausbildung zum Bautehniker</h3>
                            <p className="text-sm text-white mb-2">
                                Bau und Landvermesser Schulzentrum Osijek Kroatien | 2009-2013
                            </p>
                            <p className="text-white">Berufsausbildung zum Bautehniker</p>
                        </div>
                    </motion.div>

                    {/* Middle dot */}
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-2 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>

                    {/* Right side */}
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-1 md:order-3 size-2/3 md:size-full "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconBook} alt="Node.js Skill" className="rounded-2xl md:w-4/5" />
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end md:text-right order-4 size-2/3 md:size-full "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconPhone} alt="Phone Skill" className="rounded-2xl md:w-4/5" />
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-5 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-6 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Telefon Verkauf</h3>
                            <p className="text-sm text-white mb-2">Studio Moderna | 2013</p>
                            <p className="text-white ">
                                Bei Studio Oderna war ich im Telefonverkauf tätig, habe Kunden beraten, Angebote
                                erstellt und langfristige Kundenbeziehungen aufgebaut.
                            </p>
                            <p className="text-white mt-4">
                                Mit gezielter Gesprächsführung konnte ich erfolgreich auf Kundenbedürfnisse eingehen und
                                zum Unternehmenswachstum beitragen.
                            </p>
                        </div>
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end order-9 md:order-7 md:text-right "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Helpdesk Support</h3>
                            <p className="text-sm text-white mb-2">T-Mobile Kroatien | 2013 - 2015</p>
                            <p className="text-white">
                                Bei T-Com war ich im 1st-Level-Support für Systemintegration tätig.
                            </p>
                            <p className="text-white mt-4">
                                Dort habe ich technische Anfragen entgegengenommen, einfache Störungen diagnostiziert
                                und Lösungen bereitgestellt.
                            </p>
                            <p className="text-white mt-4">
                                Außerdem leitete ich komplexere Probleme an den 2nd-Level-Support weiter und sorgte für
                                eine reibungslose Kommunikation zwischen den Teams.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-8 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-7 md:order-9 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconHelpdesk} alt="Helpdesk" className="rounded-2xl md:w-4/5" />
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end md:text-right order-10 md:order-10 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconKitchen} alt="Kitchen" className="rounded-2xl md:w-4/5" />
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-11"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Küchenhilfe</h3>
                            <p className="text-sm text-white mb-2">Landgasthof Saalburg | 2016</p>
                            <p className="text-white">
                                Als Küchenhilfe in Saalburg war ich für die Vorbereitung von Zutaten, das Anrichten von
                                Speisen und die Reinigung der Arbeitsbereiche zuständig.
                            </p>
                            <p className="text-white mt-4">
                                Ich unterstützte das Küchenteam bei der täglichen Zubereitung und sorgte für einen
                                reibungslosen Ablauf in der Küche.
                            </p>
                        </div>
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end order-15 md:order-13 md:text-right  "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Wäschemann</h3>
                            <p className="text-sm text-white mb-2">Wäschemann D. Korominas| 2017 - 2019</p>
                            <p className="text-white">
                                Als Wäschemann war ich für das Sortieren, Waschen, Trocknen und Falten von Wäsche
                                verantwortlich.{' '}
                            </p>
                            <p className="text-white mt-4">
                                Ich stellte sicher, dass alle Textilien sauber und gepflegt an die entsprechenden
                                Abteilungen oder Kunden zurückgegeben wurden.
                            </p>
                            <p className="text-white mt-4">
                                Zudem kümmerte ich mich um kleinere Reparaturen und die Wartung der Maschinen.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-13 md:order-15 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconWascher} alt="Wäschemann" className="rounded-2xl md:w-4/5 " />
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end md:text-right order-16 md:order-16 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconCleaner} alt="Cleaner" className="rounded-2xl md:w-4/5" />
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-17"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-18"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Reinigungskraft</h3>
                            <p className="text-sm text-white mb-2">Gegenbauer Services | 2019 - 2020</p>
                            <p className="text-white">
                                Als Reinigungskraft bei Gegenbauer war ich verantwortlich für die Sauberkeit von Büros
                                und öffentlichen Bereichen.{' '}
                            </p>
                            <p className="text-white mt-4">
                                Ich sorgte für hygienische Standards und kümmerte mich um die ordnungsgemäße Entsorgung
                                von Abfällen sowie das Auffüllen von Materialien.
                            </p>
                        </div>
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end order-21 md:order-19 md:text-right  "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold "> Vorarbeiter</h3>
                            <p className="text-sm text-white mb-2">Gegenbauer Services | 2021</p>
                            <p className="text-white">
                                Als Vorarbeiter in einer Reinigungsfirma leitete ich das Team, überwachte die
                                Arbeitsqualität und koordinierte die Einsatzpläne.
                                <p className="text-white mt-4">
                                    Ich sorgte für einen reibungslosen Ablauf und stand als Ansprechpartner für Kunden
                                    zur Verfügung.
                                </p>
                            </p>
                        </div>
                    </motion.div>
                    {/* Middle dot */}
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>

                    {/* Right side */}
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-19 md:order-21 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconCleanerTwo} alt="Cleaner" className="rounded-2xl md:w-4/5" />
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end order-22 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconSchool} alt="School" className="rounded-2xl md:w-4/5" />
                    </motion.div>

                    {/* Middle dot */}
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center items-center order-23"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>

                    {/* Right side */}
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">
                                Ausbildung zum Fachinformatiker Anwendungsentwicklung
                            </h3>
                            <p className="text-sm text-white">Lutz & Grub AG | 2022 - 2024</p>
                        </div>
                    </motion.div>

                    {/* Left side */}
                    <motion.div
                        className="timeline-item md:col-start-1 md:col-span-4 mb-8 flex justify-end order-29 md:order-25 md:text-right "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <div className="w-full md:w-3/4">
                            <h3 className="text-lg font-semibold">Berufspraktikum</h3>
                            <p className="text-sm text-white mb-2">Dots United | 2024</p>
                            <p className="text-white">
                                Während meines Praktikums bei Dots United erstellte ich im Abschlussprojekt ein
                                Dashboard für den öffentlichen Verkehr.
                                <p className="text-white mt-4">
                                    Dabei nutzte ich die Open Data API des VRN (Verkehrsverbund Rhein-Neckar), um
                                    Echtzeitdaten anzuzeigen und eine benutzerfreundliche Oberfläche zur Verfügung zu
                                    stellen.
                                </p>
                            </p>
                            <p className="text-white mt-4">
                                Das Projekt beinhaltete die Integration der API sowie die Gestaltung des Frontends.
                            </p>
                        </div>
                    </motion.div>

                 

                    {/* Right side */}
                    <motion.div
                        className="timeline-item md:col-start-6 md:col-span-4 mb-8 order-27 md:order-27 size-2/3 md:size-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img src={iconWebDev} alt="Web Development" className="rounded-2xl md:w-4/5 " />
                    </motion.div>
                    <motion.div
                        className="md:col-start-5 md:col-span-1 mb-8 flex flex-col justify-center order-28 md:order-26 items-center "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dotVariants}
                    >
                        <div className="w-8 h-8 bg-primary rounded-full"></div>

                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-primary mt-2 block md:hidden"></div>
                        </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Timeline;
