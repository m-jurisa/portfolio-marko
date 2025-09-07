export default function ServicesPackages({ services }) {
  const { design = [], video = [], simple3d = [] } = services || {};
  return (
    <section className="c-space my-10" id="leistungen">
      <h3 className="grid-headtext mb-4">Leistungen & Pakete</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="grid-container"><h4 className="text-white font-semibold">Design</h4><ul className="grid-subtext list-disc ml-5 mt-2">{design.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
        <div className="grid-container"><h4 className="text-white font-semibold">Video</h4><ul className="grid-subtext list-disc ml-5 mt-2">{video.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
        <div className="grid-container"><h4 className="text-white font-semibold">3D (einfach)</h4><ul className="grid-subtext list-disc ml-5 mt-2">{simple3d.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
      </div>
    </section>
  );
}

