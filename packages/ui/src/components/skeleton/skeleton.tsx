import type { HTMLAttributes } from 'react';

import { cn } from '@/utils';

export function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-uui-skeleton
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}
