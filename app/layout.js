import { Lato } from 'next/font/google';
import './globals.css';
import Headers from '@/components/partials/Headers';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato-sans',
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} overflow-hidden`}>
        <main>
          <Headers />
          {children}
        </main>
      </body>
    </html>
  );
}
