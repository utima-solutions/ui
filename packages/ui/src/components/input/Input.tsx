import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { inputDef, inputStyles } from './Input.styles';

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputStyles> {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
}

/**
 * Input component with support for addons.
 *
 * ```tsx
 * <Input addonBefore='http://' placeholder='example.com' />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
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
    return (
      <input
        ref={ref}
        className={cn(inputStyles({ size, variant }), className)}
        {...restProps}
      />
    );
  }

  return (
    <div className={inputDef.wrapper}>
      {addonBefore && (
        <span
          className={cn(
            inputStyles({ size }),
            inputDef.addon.base,
            inputDef.addon.before,
          )}
        >
          {addonBefore}
        </span>
      )}
      <span>
        <input
          ref={ref}
          className={cn(
            inputStyles({ size, variant }),
            addonBefore && 'rounded-l-none',
            addonAfter && 'rounded-r-none',
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
          )}
        >
          {addonAfter}
        </span>
      )}
    </div>
  );
});
