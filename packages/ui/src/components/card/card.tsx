import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '../../utils';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-uui-card
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow',
        className,
      )}
      {...props}
    />
  ),
);

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-uui-card-header
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));

export const CardTitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-uui-card-title
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));

export const CardDescription = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-uui-card-description
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-uui-card-content
    className={cn('p-6 pt-0', className)}
    {...props}
  />
));

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-uui-card-footer
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
