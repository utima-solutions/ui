import {
  Textarea,
  FormItem,
  type TextareaProps,
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
export interface TextareaFieldProps
  extends FieldProps,
    Omit<TextareaProps, FieldDuplicateProps> {}

export function TextareaField({ fieldType, ...restProps }: TextareaFieldProps) {
  return (
    <FormField
      fieldType='text'
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
              <Textarea
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
