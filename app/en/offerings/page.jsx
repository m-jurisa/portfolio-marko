import PageIntro from "../../../components/PageIntro";
import Contact from "../../../components/Contact";

export default function Offerings() {
  const offers = [
    {
      category: "Content Creator",
      title: "For YouTubers & Creators",
      subtitle: "Motion graphics, video assets & branding — fast, consistent, on brand",
      services: [
        "Intro/outro clips, lower thirds, social assets, thumbnails",
        "Showreels, editing, color grading, audio cleanup",
        "Merchandise design & branding kits (logo, templates)"
      ],
      stack: ["After Effects", "Premiere Pro", "Photoshop", "Illustrator"],
      pricing: "on request",
      duration: "1–2 weeks",
      anchor: "content-creator"
    },
    {
      category: "Business Web",
      title: "For Businesses",
      subtitle: "Fast web solutions with a focus on performance, SEO, and conversion",
      services: [
        "Landing pages & microsites (Next.js, Tailwind) with SSG/ISR",
        "Go + htmx for lean, maintainable interfaces without SPA overhead",
        "Web performance optimization (Core Web Vitals) & on-page SEO"
      ],
      stack: ["Next.js", "TailwindCSS", "Go", "htmx"],
      pricing: "on request",
      duration: "2–4 weeks",
      anchor: "business-web"
    },
    {
      category: "Startup & Teams",
      title: "MVP Development & Systems",
      subtitle: "Prototyping, API integration, and production-ready foundations",
      services: [
        "MVP frontends (React/Next.js), UI prototyping, design system light",
        "APIs & data: Node/Go, PostgreSQL/SQLite, Supabase",
        "Tooling & quality: GitHub Actions, linting/formatting, review flow"
      ],
      stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase"],
      pricing: "on request",
      duration: "3–6 weeks",
      anchor: "startup-teams"
    },
    {
      category: "Automation & AI",
      title: "Automation & LLM Workflows",
      subtitle: "Accelerate processes — from content pipelines to reporting",
      services: [
        "Python scripts, n8n flows, batch image/video processing",
        "LLM-assisted workflows (summaries, tagging, assist bots)",
        "Integrations: REST/GraphQL, webhooks, email/CRM, Postman tests"
      ],
      stack: ["Python", "n8n", "LLMs", "Postman"],
      pricing: "on request",
      duration: "flexible",
      anchor: "automation-ai"
    },
    {
      category: "Custom",
      title: "Custom Packages",
      subtitle: "Web, video, 3D & branding — tailored to your specific goal",
      services: [
        "Blend of Next.js / Go+htmx, motion design, simple 3D mockups",
        "Optimization for ongoing projects (Lighthouse, DX, build times)",
        "Flexible billing (daily/fixed), clear milestones & KPIs"
      ],
      stack: ["Full-Stack", "Creative Suite", "3D Tools", "Automation"],
      pricing: "on request",
      duration: "flexible",
      anchor: "custom"
    }
  ];

  return (
    <>
      <PageIntro
        kicker="Offerings"
        title={
          <>
            <span>My </span>
            <span className="accent-text">Offerings</span>
            <span> — tailored for creators & businesses</span>
          </>
        }
        subtitle="Pick the areas that fit your needs. Clear process, measurable outcomes, on-time delivery."
      />

      {/* Keep the exact same width as your previous page */}
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        {/* New card style, same container width */}
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
              {/* Soft spotlight on hover */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-[radial-gradient(1200px_400px_at_0%_0%,rgba(139,92,246,0.12),transparent_60%),
                      radial-gradient(900px_350px_at_100%_0%,rgba(56,189,248,0.10),transparent_60%)]
                "
              />

              <div className="relative z-10 p-8">
                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30 bg-purple-500/15 text-purple-200">
                    {offer.category}
                  </span>
                </div>

                {/* Title + subtitle */}
                <header className="mb-6">
                  <h4
                    id={`${offer.anchor}-title`}
                    className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-purple-200"
                  >
                    {offer.title}
                  </h4>
                  <p className="text-sm text-white/70 font-medium">{offer.subtitle}</p>
                </header>

                {/* Services */}
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

                {/* Meta + Tech */}
                <footer className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h6 className="text-xs font-semibold text-white/60 mb-1">PRICE</h6>
                      <p className="text-sm text-white font-medium">{offer.pricing}</p>
                    </div>
                    <div className="text-right">
                      <h6 className="text-xs font-semibold text-white/60 mb-1">TIMELINE</h6>
                      <p className="text-sm text-white font-medium">{offer.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h6 className="text-xs font-semibold text-white/60 mb-2">TECH STACK</h6>
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

                  {/* CTA */}
                  <div className="mt-6">
                    <a href="#contact" className="inline-flex">
                      <span
                        className="
                          btn btn-primary btn-lg
                          hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
                          transition-all
                        "
                      >
                        Request quote
                      </span>
                    </a>
                  </div>
                </footer>
              </div>

              {/* Accent edge light */}
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

        {/* Contact shares the same width via the same container */}
        <section className="max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>
    </>
  );
}
