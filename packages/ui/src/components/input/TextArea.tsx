import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { inputDef, inputStyles } from './Input.styles';

export interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'size'>,
    VariantProps<typeof inputStyles> {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
}

/**
 * Textarea component with support for addons.
 *
 * ```tsx
 * <TextArea placeholder='Search...' />
 * ```
 */
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
    if (!addonAfter && !addonBefore) {
      <textarea
        ref={ref}
        className={cn(inputStyles({ size, variant }), 'h-auto', className)}
        {...restProps}
      />;
    }

    return (
      <div className={cn(inputDef.wrapper, 'items-stretch')}>
        {addonBefore && (
          <span
            className={cn(
              inputStyles({ size }),
              inputDef.addon.base,
              inputDef.addon.before,
              'h-auto',
            )}
          >
            {addonBefore}
          </span>
        )}
        <span>
          <textarea
            ref={ref}
            className={cn(
              inputStyles({ size, variant }),
              addonBefore && 'rounded-l-none',
              addonAfter && 'rounded-r-none',
              'h-auto',
              className,
            )}
            {...restProps}
          />
        </span>
        {addonAfter && (
          <span
            className={cn(
              inputStyles({ size }),
              inputDef.addon.base,
              inputDef.addon.after,
              'h-auto',
            )}
          >
            {addonAfter}
          </span>
        )}
      </div>
    );
  },
);
