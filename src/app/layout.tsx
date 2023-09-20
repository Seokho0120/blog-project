import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My-Blog',
  description: '나의 멋진 블로그',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className={sans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
