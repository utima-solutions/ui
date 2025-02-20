import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { forwardRef, memo, type ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const iconButtonVariants = tv({
  base: 'focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow-black/5 transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      success:
        'bg-success text-success-foreground hover:bg-success-light active:bg-success-dark shadow-sm',
      primary:
        'bg-primary text-primary-foreground hover:bg-primary-light active:bg-primary-dark shadow',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive-light active:bg-destructive-dark shadow-sm',
      outline:
        'border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary-light active:bg-secondary-dark shadow-sm',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      md: 'size-9 [&_svg]:size-4',
      xs: 'size-7 rounded-md [&_svg]:size-3',
      sm: 'size-8 rounded-md [&_svg]:size-3.5',
      lg: '[&_svg]:size-4.5 size-10 rounded-md',
      xl: 'size-11 rounded-md [&_svg]:size-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof iconButtonVariants>, 'outline'> {
  asChild?: boolean;
  loading?: boolean;
  circle?: boolean;
}

export const IconButton = memo(
  forwardRef<HTMLButtonElement, IconButtonProps>(
    (
      {
        className,
        children,
        type = 'button',
        variant,
        size,
        asChild = false,
        loading = false,
        circle = false,
        ...restProps
      },
      ref,
    ) => {
      const Comp = asChild ? Slot : 'button';
      const content = loading ? <Loader2 className='animate-spin' /> : children;

      return (
        <Comp
          type={asChild ? undefined : type}
          className={cn(
            iconButtonVariants({
              variant,
              size,
            }),
            circle && 'rounded-full',
            className,
          )}
          disabled={loading}
          ref={ref}
          {...restProps}
        >
          {content}
        </Comp>
      );
    },
  ),
);
