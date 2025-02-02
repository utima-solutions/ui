import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  memo,
  type ButtonHTMLAttributes,
} from 'react';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

export const iconButtonVariants = tv({
  base: 'inline-flex cursor-pointer shadow-black/5 items-center transition-colors justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      success:
        'bg-success text-success-foreground shadow-sm hover:bg-success-light active:bg-success-dark',
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary-light active:bg-primary-dark',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-light active:bg-destructive-dark',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-light active:bg-secondary-dark',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      md: 'size-9 [&_svg]:size-4',
      xs: 'size-7 rounded-md [&_svg]:size-3',
      sm: 'size-8 rounded-md [&_svg]:size-3.5',
      lg: 'size-10 rounded-md [&_svg]:size-4.5',
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
