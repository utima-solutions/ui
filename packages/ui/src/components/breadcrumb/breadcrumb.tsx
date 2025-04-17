import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '../../utils';

export const Breadcrumb = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'>
>(({ className, ...restProps }, ref) => {
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
});

export const BreadcrumbSeparator = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<'span'>
>(({ className, children = <ChevronRight />, ...restProps }, ref) => {
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

export const BreadcrumbEllipsis = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<'span'>
>(({ className, children = <MoreHorizontal />, ...restProps }, ref) => {
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

export const BreadcrumbPage = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<'span'>
>(({ className, ...restProps }, ref) => {
  return (
    <span
      ref={ref}
      data-uui-breadcrumb-page
      aria-current='page'
      className={cn('font-medium text-foreground', className)}
      {...restProps}
    />
  );
});

export const BreadcrumbList = forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<'ol'>
>(({ className, ...restProps }, ref) => {
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
});

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'>
>(({ className, ...restProps }, ref) => {
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

export const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<'li'>
>(({ className, ...restProps }, ref) => {
  return (
    <li
      ref={ref}
      data-uui-breadcrumb-item
      className={cn('inline-flex items-center gap-1.5', className)}
      {...restProps}
    />
  );
});
