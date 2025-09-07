export default function ShowreelGallery({ videoSrc = '/textures/project/project1.mp4', projects = [] }) {
  return (
    <section className="c-space my-10">
      <h3 className="grid-headtext mb-4">Showreel & Galerie</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid-container">
          <video src={videoSrc} className="w-full h-auto rounded-lg" controls muted playsInline />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.slice(0, 3).map((p, i) => (
            <div key={i} className="grid-container">
              <h4 className="text-white font-semibold">{p.title}</h4>
              <p className="grid-subtext">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

