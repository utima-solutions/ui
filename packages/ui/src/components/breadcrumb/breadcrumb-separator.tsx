import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/utils';

export type BreadcrumbSeparatorProps = ComponentPropsWithoutRef<'span'>;

export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  function BreadcrumbSeparator({ className, children = <ChevronRight />, ...restProps }, ref) {
    return (
      <span
        ref={ref}
        data-uui-breadcrumb-separator
        role='presentation'
        aria-hidden='true'
        className={cn('text-muted-foreground/40 [&_svg]:size-3.5', className)}
        {...restProps}
      >
        {children}
      </span>
    );
  },
);
