import { type ComponentPropsWithoutRef, memo } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const badgeVariants = tv({
  base: 'focus:ring-ring inline-flex items-center gap-1 rounded-md border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      success: 'bg-success text-success-foreground border-transparent',
      primary: 'bg-primary text-primary-foreground border-transparent',
      destructive:
        'bg-destructive text-destructive-foreground border-transparent',
      secondary: 'bg-secondary text-secondary-foreground border-transparent',
      outline:
        'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
    },
    size: {
      xs: 'px-1 py-0 text-[10px]',
      sm: 'px-1.5 py-0 text-xs',
      md: 'px-2 py-0.5 text-xs',
      lg: 'px-2 py-0.5 text-sm',
      xl: 'px-3 py-1 text-base',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
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
