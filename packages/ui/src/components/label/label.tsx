import { Root } from '@radix-ui/react-label';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const labelVariants = tv({
  base: 'text-foreground select-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  variants: {
    size: {
      xs: 'text-xs leading-3',
      sm: 'text-xs leading-4',
      md: 'text-sm leading-5',
      lg: 'text-base leading-6',
      xl: 'text-lg leading-7',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface LabelProps
  extends ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof labelVariants> {}

export const Label = forwardRef<ComponentRef<typeof Root>, LabelProps>(
  function Label({ className, size, disabled, ...restProps }, ref) {
    return (
      <Root
        data-uui-label
        ref={ref}
        className={cn(
          labelVariants({
            size,
            disabled,
          }),
          className,
        )}
        {...restProps}
      />
    );
  },
);
