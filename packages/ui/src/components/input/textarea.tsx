import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { inputVariants } from './input.styles';
import { cn } from '../../utils';

export const textareaVariants = tv({
  extend: inputVariants,
  slots: {
    base: 'min-h-[80px] py-2',
  },
});

export interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'size'>,
    VariantProps<typeof textareaVariants> {
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      size = 'md',
      variant = 'default',
      addonBefore,
      addonAfter,
      ...restProps
    },
    ref,
  ) {
    const styles = textareaVariants({ size, variant });

    return (
      <textarea
        ref={ref}
        className={cn(styles.base(), className)}
        {...restProps}
      />
    );
  },
);
