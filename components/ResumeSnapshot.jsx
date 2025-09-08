export default function ResumeSnapshot({ data }) {
  if (!data) return null;
  
  const { 
    competencies = [], 
    tools = [], 
    education = [], 
    certificates = [], 
    experience = [],
    languages = []
  } = data;

  // Function to add random purple colors to entire words
  const purpleShades = [
    'text-purple-200',
    'text-purple-300', 
    'text-purple-400',
    'text-purple-500',
    'text-purple-600'
  ];

  const colorizeWord = (word) => {
    const colorClass = purpleShades[Math.floor(Math.random() * purpleShades.length)];
    return (
      <span className={colorClass}>
        {word}
      </span>
    );
  };

  // Professional SVG Icons
  const icons = {
    'Kompetenzen': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    'Tools & Technologien': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    'Ausbildung': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    'Berufserfahrung': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    'Zertifikate': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    'Sprachen': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023.0 01-3.827-5.802" />
      </svg>
    )
  };

  // Render tag-style grid with colored words
  const renderTagGrid = (items) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, itemIdx) => (
        <div 
          key={itemIdx} 
          className="px-3 py-1.5 text-sm rounded-full bg-black-200/40 border border-black-100/50 hover:bg-black-200/60 hover:border-purple-500/30 transition-all duration-200"
        >
          {colorizeWord(item)}
        </div>
      ))}
    </div>
  );

  // Render regular list for other sections
  const renderList = (items) => (
    <div className="space-y-3">
      {items.map((item, itemIdx) => (
        <div 
          key={itemIdx} 
          className="grid-subtext text-sm leading-relaxed px-3 py-2 rounded-lg bg-black-200/30 border border-black-100/50 hover:bg-black-200/50 hover:border-purple-500/20 transition-all duration-200"
        >
          {item}
        </div>
      ))}
    </div>
  );

  const sections = [
    { 
      title: 'Kompetenzen', 
      items: competencies, 
      icon: icons['Kompetenzen'],
      gridClass: 'md:col-span-1 lg:row-span-2',
      renderAs: 'tags'
    },
    { 
      title: 'Tools & Technologien', 
      items: tools, 
      icon: icons['Tools & Technologien'],
      gridClass: 'md:col-span-2 lg:col-span-2',
      renderAs: 'tags'
    },
    { 
      title: 'Berufserfahrung', 
      items: experience, 
      icon: icons['Berufserfahrung'],
      gridClass: 'md:col-span-1',
      renderAs: 'list'
    },
    { 
      title: 'Ausbildung', 
      items: education, 
      icon: icons['Ausbildung'],
      gridClass: 'md:col-span-1',
      renderAs: 'list'
    },
    { 
      title: 'Sprachen', 
      items: languages, 
      icon: icons['Sprachen'],
      gridClass: 'md:col-span-1',
      renderAs: 'list'
    },
    { 
      title: 'Zertifikate', 
      items: certificates, 
      icon: icons['Zertifikate'],
      gridClass: 'md:col-span-1',
      renderAs: 'list'
    }
  ];

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">Lebenslauf — Snapshots</h3>
        <p className="grid-subtext max-w-2xl">
          Ein kompakter Überblick über meine Qualifikationen und Erfahrungen.
        </p>
      </div>
      
      {/* Mixed Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div 
            key={idx} 
            className={`group grid-container hover:border-purple-500/30 transition-all duration-300 ${section.gridClass}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {section.icon}
              </div>
              <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300 text-lg">
                {section.title}
              </h4>
            </div>
            
            {section.items.length > 0 ? (
              section.renderAs === 'tags' 
                ? renderTagGrid(section.items)
                : renderList(section.items)
            ) : (
              <p className="grid-subtext text-sm italic">Keine Einträge verfügbar</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Status footer */}
      <div className="mt-8 p-6 bg-gradient-to-r from-black-300/50 to-black-200/50 rounded-2xl border border-black-200 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <span className="text-gray-400 font-medium">Verfügbarkeit:</span>
              <span className="text-white ml-2">Sofort verfügbar</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <span className="text-gray-400 font-medium">Arbeitsweise:</span>
              <span className="text-white ml-2">Remote-first, Hybrid | Vor Ort</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div>
              <span className="text-gray-400 font-medium">Reisebereitschaft:</span>
              <span className="text-white ml-2">Deutschland weit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
