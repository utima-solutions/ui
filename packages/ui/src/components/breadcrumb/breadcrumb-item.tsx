import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils';

export type BreadcrumbItemProps = ComponentPropsWithoutRef<'li'>;

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ className, ...restProps }, ref) {
    return (
      <li
        ref={ref}
        data-uui-breadcrumb-item
        className={cn('inline-flex items-center gap-1.5', className)}
        {...restProps}
      />
    );
  },
);
