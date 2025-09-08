const item = (icon, label, href) => ({ icon, label, href });

const sections = [
  {
    title: 'Frontend',
    items: [
      item('/assets/react.svg', 'React'),
      item('/assets/nextjs.png', 'Next.js'),
      item('/assets/javascript.png', 'JavaScript'),
      item('/assets/tailwindcss.png', 'TailwindCSS'),
      item('/assets/bootstrap.png', 'Bootstrap'),
      item('/assets/threejs.png', 'Light 3D/Three.js'),
      item('/assets/figma.png', 'Figma'),
    ],
  },
  {
    title: 'Backend',
    items: [
      item('/assets/go.png', 'Go'),
      item('/assets/javascript.png', 'JavaScript'),
      item('/assets/cards/card-img-c-sharp.webp', 'C#'),
      item('/assets/cards/card-img-python.webp', 'Python'),
      item('/assets/cards/card-img-nodejs.webp', 'Node.js'),
      item('/assets/cards/card-img-mysql.webp', 'MySQL'),
      item('/assets/cards/card-img-postgresql.webp', 'PostgreSQL'),
      item('/assets/cards/card-img-sqlite.webp', 'SQLite'),
    ],
  },
  {
    title: 'Video & Photo',
    items: [
      item('/assets/aftereffects.png', 'After Effects'),
      item('/assets/premierepro.png', 'Premiere Pro'),
      item('/assets/photoshop.png', 'Photoshop'),
      item('/assets/illustrator.png', 'Illustrator'),
    ],
  },
];

export default function Offerings({ locale = 'de' }) {
  return (
    <section className="c-space my-14">
      <h2 className="head-text mb-6">
        {locale === 'de' ? 'Tech Stack' : 'Tech Stack'}
      </h2>

      <div id="offer-grid" className="offer-grid">
        {sections.map((s) => (
          <div
            key={s.title}
            className="
              offer-card card-animated group relative rounded-xl
              border border-lime-400/60                   
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-lime-300                           
              ring-0 ring-transparent
              hover:ring-2 hover:ring-lime-400/60             
              focus-visible:ring-2 focus-visible:ring-lime-400/70
              focus-visible:outline-none
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
            "
          >
            <h3>{s.title}</h3>

            <div className="flex flex-wrap gap-2">
              {s.items.map((x, idx) => (
                <span
                  key={idx}
                  className="
                    chip
                    transition-transform duration-200
                    group-hover:-translate-y-0.5
                  "
                  title={x.label}
                >
                  {x.icon ? <img src={x.icon} alt="" loading="lazy" /> : null}
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