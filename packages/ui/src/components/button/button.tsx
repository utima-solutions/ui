import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { forwardRef, memo, type ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils';

export const buttonVariants = tv({
  base: 'focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-black/5 transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      success:
        'bg-success text-success-foreground hover:bg-success-light active:bg-success-dark shadow-sm',
      primary:
        'bg-primary text-primary-foreground hover:bg-primary-light active:bg-primary-dark shadow-sm',
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
      xs: 'h-7 gap-1.5 px-3 text-xs [&_svg]:size-3',
      sm: 'h-8 gap-1.5 px-3.5 text-xs [&_svg]:size-3.5',
      md: 'h-9 px-4 py-2 [&_svg]:size-4',
      lg: '[&_svg]:size-4.5 h-10 rounded-lg px-4',
      xl: 'h-11 rounded-lg px-5 text-base [&_svg]:size-5',
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
