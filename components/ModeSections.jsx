"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

/* URL param helper */
function setQueryParam(key, value) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState({}, "", url.toString());
}

const ACCENTS = {
  vollzeit:      { hex: "#f59e0b", rgb: "245 158 11" },
  freiberuflich: { hex: "#f97316", rgb: "249 115 22" },
};

/* UI parts */
function StatStrip({ items = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-2">
      {items.map((t, i) => (
        <span
          key={i}
          className="chip !mb-0 !mr-0 border-white/10 bg-white/[0.04] text-white/80"
          title={t}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div
      className="
        grid-container card-animated group
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
        hover:border-white/20
        ring-0 ring-transparent hover:ring-1
      "
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.35)" }}
    >
      <h3 className="grid-headtext">{title}</h3>
      <div className="grid-subtext">{children}</div>
    </div>
  );
}

/* Sections */
const FullTimeSection = ({ locale = "de" }) => {
  const de = locale === "de";
  return (
    <section className="c-space my-16" id="vollzeit">
      <h2 className="head-text mb-2">{de ? "Vollzeitstelle" : "Full-time role"}</h2>
      <p className="text-white/70 max-w-3xl mb-6">
        {de
          ? "Fokus: belastbare Frontends, klare Architektur, saubere Übergaben. Schnelle Umsetzung mit Qualität und Security-Basics – ohne Overhead."
          : "Focus: robust frontends, clear architecture, clean handovers. Fast execution with quality and security basics—without overhead."}
      </p>

      <StatStrip
        items={
          de
            ? [
                "Start: kurzfristig",
                "Remote-first (DE)",
                "Hybrid – Mitteldeutschland",
                "Vor Ort – Kreis Heilbronn & Ludwigsburg",
                "Sprachen: Deutsch, Englisch, Kroatisch",
                "Code-Reviews & CI/CD bevorzugt",
              ]
            : [
                "Start: short-notice",
                "Remote-first (DE)",
                "Hybrid – Central Germany",
                "On-site – Heilbronn & Ludwigsburg districts",
                "Languages: German, English, Croatian",
                "Prefer code reviews & CI/CD",
              ]
        }
      />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card title={de ? "Rollen & Verantwortungen" : "Roles & responsibilities"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Softwareentwicklung (React/Next.js, App Router)</li>
                <li>Frontend Engineering, UI-Integration, Design-Handoff</li>
                <li>Junior Full-Stack (Node/Go), API-Anbindung</li>
                <li>Server-getriebene UIs mit <strong>Go + htmx</strong> für schlanke Lösungen</li>
              </>
            ) : (
              <>
                <li>Software engineering (React/Next.js, App Router)</li>
                <li>Frontend engineering, UI integration, design handoff</li>
                <li>Junior full-stack (Node/Go), API integration</li>
                <li>Server-driven UIs with <strong>Go + htmx</strong> for lean solutions</li>
              </>
            )}
          </ul>
        </Card>

        <Card title={de ? "Tooling & Qualität" : "Tooling & quality"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>SSG/ISR, Tailwind, Code-Splitting, Web Vitals</li>
                <li>ESLint/Prettier, Preview-Deployments (PR-Previews)</li>
                <li>GitHub Actions, leichte E2E/Smoke-Checks</li>
                <li>
                  <strong>Go + htmx</strong> für serverseitig gerenderte, performante Oberflächen
                  (Dashboards, interne Tools, latenzkritische Formulare)
                </li>
                <li>Neue Technologien zügig evaluieren und produktiv einsetzen (Evaluation → PoC → Rollout)</li>
              </>
            ) : (
              <>
                <li>SSG/ISR, Tailwind, code splitting, Web Vitals</li>
                <li>ESLint/Prettier, preview deployments (PR previews)</li>
                <li>GitHub Actions, lightweight E2E/smoke checks</li>
                <li>
                  <strong>Go + htmx</strong> for server-rendered, high-throughput UIs
                  (dashboards, internal tools, low-latency forms)
                </li>
                <li>Rapidly evaluate and adopt new tech (evaluation → PoC → rollout)</li>
              </>
            )}
          </ul>
        </Card>

        <Card title={de ? "Bewerbungsunterlagen" : "Application docs"}>
          <p>
            {de
              ? "Lebenslauf, relevante Projekte, Ausbildung & Zertifikate. Auf Wunsch passe ich die Unterlagen an die Stelle an."
              : "Resume, relevant projects, education & certificates. Documents can be tailored to the position on request."}
          </p>
          <StatStrip
            items={
              de
                ? ["Code-Samples auf Anfrage", "Referenzen nach Absprache"]
                : ["Code samples on request", "References available"]
            }
          />
        </Card>

        <Card title={de ? "Rahmen" : "Logistics"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Verfügbarkeit: ab sofort, flexibel nach Absprache</li>
                <li>Gehaltsrahmen: marktüblich, abhängig von Rolle & Scope</li>
                <li>Standort: Remote-first (DE); Hybrid/On-site siehe oben</li>
              </>
            ) : (
              <>
                <li>Availability: immediate, flexible by agreement</li>
                <li>Comp range: market-based, role/scope dependent</li>
                <li>Location: remote-first (DE); hybrid/on-site as above</li>
              </>
            )}
          </ul>
        </Card>
      </div>

      {/* CONTACT ANCHOR */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="#bewerbungsunterlagen" className="w-fit">
          <Button name={de ? "Bewerbungsunterlagen anfragen" : "Request application docs"} isBeam />
        </a>
        <a href="#contact" className="w-fit">
          <Button name={de ? "Kontakt für Bewerbung" : "Contact for application"} />
        </a>
      </div>
    </section>
  );
};

const FreelanceSection = ({ locale = "de" }) => {
  const de = locale === "de";
  return (
    <section className="c-space my-16" id="freiberuflich">
      <h2 className="head-text mb-2">{de ? "Freiberuflich auf Projektbasis" : "Freelance (project-based)"}</h2>
      <p className="text-white/70 max-w-3xl mb-6">
        {de ? (
          <>
            Ziel: <span className="text-white">schnelle, kosten­effiziente Ergebnisse</span> mit messbarem Impact. Stack nach Ziel:
            <span className="text-white"> Next.js</span> für SSG/ISR,
            <span className="text-white"> Go + htmx</span> für server-getriebene, extrem schnelle Web-Apps mit minimalem JS,
            <span className="text-white"> Python</span> für LLM-Workflows & Automatisierung.
            Zusätzlich: <span className="text-white">Videobearbeitung & Motion Graphics</span> (Showreels, Social Assets, Werbeclips).
            Neue Tools werden <span className="text-white">zügig evaluiert und produktiv gemacht</span>.
          </>
        ) : (
          <>
            Goal: <span className="text-white">fast, cost-efficient delivery</span> with measurable impact. Stack by outcome:
            <span className="text-white"> Next.js</span> for SSG/ISR,
            <span className="text-white"> Go + htmx</span> for server-driven, ultra-fast web apps with minimal JS,
            <span className="text-white"> Python</span> for LLM workflows & automation.
            Additionally: <span className="text-white">video editing & motion graphics</span> (showreels, social assets, promos).
            New tools are <span className="text-white">rapidly evaluated and put into production</span>.
          </>
        )}
      </p>

      <StatStrip
        items={
          de
            ? [
                "Angebot in 24–48 h",
                "Kick-off in 2–5 Tagen",
                "Transparente Milestones",
                "Fixpreise möglich",
                "Remote-first (DE) · Hybrid Mitteldeutschland · Vor Ort: Heilbronn & Ludwigsburg",
                "Sprachen: Deutsch, Englisch, Kroatisch",
              ]
            : [
                "Quote in 24–48 h",
                "Kickoff in 2–5 days",
                "Transparent milestones",
                "Fixed pricing possible",
                "Remote-first (DE) · Hybrid Central Germany · On-site: Heilbronn & Ludwigsburg",
                "Languages: German, English, Croatian",
              ]
        }
      />

      <div className="grid md:grid-cols-3 gap-6 mt-6" id="leistungen">
        <Card title={de ? "Starter" : "Starter"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Landingpage oder kleine Website</li>
                <li>Grund-SEO, OG-Tags, Basis-Animationen</li>
                <li>Deployment & Tracking</li>
                <li>Social Assets (Kurzclips/Grafiken) bei Bedarf</li>
              </>
            ) : (
              <>
                <li>Landing page or small site</li>
                <li>Basic SEO, OG tags, basic animations</li>
                <li>Deployment & analytics</li>
                <li>Social assets (short clips/graphics) on demand</li>
              </>
            )}
          </ul>
        </Card>

        <Card title={de ? "Business" : "Business"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Mehrseitige Site, optionales CMS</li>
                <li>Performance-Optimierung, Best-Practices</li>
                <li>Analytics, Funnels, Reporting</li>
                <li>Leichte Marketing-Motion (Micro-Interactions)</li>
              </>
            ) : (
              <>
                <li>Multi-page site, optional CMS</li>
                <li>Performance optimization, best practices</li>
                <li>Analytics, funnels, reporting</li>
                <li>Light marketing motion (micro-interactions)</li>
              </>
            )}
          </ul>
        </Card>

        <Card title={de ? "Custom" : "Custom"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Maßgeschneiderte, sehr schnelle Web-Apps auf Basis <strong>Go + htmx</strong> (server-getrieben, minimal JS)</li>
                <li>API-Integrationen, Auth, einfache 3D/Three.js</li>
                <li><strong>Video Editing & Motion Graphics</strong> (Showreels, Social Assets, Werbeclips)</li>
                <li>Automatisierung (Bild/Video, Content-Pipelines) … und mehr</li>
              </>
            ) : (
              <>
                <li>Custom ultra-fast web apps using <strong>Go + htmx</strong> (server-driven, minimal JS)</li>
                <li>API integrations, auth, simple 3D/Three.js</li>
                <li><strong>Video editing & motion graphics</strong> (showreels, social assets, promos)</li>
                <li>Automation (image/video, content pipelines) … and more</li>
              </>
            )}
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card title={de ? "Ablauf" : "Process"}>
          <ol className="list-decimal ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Kurzbriefing & Ziele</li>
                <li>Angebot & Timing</li>
                <li>Umsetzung in Iterationen (Previews)</li>
                <li>Abnahme & Übergabe (Docs, Handover)</li>
              </>
            ) : (
              <>
                <li>Short brief & goals</li>
                <li>Quote & timeline</li>
                <li>Iterative delivery (previews)</li>
                <li>Acceptance & handover (docs)</li>
              </>
            )}
          </ol>
        </Card>

        <Card title={de ? "Sätze & Abrechnung" : "Rates & billing"}>
          <ul className="list-disc ml-5 space-y-1.5">
            {de ? (
              <>
                <li>Stunden-/Tagessatz je nach Umfang & Dringlichkeit</li>
                <li>Fixpreis für klar definierten Scope möglich</li>
                <li>Transparente Zeiterfassung & Reports</li>
              </>
            ) : (
              <>
                <li>Hourly/daily rate by scope & urgency</li>
                <li>Fixed price for clearly defined scope</li>
                <li>Transparent time tracking & reports</li>
              </>
            )}
          </ul>
        </Card>
      </div>

      {/* CONTACT ANCHOR */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="#contact" className="w-fit">
          <Button name={de ? "Projekt anfragen" : "Request a project"} isBeam />
        </a>
        <a href="#leistungen" className="w-fit">
          <Button name={de ? "Leistungen & Pakete" : "Services & packages"} />
        </a>
        <a href="#contact" className="w-fit">
          <Button name={de ? "Erstgespräch buchen" : "Book intro call"} />
        </a>
      </div>
    </section>
  );
};

/* Wrapper */
export default function ModeSections({ initialMode = "vollzeit", locale = "de" }) {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const qp = url.searchParams.get("modus");
    if (!qp) {
      const key = locale === "de" ? "modus-de" : "modus-en";
      const stored = localStorage.getItem(key);
      if (stored === "vollzeit" || stored === "freiberuflich") setMode(stored);
    }
  }, [locale]);

  useEffect(() => {
    setQueryParam("modus", mode);
    if (typeof window !== "undefined") {
      const key = locale === "de" ? "modus-de" : "modus-en";
      localStorage.setItem(key, mode);
    }
  }, [mode, locale]);

  const accent = ACCENTS[mode] ?? ACCENTS.vollzeit;

  return (
    <section
      className="c-space"
      style={{ ["--accent"]: accent.hex, ["--accent-rgb"]: accent.rgb }}
    >
      <div className="flex justify-center mb-6">
        <div className="segmented" role="tablist" aria-label={locale === "de" ? "Modus wählen" : "Select mode"}>
          <button
            className={`segment ${mode === "vollzeit" ? "is-active" : ""}`}
            onClick={() => setMode("vollzeit")}
            role="tab"
            aria-selected={mode === "vollzeit"}
          >
            {locale === "de" ? "Vollzeitstelle" : "Full-time"}
          </button>
          <button
            className={`segment ${mode === "freiberuflich" ? "is-active" : ""}`}
            onClick={() => setMode("freiberuflich")}
            role="tab"
            aria-selected={mode === "freiberuflich"}
          >
            {locale === "de" ? "Freiberuflich" : "Freelance"}
          </button>
        </div>
      </div>

      {mode === "vollzeit" ? (
        <FullTimeSection locale={locale} />
      ) : (
        <FreelanceSection locale={locale} />
      )}
    </section>
  );
}
