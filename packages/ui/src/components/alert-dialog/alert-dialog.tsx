import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';
import type { ComponentRef, ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { buttonVariants } from '../button/button';

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export interface AlertDialogOverlayProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {}

export const AlertDialogOverlay = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayProps
>(function AlertDialogOverlay({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      data-uui-alert-dialog-overlay
      {...props}
      ref={ref}
    />
  );
});

export interface AlertDialogContentProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {}

export const AlertDialogContent = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(function AlertDialogContent({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Content
      ref={ref}
      data-uui-alert-dialog-content
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    />
  );
});

export interface AlertDialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return (
    <div
      data-uui-alert-dialog-header
      className={cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

export interface AlertDialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      data-uui-alert-dialog-footer
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  );
}

export interface AlertDialogTitleProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {}

export const AlertDialogTitle = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(function AlertDialogTitle({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      data-uui-alert-dialog-title
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  );
});

export interface AlertDialogDescriptionProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {}

export const AlertDialogDescription = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionProps
>(function AlertDialogDescription({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      data-uui-alert-dialog-description
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});

export interface AlertDialogActionProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {}

export const AlertDialogAction = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(function AlertDialogAction({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      data-uui-alert-dialog-action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
});

export interface AlertDialogCancelProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {}

export const AlertDialogCancel = React.forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(function AlertDialogCancel({ className, ...props }, ref) {
  console.log('AlertDialogCancel', buttonVariants({ variant: 'outline' }));

  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      data-uui-alert-dialog-cancel
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'mt-2 sm:mt-0',
        className,
      )}
      {...props}
    />
  );
});
