import { MoreHorizontal } from 'lucide-react';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { breadcrumbDef } from './Breadcrumb.styles';

export const BreadcrumbEllipsis = memo(function BreadcrumbEllipsis({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      role='presentation'
      aria-hidden='true'
      className={cn(breadcrumbDef.ellipsis.wrapper, className)}
      {...props}
    >
      <MoreHorizontal className={breadcrumbDef.ellipsis.icon} />
      <span className='sr-only'>More</span>
    </span>
  );
});
