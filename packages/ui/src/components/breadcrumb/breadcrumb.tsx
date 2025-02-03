import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

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

export interface BreadcrumbSeparatorProps
  extends ComponentPropsWithoutRef<'span'> {}

export const BreadcrumbSeparator = forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(function BreadcrumbSeparator(
  { className, children = <ChevronRight />, ...restProps },
  ref,
) {
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
});

export interface BreadcrumbEllipsisProps
  extends ComponentPropsWithoutRef<'span'> {}

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

export interface BreadcrumbPageProps extends ComponentPropsWithoutRef<'span'> {}

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  function BreadcrumbPage({ className, ...restProps }, ref) {
    return (
      <span
        ref={ref}
        data-uui-breadcrumb-page
        aria-current='page'
        className={cn('font-medium text-foreground', className)}
        {...restProps}
      />
    );
  },
);

export interface BreadcrumbListProps extends ComponentPropsWithoutRef<'ol'> {}

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  function BreadcrumbList({ className, ...restProps }, ref) {
    return (
      <ol
        ref={ref}
        data-uui-breadcrumb-list
        className={cn(
          'flex flex-wrap items-center gap-1 break-words text-sm text-muted-fg sm:gap-1.5',
          className,
        )}
        {...restProps}
      />
    );
  },
);

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

export interface BreadcrumbItemProps extends ComponentPropsWithoutRef<'li'> {}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ className, ...restProps }, ref) {
    return (
      <li
        ref={ref}
        data-uui-breadcrumb-item
        className={cn('inline-flex items-center gap-1.5', className)}
        {...restProps}
      />
    );
  },
);
