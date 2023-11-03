import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coming soon',
  description: 'I wanna play the Endfied.'
};

export default function SoonLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className={inter.className}>{children}</section>;
}
