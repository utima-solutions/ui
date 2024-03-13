import { type ComponentPropsWithoutRef, type ReactNode, memo } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  separator?: ReactNode;
}

export const Breadcrumb = memo(function Breadcrumb({
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label='breadcrumb'
      className={cn(breadcrumbDef.breadcrumb, className)}
      {...props}
    />
  );
});
