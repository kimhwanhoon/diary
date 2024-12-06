import { metadata } from '@/metadata/home/metadata';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Suspense } from 'react';
import { ThemeProvider } from '@/theme/themeProvider';

import './globals.css';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#EAEBED]">
        <ThemeProvider>
          <Header />
          {children}
          <Suspense>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
