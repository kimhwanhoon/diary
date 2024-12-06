'use client';

import clsx from 'clsx';
import { footerNav } from './constants/footerNav';
import { FooterNavElement } from './components/footerNavElement';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={clsx([
        // base
        'bg-slate-700 text-white p-4 flex justify-center items-center',
        // position
        'fixed bottom-0 left-0 right-0',
        // shadow
        'shadow-t',
      ])}
    >
      {footerNav.map((element) => (
        <FooterNavElement
          key={element.label}
          pathname={pathname}
          {...element}
        />
      ))}
    </footer>
  );
};
