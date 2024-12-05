import { metadata } from '@/metadata/home/metadata';
import './globals.css';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Suspense } from 'react';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#EAEBED]">
        <Header />
        {children}
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
