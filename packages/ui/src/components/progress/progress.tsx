import {
  Root,
  Indicator,
  type ProgressProps as RadixProgressProps,
} from '@radix-ui/react-progress';
import { tv, type VariantProps } from 'tailwind-variants';
import { forwardRef, memo } from 'react';

import { cn } from '@/utils';

export const progressVariants = tv({
  slots: {
    root: 'relative h-full w-full overflow-hidden rounded-full bg-secondary',
    indicator: 'h-full w-full flex-1 transition-all data-[state=indeterminate]:animate-indeterminate',
  },
  variants: {
    size: {
      xs: {
        root: 'h-1',
      },
      sm: {
        root: 'h-1.5',
      },
      md: {
        root: 'h-2',
      },
      lg: {
        root: 'h-3',
      },
      xl: {
        root: 'h-4',
      },
    },
    variant: {
      primary: {
        root: 'bg-primary/25',
        indicator: 'bg-primary',
      },
      success: {
        root: 'bg-success/25',
        indicator: 'bg-success'
      },
      destructive: {
        root: 'bg-destructive/25',
        indicator: 'bg-destructive'
      },
      secondary: {
        root: 'bg-secondary-foreground/25',
        indicator: 'bg-secondary-foreground'
      },
      outline: {
        root: 'border border-input bg-background shadow-xs',
        indicator: 'bg-border/75'
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ProgressProps
  extends RadixProgressProps,
    VariantProps<typeof progressVariants> {
      indicatorClassName?: string;
    }

/**
 * A progress bar component. It is used to show the progress of an operation.
 * It can be used to show the progress of a file upload, a download,
 * or any other operation of this kind.
 */
export const Progress = memo(
  forwardRef<HTMLDivElement, ProgressProps>(function Progress(
    {
      className,
      value,
      max = 100,
      variant = 'primary',
      size = 'md',
      indicatorClassName,
      ...restProps
    },
    ref,
  ) {
    const percentage = ((value || 0) / max) * 100;
    const { root, indicator } = progressVariants({ size, variant });

    return (
      <Root
        ref={ref}
        data-uui-progress
        className={cn(root(), className)}
        {...restProps}
      >
        <Indicator
          data-uui-progress-indicator
          className={cn(indicator(), indicatorClassName)}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </Root>
    );
  }),
);
