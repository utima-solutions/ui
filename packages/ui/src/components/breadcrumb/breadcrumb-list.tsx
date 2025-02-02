import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils';

export type BreadcrumbListProps = ComponentPropsWithoutRef<'ol'>;

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  function BreadcrumbList({ className, ...restProps }, ref) {
    return (
      <ol
        ref={ref}
        data-uui-breadcrumb-list
        className={cn('flex flex-wrap items-center gap-1 break-words text-sm text-muted-fg sm:gap-1.5', className)}
        {...restProps}
      />
    );
  },
);
