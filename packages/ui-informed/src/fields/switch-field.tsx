import {
  Switch,
  FormItem,
  type SwitchProps,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
  FormItemLabel,
} from '@utima/ui';

import {
  FormField,
  type FieldProps,
  type FieldDuplicateProps,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface SwitchFieldProps
  extends FieldProps,
    Omit<SwitchProps, FieldDuplicateProps> {}

export function SwitchField({ fieldType, ...restProps }: SwitchFieldProps) {
  return (
    <FormField<SwitchFieldProps>
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
              <Switch
                id={id}
                ref={ref}
                type='button'
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
