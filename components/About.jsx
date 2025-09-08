"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

/* Resolve active modus from URL → localStorage → default */
const VALID = ["vollzeit", "freiberuflich"];
function readMode(locale = "de") {
  if (typeof window === "undefined") return "vollzeit";
  const url = new URL(window.location.href);
  const qp = url.searchParams.get("modus");
  if (VALID.includes(qp)) return qp;
  const key = locale === "de" ? "modus-de" : "modus-en";
  const stored = window.localStorage.getItem(key);
  if (VALID.includes(stored)) return stored;
  return "vollzeit";
}

export default function About({ locale = "de" }) {
  const [mode, setMode] = useState("vollzeit");
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setMode(readMode(locale));
  }, [locale]);

  const isVollzeit = mode === "vollzeit";
  const isFreelance = mode === "freiberuflich";

  const handleCopy = () => {
    navigator.clipboard.writeText("marko.jurisa@proton.me");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 1600);
  };

  return (
    <section className="c-space my-20 pt-16" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro / Bio (dein Text, unverändert) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Profil"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
           <div>
              <p className="grid-headtext">Hallo, ich bin Marko,</p>
              <p className="grid-subtext">
                kroatischer Staatsbürger, der seit <strong>knapp 9&nbsp;Jahren</strong> in
                Deutschland lebt. Vom Bauwesen in die IT gewechselt – aus echter
                Leidenschaft für Technologie. Ich lerne <strong>sehr schnell</strong> und liefere
                zuverlässig: klare Kommunikation, saubere Umsetzung, messbare Ergebnisse.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack & Fokus — modusabhängig, knapp und technisch */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Tech Stack"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack & Fokus</p>

              {isVollzeit ? (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li>
                    <strong>Frontend:</strong> React/Next.js (App Router), SSG/ISR,
                    Tailwind, Headless UI, a11y-Basics.
                  </li>
                  <li>
                    <strong>Architektur:</strong> modulare Komponenten, Zustand mit
                    React Query/Zustand, Trennung UI/Domain.
                  </li>
                  <li>
                    <strong>Qualität:</strong> ESLint/Prettier, vitest/jest nach Bedarf,
                    CI (GitHub Actions), PR-Reviews.
                  </li>
                  <li>
                    <strong>Performance:</strong> Code-Splitting, Bild-Optimierung,
                    Web Vitals, Lighthouse-Budgets.
                  </li>
                  <li>
                    <strong>Backend:</strong> Node/Express oder Go; DB: PostgreSQL/MySQL/SQLite.
                  </li>
                  <li>
                    <strong>Security-Basics:</strong> Input-Validierung, sichere Defaults,
                    Least-Privilege, getrennte Umgebungen.
                  </li>
                </ul>
              ) : (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li>
                    <strong>Schnell live:</strong> Landingpages, kleine Apps, optionales CMS,
                    SEO-Meta & OpenGraph.
                  </li>
                  <li>
                    <strong>Stack nach Ziel:</strong> Next.js für SSG/ISR, <strong>Go + htmx</strong> für
                    schlanke Interfaces, <strong>Python</strong> für LLM/Automation.
                  </li>
                  <li>
                    <strong>Integrationen:</strong> REST/GraphQL, E-Mail/CRM, Analytics, Payment,
                    einfache 3D/Three.js-Effekte.
                  </li>
                  <li>
                    <strong>Marketing-Impact:</strong> sauberes Design, Micro-Motion, schnelle Ladezeiten,
                    messbare KPIs.
                  </li>
                  <li>
                    <strong>Automatisierung:</strong> Content-Pipelines, Bild/Video-Batches, Skripte
                    für wiederkehrende Tasks.
                  </li>
                  <li>
                    <strong>Budget-fokussiert:</strong> klare Angebote, fixe Milestones, pragmatische Umsetzung.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Kontakt */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Kontakt"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mt-16"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Kontakt</p>
              <button
                type="button"
                className="copy-container"
                onClick={handleCopy}
                aria-live="polite"
              >
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt={hasCopied ? "E-Mail kopiert" : "E-Mail kopieren"}
                />
                <p className="lg:text-2xl md:text-xl font-medium text-white">
                  marko.jurisa@proton.me
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Verfügbarkeit / CTA */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">
                {isVollzeit ? "Verfügbarkeit (Vollzeit)" : "Verfügbarkeit (Freiberuflich)"}
              </p>
              {isVollzeit ? (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li>Remote in DE; Hybrid in Mitteldeutschland möglich.</li>
                  <li>Teams mit Code-Reviews, sauberem Git-Flow und CI/CD bevorzugt.</li>
                  <li>Mehrwert: belastbare Frontends, klare Kommunikation, Tempo.</li>
                </ul>
              ) : (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li>Remote weltweit; schneller Projektstart und klare Timelines.</li>
                  <li>Scope nach Ziel/KPI; transparente Angebote, Fixpreise möglich.</li>
                  <li>Mehrwert: Speed, Kosten­effizienz, Automatisierung, Kreativität.</li>
                </ul>
              )}
              <Button name="Kontaktiere mich" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Arbeitsweise */}
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Arbeitsweise"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Arbeitsweise</p>
              <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                <li>Ständige Verbesserung, schnelle Einarbeitung, saubere Architektur.</li>
                <li>Security-Grundlagen, Performance-Budgets, gute Developer-Experience.</li>
                <li>Design, Video und Automatisierung als Booster für Produkt & Marketing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
