import { cn } from '@utima/ui';
import { type ComponentPropsWithoutRef, memo } from 'react';

export type FormInfoProps = ComponentPropsWithoutRef<'span'>;

export const FormInfo = memo(function FormInfo({
  className,
  ...restProps
}: FormInfoProps) {
  return (
    <span
      className={cn('text-sm text-placeholder', className)}
      {...restProps}
    />
  );
});
