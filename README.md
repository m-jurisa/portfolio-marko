# Portfolio (Next.js SSG)

This project has been migrated from a Vite/React app with Three.js content to Next.js (App Router) with static site generation (SSG). Heavy 3D content was removed for performance and simpler hosting.

## Getting Started

1. Install dependencies
   - npm install
2. Run the dev server
   - npm run dev
3. Build for production
   - npm run build
4. Optional: Static export (out/)
   - npm run export

Open http://localhost:3000 to view the site.

## Environment Variables (EmailJS)
Copy `.env.example` to `.env.local` and fill in values:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...

## Notes

- The previous Vite/SSR server and Three.js models are no longer used.
- Public assets remain under `public/`.
- TailwindCSS is configured for Next.js in `tailwind.config.js`.

