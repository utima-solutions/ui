import { ChevronRight } from 'lucide-react';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export const BreadcrumbSeparator = memo(function BreadcrumbSeparator({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'li'>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn(breadcrumbDef.separator, className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
});
