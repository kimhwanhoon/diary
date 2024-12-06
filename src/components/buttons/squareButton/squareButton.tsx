import { cn } from '@/theme/functions';
import { UnstyledButton } from '@mantine/core';

interface Props {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'sm' | 'md' | 'lg';
  textSize?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const SquareButton = ({
  children,
  size = 'md',
  radius = 'md',
  textSize = 'md',
  className,
}: Props) => {
  const sizeClass =
    size === 'xs'
      ? 'w-[60px] h-[60px]'
      : size === 'sm'
      ? 'w-[80px] h-[80px]'
      : size === 'md'
      ? 'w-[100px] h-[100px]'
      : size === 'lg'
      ? 'w-[120px] h-[120px]'
      : 'w-[140px] h-[140px]';

  const radiusClass =
    radius === 'sm'
      ? 'rounded-sm'
      : radius === 'md'
      ? 'rounded-md'
      : 'rounded-lg';

  const textSizeClass =
    textSize === 'xs'
      ? 'text-xs'
      : textSize === 'sm'
      ? 'text-sm'
      : textSize === 'md'
      ? 'text-md'
      : 'text-lg';

  return (
    <UnstyledButton
      className={cn(
        // base
        'bg-[#333] text-white flex justify-center items-center p-2',
        // size
        sizeClass,
        // radius
        radiusClass,
        // text size
        textSizeClass,
        // className
        className
      )}
    >
      {children}
    </UnstyledButton>
  );
};
