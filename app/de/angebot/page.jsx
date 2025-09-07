import PageIntro from '../../../components/PageIntro';

export default function Angebot() {
  return (
    <>
      <PageIntro
        title={(<><span>Mein </span><span className="accent-text">Angebot</span><span> — passgenau für Content‑Creator & Unternehmen</span></>)}
        subtitle="Wähle aus den Bereichen, die zu deinem Bedarf passen. Transparente Abläufe und klare Ergebnisse."
      />
      <main className="max-w-7xl mx-auto c-space py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">Für YouTuber & Content‑Creator</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Intro/Outro‑Clips, Lower Thirds, Social‑Assets</li>
              <li>Showreels, Schnitt & Color Grading</li>
              <li>Thumbnails & Branding‑Pakete</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">Für Unternehmen</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Landingpages & Microsites (Next.js, Tailwind)</li>
              <li>Produkt‑Mockups & 3D‑Assets</li>
              <li>Präsentationen & Kampagnen‑Assets</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">Für Startups & Teams</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Design System Light, UI‑Prototyping</li>
              <li>MVP‑Frontends, API‑Integration</li>
              <li>Brand‑Starter & Social‑Kit</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">Individuelle Pakete</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Mix aus Web, Video, 3D & Branding</li>
              <li>Workshops & Content‑Sprints</li>
              <li>Flexible Abrechnung (Tagessatz/Festpreis)</li>
            </ul>
          </details>
        </div>
      </main>
    </>
  );
}

