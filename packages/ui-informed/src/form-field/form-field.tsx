import { useField, useScope } from 'informed';
import { useId, type ReactNode } from 'react';
import type { SetOptional } from 'type-fest';
import type { ZodType } from 'zod';

import { useFormContext } from '@/form/useFormContext';
import type { FieldProps } from '@/types';
import { zodResolver, getFieldZodObject } from '@/zodUtils';

/**
 * Informed field types, internally these types are used to generate
 * pre-defined setters for ref fields. E.g. for checkbox it will use
 * checked property.
 */
export type FieldType =
  | 'text'
  | 'number'
  | 'textArea'
  | 'select'
  | 'checkbox'
  | string;

export interface CommonFieldProps {
  label?: ReactNode;
  description?: ReactNode;
  tooltip?: ReactNode;
  helperText?: ReactNode;
  readOnly?: boolean;
}

// export type ControlProps<UserProps> = FieldProps &
//   Omit<
//     UserProps,
//     | 'onChange'
//     | 'onBlur'
//     | 'onFocus'
//     | 'value'
//     | 'defaultValue'
//     | 'required'
//     | 'id'
//     | 'name'
//     | 'value'
//   >;

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
}

/**
 * Props for custom form control components. These
 * are used to wrap form fields and provide additional
 * information like label, description, tooltip, etc.
 */
export interface ControlProps
  extends ControlPropsCommon,
    Omit<SetOptional<FieldProps, 'id'>, 'type'> {
  label?: ReactNode | undefined;
  description?: ReactNode | undefined;
  tooltip?: ReactNode | undefined;
  helperText?: ReactNode | undefined;
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
export type FormFieldRender = (
  params: {
    id: string;
    error?: string;
  } & ControlPropsCommon &
    ReturnType<typeof useField<unknown, any>>,
) => ReactNode;

/**
 * FormField props essentially proxy informed field props.
 * However we provide some defaults like 'id' so we make
 * them optional.
 */
export interface FormFieldProps extends ControlProps {
  fieldType?: FieldType;
  zodSchema?: ZodType;
  render: FormFieldRender;
}

/**
 * Base form field component that is used to wrap form items
 * and hook them into informed APIs.
 */
export function FormField({
  name,
  id: userId,
  render,
  showOptional,
  zodSchema,
  fieldType,
  ...restProps
}: FormFieldProps) {
  const id = useId();
  const scopedName = useScope(name);

  // TODO Run functions non values in readonly mode
  // TODO Addons in readonly

  // Hook into the upper form context for some defaults
  const {
    disabled: formDisabled,
    loading,
    readOnly,
    showOptional: formShowOptional,
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
    validate,
    ...restProps,
  });

  // We want to omit some userProps that may cause issues
  const { ...restUserProps } = field.userProps;
  const { showError, error } = field.fieldState;

  return field.render(
    render({
      id: userId ?? id,
      error: showError ? (error as string) : undefined,
      readOnly: readOnly || restProps.readOnly,
      showOptional: showOptional || formShowOptional,
      loading: loading || restProps.loading,
      disabled,
      ...field,
      userProps: restUserProps,
    }),
  );
}
