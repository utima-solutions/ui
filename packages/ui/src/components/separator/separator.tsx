import { Root } from '@radix-ui/react-separator';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const separatorVariants = tv({
  base: 'bg-border shrink-0',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'xs',
      className: 'h-[0.5px]',
    },
    {
      orientation: 'vertical',
      size: 'xs',
      className: 'w-[0.5px]',
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      className: 'h-px',
    },
    {
      orientation: 'vertical',
      size: 'sm',
      className: 'w-px',
    },
    {
      orientation: 'horizontal',
      size: 'md',
      className: 'h-[2px]',
    },
    {
      orientation: 'vertical',
      size: 'md',
      className: 'w-[2px]',
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      className: 'h-[3px]',
    },
    {
      orientation: 'vertical',
      size: 'lg',
      className: 'w-[3px]',
    },
    {
      orientation: 'horizontal',
      size: 'xl',
      className: 'h-[4px]',
    },
    {
      orientation: 'vertical',
      size: 'xl',
      className: 'w-[4px]',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'sm',
  },
});

export interface SeparatorProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, 'asChild'>,
    VariantProps<typeof separatorVariants> {}

export const Separator = forwardRef<ComponentRef<typeof Root>, SeparatorProps>(
  function Separator({ className, orientation, size, ...restProps }, ref) {
    return (
      <Root
        ref={ref}
        data-uui-separator
        orientation={orientation}
        className={cn(separatorVariants({ orientation, size }), className)}
        {...restProps}
      />
    );
  },
);
