import { cn } from '@utima/ui';
import { memo, type ComponentPropsWithoutRef } from 'react';

export interface DevtoolsLabelProps extends ComponentPropsWithoutRef<'span'> {
  active?: boolean;
  dotClassName?: string;
}

export const DevtoolsLabel = memo(function DevtoolsLabel({
  className,
  dotClassName,
  children,
  active,
  ...restProps
}: DevtoolsLabelProps) {
  return (
    <span
      className={cn(
        'rounded-md py-1 px-2 text-xs font-medium bg-zinc-700 inline-flex items-center gap-1',
        active && 'bg-zinc-100 text-zinc-900',
        className,
      )}
      {...restProps}
    >
      <span className={cn('size-2 rounded-full bg-rose-500', dotClassName)} />
      {children}
    </span>
  );
});
