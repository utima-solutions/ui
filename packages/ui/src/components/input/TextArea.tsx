import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentProps } from 'react';

import { cn } from '@/utils';

import { inputStyles } from './Input.styles';

type TextareaProps = Omit<ComponentProps<'textarea'>, 'size'> &
  VariantProps<typeof inputStyles>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextArea(
    { className, size = 'md', variant = 'default', ...props },
    ref,
  ) {
    return (
      <textarea
        ref={ref}
        className={cn(inputStyles({ size, variant }), className)}
        {...props}
      />
    );
  },
);
