import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentProps } from 'react';

import { cn } from '@/utils';

import { inputStyles } from './Input.styles';

type InputProps = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'md', variant = 'default', ...restProps }, ref) => (
    <input
      ref={ref}
      className={cn(inputStyles({ size, variant }), className)}
      {...restProps}
    />
  ),
);
