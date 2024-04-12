import { Label, Tooltip, cn } from '@utima/ui';
import { type VariantProps, cva } from 'class-variance-authority';
import { type FieldProps, useField } from 'informed';
import { HelpCircle } from 'lucide-react';
import { useId, type ReactNode } from 'react';
import type { ZodType } from 'zod';

import { FormInfo } from './FormInfo';
import { FormMessage } from './FormMessage';
import { useFormTranslationsContext } from '..';
import { useFormContext } from '../form/useFormContext';
import { zodResolver, getFieldZodObject } from '../zodUtils';

const formItemStyles = cva('flex flex-1 gap-2', {
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
  tooltip,
  showOptional,
  render,
  zodItemSchema,
  ...restProps
}: FormControlProps) {
  const id = useId();
  const messages = useFormTranslationsContext();
  const {
    disabled,
    loading,
    readOnly,
    showOptional: formShowOptional,
    zodSchema: zodFullSchema,
  } = useFormContext();

  const validate = zodItemSchema
    ? zodResolver(zodItemSchema)
    : zodResolver(getFieldZodObject(name, zodFullSchema));

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

  const { userProps: _, ...restField } = field;
  const { showError, error } = field.fieldState;
  const { type: __, ...userProps } = field.userProps;

  return field.render(
    <div className={cn(formItemStyles({ layout }), className)}>
      {position === 'start' && render({ userProps, ...restField, label })}
      {label && (
        <Label className='inline-flex items-center gap-1' htmlFor={id}>
          {label}
          {tooltip && (
            <Tooltip title={tooltip}>
              <FormInfo className='cursor-help'>
                <HelpCircle size={14} />
              </FormInfo>
            </Tooltip>
          )}
          {(showOptional ?? formShowOptional) && !required && (
            <FormInfo>({messages.labels.optional})</FormInfo>
          )}
        </Label>
      )}
      {position === 'end' && render({ userProps, ...restField, label })}
      {showError && <FormMessage>{error as any}</FormMessage>}
    </div>,
  );
}
