export const navLinks = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Work', href: '#work' },
  { id: 3, name: 'Contact', href: '#contact' },
  { id: 4, name: 'Projects', href: '#projects' },
  { id: 5, name: 'Skills', href: '#skills' },
];

// lib/constants.js
export const myProjects = [
  {
    // DE
    title: 'Portfolio Rebranding 2025 – Next.js, DE/EN, Fresh UI',
    desc: 'Komplettes Rebranding meines Portfolios mit moderner, frischer UI, optimierter Performance und zweisprachiger Inhalte (Deutsch/Englisch). Statisches Rendering für schnelle Auslieferung und beste Core Web Vitals.',
    subdesc: 'Tech: Next.js (SSG), TailwindCSS, i18n-Routing, Go Mail-Server über API (Kontakt/Newsletter), Bildoptimierung, On-Page-SEO.',
    // EN
    title_en: 'Portfolio Rebranding 2025 – Next.js, DE/EN, Fresh UI',
    desc_en: 'Complete portfolio rebrand with a fresh UI, strong performance and bilingual content (German/English). Static rendering for fast delivery and top Core Web Vitals.',
    subdesc_en: 'Tech: Next.js (SSG), TailwindCSS, i18n routing, Go mail server via API (contact/newsletter), image optimization, on-page SEO.',
    // Common
    href: 'https://portfolio-marko.com/',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: { backgroundColor: '#0B1220', border: '0.2px solid #132035', boxShadow: '0px 0px 60px 0px #3B82F64D' },
    spotlight: '/assets/spotlight1.webp',
    tags: [
      { id: 1, name: 'Next.js (SSG)', path: '/assets/icons/icon-nextjs.webp' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Go API', path: '/assets/icons/icon-go.webp' },
      { id: 4, name: 'SEO', path: '/assets/seo.png' },
    ],
  },

  {
    // DE
    title: 'Buchungswebsite Rebranding 2025 – Performance & SEO',
    desc: 'Rebranding der Ferienwohnungs-Website mit Fokus auf schnelle, SEO-optimierte Auslieferung, stabiler Buchungslogik im Backend und messbarer Sichtbarkeit.',
    subdesc: 'Tech: Next.js (SSG), TailwindCSS, Go-Backend (Server & Booking-Logic), strukturierte Daten (JSON-LD), Sitemap, Google Analytics, Artikelserie (LLM-gestützt).',
    // EN
    title_en: 'Booking Website Rebranding 2025 – Performance & SEO',
    desc_en: 'Rebrand of a vacation rental site focused on speed, SEO and a robust booking backend with measurable visibility.',
    subdesc_en: 'Tech: Next.js (SSG), TailwindCSS, Go backend (server & booking logic), structured data (JSON-LD), sitemap, Google Analytics, article series (LLM-assisted).',
    // Common
    href: 'https://www.baska-voda-rooms.com/',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: { backgroundColor: '#13202F', border: '0.2px solid #17293E', boxShadow: '0px 0px 60px 0px #2F6DB54D' },
    spotlight: '/assets/spotlight4.webp',
    tags: [
      { id: 1, name: 'Next.js (SSG)', path: '/assets/icons/icon-nextjs.webp' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Go Backend', path: '/assets/icons/icon-go.webp' },
      { id: 4, name: 'SEO', path: '/assets/seo.png' },
    ],
  },

  {
    // DE
    title: 'Portfolio Website - Mein persönlicher Playground',
    desc: 'Dieses Portfolio dient als Playground, um meine Fähigkeiten und Projekte zu präsentieren und moderne Webtechnologien wie JavaScript und React zu lernen. Die Seite kombiniert 3D-Modelle und interaktives Design, um meine Skills anschaulich darzustellen.',
    subdesc: 'Erstellt mit React.js, TailwindCSS, Three.js und Framer Motion, bietet sie eine benutzerfreundliche und performante Oberfläche.',
    // EN
    title_en: 'Portfolio Website – My personal playground',
    desc_en: 'A playground to present my skills and projects while exploring modern web technologies like JavaScript and React. Combines 3D elements and interactive design to visualize capabilities.',
    subdesc_en: 'Built with React.js, TailwindCSS, Three.js and Framer Motion for a fast and user-friendly experience.',
    // Common
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: { backgroundColor: '#13202F', border: '0.2px solid #17293E', boxShadow: '0px 0px 60px 0px #2F6DB54D' },
    spotlight: '/assets/spotlight1.webp',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Three.js', path: '/assets/threejs.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },

  {
    // DE
    title: 'Buchungswebsite - Ferienwohnung Kroatien',
    desc: 'Eine benutzerfreundliche Website für eine Ferienwohnung in Kroatien, die es Gästen ermöglicht, Verfügbarkeit zu überprüfen und Buchungen direkt online vorzunehmen. Das Design ist einfach und klar, mit einem Fokus auf Mobilfreundlichkeit und leichter Bedienung.',
    subdesc: 'Die Website nutzt moderne Webtechnologien wie React und TailwindCSS, um eine schnelle und intuitive Benutzererfahrung zu gewährleisten.',
    // EN
    title_en: 'Booking Website – Holiday apartment Croatia',
    desc_en: 'User-friendly website for a Croatian vacation apartment, allowing guests to check availability and book online. Simple, clean design focused on mobile usability.',
    subdesc_en: 'Built with modern tech like React and TailwindCSS to ensure a fast, intuitive experience.',
    // Common
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: { backgroundColor: '#13202F', border: '0.2px solid #17293E', boxShadow: '0px 0px 60px 0px #2F6DB54D' },
    spotlight: '/assets/spotlight2.webp',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'BootstrapCSS', path: '/assets/bootstrap.png' },
      { id: 3, name: 'Vanilla JS', path: '/assets/javascript.png' },
      { id: 4, name: 'Vanilla CSS', path: '/assets/css.png' },
    ],
  },

  {
    // DE
    title: 'Instagram-Carousel-Design für Sportverein',
    desc: 'Ein dynamisches Instagram- und Social-Media-Karussell für den lokalen Sportverein Sambo Klub Josipovac. Dieses Projekt umfasste das Design und die Entwicklung visueller Inhalte, um die Qualität des Inhalts zu verbessern.',
    subdesc: 'Erstellt mit Adobe Photoshop  mit einem Fokus auf starke visuelle Wirkung.',
    // EN
    title_en: 'Instagram carousel design for sports club',
    desc_en: 'Dynamic Instagram/Social carousel for the local club “Sambo Klub Josipovac”. Designed and produced visual assets to boost content quality and engagement.',
    subdesc_en: 'Created in Adobe Photoshop with a focus on strong visual impact.',
    // Common
    href: 'https://www.google.com/imgres?q=sambo%20klub%20josipovac%20instagram&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D514269604685943&imgrefurl=https%3A%2F%2Fm.facebook.com%2Fp%2FSambo-klub-Josipovac-100083087234918%2F&docid=ZbNgNMOSr3NoZM&tbnid=MS_LVcIxCSYwbM&vet=12ahUKEwjKkuuepdCIAxWB1QIHHRmoEhoQM3oECGIQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjKkuuepdCIAxWB1QIHHRmoEhoQM3oECGIQAA',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: { backgroundColor: '#0e0e10', border: '0.2px solid rgba(208, 213, 221, 1)', boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)' },
    spotlight: '/assets/spotlight3.webp',
    tags: [
      { id: 1, name: 'Photoshop', path: '/assets/photoshop.png' },
    ],
  },

  {
    // DE
    title: 'Kugelmatik Projekt - Konzept und Design',
    desc: 'Entwicklung des kompletten Designs für das Maschinensteuerungsprojekt "Kugelmatik", von der Konzeptidee bis zum Logo. Das Projekt umfasst die Erstellung eines visuellen Markenbilds und Designprototypen.',
    subdesc: 'Verwendete Tools: Adobe Illustrator für das Logo und Design.',
    // EN
    title_en: 'Kugelmatik project – concept and design',
    desc_en: 'End-to-end design development for the “Kugelmatik” machine control project — from concept to logo. Included visual identity and design prototypes.',
    subdesc_en: 'Tools: Adobe Illustrator for logo & design.',
    // Common
    href: 'https://www.kugelmatik.de/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: { backgroundColor: '#0E1F38', border: '0.2px solid #0E2D58', boxShadow: '0px 0px 60px 0px #2F67B64D' },
    spotlight: '/assets/spotlight4.webp',
    tags: [
      { id: 1, name: 'Illustrator', path: '/assets/illustrator.png' },
    ],
  },

  {
    // DE
    title: 'Kugelmatik Aftermovie - Videoaufnahmen und Montage',
    desc: 'Ein Aftermovie für das Kugelmatik-Projekt, der die verschiedenen Phasen der Installation und Nutzung des Projekts dokumentiert.',
    subdesc: 'Bearbeitet mit Adobe Premiere Pro und After Effects, um die bestmögliche Präsentation der Projekthighlights zu gewährleisten.',
    // EN
    title_en: 'Kugelmatik aftermovie – shooting & edit',
    desc_en: 'An aftermovie documenting installation phases and usage of the Kugelmatik project.',
    subdesc_en: 'Edited with Adobe Premiere Pro and After Effects to present project highlights in the best possible way.',
    // Common
    href: 'https://www.youtube.com/watch?v=cD_WOugpucY',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: { backgroundColor: '#1C1A43', border: '0.2px solid #252262', boxShadow: '0px 0px 60px 0px #635BFF4D' },
    spotlight: '/assets/spotlight5.webp',
    tags: [
      { id: 1, name: 'Premiere Pro', path: '/assets/premierepro.png' },
      { id: 2, name: 'After Effects', path: '/assets/aftereffects.png' },
    ],
  },
];




export const workExperiences = [
  { id: 1, name: 'Berufsausbildung zum Bautechniker', pos: 'Schüler', duration: '2009 - 2013', title: 'Bau und Landvermesser Schulzentrum Osijek Kroatien. Berufsausbildung zum Bautechniker.', icon: '/assets/icons/icon-books.webp', animation: 'victory' },
  { id: 2, name: 'Telefon Verkauf', pos: 'Verkäufer', duration: '2013', title: 'Studio Moderna | Beratung, Verkauf und Aufbau von Kundenbeziehungen im Telefonverkauf.', icon: '/assets/icons/icon-phone.webp', animation: 'clapping' },
  { id: 3, name: 'Helpdesk Support', pos: 'Supporter', duration: '2013 - 2015', title: 'T-Mobile Kroatien | 1st-Level-Support im Bereich Systemintegration, Diagnose einfacher Störungen.', icon: '/assets/icons/icon-helpdesk.webp', animation: 'salute' },
  { id: 4, name: 'Küchenhilfe', pos: 'Küchenhilfe', duration: '2016', title: 'Landgasthof Saalburg | Zubereitung von Zutaten und Unterstützung des Küchenteams.', icon: '/assets/icons/icon-kitchen.webp', animation: 'clapping' },
  { id: 5, name: 'Wäschemann', pos: 'Wäschemann', duration: '2017 - 2019', title: 'Wäschemann D. Korominas | Sortieren, Waschen, Trocknen und Falten von Wäsche.', icon: '/assets/icons/icon-wasching-maschine.webp', animation: 'victory' },
  { id: 6, name: 'Reinigungskraft', pos: 'Reinigungskraft', duration: '2019 - 2020', title: 'Gegenbauer Services | Verantwortung für die Sauberkeit von Büros und öffentlichen Bereichen.', icon: '/assets/icons/icon-cleaner.webp', animation: 'salute' },
  { id: 7, name: 'Vorarbeiter', pos: 'Vorarbeiter', duration: '2021', title: 'Gegenbauer Services | Leitung des Teams, Überwachung der Arbeitsqualität, Koordination der Einsatzpläne.', icon: '/assets/icons/icon-cleaner-2.webp', animation: 'clapping' },
  { id: 8, name: 'Ausbildung zum Fachinformatiker', pos: 'Azubi', duration: '2022 - 2024', title: 'Lutz & Grub AG | Ausbildung zum Fachinformatiker für Anwendungsentwicklung.', icon: '/assets/icons/icon-web-dev.webp', animation: 'victory' },
  { id: 9, name: 'Berufspraktikum', pos: 'Praktikant', duration: '2024', title: 'Dots United | Abschlussprojekt: Dashboard für den öffentlichen Verkehr basierend auf der Open Data API. Weitere Aufgaben: PHP-Grundlagen, Grafikdesign, Video-Produktion, WordPress.', icon: '/assets/icons/icon-school.webp', animation: 'salute' },
];




// Sorted alphabetically by name (A→Z)
export const skillsData = [
  { name: 'After Effects', logo: '/assets/cards/card-img-after-effects.webp', alt: 'Adobe After Effects', percentage: 25 },
  { name: 'Alpine.js', logo: '/assets/cards/card-img-alpinejs.webp', alt: 'Alpine.js Lightweight JavaScript Framework', percentage: 25 },
  { name: 'Blender', logo: '/assets/cards/card-img-blender.webp', alt: 'Blender 3D Modeling Software', percentage: 20 },
  { name: 'C#', logo: '/assets/cards/card-img-c-sharp.webp', alt: 'C# Programming Language', percentage: 15 },
  { name: 'ClickUp', logo: '/assets/cards/card-img-click-up.webp', alt: 'ClickUp Project Management Tool', percentage: 40 },
  { name: 'CSS3', logo: '/assets/cards/card-img-css.webp', alt: 'CSS3 Stylesheet Language', percentage: 50 },
  { name: 'Cyberlink', logo: '/assets/cards/card-img-cyberlink.webp', alt: 'Cyberlink Video Editing Software', percentage: 25 },
  { name: 'DAS Light', logo: '/assets/cards/card-img-das-light.webp', alt: 'DAS Light Lighting Software', percentage: 30 },
  { name: 'Docker', logo: '/assets/cards/card-img-docker.webp', alt: 'Docker Container Platform', percentage: 20 },
  { name: 'Fusion 360', logo: '/assets/cards/card-img-fusion-360.webp', alt: 'Autodesk Fusion 360 CAD', percentage: 20 },
  { name: 'GitHub', logo: '/assets/cards/card-img-github.webp', alt: 'GitHub Version Control', percentage: 25 },
  { name: 'Go', logo: '/assets/cards/card-img-go.webp', alt: 'Go Programming Language', percentage: 15 },
  { name: 'HTML5', logo: '/assets/cards/card-img-html.webp', alt: 'HTML5 Web Markup Language', percentage: 50 },
  { name: 'htmx', logo: '/assets/cards/card-img-htmx.webp', alt: 'htmx Hypermedia Library', percentage: 25 },
  { name: 'Illustrator', logo: '/assets/cards/card-img-illustrator.webp', alt: 'Adobe Illustrator', percentage: 30 },
  { name: 'JavaScript', logo: '/assets/cards/card-img-javascript.webp', alt: 'JavaScript Programming Language', percentage: 15 },
  { name: 'Jira', logo: '/assets/cards/card-img-jira.webp', alt: 'Jira Project Management Tool', percentage: 25 },
  { name: 'MySQL', logo: '/assets/cards/card-img-mysql.webp', alt: 'MySQL Database Management System', percentage: 30},
  { name: 'n8n', logo: '/assets/cards/card-img-n8n.webp', alt: 'n8n Workflow Automation', percentage: 15 },
  { name: 'Next.js', logo: '/assets/cards/card-img-nextjs.webp', alt: 'Next.js React Framework', percentage: 35 },
  { name: 'Node.js', logo: '/assets/cards/card-img-nodejs.webp', alt: 'Node.js JavaScript Runtime', percentage: 40 },
  { name: 'Opencode CLI', logo: '/assets/cards/card-img-opencode-cli.webp', alt: 'Opencode CLI', percentage: 20 },
  { name: 'Photoshop', logo: '/assets/cards/card-img-photoshop.webp', alt: 'Adobe Photoshop', percentage: 65 },
  { name: 'PostgreSQL', logo: '/assets/cards/card-img-postgresql.webp', alt: 'PostgreSQL Database', percentage: 20 },
  { name: 'Postman', logo: '/assets/cards/card-img-postman.webp', alt: 'Postman API Platform', percentage: 20 },
  { name: 'Premiere Pro', logo: '/assets/cards/card-img-premiere-pro.webp', alt: 'Adobe Premiere Pro', percentage: 30 },
  { name: 'Prusa Slicer', logo: '/assets/cards/card-img-prusa-slicer.webp', alt: 'Prusa Slicer 3D Printing Software', percentage: 50 },
  { name: 'Python', logo: '/assets/cards/card-img-python.webp', alt: 'Python Programming Language', percentage: 15 },
  { name: 'React', logo: '/assets/cards/card-img-react.webp', alt: 'React JavaScript Library', percentage: 25 },
  { name: 'Siemens', logo: '/assets/cards/card-img-siemens.webp', alt: 'Siemens Software', percentage: 20 },
  { name: 'Silhouette Studio', logo: '/assets/cards/card-img-silhouette.webp', alt: 'Silhouette Studio Design Software', percentage: 35 },
  { name: 'Slack', logo: '/assets/cards/card-img-slack.webp', alt: 'Slack Communication Tool', percentage: 80 },
  { name: 'SQLite', logo: '/assets/cards/card-img-sqlite.webp', alt: 'SQLite Embedded Database', percentage: 25 },
  { name: 'Supabase', logo: '/assets/cards/card-img-supabase.webp', alt: 'Supabase Backend as a Service', percentage: 10 },
  { name: 'Ubuntu', logo: '/assets/cards/card-img-ubuntu.webp', alt: 'Ubuntu Linux Operating System', percentage: 10 },
  { name: 'WLED', logo: '/assets/cards/card-img-wled.webp', alt: 'WLED Lighting Software', percentage: 45 },
  { name: 'WordPress', logo: '/assets/cards/card-img-wordpress.webp', alt: 'WordPress CMS', percentage: 50 },
];

