import { tv, type VariantProps } from 'tailwind-variants';
import { type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

export const badgeVariants = tv({
  base: 'inline-flex items-center gap-1 rounded-md border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      success: 'border-transparent bg-success text-success-foreground',
      primary: 'border-transparent bg-primary text-primary-foreground',
      destructive: 'border-transparent bg-destructive text-destructive-foreground',
      secondary: 'border-transparent bg-secondary text-secondary-foreground',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      xs: 'px-1 py-0 text-[10px]',
      sm: 'px-1.5 py-0 text-xs',
      md: 'px-2 py-0.5 text-xs',
      lg: 'px-2 py-0.5 text-sm',
      xl: 'px-3 py-1 text-base',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface BadgeProps
  extends ComponentPropsWithoutRef<'span'>,
    VariantProps<typeof badgeVariants> {
  circle?: boolean;
}

export const Badge = memo(function Badge({
  className,
  variant,
  size,
  disabled,
  circle = false,
  ...restProps
}: BadgeProps) {
  return (
    <span
      data-uui-badge
      className={cn(
        badgeVariants({
          variant,
          size,
          disabled,
        }),
        circle && 'rounded-full',
        className,
      )}
      {...restProps}
    />
  );
});
