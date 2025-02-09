import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';
import { inputVariants } from './input';

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

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextArea(
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

    if (!addonAfter && !addonBefore) {
      return (
        <textarea
          ref={ref}
          className={cn(styles.base(), className)}
          {...restProps}
        />
      );
    }

    return (
      <div className={styles.wrapper()}>
        {addonBefore && (
          <span className={cn(styles.addonBase(), styles.addonBefore())}>
            {addonBefore}
          </span>
        )}
        <textarea
          ref={ref}
          className={cn(
            styles.base(),
            addonBefore && 'rounded-l-none',
            addonAfter && 'rounded-r-none',
            className,
          )}
          {...restProps}
        />
        {addonAfter && (
          <span className={cn(styles.addonBase(), styles.addonAfter())}>
            {addonAfter}
          </span>
        )}
      </div>
    );
  },
);
