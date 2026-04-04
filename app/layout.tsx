import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getSettings } from '@/lib/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Levana Technology',
  description: 'Agensi website personal branding terdedikasi untuk kreator dan solopreneur. Bangun kepercayaan bukan hanya atensi lewat personal branding website.',
  keywords: 'personal branding, website design, web development, digital branding, solopreneur, kreator',
  authors: [{ name: 'Levana Technology' }],
  openGraph: {
    title: 'Levana Technology',
    description: 'Bangun kepercayaan bukan hanya atensi lewat personal branding website.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = getSettings();

  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar settings={settings} />
        <main className="bg-dark">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
