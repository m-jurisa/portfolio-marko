export default function CaseStudies({ items = [] }) {
  return (
    <section className="c-space my-20">
      <div className="mb-12">
        <h3 className="grid-headtext mb-4">Case Studies</h3>
        <p className="grid-subtext max-w-2xl">
          Eine Auswahl meiner Projekte, die verschiedene Aspekte der digitalen Produktentwicklung abdecken.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {items.map((cs, idx) => (
          <article 
            key={idx} 
            className="group relative bg-black-300 rounded-2xl p-8 border border-black-300 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            {/* Category badge */}
            <div className="relative z-10 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {cs.category}
              </span>
              <span className="ml-2 text-xs text-gray-400">{cs.year}</span>
            </div>

            {/* Title section */}
            <div className="relative z-10 mb-6">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {cs.title}
              </h4>
              <p className="text-sm text-gray-400 font-medium">{cs.subtitle}</p>
            </div>

            {/* Content sections */}
            <div className="relative z-10 space-y-4">
              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-1">Problem</h5>
                  <p className="grid-subtext text-sm leading-relaxed">{cs.problem}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-1">Vorgehen</h5>
                  <p className="grid-subtext text-sm leading-relaxed">{cs.approach}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-1">Ergebnis</h5>
                  <p className="grid-subtext text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>

              {/* Meta information */}
              <div className="pt-4 border-t border-black-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 mb-1">ROLLE</h5>
                    <p className="text-sm text-white font-medium">{cs.role}</p>
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs font-semibold text-gray-400 mb-1">DAUER</h5>
                    <p className="text-sm text-white font-medium">{cs.duration}</p>
                  </div>
                </div>
                
                {/* Tech stack */}
                <div>
                  <h5 className="text-xs font-semibold text-gray-400 mb-2">TECH-STACK</h5>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack?.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-2 py-1 text-xs rounded-md bg-black-200 text-gray-300 border border-black-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
