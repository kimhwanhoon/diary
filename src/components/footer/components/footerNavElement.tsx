import type { Icon, IconProps } from '@tabler/icons-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  label: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  href: string;
  hideLabel?: boolean;
  pathname: string;
}

export const FooterNavElement: React.FC<Props> = ({
  label,
  icon: Icon,
  href,
  hideLabel = false,
  pathname
}) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx([
        // base
        'flex flex-col items-center justify-center flex-1',
        // spacing
        'px-4 py-2',
        // hover
        'hover:bg-slate-600 rounded-lg transition-colors',
        // active
        isActive && 'bg-slate-600',
      ])}
    >
      <Icon size={24} stroke={2} color={isActive ? 'white' : 'darkgray'} />
      {!hideLabel && (
        <span
          className={clsx(
            'text-xs mt-1 capitalize',
            isActive ? 'text-white' : 'text-[#a9a9a9]'
          )}
        >
          {label}
        </span>
      )}
    </Link>
  );
};

// TODO: From settings user can choose to show/hide menu labels
