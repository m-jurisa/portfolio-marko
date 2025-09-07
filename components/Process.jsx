export default function Process({ steps = [] }) {
  if (!steps.length) return null;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Ablauf / Prozess</h3>
      <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <li key={i} className="grid-container text-center">
            <div className="text-white font-bold text-xl">{i + 1}</div>
            <div className="grid-subtext mt-1">{s}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

