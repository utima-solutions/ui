import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { inputStyles } from './Input.styles';

interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'size'>,
    VariantProps<typeof inputStyles> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextArea(
    { className, size = 'md', variant = 'default', ...restProps },
    ref,
  ) {
    return (
      <textarea
        ref={ref}
        className={cn(inputStyles({ size, variant }), 'h-auto', className)}
        {...restProps}
      />
    );
  },
);
