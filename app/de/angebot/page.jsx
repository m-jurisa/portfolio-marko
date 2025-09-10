// app/de/angebot/page.jsx
import PageIntro from "../../../components/PageIntro"
import Contact from "../../../components/Contact"

export const dynamic = 'error'
export const revalidate = false

export default function Angebot() {
  const offers = [
    {
      category: "Content Creator",
      title: "Für YouTuber & Content-Creator",
      subtitle: "Motion Graphics, Video-Assets & Branding – schnell, konsistent, markenstark",
      services: [
        "Intro/Outro-Clips, Lower Thirds, Social-Assets, Thumbnails",
        "Showreels, Schnitt, Color Grading, Audio-Cleanup",
        "Merchandise-Design & Branding-Pakete (Logo, Templates)"
      ],
      stack: ["After Effects", "Premiere Pro", "Photoshop", "Illustrator"],
      pricing: "auf Anfrage",
      duration: "1–2 Wochen",
      anchor: "content-creator"
    },
    {
      category: "Business Web",
      title: "Für Unternehmen",
      subtitle: "Schnelle Web-Lösungen mit Fokus auf Performance, SEO und Conversion",
      services: [
        "Landingpages & Microsites (Next.js, Tailwind) mit SSG/ISR",
        "Go + htmx für schlanke, wartbare Interfaces ohne SPA-Overhead",
        "Web-Performance-Tuning (Core Web Vitals) & On-Page-Optimierung"
      ],
      stack: ["Next.js", "TailwindCSS", "Go", "htmx"],
      pricing: "auf Anfrage",
      duration: "2–4 Wochen",
      anchor: "business-web"
    },
    {
      category: "Startup & Teams",
      title: "MVP-Development & Systems",
      subtitle: "Prototyping, API-Integration und produktionsreife Grundarchitektur",
      services: [
        "MVP-Frontends (React/Next.js), UI-Prototyping, Design System Light",
        "APIs & Daten: Node/Go, PostgreSQL/SQLite, Supabase",
        "Tooling & Qualität: GitHub Actions, Linting/Formatting, Review-Flow"
      ],
      stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase"],
      pricing: "auf Anfrage",
      duration: "3–6 Wochen",
      anchor: "startup-teams"
    },
    {
      category: "Automation & AI",
      title: "Automatisierung & LLM-Workflows",
      subtitle: "Prozesse beschleunigen: von Content-Pipelines bis Reporting",
      services: [
        "Python-Skripte, n8n-Flows, Batch-Bild/Video-Verarbeitung",
        "LLM-gestützte Workflows (z. B. Zusammenfassungen, Tagging, Assist-Bots)",
        "Integrationen: REST/GraphQL, Webhooks, E-Mail/CRM, Postman-Tests"
      ],
      stack: ["Python", "n8n", "LLMs", "Postman"],
      pricing: "auf Anfrage",
      duration: "flexibel",
      anchor: "automation-ai"
    },
    {
      category: "Individual",
      title: "Individuelle Pakete",
      subtitle: "Mix aus Web, Video, 3D & Branding – exakt auf dein Ziel ausgerichtet",
      services: [
        "Kombination aus Next.js/Go+htmx, Motion Design, einfache 3D-Mockups",
        "Optimierung laufender Projekte (Lighthouse, DX, Build-Times)",
        "Flexible Abrechnung (Tagessatz/Festpreis), klare Milestones & KPIs"
      ],
      stack: ["Full-Stack", "Creative Suite", "3D Tools", "Automation"],
      pricing: "auf Anfrage",
      duration: "flexibel",
      anchor: "individual"
    }
  ]

  return (
    <>
      <PageIntro
        kicker="Angebot"
        title={
          <>
            <span>Mein </span>
            <span className="accent-text">Angebot</span>
            <span> — passgenau für Content-Creator & Unternehmen</span>
          </>
        }
        subtitle="Wähle den Bereich, der zu deinem Ziel passt. Transparente Abläufe, messbare Ergebnisse, klare Kommunikation."
      />

      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <article
              key={offer.anchor}
              id={offer.anchor}
              aria-labelledby={`${offer.anchor}-title`}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10 bg-white/5 backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1 hover:border-white/20
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-[radial-gradient(1200px_400px_at_0%_0%,rgba(139,92,246,0.12),transparent_60%),
                      radial-gradient(900px_350px_at_100%_0%,rgba(56,189,248,0.10),transparent_60%)]
                "
              />

              <div className="relative z-10 p-8">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30 bg-purple-500/15 text-purple-200">
                    {offer.category}
                  </span>
                </div>

                <header className="mb-6">
                  <h4
                    id={`${offer.anchor}-title`}
                    className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-purple-200"
                  >
                    {offer.title}
                  </h4>
                  <p className="text-sm text-white/70 font-medium">{offer.subtitle}</p>
                </header>

                <section className="mb-6">
                  <h5 className="text-sm font-semibold text-purple-200 mb-3">Services</h5>
                  <ul className="space-y-2">
                    {offer.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                        <span className="grid-subtext text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <footer className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h6 className="text-xs font-semibold text-white/60 mb-1">PREIS</h6>
                      <p className="text-sm text-white font-medium">{offer.pricing}</p>
                    </div>
                    <div className="text-right">
                      <h6 className="text-xs font-semibold text-white/60 mb-1">DAUER</h6>
                      <p className="text-sm text-white font-medium">{offer.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h6 className="text-xs font-semibold text-white/60 mb-2">TECH-STACK</h6>
                    <div className="flex flex-wrap gap-2">
                      {offer.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a href="#contact" className="inline-flex">
                      <span
                        className="
                          btn btn-primary btn-lg
                          hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
                          transition-all
                        "
                      >
                        Anfragen
                      </span>
                    </a>
                  </div>
                </footer>
              </div>

              <div
                className="
                  pointer-events-none absolute -right-24 top-0 h-full w-48
                  bg-gradient-to-l from-purple-500/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                "
              />
            </article>
          ))}
        </section>

        <section className="max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>
    </>
  )
}
