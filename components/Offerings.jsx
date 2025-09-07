const item = (icon, label, href) => ({ icon, label, href });

const sections = [
  {
    title: 'Frontend',
    items: [
      item('/assets/react.svg', 'React'),
      item('/assets/typescript.png', 'TypeScript'),
      item('/assets/tailwindcss.png', 'TailwindCSS'),
      item('/assets/javascript.png', 'htmx (JS)'),
      item('/assets/bootstrap.png', 'Bootstrap'),
      item('/assets/threejs.png', 'Light 3D/Three.js'),
    ],
  },
  {
    title: 'Backend',
    items: [
      item('/assets/cards/card-img-c-sharp.webp', 'C#'),
      item('/assets/cards/card-img-python.webp', 'Python'),
      item('/assets/cards/card-img-nodejs.webp', 'Node.js'),
      item('/assets/cards/card-img-mysql.webp', 'MySQL'),
      item('/assets/cards/card-img-mysql.webp', 'PostgreSQL'),
      item('/assets/cards/card-img-mysql.webp', 'SQLite'),
    ],
  },
  {
    title: 'Video & Photo',
    items: [
      item('/assets/aftereffects.png', 'After Effects'),
      item('/assets/premierepro.png', 'Premiere Pro'),
      item('/assets/photoshop.png', 'Photoshop'),
    ],
  },
  {
    title: '3D & CAD',
    items: [
      item('/assets/cards/card-img-blender.webp', 'Blender'),
      item('/assets/illustrator.png', 'Fusion (CAD)'),
    ],
  },
];

export default function Offerings({ locale = 'de' }) {
  return (
    <section className="c-space my-14">
      <h2 className="head-text mb-6">{locale === 'de' ? 'Angebote & Tech Stack' : 'Offerings & Tech Stack'}</h2>
      <div className="offer-grid">
        {sections.map((s) => (
          <div key={s.title} className="offer-card">
            <h3>{s.title}</h3>
            <div>
              {s.items.map((x, idx) => (
                <span key={idx} className="chip">
                  {x.icon ? <img src={x.icon} alt="" /> : null}
                  {x.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

