"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

/* --- Helpers ----------------------------------------------------------- */
function setQueryParam(key, value) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState({}, "", url.toString());
}

const ACCENTS = {
  vollzeit:       { hex: "#f59e0b", rgb: "245 158 11" }, // amber
  freiberuflich:  { hex: "#f97316", rgb: "249 115 22" }, // orange
};

const VALID_MODES = ["vollzeit", "freiberuflich"];

/* --- Component --------------------------------------------------------- */
export default function Hero({ locale = "de", initialMode = "vollzeit" }) {
  const isDE = locale === "de";

  // State: sync with URL (?modus=) and localStorage (per-locale key)
  const storageKey = isDE ? "modus-de" : "modus-en";
  const [mode, setMode] = useState(
    VALID_MODES.includes(initialMode) ? initialMode : "vollzeit"
  );

  // Initialize from URL or localStorage (only on client)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const qp = url.searchParams.get("modus");
    if (VALID_MODES.includes(qp)) {
      setMode(qp);
      return;
    }
    const stored = localStorage.getItem(storageKey);
    if (VALID_MODES.includes(stored)) setMode(stored);
  }, [storageKey]);

  // Persist to URL + localStorage on change
  useEffect(() => {
    setQueryParam("modus", mode);
    if (typeof window !== "undefined") localStorage.setItem(storageKey, mode);
  }, [mode, storageKey]);

  // Derived flags + accent (section-level)
  const isVollzeit = mode === "vollzeit";
  const isFreelance = mode === "freiberuflich";
  const sectionAccent = isVollzeit ? ACCENTS.vollzeit : ACCENTS.freiberuflich;

  // Copy
  const titleMain = isDE ? "Ich bin verfügbar für" : "Available for";
  const titleAccent = isDE
    ? (isVollzeit ? "eine Vollzeitstelle" : "freiberufliche Projekte")
    : "freelance projects";

const sublineDE = isFreelance
  ? "Schnelle, kosteneffiziente IT-Programmierung und Optimierung: Landingpages & Web-Apps (Next.js, Go+htmx), Performance-Tuning, Automatisierungen, Showreels/Social-Assets und 3D-Produkt-Mockups – fokussiert auf klare Ziele und messbare Wirkung."
  : "Softwareentwicklung und Produktumsetzung: Frontend & Backend (React/Next.js, Node/Go), Webdesign & UI-Integration, Motion Design/Video-Postproduktion sowie einfache 3D-Modellierung – für Teams, die Tempo, Qualität und saubere Architektur verbinden.";


  const sublineEN =
    "Design, video editing, and simple 3D—fast turnarounds, clear communication.";

  return (
    <section
      className="hero-section min-h-screen h-full flex flex-col-reverse sm:flex-col relative"
      style={{ ["--accent"]: sectionAccent.hex, ["--accent-rgb"]: sectionAccent.rgb }}
    >
      <div className="hero-inner flex flex-col gap-6">
        <p className="hero-micro">
          {isDE ? "Hi, ich bin Marko" : "Hi, I'm Marko"}{" "}
          <span className="waving">👋</span> ✨
        </p>
        <p className="muted-text text-base sm:text-lg">
          {isDE
            ? "Softwareentwicklung, Design, Videoproduktion & 3D"
            : "Software engineering, design, video production & 3D"}
        </p>

        {isDE ? (
          <>
            {/* Mode switch: EXACT behavior like ModeSections (buttons + state) */}
            <div className="flex justify-center">
              <div className="segmented" role="tablist" aria-label="Modus wählen">
                <button
                  type="button"
                  className={`segment ${isVollzeit ? "is-active" : ""}`}
                  onClick={() => setMode("vollzeit")}
                  role="tab"
                  aria-selected={isVollzeit}
                  aria-controls="panel-vollzeit"
                >
                  Vollzeitstelle
                </button>
                <button
                  type="button"
                  className={`segment ${isFreelance ? "is-active" : ""}`}
                  onClick={() => setMode("freiberuflich")}
                  role="tab"
                  aria-selected={isFreelance}
                  aria-controls="panel-freiberuflich"
                >
                  Freiberuflich
                </button>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="block">{titleMain}</span>
              <span className="block accent-text">{titleAccent}.</span>
            </h1>
            <p className="muted-text subline">{sublineDE}</p>

            {/* Logos */}
            <div className="mt-2 overflow-hidden">
              <div className="trust-strip marquee">
                <div className="marquee__inner">
                  <img src="/assets/icons/ps.svg" alt="Photoshop" />
                  <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                  <img src="/assets/aftereffects.png" alt="After Effects" />
                  <img src="/assets/figma.svg" alt="Figma" />
                  <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                  <img src="/assets/icons/go.svg" alt="Go" />
                  <img src="/assets/icons/htmx.svg" alt="htmx" />
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  <img src="/assets/icons/ps.svg" alt="" />
                  <img src="/assets/icons/pr.svg" alt="" />
                  <img src="/assets/aftereffects.png" alt="" />
                  <img src="/assets/figma.svg" alt="" />
                  <img src="/assets/cards/card-img-blender.webp" alt="" />
                  <img src="/assets/icons/go.svg" alt="" />
                  <img src="/assets/icons/htmx.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Primary CTAs: highlight active; keep both visible */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/de/vollzeit`}
                className="w-fit"
                aria-current={isVollzeit ? "page" : undefined}
                style={{
                  ["--accent"]: ACCENTS.vollzeit.hex,
                  ["--accent-rgb"]: ACCENTS.vollzeit.rgb,
                }}
                id="panel-vollzeit"
                role="tabpanel"
                aria-labelledby="Vollzeitstelle"
              >
                <Button
                  name="Vollzeitstelle (Festanstellung)"
                  variant={isVollzeit ? "primary" : "secondary"}
                  containerClass="btn-lg sm:w-fit w-full sm:min-w-72"
                />
              </a>

              <a
                href={`/de/freiberuflich`}
                className="w-fit"
                aria-current={isFreelance ? "page" : undefined}
                style={{
                  ["--accent"]: ACCENTS.freiberuflich.hex,
                  ["--accent-rgb"]: ACCENTS.freiberuflich.rgb,
                }}
                id="panel-freiberuflich"
                role="tabpanel"
                aria-labelledby="Freiberuflich"
              >
                <Button
                  name="Freiberuflich auf Projektbasis"
                  variant={isFreelance ? "primary" : "secondary"}
                  containerClass="btn-lg sm:w-fit w-full sm:min-w-72"
                />
              </a>
            </div>

            {/* Secondary rows (conditional, like your original) */}
            {isVollzeit && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a href="#bewerbungsunterlagen" className="w-fit">
                  <Button name="Bewerbungsunterlagen anfragen" variant="primary" containerClass="btn-lg" />
                </a>
                <a href="/resume.pdf" download className="w-fit">
                  <Button name="Lebenslauf herunterladen" variant="secondary" />
                </a>
                <a href="#contact" className="w-fit">
                  <Button name="Kontakt für Bewerbung" variant="secondary" />
                </a>
              </div>
            )}

            {isFreelance && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a href="#contact" className="w-fit">
                  <Button name="Projekt anfragen" variant="primary" containerClass="btn-lg" />
                </a>
                <a href="/de/angebot" className="w-fit">
                  <Button name="Leistungen & Pakete" variant="secondary" />
                </a>
                <a href="#contact" className="w-fit">
                  <Button name="Erstgespräch buchen" variant="secondary" />
                </a>
              </div>
            )}

            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="badge">
                <span className="relative inline-flex h-3 w-3">
                  <span className="btn-ping"></span>
                  <span className="btn-ping_dot"></span>
                </span>
                Verfügbar: DE vor Ort und Hybrid / weltweit Remote
              </div>
              <a
                href="#offer-grid"
                className="text-white/70 btn-lg border border-purple-950 mt-8 text-purple-800 rounded-full hover:text-white/90 text-sm"
              >
                Mehr erfahren ↓
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="hero-title">
              <span className="block">Available for</span>
              <span className="block accent-text">freelance projects.</span>
            </h1>
            <p className="muted-text subline">{sublineEN}</p>

            <div className="mt-2 overflow-hidden">
              <div className="trust-strip marquee">
                <div className="marquee__inner">
                  <img src="/assets/icons/ps.svg" alt="Photoshop" />
                  <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                  <img src="/assets/aftereffects.png" alt="After Effects" />
                  <img src="/assets/figma.svg" alt="Figma" />
                  <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                  <img src="/assets/icons/go.svg" alt="Go" />
                  <img src="/assets/icons/htmx.svg" alt="htmx" />
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  <img src="/assets/icons/ps.svg" alt="" />
                  <img src="/assets/icons/pr.svg" alt="" />
                  <img src="/assets/aftereffects.png" alt="" />
                  <img src="/assets/figma.svg" alt="" />
                  <img src="/assets/cards/card-img-blender.webp" alt="" />
                  <img src="/assets/icons/go.svg" alt="" />
                  <img src="/assets/icons/htmx.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/projects" className="w-fit">
                <Button name="View Projects" variant="primary" containerClass="btn-lg sm:w-fit w-full sm:min-w-48" />
              </a>
              <a href="#contact" className="w-fit">
                <Button name="Contact Me" variant="secondary" containerClass="sm:w-fit w-full sm:min-w-48" />
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a href="#offer-grid" 
                className="text-white/70 btn-lg border border-purple-950 mt-4 text-purple-800 rounded-full hover:text-white/90 text-sm"
              >See more ↓</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
