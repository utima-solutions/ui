import { cn } from '@/utils';
import { tv, type VariantProps } from 'tailwind-variants';
import { forwardRef, type HTMLAttributes } from 'react';

const alertVariants = tv({
  slots: {
    base: 'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3.5 [&>svg]:text-foreground [&>svg~*]:pl-7',
    icon: 'mr-3 inline-block align-text-bottom',
    content: '[&>svg+div]:translate-y-[-3px]',
    title: 'mb-1 leading-none tracking-tight font-semibold',
    description: 'text-sm [&_p]:leading-relaxed',
  },
  variants: {
    variant: {
      default: {
        base: 'bg-background text-foreground',
      },
      destructive: {
        base: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
      success: {
        base: 'border-success/50 text-success dark:border-success [&>svg]:text-success',
      },
      primary: {
        base: 'bg-primary text-primary-foreground [&>svg]:text-primary-foreground',
      },
      outline: {
        base: 'border-input bg-background shadow-sm',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    const styles = alertVariants({ variant });

    return (
      <div
        ref={ref}
        role='alert'
        data-uui-alert
        className={cn(styles.base(), className)}
        {...props}
      />
    );
  },
);

export const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const styles = alertVariants();

  return (
    <h5
      ref={ref}
      data-uui-alert-title
      className={cn(styles.title(), className)}
      {...props}
    />
  );
});

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const styles = alertVariants();

  return (
    <div
      ref={ref}
      data-uui-alert-description
      className={cn(styles.description(), className)}
      {...props}
    />
  );
});
