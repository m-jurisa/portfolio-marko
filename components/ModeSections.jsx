"use client";
import { useEffect, useState } from 'react';
import Button from './Button';

function setQueryParam(key, value) {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState({}, '', url.toString());
}

const FullTimeSection = () => (
  <section className="c-space my-16" id="vollzeit">
    <h2 className="head-text mb-6">Vollzeitstelle</h2>
    <div className="grid md:grid-cols-2 gap-6 text-white-600">
      <div id="bewerbungsunterlagen" className="grid-container">
        <h3 className="grid-headtext">Bewerbungsunterlagen</h3>
        <p className="grid-subtext">Lebenslauf, relevante Projekte, Ausbildung und Zertifikate. Auf Anfrage passe ich Unterlagen an die Stelle an.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Stellenarten</h3>
        <p className="grid-subtext">Softwareentwicklung (React/Next.js), Frontend Engineering, UI-Integration, Junior Full-Stack.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Verfügbarkeit</h3>
        <p className="grid-subtext">Ab sofort, flexibel nach Absprache.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Standortpräferenz</h3>
        <p className="grid-subtext">Remote-first in Deutschland; Hybrid im Raum Mitteldeutschland möglich.</p>
      </div>
      <div className="grid-container md:col-span-2">
        <h3 className="grid-headtext">Gehaltsrahmen (optional)</h3>
        <p className="grid-subtext">Je nach Rolle und Verantwortung; offen für marktübliche Konditionen.</p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a href="#bewerbungsunterlagen" className="w-fit"><Button name="Bewerbungsunterlagen anfragen" isBeam /></a>
      <a href="/resume.pdf" download className="w-fit"><Button name="Lebenslauf herunterladen" /></a>
      <a href="/de/kontakt" className="w-fit"><Button name="Kontakt für Bewerbung" /></a>
    </div>
  </section>
);

const FreelanceSection = () => (
  <section className="c-space my-16" id="freiberuflich">
    <h2 className="head-text mb-6">Freiberuflich auf Projektbasis</h2>
    <div className="grid md:grid-cols-3 gap-6" id="leistungen">
      <div className="grid-container">
        <h3 className="grid-headtext">Starter</h3>
        <p className="grid-subtext">Landingpage oder kleine Website, Grund-SEO, Basis-Animationen.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Business</h3>
        <p className="grid-subtext">Mehrseitige Site, CMS-Integration, Performance-Optimierung, Tracking.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Custom</h3>
        <p className="grid-subtext">Individuelle Komponenten, komplexe Animationen, API-Integrationen.</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <div className="grid-container">
        <h3 className="grid-headtext">Stunden-/Tagessatz</h3>
        <p className="grid-subtext">Range je nach Umfang und Dringlichkeit. Transparente Schätzung vor Projektstart.</p>
      </div>
      <div className="grid-container">
        <h3 className="grid-headtext">Ablauf</h3>
        <ul className="grid-subtext list-disc ml-5">
          <li>Kurzbriefing & Ziele</li>
          <li>Angebot & Timing</li>
          <li>Umsetzung in Iterationen</li>
          <li>Abnahme & Übergabe</li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a href="/de/kontakt?typ=projekt" className="w-fit"><Button name="Projekt anfragen" isBeam /></a>
      <a href="#leistungen" className="w-fit"><Button name="Leistungen & Pakete" /></a>
      <a href="/de/kontakt?typ=erstgespraech" className="w-fit"><Button name="Erstgespräch buchen" /></a>
    </div>
  </section>
);

export default function ModeSections({ initialMode = 'vollzeit' }) {
  const [mode, setMode] = useState(initialMode);

  // Initialize from localStorage if no explicit URL param
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const qp = url.searchParams.get('modus');
    if (!qp) {
      const stored = localStorage.getItem('modus-de');
      if (stored === 'vollzeit' || stored === 'freiberuflich') setMode(stored);
    }
  }, []);

  useEffect(() => {
    setQueryParam('modus', mode);
    if (typeof window !== 'undefined') localStorage.setItem('modus-de', mode);
  }, [mode]);

  return (
    <section className="c-space">
      <div className="flex justify-center mb-6">
        <div className="segmented" role="tablist" aria-label="Modus wählen">
          <button
            className={`segment ${mode === 'vollzeit' ? 'is-active' : ''}`}
            onClick={() => setMode('vollzeit')}
            role="tab"
            aria-selected={mode === 'vollzeit'}
          >
            Vollzeitstelle
          </button>
          <button
            className={`segment ${mode === 'freiberuflich' ? 'is-active' : ''}`}
            onClick={() => setMode('freiberuflich')}
            role="tab"
            aria-selected={mode === 'freiberuflich'}
          >
            Freiberuflich
          </button>
        </div>
      </div>

      {mode === 'vollzeit' ? <FullTimeSection /> : <FreelanceSection />}
    </section>
  );
}
