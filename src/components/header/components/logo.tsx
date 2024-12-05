import { playwriteHRLijeva } from '@/app/fonts/fonts';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className={`text-2xl font-bold ${playwriteHRLijeva.className}`}>
        Diary
      </h1>
    </Link>
  );
};
