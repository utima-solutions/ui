import {
  Root,
  Indicator,
  type ProgressProps as RadixProgressProps,
} from '@radix-ui/react-progress';
import type { VariantProps } from 'class-variance-authority';
import { memo } from 'react';

import { cn } from '@/utils';

import { progressDef, progressStyles } from './Progress.styles';

export interface ProgressProps
  extends RadixProgressProps,
    Omit<VariantProps<typeof progressStyles>, 'outline'> {
  outline?: boolean;
}

/**
 * A progress bar component. It is used to show the progress of an operation.
 * It can be used to show the progress of a file upload, a download,
 * or any other operation of this kind.
 */
export const Progress = memo(function Progress({
  className,
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  outline,
  ...restProps
}: ProgressProps) {
  const percentage = ((value || 0) / max) * 100;

  return (
    <Root
      className={cn(
        progressDef.progress,
        progressStyles({ size, outline: outline ? variant : null }),
        className,
      )}
      {...restProps}
    >
      <Indicator
        className={cn(
          progressDef.indicator,
          progressStyles({
            variant,
          }),
        )}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </Root>
  );
});
