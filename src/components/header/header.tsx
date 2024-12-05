import clsx from 'clsx';
import { Logo } from './components/logo';

export const Header = () => {
  return (
    <header
      className={clsx([
        // base
        'bg-slate-700 text-white p-4 flex justify-center items-center',
        // position
        'fixed top-0 left-0 right-0',
        // shadow
        'shadow-b',
      ])}
    >
      <Logo />
    </header>
  );
};
