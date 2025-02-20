import { Root, Thumb } from '@radix-ui/react-switch';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils';

export const switchVariants = tv({
  slots: {
    root: 'focus-visible:ring-ring focus-visible:ring-offset-background data-[state=unchecked]:bg-input peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm shadow-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    thumb:
      'bg-background pointer-events-none block rounded-full shadow-lg ring-0 transition-transform',
  },
  variants: {
    variant: {
      success: {
        root: 'data-[state=checked]:bg-success',
      },
      primary: {
        root: 'data-[state=checked]:bg-primary',
      },
      destructive: {
        root: 'data-[state=checked]:bg-destructive',
      },
      secondary: {
        root: 'data-[state=checked]:bg-secondary',
      },
    },
    size: {
      xs: {
        root: 'h-3 w-5',
        thumb:
          'size-2 data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
      },
      sm: {
        root: 'h-4 w-7',
        thumb:
          'size-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
      },
      md: {
        root: 'h-5 w-9',
        thumb:
          'size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      },
      lg: {
        root: 'h-6 w-11',
        thumb:
          'size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      },
      xl: {
        root: 'h-7 w-[3.25rem]',
        thumb:
          'size-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, 'asChild'>,
    VariantProps<typeof switchVariants> {
  circle?: boolean;
  classNameThumb?: string;
  thumb?: ReactNode;
}

export const Switch = forwardRef<ComponentRef<typeof Root>, SwitchProps>(
  function Switch(
    { className, classNameThumb, size, variant, circle, thumb, ...restProps },
    ref,
  ) {
    const { root, thumb: thumbClass } = switchVariants({ size, variant });

    return (
      <Root
        ref={ref}
        data-uui-switch
        className={cn(root(), circle && '!rounded-full', className)}
        {...restProps}
      >
        <Thumb
          data-uui-switch-thumb
          className={cn(thumbClass(), classNameThumb)}
        >
          {thumb}
        </Thumb>
      </Root>
    );
  },
);
