import localFont from 'next/font/local';
import './globals.css';

const outfit = localFont({
  src: './fonts/outfit-latin-wght-normal.woff2',
  variable: '--font-outfit',
  weight: '100 900',
  display: 'swap',
});

const bodoni = localFont({
  src: [
    {
      path: './fonts/bodoni-moda-latin-opsz-normal.woff2',
      style: 'normal',
      weight: '400 900',
    },
    {
      path: './fonts/bodoni-moda-latin-opsz-italic.woff2',
      style: 'italic',
      weight: '400 900',
    },
  ],
  variable: '--font-bodoni',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Farah Nicole | Life coach, chef and founder of Pivot and Pop PR',
  description:
    'Life coaching for parents, busy professionals and business owners. Start with a free 15-minute call with Farah Nicole.',
  applicationName: 'Farah Nicole',
  openGraph: {
    title: 'Farah Nicole | Life coach, chef and founder of Pivot and Pop PR',
    description:
      'Life coaching for parents, busy professionals and business owners. Start with a free 15-minute call.',
    type: 'website',
    images: ['/assets/a8f6a24383fc9c2204d8c268ea1c1933.jpg'],
  },
};

export const viewport = {
  themeColor: '#fff9f4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  );
}
