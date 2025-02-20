import { HelpCircle, AlertCircle } from 'lucide-react';
import {
  createContext,
  useContext,
  type ReactNode,
  forwardRef,
  type HTMLAttributes,
  useMemo,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';
import * as LabelPrimitive from '../label/label';
import * as Tooltip from '../tooltip';

// eslint-disable-next-line tailwindcss/no-custom-classname
export const formItemVariants = tv({
  slots: {
    root: 'flex gap-2',
    content: 'flex flex-col gap-2',
    label: 'flex items-center gap-1.5',
    description: 'text-muted-foreground text-sm',
    error: 'text-destructive flex items-center gap-1.5 text-sm font-medium',
    helperText: 'text-muted-foreground text-sm italic',
    helpers: 'flex items-center justify-between gap-2',
  },
  variants: {
    layout: {
      vertical: {
        root: 'w-full flex-col',
        label: '',
      },
      horizontal: {
        root: 'grid w-full grid-cols-4 items-start gap-4',
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
        description: 'text-[11px]',
        error: 'text-xs [&>svg]:size-3',
        helperText: 'text-xs',
      },
      sm: {
        content: 'gap-1.5',
        description: 'text-[11px]',
        error: 'text-sm [&>svg]:size-3.5',
        helperText: 'text-sm',
      },
      md: {
        content: 'gap-2',
        description: 'text-xs',
        error: 'text-sm [&>svg]:size-4',
        helperText: 'text-sm',
      },
      lg: {
        content: 'gap-2.5',
        description: 'text-sm',
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
        label: 'mt-1.5',
      },
    },
    {
      layout: 'horizontal',
      size: 'sm',
      class: {
        label: 'mt-1.5',
      },
    },
    {
      layout: 'horizontal',
      size: 'md',
      class: {
        label: 'mt-2',
      },
    },
    {
      layout: 'horizontal',
      size: 'lg',
      class: {
        label: 'mt-2.5',
      },
    },
  ],
  defaultVariants: {
    layout: 'vertical',
    size: 'md',
  },
});

type FormItemContextValue = {
  layout: 'vertical' | 'horizontal' | 'inline';
  size: 'xs' | 'sm' | 'md' | 'lg';
};

const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFormItem() {
  const context = useContext(FormItemContext);

  if (!context) {
    throw new Error('useFormItem must be used within a FormItem');
  }

  return context;
}

export interface FormItemProps extends VariantProps<typeof formItemVariants> {
  className?: string;
  children?: ReactNode;
}

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  (
    { layout = 'vertical', size = 'md', className, children, ...props },
    ref,
  ) => {
    const styles = formItemVariants({ layout, size });
    const contextValue = useMemo(() => ({ layout, size }), [layout, size]);

    return (
      <FormItemContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-uui-form-field
          className={cn(styles.root(), className)}
          {...props}
        >
          {children}
        </div>
      </FormItemContext.Provider>
    );
  },
);

export interface FormItemContentProps {
  className?: string;
  children?: ReactNode;
}

export function FormItemContent({ className, children }: FormItemContentProps) {
  const { layout } = useFormItem();
  const styles = formItemVariants({ layout });

  return <div className={cn(styles.content(), className)}>{children}</div>;
}

export interface FormItemLabelProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean | undefined | string;
  optional?: boolean;
  htmlFor?: string;
  helpIcon?: ReactNode;
  classNameRequired?: string;
  classNameOptional?: string;
  classNameIcon?: string;
  classNameLabel?: string;
}

export const FormItemLabel = forwardRef<HTMLDivElement, FormItemLabelProps>(
  (
    {
      className,
      children,
      tooltip,
      required,
      optional,
      htmlFor,
      helpIcon,
      classNameRequired,
      classNameOptional,
      classNameIcon,
      classNameLabel,
      ...props
    },
    ref,
  ) => {
    const { layout, size } = useFormItem();
    const styles = formItemVariants({ layout, size });

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
          data-uui-form-field-label
          className={cn('inline-flex items-center gap-1.5', classNameLabel)}
        >
          {children}
          {required && (
            <span
              data-uui-form-field-label-required
              className={cn('text-destructive', classNameRequired)}
            >
              {typeof required === 'string' ? required : '*'}
            </span>
          )}
          {optional && (
            <span
              data-uui-form-field-label-optional
              className={cn('text-muted-foreground', classNameOptional)}
            >
              (Optional)
            </span>
          )}
          {tooltip && (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  {helpIcon || (
                    <HelpCircle
                      data-uui-form-field-label-tooltip
                      className={cn(
                        'text-muted-foreground size-4 cursor-help',
                        classNameIcon,
                      )}
                    />
                  )}
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

export interface FormItemDescriptionProps {
  className?: string;
  children?: ReactNode;
}

export function FormItemDescription({
  className,
  children,
}: FormItemDescriptionProps) {
  const { layout, size } = useFormItem();
  const styles = formItemVariants({ layout, size });

  if (!children) {
    return null;
  }

  return (
    <p
      data-uui-form-field-description
      className={cn(styles.description(), className)}
    >
      {children}
    </p>
  );
}

export interface FormItemErrorProps {
  className?: string;
  children?: ReactNode;
}

export function FormItemError({ className, children }: FormItemErrorProps) {
  const { layout, size } = useFormItem();
  const styles = formItemVariants({ layout, size });

  if (!children) {
    return null;
  }

  return (
    <p data-uui-form-field-error className={cn(styles.error(), className)}>
      <AlertCircle />
      {children}
    </p>
  );
}

export interface FormItemHelperTextProps {
  className?: string;
  children?: ReactNode;
  position?: 'left' | 'right';
}

export function FormItemHelperText({
  className,
  children,
  position = 'left',
}: FormItemHelperTextProps) {
  const { layout, size } = useFormItem();
  const styles = formItemVariants({ layout, size });

  if (!children) {
    return null;
  }

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

export interface FormItemHelpersProps {
  className?: string;
  children?: ReactNode;
}

export function FormItemHelpers({ className, children }: FormItemHelpersProps) {
  const { layout } = useFormItem();
  const styles = formItemVariants({ layout });

  return (
    <div
      data-uui-form-field-helpers
      className={cn(styles.helpers(), className)}
    >
      {children}
    </div>
  );
}
