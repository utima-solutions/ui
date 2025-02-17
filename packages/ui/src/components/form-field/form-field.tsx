import { tv, type VariantProps } from 'tailwind-variants';
import {
  createContext,
  useContext,
  type ReactNode,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { cn } from '@/utils';
import { Label } from '../label/label';

import * as Tooltip from '../tooltip';
import { HelpCircle, AlertCircle } from 'lucide-react';

// TODO rename to form item?

const formFieldVariants = tv({
  slots: {
    root: 'flex gap-2',
    content: 'flex flex-col gap-2',
    label: 'flex items-center gap-1.5',
    description: 'text-sm text-muted-foreground',
    error: 'text-sm text-destructive font-medium flex items-center gap-1.5',
    helperText: 'text-sm text-muted-foreground italic',
    helpers: 'flex justify-between items-center gap-2',
    group: 'space-y-4',
    groupHeader: 'space-y-1',
    groupTitle: 'text-sm font-medium',
    groupDescription: 'text-sm text-muted-foreground',
    row: 'flex gap-4 items-start',
    section: 'space-y-6',
    sectionHeader: 'space-y-1',
    sectionTitle: 'text-lg font-medium',
    sectionDescription: 'text-sm text-muted-foreground',
    actions: 'flex gap-3 mt-6',
  },
  variants: {
    layout: {
      vertical: {
        root: 'flex-col w-full',
        label: '',
      },
      horizontal: {
        root: 'flex-row items-start',
        label: 'min-w-32 pt-2',
      },
      inline: {
        root: 'flex-row items-start',
        label: '',
      },
    },
    size: {
      xs: {
        content: 'gap-1',
        description: 'text-xs',
        error: 'text-xs [&>svg]:size-3',
        helperText: 'text-xs',
        groupTitle: 'text-xs',
        groupDescription: 'text-xs',
        sectionTitle: 'text-base',
        sectionDescription: 'text-xs',
      },
      sm: {
        content: 'gap-1.5',
        description: 'text-sm',
        error: 'text-sm [&>svg]:size-3.5',
        helperText: 'text-sm',
        groupTitle: 'text-sm',
        groupDescription: 'text-sm',
        sectionTitle: 'text-lg',
        sectionDescription: 'text-sm',
      },
      md: {
        content: 'gap-2',
        description: 'text-sm',
        error: 'text-sm [&>svg]:size-4',
        helperText: 'text-sm',
        groupTitle: 'text-base',
        groupDescription: 'text-sm',
        sectionTitle: 'text-xl',
        sectionDescription: 'text-sm',
      },
      lg: {
        content: 'gap-2.5',
        description: 'text-base',
        error: 'text-base [&>svg]:size-5',
        helperText: 'text-base',
        groupTitle: 'text-lg',
        groupDescription: 'text-base',
        sectionTitle: 'text-2xl',
        sectionDescription: 'text-base',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
    size: 'md',
  },
});

type FormFieldContextValue = {
  layout: 'vertical' | 'horizontal' | 'inline';
  size: 'xs' | 'sm' | 'md' | 'lg';
  id: string;
  error?: ReactNode;
  disabled?: boolean;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('useFormField must be used within a FormField');
  }

  return context;
}

/**
 * FormField
 *
 * The root component for form fields. Provides context and layout structure
 * for all other form field components. Supports vertical, horizontal, and
 * inline layouts with consistent spacing and alignment.
 *
 * @example
 * <FormField>
 *   <FormFieldLabel>Username</FormFieldLabel>
 *   <FormFieldContent>
 *     <Input />
 *   </FormFieldContent>
 * </FormField>
 */
export interface FormFieldProps extends VariantProps<typeof formFieldVariants> {
  id?: string;
  className?: string;
  error?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      id = crypto.randomUUID(),
      layout = 'vertical',
      size = 'md',
      className,
      error,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const styles = formFieldVariants({ layout, size });

    return (
      <FormFieldContext.Provider value={{ layout, size, id, error, disabled }}>
        <div
          ref={ref}
          data-uui-form-field
          className={cn(styles.root(), className)}
          {...props}
        >
          {children}
        </div>
      </FormFieldContext.Provider>
    );
  },
);

export interface FormFieldContentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Wraps the content of the form field. This should
 * include inputs, helper, error texts, descriptions, etc.
 */
export function FormFieldContent({
  className,
  children,
}: FormFieldContentProps) {
  const { id, layout } = useFormField();
  const styles = formFieldVariants({ layout });

  return <div className={cn(styles.content(), className)}>{children}</div>;
}

/**
 * FormFieldLabel
 *
 * Label component for form fields. Supports required/optional states,
 * tooltips, and different layouts. Automatically connects with parent
 * FormField context for consistent styling and behavior.
 */
export interface FormFieldLabelProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean;
  optional?: boolean;
}

export const FormFieldLabel = forwardRef<HTMLDivElement, FormFieldLabelProps>(
  ({ className, children, tooltip, required, optional, ...props }, ref) => {
    const { id, layout, size } = useFormField();
    const styles = formFieldVariants({ layout, size });

    return (
      <div
        ref={ref}
        data-uui-form-field-label
        className={cn(styles.label(), className)}
        {...props}
      >
        <Label
          htmlFor={id}
          size={size}
          className='inline-flex items-center gap-1.5'
        >
          {children}
          {required && <span className='text-destructive'>*</span>}
          {optional && (
            <span className='text-muted-foreground'>(Optional)</span>
          )}
          {tooltip && (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <HelpCircle className='size-4 cursor-help text-muted-foreground' />
                </Tooltip.Trigger>
                <Tooltip.Content>{tooltip}</Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          )}
        </Label>
      </div>
    );
  },
);

/**
 * FormFieldDescription
 *
 * Permanent help text that explains the field purpose or requirements.
 * Can be positioned left or right within a FormFieldHelpers container.
 */
export interface FormFieldDescriptionProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  position?: 'left' | 'right';
}

export const FormFieldDescription = forwardRef<
  HTMLDivElement,
  FormFieldDescriptionProps
>(({ className, children, position = 'left', ...props }, ref) => {
  const { size } = useFormField();
  const styles = formFieldVariants({ size });

  return (
    <div
      ref={ref}
      data-uui-form-field-description
      className={cn(
        styles.description(),
        position === 'right' && 'ml-auto',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

/**
 * FormFieldError
 *
 * Displays validation errors with an error icon.
 * Automatically styled in destructive color.
 */
export interface FormFieldErrorProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const FormFieldError = forwardRef<HTMLDivElement, FormFieldErrorProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useFormField();
    const styles = formFieldVariants({ size });

    return (
      <div
        ref={ref}
        data-uui-form-field-error
        className={cn(styles.error(), className)}
        {...props}
      >
        <AlertCircle />
        {children}
      </div>
    );
  },
);

/**
 * FormFieldHelperText
 *
 * Dynamic help text that changes based on input state.
 * Useful for password strength indicators or character counts.
 */
export interface FormFieldHelperTextProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  position?: 'left' | 'right';
}

export const FormFieldHelperText = forwardRef<
  HTMLDivElement,
  FormFieldHelperTextProps
>(({ className, children, position = 'left', ...props }, ref) => {
  const { size } = useFormField();
  const styles = formFieldVariants({ size });

  return (
    <div
      ref={ref}
      data-uui-form-field-helper-text
      className={cn(
        styles.helperText(),
        position === 'right' && 'ml-auto',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

/**
 * FormFieldHelpers
 *
 * Container for helper elements that need to be displayed inline.
 * Typically used to show description and helper text side by side.
 */
export interface FormFieldHelpersProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const FormFieldHelpers = forwardRef<
  HTMLDivElement,
  FormFieldHelpersProps
>(({ className, children, ...props }, ref) => {
  const { size } = useFormField();
  const styles = formFieldVariants({ size });

  return (
    <div
      ref={ref}
      data-uui-form-field-helpers
      className={cn(styles.helpers(), className)}
      {...props}
    >
      {children}
    </div>
  );
});

/**
 * FormFieldGroup
 *
 * Groups related form fields together with an optional title and description.
 * Provides consistent spacing and styling for field groups.
 */
export interface FormFieldGroupProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  title?: string;
  description?: string;
}

export const FormFieldGroup = forwardRef<HTMLDivElement, FormFieldGroupProps>(
  ({ className, children, title, description, ...props }, ref) => {
    const { size } = useFormField();
    const styles = formFieldVariants({ size });

    return (
      <div
        ref={ref}
        data-uui-form-field-group
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
        <div className={styles.group()}>{children}</div>
      </div>
    );
  },
);

/**
 * FormFieldRow
 *
 * Displays form fields in a horizontal row with consistent spacing.
 * Useful for related fields that should be displayed side by side.
 */
export interface FormFieldRowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const FormFieldRow = forwardRef<HTMLDivElement, FormFieldRowProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useFormField();
    const styles = formFieldVariants({ size });

    return (
      <div
        ref={ref}
        data-uui-form-field-row
        className={cn(styles.row(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

/**
 * FormFieldSection
 *
 * A larger grouping component for form fields with a title and description.
 * Used to organize forms into logical sections.
 */
export interface FormFieldSectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  title: string;
  description?: string;
}

export const FormFieldSection = forwardRef<HTMLElement, FormFieldSectionProps>(
  ({ className, children, title, description, ...props }, ref) => {
    const { size } = useFormField();
    const styles = formFieldVariants({ size });

    return (
      <section
        ref={ref}
        data-uui-form-field-section
        className={cn(styles.section(), className)}
        {...props}
      >
        <div className={styles.sectionHeader()}>
          <h3 className={styles.sectionTitle()}>{title}</h3>
          {description && (
            <p className={styles.sectionDescription()}>{description}</p>
          )}
        </div>
        <div className={styles.section()}>{children}</div>
      </section>
    );
  },
);

/**
 * FormFieldActions
 *
 * Container for form action buttons with configurable alignment.
 * Typically used at the bottom of forms for submit/cancel buttons.
 */
export interface FormFieldActionsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  position?: 'left' | 'right' | 'center';
}

export const FormFieldActions = forwardRef<
  HTMLDivElement,
  FormFieldActionsProps
>(({ className, children, position = 'right', ...props }, ref) => {
  const { size } = useFormField();
  const styles = formFieldVariants({ size });

  return (
    <div
      ref={ref}
      data-uui-form-field-actions
      className={cn(
        styles.actions(),
        position === 'right' && 'justify-end',
        position === 'center' && 'justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
