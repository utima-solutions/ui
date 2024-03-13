import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export const BreadcrumbItem = memo(function BreadcrumbItem({
  className,
  ...props
}: ComponentPropsWithoutRef<'li'>) {
  return <li className={cn(breadcrumbDef.item, className)} {...props} />;
});
