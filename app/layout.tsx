import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://call-me-doctor.vercel.app'),
  openGraph: {
    title: 'Welcome to Arknight Endfield',
    description:
      "Have you heard the cries of the children? Have you felt the city falling apart? Haven't you noticed the plotters smirking in triumph?",
    url: 'https://call-me-doctor.vercel.app',
    siteName: 'Endfield',
    images: [
      {
        url: 'https://endfield.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Endfield OG Image'
      }
    ],
    locale: 'ja_JP',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
