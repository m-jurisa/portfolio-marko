"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";

const VALID = ["vollzeit", "freiberuflich"];

/* SSR-safe: only path/query, no localStorage here */
function parseModeFromUrl(pathname, searchParams) {
  const p = (pathname || "").toLowerCase();
  if (p.includes("/vollzeit")) return "vollzeit";
  if (p.includes("/freiberuflich")) return "freiberuflich";

  const qp = searchParams?.get?.("modus");
  if (VALID.includes(qp)) return qp;

  return "freiberuflich"; // single stable default for SSR & first client render
}

/* URL explicitly forces the mode? */
function urlHasExplicitMode(pathname, searchParams) {
  const p = (pathname || "").toLowerCase();
  if (p.includes("/vollzeit") || p.includes("/freiberuflich")) return true;
  const qp = searchParams?.get?.("modus");
  return VALID.includes(qp);
}

/** Inner component that actually uses the hooks */
function AboutInner({ locale = "de" }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // derive initial from URL only
  const [mode, setMode] = useState(() => parseModeFromUrl(pathname, searchParams));
  const [hasCopied, setHasCopied] = useState(false);

  // Keep in sync when navigation changes
  useEffect(() => {
    setMode(parseModeFromUrl(pathname, searchParams));
    // Using toString() is a safe dep to detect query changes
  }, [pathname, searchParams?.toString()]);

  // If URL doesn't dictate the mode, allow localStorage to influence after mount
  useEffect(() => {
    const explicit = urlHasExplicitMode(pathname, searchParams);
    if (!explicit && typeof window !== "undefined") {
      const key = locale === "de" ? "modus-de" : "modus-en";
      const stored = window.localStorage.getItem(key);
      if (VALID.includes(stored)) setMode(stored);
    }
    function onStorage(e) {
      if (!explicit) {
        const key = locale === "de" ? "modus-de" : "modus-en";
        if (e.key === key && VALID.includes(e.newValue)) setMode(e.newValue);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [pathname, searchParams?.toString(), locale]);

  const isVollzeit = mode === "vollzeit";
  const isFreelance = mode === "freiberuflich";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText("marko.jurisa@proton.me");
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 1600);
    }
  };

  return (
    <section className="c-space my-20 pt-16" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro / Bio */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.webp" alt="Profil" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hallo, ich bin Marko,</p>
              <p className="grid-subtext">
                kroatischer Staatsbürger, der seit <strong>knapp 9&nbsp;Jahren</strong> in Deutschland lebt.
                Vom Bauwesen in die IT gewechselt – aus echter Leidenschaft für Technologie. Ich lerne <strong>sehr schnell</strong> und liefere zuverlässig: klare Kommunikation, saubere Umsetzung, messbare Ergebnisse.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack & Fokus — modusabhängig */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.webp" alt="Tech Stack" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack & Fokus</p>

              {isVollzeit ? (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li><strong>Frontend:</strong> React/Next.js (App Router), SSG/ISR, Tailwind, Headless UI.</li>
                  <li><strong>Architektur:</strong> modulare Komponenten, Zustand mit React Query/Zustand, Trennung UI/Domain.</li>
                  <li><strong>Qualität:</strong> ESLint/Prettier, vitest/jest nach Bedarf, CI (GitHub Actions), PR-Reviews.</li>
                  <li><strong>Performance:</strong> Code-Splitting, Bild-Optimierung, Web Vitals, Lighthouse-Budgets.</li>
                  <li><strong>Backend:</strong> Node/Express oder Go; DB: PostgreSQL/MySQL/SQLite.</li>
                  <li><strong>Security-Basics:</strong> Input-Validierung, sichere Defaults, Least-Privilege, getrennte Umgebungen.</li>
                </ul>
              ) : (
                <ul className="grid-subtext list-disc ml-5 space-y-1.5">
                  <li><strong>Schnell live:</strong> Landingpages, kleine Apps, optionales CMS, SEO-Meta & OpenGraph.</li>
                  <li><strong>Stack nach Ziel:</strong> Next.js für SSG/ISR, <strong>Go + htmx</strong> für schlanke Interfaces, <strong>Python</strong> für LLM/Automation.</li>
                  <li><strong>Integrationen:</strong> REST/GraphQL, E-Mail/CRM, Analytics, Payment, einfache 3D/Three.js-Effekte.</li>
                  <li><strong>Marketing-Impact:</strong> sauberes Design, Micro-Motion, schnelle Ladezeiten, messbare KPIs.</li>
                  <li><strong>Automatisierung:</strong> Content-Pipelines, Bild/Video-Batches, Skripte für wiederkehrende Tasks.</li>
                  <li><strong>Budget-fokussiert:</strong> klare Angebote, fixe Milestones, pragmatische Umsetzung.</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Kontakt */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.webp" alt="Kontakt" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mt-16" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Kontakt</p>
              <button type="button" className="copy-container" onClick={handleCopy} aria-live="polite">
                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt={hasCopied ? "E-Mail kopiert" : "E-Mail kopieren"} />
                <p className="lg:text-2xl md:text-xl font-medium text-white">marko.jurisa@proton.me</p>
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
                  <li>Remote-first (DE); Hybrid in Mitteldeutschland möglich.</li>
                  <li>Vor Ort: Kreis Heilbronn &amp; Ludwigsburg.</li>
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
              <a href="#contact" className="w-full inline-block">
                <Button name="Kontaktiere mich" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Arbeitsweise */}
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid3.webp" alt="Arbeitsweise" className="w-full sm:h-[266px] h-fit object-contain" />
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

/** Outer wrapper that provides the Suspense boundary */
export default function About({ locale = "de" }) {
  return (
    <Suspense fallback={null}>
      <AboutInner locale={locale} />
    </Suspense>
  );
}
