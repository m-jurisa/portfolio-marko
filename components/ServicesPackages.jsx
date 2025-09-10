export default function ServicesPackages({ services = {}, locale = 'de', heading, subheading }) {
  const {
    design = [],
    video = [],
    programmierung = [],
    automatisierung = [],
    simple3d = [],
  } = services

  const t = {
    de: {
      h3: 'Leistungen & Pakete',
      p: 'Umfassende digitale Lösungen – von modernem Design über Web-Entwicklung bis hin zu KI-gestützter Automatisierung.',
      id: 'leistungen',
      cats: {
        design: 'Design & Branding',
        video: 'Video & Motion',
        web: 'Web-Entwicklung',
        ai: 'KI & Automatisierung',
        threed: '3D & Visualisierung',
      },
    },
    en: {
      h3: 'Services & Packages',
      p: 'End-to-end digital solutions — from modern design to web development and AI-powered automation.',
      id: 'services',
      cats: {
        design: 'Design & branding',
        video: 'Video & motion',
        web: 'Web development',
        ai: 'AI & automation',
        threed: '3D & visualization',
      },
    },
  }[locale] ?? t?.de

  const serviceIcons = {
    design: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    video: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    web: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    ai: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    threed: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313L15.75 7.5m0 0l-3.75-2.25L8.25 7.5m7.5 0V21l-7.5-4.5V6.75l7.5-4.5v5.25zm0 0l3.75-2.25M3 12l3.75-2.25M21 12l-3.75-2.25" />
      </svg>
    ),
  }

  const serviceData = [
    { key: 'design', items: design,        accent: 'from-purple-500 to-pink-500'   },
    { key: 'video',  items: video,         accent: 'from-blue-500 to-cyan-500'     },
    { key: 'web',    items: programmierung,accent: 'from-green-500 to-emerald-500' },
    { key: 'ai',     items: automatisierung,accent:'from-orange-500 to-red-500'    },
    { key: 'threed', items: simple3d,      accent: 'from-indigo-500 to-purple-500' },
  ]

  return (
    <section className="c-space my-16" id={t.id}>
      <div className="mb-12">
        <h3 className="grid-headtext mb-4">{heading ?? t.h3}</h3>
        <p className="grid-subtext max-w-3xl">{subheading ?? t.p}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map(({ key, items, accent }) => (
          <div key={key} className="group grid-container hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="flex items-center gap-3 mb-6 pt-2">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${accent} text-white shadow-lg`}>
                {serviceIcons[key]}
              </div>
              <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300 text-lg">
                {t.cats[key]}
              </h4>
            </div>

            <div className="space-y-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-3 rounded-lg bg-black-200/30 border border-black-100/50 hover:bg-black-200/50 hover:border-purple-500/20 transition-all duration-200 group/item">
                  <div className="flex items-center justify-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-purple-400 group-hover/item:text-purple-300 transition-colors duration-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="grid-subtext text-sm leading-relaxed flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
