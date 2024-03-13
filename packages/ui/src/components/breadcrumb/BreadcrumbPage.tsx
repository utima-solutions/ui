import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export const BreadcrumbPage = memo(function BreadcrumbPage({
  className,
  ...props
}: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      role='link'
      aria-disabled='true'
      aria-current='page'
      className={cn(breadcrumbDef.page, className)}
      {...props}
    />
  );
});
