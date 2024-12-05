import localFont from 'next/font/local';

const playwriteHRLijeva = localFont({
  src: './storage/PlaywriteHRLijeva-VariableFont_wght.ttf',
});

const geistSans = localFont({
  src: './storage/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './storage/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export { playwriteHRLijeva, geistSans, geistMono };
