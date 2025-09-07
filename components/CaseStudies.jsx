export default function CaseStudies({ items = [] }) {
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Case Studies</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((cs, idx) => (
          <article key={idx} className="grid-container">
            <h4 className="text-white font-semibold">{cs.title}</h4>
            <div className="grid-subtext mt-2"><b>Problem:</b> {cs.problem}</div>
            <div className="grid-subtext"><b>Vorgehen:</b> {cs.approach}</div>
            <div className="grid-subtext"><b>Ergebnis:</b> {cs.result}</div>
            <div className="grid-subtext"><b>Beitrag/Rolle:</b> {cs.role}</div>
            <div className="grid-subtext"><b>Tech-Stack:</b> {cs.stack?.join(', ')}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

