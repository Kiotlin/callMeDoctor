import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About us',
  description: "Don't doubt the power of YJ."
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className={inter.className}>{children}</section>;
}
