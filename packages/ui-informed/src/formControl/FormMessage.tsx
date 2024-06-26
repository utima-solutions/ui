import { cn } from '@utima/ui';
import { type ComponentPropsWithoutRef, memo } from 'react';

export type FormMessageProps = ComponentPropsWithoutRef<'p'>;

export const FormMessage = memo(function FormMessage({
  className,
  ...restProps
}: FormMessageProps) {
  return (
    <p className={cn('text-xs -mt-1 text-danger', className)} {...restProps} />
  );
});
