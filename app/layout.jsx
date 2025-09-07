export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio of Marko — Next.js SSG',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

