import type { Icon, IconProps } from '@tabler/icons-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  label: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  href: string;
  hideLabel?: boolean;
}

export const FooterNavElement: React.FC<Props> = ({
  label,
  icon: Icon,
  href,
  hideLabel = false,
}) => {
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
      ])}
    >
      <Icon size={24} stroke={1.5} />
      {!hideLabel && <span className="text-xs mt-1 capitalize">{label}</span>}
    </Link>
  );
};

// TODO: From settings user can choose to show/hide menu labels
