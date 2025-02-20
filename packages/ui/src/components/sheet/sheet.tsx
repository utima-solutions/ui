import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import {
  forwardRef,
  type ComponentRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

const sheetVariants = tv({
  slots: {
    base: 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    overlay:
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
    header: 'flex flex-col space-y-2 text-center sm:text-left',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    title: 'text-foreground text-lg font-semibold',
    description: 'text-muted-foreground text-sm',
    close:
      'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
    closeIcon: 'size-4',
  },
  variants: {
    side: {
      top: {
        base: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
      },
      bottom: {
        base: 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
      },
      left: {
        base: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      },
      right: {
        base: 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
});

export const SheetOverlay = forwardRef<
  ComponentRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const styles = sheetVariants();

  return (
    <DialogPrimitive.Overlay
      data-uui-sheet-overlay
      className={cn(styles.overlay(), className)}
      {...props}
      ref={ref}
    />
  );
});

export interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  closeIcon?: React.ReactNode;
  closeLabel?: string;
  classNameIcon?: string;
  classNameClose?: string;
}

export const SheetContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      className,
      children,
      closeIcon,
      closeLabel = 'Close',
      classNameIcon,
      classNameClose,
      ...props
    },
    ref,
  ) => {
    const styles = sheetVariants({ side });

    return (
      <DialogPrimitive.Content
        ref={ref}
        data-uui-sheet-content
        className={cn(styles.base(), className)}
        {...props}
      >
        <DialogPrimitive.Close
          data-uui-sheet-close
          className={cn(styles.close(), classNameClose)}
        >
          {closeIcon ?? (
            <X
              data-uui-sheet-close-icon
              className={cn(styles.closeIcon(), classNameIcon)}
            />
          )}
          <span className='sr-only'>{closeLabel}</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    );
  },
);

export function SheetHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const styles = sheetVariants();

  return (
    <div
      data-uui-sheet-header
      className={cn(styles.header(), className)}
      {...props}
    />
  );
}

export function SheetFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const styles = sheetVariants();

  return (
    <div
      data-uui-sheet-footer
      className={cn(styles.footer(), className)}
      {...props}
    />
  );
}

export const SheetTitle = forwardRef<
  ComponentRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const styles = sheetVariants();

  return (
    <DialogPrimitive.Title
      ref={ref}
      data-uui-sheet-title
      className={cn(styles.title(), className)}
      {...props}
    />
  );
});

export const SheetDescription = forwardRef<
  ComponentRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const styles = sheetVariants();

  return (
    <DialogPrimitive.Description
      ref={ref}
      data-uui-sheet-description
      className={cn(styles.description(), className)}
      {...props}
    />
  );
});
