import { memo, type ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const kbdVariants = tv({
  base: 'text-foreground inline-flex items-center justify-center rounded-md font-mono font-medium tracking-widest shadow-black/5',
  variants: {
    variant: {
      ghost: 'opacity-60',
      outline: 'border-border border bg-white px-1 py-0.5 shadow-sm',
    },
    size: {
      xs: 'h-5 min-w-5 px-1 text-[11px]',
      sm: 'h-6 min-w-6 px-1.5 text-xs',
      md: 'h-7 min-w-7 px-2 text-sm',
      lg: 'h-8 min-w-8 px-2.5 text-base',
      xl: 'h-9 min-w-9 px-3 text-lg',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50',
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
