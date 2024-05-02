import { cn } from '@utima/ui';
import { type ComponentPropsWithoutRef, forwardRef, memo } from 'react';

export type FormInfoProps = ComponentPropsWithoutRef<'span'>;

// eslint-disable-next-line react/no-multi-comp
export const FormInfo = memo(
  forwardRef<HTMLSpanElement, FormInfoProps>(
    ({ className, ...restProps }, ref) => (
      <span
        ref={ref}
        className={cn('text-sm text-placeholder', className)}
        {...restProps}
      />
    ),
  ),
);
