import { Label, cn } from '@utima/ui';
import { type VariantProps, cva } from 'class-variance-authority';
import { type FieldProps, useField, useScope } from 'informed';
import { useId, type ReactNode } from 'react';
import type { ZodType } from 'zod';

import { FormInfo } from './FormInfo';
import { FormMessage } from './FormMessage';
import { useFormTranslationsContext } from '..';
import { useFormContext } from '../form/useFormContext';
import { zodResolver, getFieldZodObject } from '../zodUtils';

const formItemStyles = cva('relative flex gap-2 transition-all', {
  variants: {
    layout: {
      vertical: 'w-full flex-col',
      horizontal: 'w-full flex-row items-center',
      inline: 'w-auto flex-row items-center',
    },
  },
});

export type FieldType = 'text' | 'number' | 'textArea' | 'select' | 'checkbox';

/**
 * Global field props used by all form controls. These
 * are passed down through render function's field prop.
 * Every form control should consume these properly.
 */
export interface UserFieldProps {
  id: string;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  type?: FieldType;
}

/**
 * Render prop for FormControl component. It receives
 * field props and user props and should return the actual
 * form control component.
 */
export type FormControlRender = (
  params: {
    label?: string;
    userProps: Omit<UserFieldProps, 'type'>;
  } & ReturnType<typeof useField<UserFieldProps, string | number>>,
) => ReactNode;

/**
 * Props for FormControl component. It extends Informed's
 * FieldProps and VariantProps for styling. It also contains
 * a render prop to render the actual form control component.
 */
export interface FormControlProps
  extends FieldProps<Omit<UserFieldProps, 'id'>>,
    VariantProps<typeof formItemStyles> {
  children?: ReactNode;
  className?: string;
  label?: string;
  name: string;
  type?: FieldType;
  disabled?: boolean;
  readOnly?: boolean;
  tooltip?: ReactNode;
  showOptional?: boolean;
  render: FormControlRender;
  zodItemSchema?: ZodType;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  position?: 'start' | 'end';
}

/**
 * Helper subset of FormControl props used for consumer
 * control components. It contains all props except `render`
 * and `type`.
 */
export interface FormControlConsumerProps
  extends Omit<FormControlProps, 'render' | 'type'> {}
export type FormControlConsumerPropsKeys = keyof FormControlConsumerProps;
export type ConsumeFormControlProps<T> = FormControlConsumerProps &
  Omit<T, FormControlConsumerPropsKeys>;

/**
 * Base form control component, used to wrap form inputs.
 * It provides styling for error messages, states, labels
 * and tooltips.
 */
export function FormControl({
  className,
  layout = 'vertical',
  children,
  label,
  name,
  type = 'text',
  position = 'end',
  required,
  size,
  tooltip,
  showOptional,
  render,
  zodItemSchema,
  ...restProps
}: FormControlProps) {
  const id = useId();
  const messages = useFormTranslationsContext();
  const scopedName = useScope(name);
  const {
    disabled,
    loading,
    readOnly,
    showOptional: formShowOptional,
    zodSchema: zodFullSchema,
  } = useFormContext();

  const validate = zodItemSchema
    ? zodResolver(zodItemSchema)
    : zodResolver(getFieldZodObject(scopedName, zodFullSchema));

  const field = useField<UserFieldProps, string | number>({
    id,
    name,
    type,
    disabled: loading || disabled || restProps.disabled,
    readOnly: readOnly || restProps.readOnly,
    required,
    validate,
    ...restProps,
  });

  const { userProps: baseUserProps, ...restField } = field;
  const { showError, error } = field.fieldState;
  const { type: __, ...userProps } = baseUserProps;

  return field.render(
    <div
      className={cn(formItemStyles({ layout }), showError && 'pb-3', className)}
    >
      {position === 'start' && render({ userProps, ...restField, label })}
      {label && (
        <Label
          className='inline-flex items-center gap-1'
          size={size}
          htmlFor={id}
        >
          {label}
          {/* {tooltip && (
            <Tooltip title={tooltip}>
              <FormInfo className='cursor-help'>
                <HelpCircle size={14} />
              </FormInfo>
            </Tooltip>
          )} */}
          {(showOptional ?? formShowOptional) && !required && (
            <FormInfo>({messages.labels.optional})</FormInfo>
          )}
        </Label>
      )}
      {position === 'end' && render({ userProps, ...restField, label })}
      {showError && (
        <FormMessage className='animate-in fade-in absolute -bottom-2'>
          {error as any}
        </FormMessage>
      )}
    </div>,
  );
}
