export default function PricingSignals({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">Preissignale</h3>
        <p className="grid-subtext max-w-2xl">
          Transparente Preisgestaltung basierend auf Projektumfang und Komplexität.
        </p>
      </div>
      
      <div className="grid-container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182C10.464 7.68 11.232 7.5 12 7.5c.768 0 1.536.22 2.121.659l.879-.659" />
          </svg>
          <h4 className="text-white font-semibold text-lg">Kostenorientierung</h4>
        </div>
        
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 px-4 py-3 rounded-lg bg-black-200/30 border border-black-100/50 hover:bg-black-200/50 hover:border-purple-500/20 transition-all duration-200"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="grid-subtext text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
