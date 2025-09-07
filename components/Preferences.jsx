export default function Preferences({ data }) {
  if (!data) return null;
  const { onsite, startDate, travel } = data;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Arbeitspräferenzen</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="grid-container"><h4 className="text-white font-semibold">On-site/Remote/Hybrid</h4><p className="grid-subtext">{onsite}</p></div>
        <div className="grid-container"><h4 className="text-white font-semibold">Startdatum</h4><p className="grid-subtext">{startDate}</p></div>
        <div className="grid-container"><h4 className="text-white font-semibold">Reisebereitschaft</h4><p className="grid-subtext">{travel}</p></div>
      </div>
    </section>
  );
}

