import { Inter } from 'next/font/google';

import LandingLayout from '@/components/core/layouts/LandingLayout';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FU-DEVER | CSS Battle 2024',
  description: 'FU-DEVER | CSS Battle 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LandingLayout open={true}>anh thang</LandingLayout>
      </body>
    </html>
  );
}
