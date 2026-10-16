import {
  Playfair_Display,
  Cormorant_Garamond,
  Marcellus,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from 'next/font/google';
import LenisProvider from '@/components/LenisProvider/LenisProvider';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--next-font-display',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--next-font-heading',
  display: 'swap',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--next-font-script',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--next-font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--next-font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Riddhy Furniture & Home Appliances | Bespoke Timber & Architectural Living',
  description:
    'Handcrafted Burmese Teak sofas, carved Sheesham four-poster beds, live-edge Kumaon Acacia dining tables, and bespoke smart home appliances.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${marcellus.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
