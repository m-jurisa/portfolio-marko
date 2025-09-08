export default function Process({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">Ablauf / Prozess</h3>
        <p className="grid-subtext max-w-2xl">
          Ein strukturierter 5-Schritte-Prozess für erfolgreiche Projektumsetzung.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative">
            {/* Connection line (except for last item) */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-purple-500/20 -translate-x-3 z-0"></div>
            )}
            
            <div className="grid-container text-center hover:border-purple-500/30 transition-all duration-300 relative z-10">
              <div className="flex flex-col items-center gap-4">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                
                {/* Step description */}
                <div className="px-2">
                  <p className="grid-subtext text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {step}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
