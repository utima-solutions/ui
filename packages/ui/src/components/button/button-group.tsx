import type { HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

// eslint-disable-next-line tailwindcss/no-custom-classname
export const buttonGroupVariants = tv({
  base: 'block [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:last-child]:border-r-0 [&>*]:rounded-none [&>*]:border-l-0 [&>*]:border-r [&>*]:border-solid',
  variants: {
    variant: {
      success: '[&>*]:border-success-light',
      primary: '[&>*]:border-primary-light',
      destructive: '[&>*]:border-destructive-light',
      outline:
        '[&>*]:border-input [&>*:first-child]:border-l [&>*:last-child]:border-r',
      secondary: '[&>*]:border-secondary-light',
      ghost: '[&>*]:border-accent',
      link: '[&>*]:border-primary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export function ButtonGroup({
  children,
  className,
  variant,
  ...props
}: ButtonGroupProps) {
  return (
    <div className={cn(buttonGroupVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
