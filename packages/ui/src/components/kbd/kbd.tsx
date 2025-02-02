import { tv, type VariantProps } from 'tailwind-variants';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

export const kbdVariants = tv({
  base: 'inline-flex items-center shadow-black/5 justify-center rounded-md font-mono font-medium text-foreground tracking-widest',
  variants: {
    variant: {
      ghost: 'opacity-60',
      outline: 'shadow-sm bg-white py-0.5 px-1 border-border border',
    },
    size: {
      xs: 'h-5 min-w-5 px-1 text-[11px]',
      sm: 'h-6 min-w-6 px-1.5 text-xs',
      md: 'h-7 min-w-7 px-2 text-sm',
      lg: 'h-8 min-w-8 px-2.5 text-base',
      xl: 'h-9 min-w-9 px-3 text-lg',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

export type KbdProps = ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof kbdVariants> & {
    circle?: boolean;
  };

export const Kbd = memo(function Kbd({
  className,
  size,
  variant,
  circle,
  disabled,
  ...restProps
}: KbdProps) {
  return (
    <kbd
      data-uui-kbd
      className={cn(
        kbdVariants({
          size,
          variant,
          disabled,
        }),
        circle && 'rounded-full',
        className,
      )}
      {...restProps}
    />
  );
});
