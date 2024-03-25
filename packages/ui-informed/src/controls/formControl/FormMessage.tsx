import { cn } from '@utima/ui';
import { forwardRef, type ComponentProps } from 'react';

export type FormMessageProps = ComponentProps<'p'>;

export const FormMessage = forwardRef<HTMLDivElement, FormMessageProps>(
  function FormMessage({ className, ...restProps }, ref) {
    return (
      <p
        ref={ref}
        className={cn('text-xs -mt-1 text-danger', className)}
        {...restProps}
      />
    );
  },
);
