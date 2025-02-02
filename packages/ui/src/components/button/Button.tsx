import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  memo,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

export const buttonVariants = tv({
  base: 'inline-flex cursor-pointer shadow-black/5 items-center transition-colors justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      success:
        'bg-success text-success-foreground shadow-sm hover:bg-success-light active:bg-success-dark',
      default: 'bg-primary text-primary-foreground shadow hover:bg-primary-light active:bg-primary-dark',
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
      default: 'h-9 px-4 py-2 [&_svg]:size-4',
      xs: 'h-7 rounded-md px-2 text-xs [&_svg]:size-3 gap-1.5',
      sm: 'h-8 rounded-md px-3 text-xs [&_svg]:size-3.5 gap-1.5',
      lg: 'h-10 rounded-md px-4 [&_svg]:size-4.5',
      xl: 'h-11 rounded-md text-base px-5 [&_svg]:size-5',
      icon: 'h-9 w-9 p-2 [&_svg]:size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'outline'> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        children,
        type = 'button',
        variant,
        size,
        asChild = false,
        loading = false,
        ...restProps
      },
      ref,
    ) => {
      const Comp = asChild ? Slot : 'button';
      const content = loading ? (
        <>
          <Loader2 className='animate-spin' />
          {children}
        </>
      ) : (
        children
      );

      return (
        <Comp
          type={asChild ? undefined : type}
          className={cn(
            buttonVariants({
              variant,
              size,
            }),
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
