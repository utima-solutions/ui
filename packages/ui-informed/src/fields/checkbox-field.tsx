import {
  Checkbox,
  FormItem,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
  FormItemLabel,
  type CheckboxProps,
} from '@utima/ui';

import {
  type FieldProps,
  type FieldDuplicateProps,
  FormField,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface CheckboxFieldProps
  extends FieldProps,
    Omit<CheckboxProps, FieldDuplicateProps> {}

export function CheckboxField({
  fieldType,
  ...restProps
}: CheckboxFieldProps) {
  return (
    <FormField<CheckboxFieldProps>
      fieldType='checkbox'
      render={({
        id,
        userProps,
        ref,
        hasHelpers,
        error,
        fieldState,
        fieldApi,
        required,
      }) => {
        const {
          helperText,
          tooltip,
          label,
          description,
          type,
          ...restUserProps
        } = userProps;

        return (
          <FormItem>
            <FormItemLabel required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItemLabel>
            <FormItemContent>
              <Checkbox
                id={id}
                ref={ref}
                type={type}
                required={!!required}
                value={fieldState.value as string}
                checked={fieldState.value as boolean}
                onCheckedChange={(value) => {
                  userProps?.onCheckedChange?.(value);
                  fieldApi.setTouched(true);
                  fieldApi.setValue(value);
                  fieldApi.setFocused(true);
                }}
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
