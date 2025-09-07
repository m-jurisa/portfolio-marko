export default function PricingSignals({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Preissignale</h3>
      <ul className="grid-subtext list-disc ml-5">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

