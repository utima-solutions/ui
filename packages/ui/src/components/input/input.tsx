import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';

export const inputVariants = tv({
  slots: {
    base: 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    wrapper: 'flex w-full items-center',
    container: 'relative flex w-full',
    addonBase:
      'flex items-center border border-input bg-muted text-muted-foreground',
    addonBefore: 'rounded-l-md border-r-0',
    addonAfter: 'rounded-r-md border-l-0',
  },
  variants: {
    size: {
      xs: {
        base: 'h-6 px-2 text-xs',
        addonBase: 'h-6 px-2 text-xs',
      },
      sm: {
        base: 'h-7 px-3 text-xs',
        addonBase: 'h-7 px-3 text-xs',
      },
      md: {
        base: 'h-9 text-sm',
        addonBase: 'h-9 px-3 text-sm shadow-sm',
      },
      lg: {
        base: 'h-11 text-base',
        addonBase: 'h-11 px-4 text-base shadow-sm',
      },
    },
    variant: {
      default: {
        base: '',
      },
      destructive: {
        base: 'border-destructive focus-visible:ring-destructive/30',
      },
      success: {
        base: 'border-success focus-visible:ring-success/30',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      addonBefore,
      addonAfter,
      type,
      ...restProps
    },
    ref,
  ) => {
    const styles = inputVariants({ size, variant });

    const input = (
      <div className={styles.container()}>
        <input
          ref={ref}
          type={type}
          className={cn(
            styles.base(),
            addonBefore && 'rounded-l-none',
            addonAfter && 'rounded-r-none',
            className,
          )}
          {...restProps}
        />
      </div>
    );

    if (!addonAfter && !addonBefore) {
      return input;
    }

    return (
      <div className={styles.wrapper()}>
        {addonBefore && (
          <span className={cn(styles.addonBase(), styles.addonBefore())}>
            {addonBefore}
          </span>
        )}
        {input}
        {addonAfter && (
          <span className={cn(styles.addonBase(), styles.addonAfter())}>
            {addonAfter}
          </span>
        )}
      </div>
    );
  },
);
