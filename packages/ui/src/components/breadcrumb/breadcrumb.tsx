import { tv, type VariantProps } from 'tailwind-variants';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/utils';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb({ className, ...restProps }, ref) {
    return (
      <nav
        ref={ref}
        data-uui-breadcrumb
        aria-label='breadcrumb'
        className={cn(
          'inline-flex items-center gap-1.5 text-sm text-muted-foreground',
          className,
        )}
        {...restProps}
      />
    );
  },
);
