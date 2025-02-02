import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils';

export type BreadcrumbPageProps = ComponentPropsWithoutRef<'span'>;

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  function BreadcrumbPage({ className, ...restProps }, ref) {
    return (
      <span
        ref={ref}
        data-uui-breadcrumb-page
        aria-current='page'
        className={cn('font-medium text-foreground', className)}
        {...restProps}
      />
    );
  },
);
