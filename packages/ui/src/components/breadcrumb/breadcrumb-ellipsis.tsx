import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '@/utils';

export type BreadcrumbEllipsisProps = ComponentPropsWithoutRef<'span'>;

export const BreadcrumbEllipsis = forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(function BreadcrumbEllipsis(
  { className, children = <MoreHorizontal />, ...restProps },
  ref,
) {
  return (
    <span
      ref={ref}
      data-uui-breadcrumb-ellipsis
      role='presentation'
      aria-hidden='true'
      className={cn(
        'flex h-9 w-9 items-center justify-center text-muted-foreground [&_svg]:size-4',
        className,
      )}
      {...restProps}
    >
      {children}
    </span>
  );
});
