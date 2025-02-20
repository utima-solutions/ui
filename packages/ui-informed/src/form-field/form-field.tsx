import { useField, useScope } from 'informed';
import { useId, type ReactNode } from 'react';
import type { SetOptional } from 'type-fest';
import type { ZodType } from 'zod';

import { useFormContext } from '@/form/use-form-context';
import type { FieldProps } from '@/types';
import { zodResolver, getFieldZodObject } from '@/zodUtils';

/**
 * Informed field types, internally these types are used to generate
 * pre-defined setters for ref fields. E.g. for checkbox it will use
 * checked property.
 */
export type FieldType = 'text' | 'number' | 'textArea' | 'select' | 'checkbox';

/**
 * Common props used on controls at multipla places, these
 * are usually passed down from the FormField component and
 * render function.
 */
export interface ControlPropsCommon {
  readOnly?: boolean;
  showOptional?: boolean;
  showRequired?: boolean;
  loading?: boolean;
  disabled?: boolean;
  required?: boolean | undefined | string;
  label?: ReactNode | undefined;
  description?: ReactNode | undefined;
  tooltip?: ReactNode | undefined;
  helperText?: ReactNode | undefined;
}

/**
 * Props for custom form control components. These
 * are used to wrap form fields and provide additional
 * information like label, description, tooltip, etc.
 */
export interface ControlProps
  extends ControlPropsCommon,
    Omit<SetOptional<FieldProps, 'id'>, 'type'> {
  zodSchema?: ZodType;
  fieldType?: FieldType;
}

export type ControlDuplicateProps =
  | 'name'
  | 'id'
  | 'required'
  | 'label'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'value'
  | 'defaultValue';

/**
 * Render prop for FormField component. It receives
 * field props and user props and should return the actual
 * form field component.
 *
 * Some of the values are also available in the fieldState,
 * however we duplicate here for convenience.
 */
export type FormFieldRender<T extends ControlProps> = (
  params: {
    id: string;
    error?: string;
    hasHelpers: boolean;
    required: boolean | undefined | string;
    showOptional: boolean;
    showRequired: boolean;
  } & ReturnType<typeof useField<Omit<T, 'name'>, any>>, // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => ReactNode;

/**
 * FormField should essentially proxy all control props.
 * Currently we only add render function so users can
 * connect it to the informed.
 */
export interface FormFieldProps<T extends ControlProps> extends ControlProps {
  render: FormFieldRender<T>;
}

/**
 * Base form field component that is used to wrap form items
 * and hook them into informed APIs.
 */
export function FormField<T extends ControlProps>({
  name,
  id: userId,
  render,
  showOptional,
  showRequired,
  zodSchema,
  fieldType,
  required,
  ...restProps
}: FormFieldProps<T>) {
  const id = useId();
  const scopedName = useScope(name);

  // TODO use translations from form context
  // TODO Run functions non values in readonly mode
  // TODO Addons in readonly

  // Hook into the upper form context for some defaults
  const {
    disabled: formDisabled,
    loading,
    readOnly,
    showOptional: formShowOptional,
    showRequired: formShowRequired,
    zodSchema: zodFullSchema,
  } = useFormContext();

  // Add zod validation if provided
  const validate = zodSchema
    ? zodResolver(zodSchema)
    : zodResolver(getFieldZodObject(scopedName, zodFullSchema));
  const disabled = restProps.disabled || formDisabled || loading || readOnly;

  // Hook into informed field API
  const field = useField({
    name,
    type: fieldType,
    disabled,
    required,
    validate,
    ...restProps,
  });

  const { showError, error } = field.fieldState;
  const hasHelpers = !!(restProps.description || restProps.helperText);

  return field.render(
    render({
      id: userId ?? id,
      error: showError ? (error as string) : undefined,
      hasHelpers: hasHelpers ?? false,
      showOptional: showOptional || formShowOptional,
      showRequired: showRequired || formShowRequired,
      required,
      ...field,
      userProps: {
        ...field.userProps,
        readOnly: readOnly || restProps.readOnly,
        loading: loading || restProps.loading,
        disabled,
      } as never,
    }),
  );
}
