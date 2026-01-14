import { Lato } from 'next/font/google';
import './globals.css';
import Headers from '@/components/partials/Headers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@/components/partials/Footer';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato-sans',
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} overflow-x-hidden`}>
        <main className="pt-24">
          <Headers />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
