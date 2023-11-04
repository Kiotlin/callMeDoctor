import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Make your choice',
  description: 'Please give me a star on GitHub.'
};

export default function ChoiceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className={inter.className}>{children}</section>;
}
