import { Oswald } from 'next/font/google';

import LandingLayout from '@/components/core/layouts/LandingLayout';

import './globals.css';

const oswald = Oswald ({ subsets: ['latin'] });

export const metadata = {
  title: 'FU-DEVER | CSS Battle 2024',
  description: 'FU-DEVER | CSS Battle 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <LandingLayout>{children}</LandingLayout>
      </body>
    </html>
  );
}
