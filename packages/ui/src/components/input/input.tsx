import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn } from '@/utils';

import { inputVariants } from './input.styles';

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size = 'md', variant = 'default', type, ...restProps },
    ref,
  ) => {
    const styles = inputVariants({ size, variant });

    return (
      <input
        ref={ref}
        type={type}
        className={cn(styles.base(), className)}
        {...restProps}
      />
    );
  },
);
