export default function ResumeSnapshot({ data }) {
  if (!data) return null;
  const { competencies = [], tools = [], education = [], certificates = [] } = data;
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Lebenslauf — Snapshots</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid-container">
          <h4 className="text-white font-semibold">Kompetenzen</h4>
          <ul className="grid-subtext list-disc ml-5 mt-2">{competencies.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div className="grid-container">
          <h4 className="text-white font-semibold">Tools</h4>
          <ul className="grid-subtext list-disc ml-5 mt-2">{tools.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div className="grid-container">
          <h4 className="text-white font-semibold">Ausbildung</h4>
          <ul className="grid-subtext list-disc ml-5 mt-2">{education.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div className="grid-container">
          <h4 className="text-white font-semibold">Zertifikate</h4>
          <ul className="grid-subtext list-disc ml-5 mt-2">{certificates.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

