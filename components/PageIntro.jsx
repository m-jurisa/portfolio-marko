export default function PageIntro({ title, subtitle, showMeta = true, email = 'marko.jurisa@proton.me' }) {
  return (
    <section className="page-intro">
      <div className="page-intro_inner">
        <h1 className="page-intro_title">{title}</h1>
        {subtitle ? <p className="muted-text subline mt-3">{subtitle}</p> : null}

        {showMeta && (
          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="trust-strip marquee">
              <div className="marquee__inner">
                <img src="/assets/icons/ps.svg" alt="Photoshop" />
                <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                <img src="/assets/aftereffects.png" alt="After Effects" />
                <img src="/assets/figma.svg" alt="Figma" />
                <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                <img src="/assets/icons/go.svg" alt="Go" />
                <img src="/assets/icons/htmx.svg" alt="htmx" />
              </div>
              <div className="marquee__inner" aria-hidden="true">
                <img src="/assets/icons/ps.svg" alt="" />
                <img src="/assets/icons/pr.svg" alt="" />
                <img src="/assets/aftereffects.png" alt="" />
                <img src="/assets/figma.svg" alt="" />
                <img src="/assets/cards/card-img-blender.webp" alt="" />
                <img src="/assets/icons/go.svg" alt="" />
                <img src="/assets/icons/htmx.svg" alt="" />
              </div>
            </div>

            <div className="badge mt-1">
              <span className="relative inline-flex h-3 w-3">
                <span className="btn-ping"></span>
                <span className="btn-ping_dot"></span>
              </span>
              🟢 Verfügbar: DE vor Ort · Hybrid/Remote weltweit
            </div>

            <a href={`mailto:${email}`} className="text-white/80 hover:text-white">{email}</a>
          </div>
        )}
      </div>
    </section>
  );
}
