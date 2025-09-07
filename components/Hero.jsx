"use client";
import Button from './Button';

const Hero = ({ locale, initialMode = 'vollzeit' }) => {
  const isDE = locale === 'de';
  const titleMain = isDE ? 'Ich bin verfügbar für' : 'Available for';
  const titleAccent = isDE
    ? (initialMode === 'vollzeit' ? 'eine Vollzeitstelle' : 'freiberufliche Projekte')
    : 'freelance projects';

  const sublineDE = initialMode === 'freiberuflich'
    ? 'Kurzfristige Projekt-Sprints, Showreels, Social-Assets, 3D-Produkt-Mockups und visuelle Kampagnen, die Markenauftritte stärken und Projekte in Szene setzen.'
    : 'IT-Design, Video-Postproduktion und einfache 3D-Modelle – für Teams, die Tempo und Qualität verbinden.';
  const sublineEN = 'Design, video editing, and simple 3D—fast turnarounds, clear communication.';

  // Use warm accents to match the hero gradient (no green)
  const accentHex = isDE ? (initialMode === 'vollzeit' ? '#f59e0b' : '#f97316') : '#f97316';
  const accentRgb = isDE ? (initialMode === 'vollzeit' ? '245 158 11' : '249 115 22') : '249 115 22';

  return (
    <section className="hero-section min-h-screen h-full flex flex-col-reverse sm:flex-col relative" style={{ ['--accent']: accentHex, ['--accent-rgb']: accentRgb }}>
      <div className="hero-inner flex flex-col gap-6">
        <p className="hero-micro">
          {isDE ? 'Hi, ich bin Marko' : "Hi, I'm Marko"} <span className="waving">👋</span> ✨
        </p>
        <p className="muted-text text-base sm:text-lg">
          {isDE
            ? 'Softwareentwicklung, Design, Videoproduktion & 3D Mockups'
            : 'Software engineering, design, video production & 3D mockups'}
        </p>
        {isDE ? (
          <>
            <div className="flex justify-center">
              <div className="segmented" role="tablist" aria-label="Modus wählen">
                <a
                  className={`segment ${initialMode === 'vollzeit' ? 'is-active' : ''}`}
                  href="/de/vollzeit"
                  role="tab"
                  aria-selected={initialMode === 'vollzeit'}
                >
                  Vollzeit
                </a>
                <a
                  className={`segment ${initialMode === 'freiberuflich' ? 'is-active' : ''}`}
                  href="/de/freiberuflich"
                  role="tab"
                  aria-selected={initialMode === 'freiberuflich'}
                >
                  Freiberuflich
                </a>
              </div>
            </div>
            <h1 className="hero-title">
              <span className="block">{titleMain}</span>
              <span className="block accent-text">{titleAccent}.</span>
            </h1>
            <p className="muted-text subline">{sublineDE}</p>
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
              <a href={`/de?modus=vollzeit`} className="w-fit">
                <Button name="Vollzeitstelle (Bewerbung)" variant={initialMode === 'vollzeit' ? 'primary' : 'secondary'} containerClass="btn-lg sm:w-fit w-full sm:min-w-72" />
              </a>
              <a href={`/de?modus=freiberuflich`} className="w-fit">
                <Button name="Freiberuflich auf Projektbasis" variant={initialMode === 'freiberuflich' ? 'primary' : 'secondary'} containerClass="btn-lg sm:w-fit w-full sm:min-w-72" />
              </a>
            </div>

            {initialMode === 'vollzeit' && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a href="#bewerbungsunterlagen" className="w-fit">
                  <Button name="Bewerbungsunterlagen ansehen" variant="primary" containerClass="btn-lg" />
                </a>
                <a href="/resume.pdf" download className="w-fit">
                  <Button name="Lebenslauf herunterladen" variant="secondary" />
                </a>
                <a href="/de/kontakt" className="w-fit">
                  <Button name="Kontakt für Bewerbung" variant="secondary" />
                </a>
              </div>
            )}
            {initialMode === 'freiberuflich' && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a href="/de/kontakt?typ=projekt" className="w-fit">
                  <Button name="Projekt anfragen" variant="primary" containerClass="btn-lg" />
                </a>
                <a href="/de?modus=freiberuflich#leistungen" className="w-fit">
                  <Button name="Leistungen & Pakete" variant="secondary" />
                </a>
                <a href="/de/kontakt?typ=erstgespraech" className="w-fit">
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
                🟢 Verfügbar: DE vor Ort · Hybrid/Remote weltweit
              </div>
              <a href="#skills" className="text-white/70 hover:text-white/90 text-sm">Mehr erfahren ↓</a>
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
              <a href="/en/contact" className="w-fit">
                <Button name="Contact Me" variant="secondary" containerClass="sm:w-fit w-full sm:min-w-48" />
              </a>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3">
              <a href="#skills" className="text-white/70 hover:text-white/90 text-sm">See more ↓</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
