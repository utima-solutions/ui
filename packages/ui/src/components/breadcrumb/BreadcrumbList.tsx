import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export const BreadcrumbList = memo(function BreadcrumbList({
  className,
  ...props
}: ComponentPropsWithoutRef<'ol'>) {
  return <ol className={cn(breadcrumbDef.list, className)} {...props} />;
});
