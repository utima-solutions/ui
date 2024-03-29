import { cn } from '@utima/ui';
import { type ComponentProps, memo } from 'react';

export type FormInfoProps = ComponentProps<'span'>;

// export const FormInfo = forwardRef<HTMLSpanElement, FormInfoProps>(
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
