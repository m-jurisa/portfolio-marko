export default function Testimonials({ items = [], title = 'Referenzen' }) {
  if (!items.length) return null;

  const testimonialIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.627 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">{title}</h3>
        <p className="grid-subtext max-w-2xl">
          Was Projektpartner und Kunden über die Zusammenarbeit sagen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((testimonial, idx) => (
          <blockquote 
            key={idx} 
            className="group grid-container hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {testimonialIcon}
              </div>
              <div className="w-full h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <div className="px-4 py-3 rounded-lg bg-black-200/30 border border-black-100/50 hover:bg-black-200/50 hover:border-purple-500/20 transition-all duration-200">
                <p className="text-white italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <cite className="grid-subtext text-sm font-medium not-italic">
                  {testimonial.author}
                </cite>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
