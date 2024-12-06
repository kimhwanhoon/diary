import clsx from 'clsx';
import { footerNav } from './constants/footerNav';
import { FooterNavElement } from './components/footerNavElement';

export const Footer = () => {
  return (
    <>
      <footer
        className={clsx([
          // base
          'bg-slate-700 text-white p-4 flex justify-center items-center h-[80px]',
          // position
          'fixed bottom-0 left-0 right-0',
          // shadow
          'shadow-t',
        ])}
      >
        {footerNav.map((element) => (
          <FooterNavElement key={element.label} {...element} />
        ))}
      </footer>
      {/* Fill in */}
      <div className="h-[80px]" />
    </>
  );
};
