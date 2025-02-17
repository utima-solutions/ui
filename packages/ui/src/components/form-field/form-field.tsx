import { tv, type VariantProps } from 'tailwind-variants';
import {
  createContext,
  useContext,
  type ReactNode,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { cn } from '@/utils';
import * as LabelPrimitive from '../label/label';

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
  },
  variants: {
    layout: {
      vertical: {
        root: 'flex-col w-full',
        label: '',
      },
      horizontal: {
        root: 'grid grid-cols-4 items-start w-full gap-4',
        label: 'col-span-1 justify-end text-right',
        content: 'col-span-3',
      },
      inline: {
        root: 'inline-flex flex-row items-start',
        label: 'pt-2',
      },
    },
    size: {
      xs: {
        content: 'gap-1',
        description: 'text-xs',
        error: 'text-xs [&>svg]:size-3',
        helperText: 'text-xs',
      },
      sm: {
        content: 'gap-1.5',
        description: 'text-sm',
        error: 'text-sm [&>svg]:size-3.5',
        helperText: 'text-sm',
      },
      md: {
        content: 'gap-2',
        description: 'text-sm',
        error: 'text-sm [&>svg]:size-4',
        helperText: 'text-sm',
      },
      lg: {
        content: 'gap-2.5',
        description: 'text-base',
        error: 'text-base [&>svg]:size-5',
        helperText: 'text-base',
      },
    },
  },
  compoundVariants: [
    {
      layout: 'horizontal',
      size: 'xs',
      class: {
        label: 'mt-1.5'
      }
    },
    {
      layout: 'horizontal',
      size: 'sm',
      class: {
        label: 'mt-1.5'
      }
    },
    {
      layout: 'horizontal',
      size: 'md',
      class: {
        label: 'mt-2'
      }
    },
    {
      layout: 'horizontal',
      size: 'lg',
      class: {
        label: 'mt-2.5'
      }
    },
  ],
  defaultVariants: {
    layout: 'vertical',
    size: 'md',
  },
});

type FormFieldContextValue = {
  layout: 'vertical' | 'horizontal' | 'inline';
  size: 'xs' | 'sm' | 'md' | 'lg';
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw new Error('useFormField must be used within a FormField');
  }

  return context;
}

export interface FormFieldProps extends VariantProps<typeof formFieldVariants> {
  className?: string;
  children?: ReactNode;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { layout = 'vertical', size = 'md', className, children, ...props },
    ref,
  ) => {
    const styles = formFieldVariants({ layout, size });

    return (
      <FormFieldContext.Provider value={{ layout, size }}>
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

export function FormFieldContent({
  className,
  children,
}: FormFieldContentProps) {
  const { layout } = useFormField();
  const styles = formFieldVariants({ layout });

  return <div className={cn(styles.content(), className)}>{children}</div>;
}

export interface FormFieldLabelProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean;
  optional?: boolean;
  htmlFor?: string;
}

export const FormFieldLabel = forwardRef<HTMLDivElement, FormFieldLabelProps>(
  ({ className, children, tooltip, required, optional, htmlFor, ...props }, ref) => {
    const { layout, size } = useFormField();
    const styles = formFieldVariants({ layout, size });

    return (
      <div
        ref={ref}
        data-uui-form-field-label
        className={cn(styles.label(), className)}
        {...props}
      >
        <LabelPrimitive.Label
          size={size}
          htmlFor={htmlFor}
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
        </LabelPrimitive.Label>
      </div>
    );
  },
);

export interface FormFieldDescriptionProps {
  className?: string;
  children?: ReactNode;
}

export function FormFieldDescription({
  className,
  children,
}: FormFieldDescriptionProps) {
  const { layout, size } = useFormField();
  const styles = formFieldVariants({ layout, size });

  return (
    <p
      data-uui-form-field-description
      className={cn(styles.description(), className)}
    >
      {children}
    </p>
  );
}

export interface FormFieldErrorProps {
  className?: string;
  children?: ReactNode;
}

export function FormFieldError({ className, children }: FormFieldErrorProps) {
  const { layout, size } = useFormField();
  const styles = formFieldVariants({ layout, size });

  return (
    <p data-uui-form-field-error className={cn(styles.error(), className)}>
      <AlertCircle />
      {children}
    </p>
  );
}

export interface FormFieldHelperTextProps {
  className?: string;
  children?: ReactNode;
  position?: 'left' | 'right';
}

export function FormFieldHelperText({
  className,
  children,
  position = 'left',
}: FormFieldHelperTextProps) {
  const { layout, size } = useFormField();
  const styles = formFieldVariants({ layout, size });

  return (
    <p
      data-uui-form-field-helper-text
      className={cn(
        styles.helperText(),
        position === 'right' && 'ml-auto',
        className,
      )}
    >
      {children}
    </p>
  );
}

export interface FormFieldHelpersProps {
  className?: string;
  children?: ReactNode;
}

export function FormFieldHelpers({
  className,
  children,
}: FormFieldHelpersProps) {
  const { layout } = useFormField();
  const styles = formFieldVariants({ layout });

  return (
    <div
      data-uui-form-field-helpers
      className={cn(styles.helpers(), className)}
    >
      {children}
    </div>
  );
}
