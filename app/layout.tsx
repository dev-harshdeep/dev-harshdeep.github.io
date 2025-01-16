import '@/app/globals.css';
import { Inter } from 'next/font/google';
import FixedNav from '@/components/FixedNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harshdeep Johi Portfolio',
  description:
    'Portfolio website of Harshdeep Johi, a B.Tech student and aspiring Software Development Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-900 to-gray-800 text-white`}
      >
        <FixedNav />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
