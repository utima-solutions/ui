import { tv, type VariantProps } from 'tailwind-variants';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils';

export interface BreadcrumbLinkProps extends ComponentPropsWithoutRef<'a'> {}

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(function BreadcrumbLink({ className, ...restProps }, ref) {
  return (
    <a
      ref={ref}
      data-uui-breadcrumb-link
      className={cn(
        'text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring hover:text-foreground',
        className,
      )}
      {...restProps}
    />
  );
});
