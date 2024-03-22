import { cn } from '@utima/ui';
import { forwardRef, type ComponentProps } from 'react';

export type FormInfoProps = ComponentProps<'span'>;

export const FormInfo = forwardRef<HTMLSpanElement, FormInfoProps>(
  function FormInfo({ className, ...restProps }, ref) {
    return (
      <span
        ref={ref}
        className={cn('text-sm text-placeholder', className)}
        {...restProps}
      />
    );
  },
);
