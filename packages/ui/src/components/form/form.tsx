import { type ReactNode, forwardRef, type HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

const formVariants = tv({
  slots: {
    group: 'space-y-4',
    groupHeader: 'space-y-1',
    groupTitle: 'text-sm font-medium',
    groupDescription: 'text-muted-foreground text-sm',
    row: 'flex items-start gap-4',
    section: 'space-y-6',
    sectionHeader: 'space-y-1',
    sectionTitle: 'text-lg font-medium',
    sectionDescription: 'text-muted-foreground text-sm',
    actions: 'mt-6 flex gap-3',
  },
  variants: {
    size: {
      xs: {
        groupTitle: 'text-xs',
        groupDescription: 'text-xs',
        sectionTitle: 'text-base',
        sectionDescription: 'text-xs',
      },
      sm: {
        groupTitle: 'text-sm',
        groupDescription: 'text-sm',
        sectionTitle: 'text-lg',
        sectionDescription: 'text-sm',
      },
      md: {
        groupTitle: 'text-base',
        groupDescription: 'text-sm',
        sectionTitle: 'text-xl',
        sectionDescription: 'text-sm',
      },
      lg: {
        groupTitle: 'text-lg',
        groupDescription: 'text-base',
        sectionTitle: 'text-2xl',
        sectionDescription: 'text-base',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  className?: string;
  children?: ReactNode;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        data-uui-form
        className={cn('space-y-6', className)}
        {...props}
      >
        {children}
      </form>
    );
  },
);

export interface FormSectionProps extends VariantProps<typeof formVariants> {
  className?: string;
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, children, title, description, size, ...props }, ref) => {
    const styles = formVariants({ size });

    return (
      <section
        ref={ref}
        data-uui-form-section
        className={cn(styles.section(), className)}
        {...props}
      >
        {(title || description) && (
          <div className={styles.sectionHeader()}>
            {title && <h3 className={styles.sectionTitle()}>{title}</h3>}
            {description && (
              <p className={styles.sectionDescription()}>{description}</p>
            )}
          </div>
        )}
        {children}
      </section>
    );
  },
);

export interface FormGroupProps extends VariantProps<typeof formVariants> {
  className?: string;
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, title, description, size, ...props }, ref) => {
    const styles = formVariants({ size });

    return (
      <div
        ref={ref}
        data-uui-form-group
        className={cn(styles.group(), className)}
        {...props}
      >
        {(title || description) && (
          <div className={styles.groupHeader()}>
            {title && <h4 className={styles.groupTitle()}>{title}</h4>}
            {description && (
              <p className={styles.groupDescription()}>{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    );
  },
);

export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const FormRow = forwardRef<HTMLDivElement, FormRowProps>(
  ({ className, children, ...props }, ref) => {
    const styles = formVariants();

    return (
      <div
        ref={ref}
        data-uui-form-row
        className={cn(styles.row(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export interface FormActionsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const FormActions = forwardRef<HTMLDivElement, FormActionsProps>(
  ({ className, children, ...props }, ref) => {
    const styles = formVariants();

    return (
      <div
        ref={ref}
        data-uui-form-actions
        className={cn(styles.actions(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
