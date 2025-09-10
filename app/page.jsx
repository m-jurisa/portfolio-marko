'use client'

export default function Page() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                var lang = (navigator.language || 'de').toLowerCase();
                var locale = lang.startsWith('de') ? 'de' : 'en';
                var target = locale + '/';
                if (!location.pathname.endsWith('/' + target)) location.replace(target);
              } catch (e) {
                location.replace('de/');
              }
            })();
          `,
        }}
      />
      <noscript>
        <div style={{ padding: 16 }}>
          <p>
            JavaScript is disabled. Continue to <a href="de/">Deutsch</a> or <a href="en/">English</a>.
          </p>
        </div>
      </noscript>
    </>
  );
}
