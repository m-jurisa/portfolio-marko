export default function FAQs({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">FAQs</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((f, i) => (
          <div key={i} className="grid-container">
            <h4 className="text-white font-semibold">{f.q}</h4>
            <p className="grid-subtext mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

