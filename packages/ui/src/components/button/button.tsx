import { tv, type VariantProps } from 'tailwind-variants';
import { forwardRef, memo, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

export const buttonVariants = tv({
  base: 'inline-flex cursor-pointer shadow-black/5 items-center transition-colors justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      success:
        'bg-success text-success-foreground shadow-sm hover:bg-success-light active:bg-success-dark',
      primary:
        'bg-primary text-primary-foreground shadow-sm hover:bg-primary-light active:bg-primary-dark',
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
      xs: 'h-7 rounded-sm px-2 text-xs [&_svg]:size-3 gap-1.5',
      sm: 'h-8 px-3 text-xs [&_svg]:size-3.5 gap-1.5',
      md: 'h-9 px-3.5 py-2 [&_svg]:size-4',
      lg: 'h-10 rounded-lg px-3.5 [&_svg]:size-4.5',
      xl: 'h-11 rounded-lg text-base px-4 [&_svg]:size-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'outline'> {
  asChild?: boolean;
  circle?: boolean;
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
        circle = false,
        ...restProps
      },
      ref,
    ) => {
      const Comp = asChild ? Slot : 'button';
      const content = loading ? (
        <>
          <Loader2 data-uui-button-loader className='animate-spin' />
          {children}
        </>
      ) : (
        children
      );

      return (
        <Comp
          data-uui-button
          type={asChild ? undefined : type}
          className={cn(
            buttonVariants({
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
