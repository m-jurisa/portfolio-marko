export default function Testimonials({ items = [], title = 'Referenzen' }) {
  if (!items.length) return null;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">{title}</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <blockquote key={i} className="grid-container">
            <p className="text-white italic">“{t.quote}”</p>
            <cite className="grid-subtext mt-2">— {t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

