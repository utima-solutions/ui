import {
  Input,
  FormItem,
  type InputProps,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
  FormItemLabel,
} from '@utima/ui';

import {
  type FieldProps,
  type FieldDuplicateProps,
  FormField,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface InputFieldProps
  extends FieldProps,
    Omit<InputProps, FieldDuplicateProps> {}

export function InputField({ fieldType, type, ...restProps }: InputFieldProps) {
  return (
    <FormField
      fieldType={fieldType ?? (type === 'number' ? 'number' : 'text')}
      render={({
        id,
        userProps,
        ref,
        hasHelpers,
        informed,
        error,
        required,
      }) => {
        const { helperText, tooltip, label, description, ...restUserProps } =
          userProps;

        return (
          <FormItem>
            <FormItemLabel required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItemLabel>
            <FormItemContent>
              <Input
                type={type}
                id={id}
                required={!!required}
                ref={ref}
                {...informed}
                {...restUserProps}
              />
              {hasHelpers && (
                <FormItemHelpers>
                  <FormItemDescription>{description}</FormItemDescription>
                  <FormItemHelperText>{helperText}</FormItemHelperText>
                </FormItemHelpers>
              )}
              <FormItemError>{error}</FormItemError>
            </FormItemContent>
          </FormItem>
        );
      }}
      {...restProps}
    />
  );
}
