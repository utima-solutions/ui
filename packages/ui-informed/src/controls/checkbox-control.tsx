import { Checkbox, FormItem, type CheckboxProps } from '@utima/ui';

import {
  type ControlProps,
  type ControlDuplicateProps,
  FormField,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface CheckboxControlProps
  extends ControlProps,
    Omit<CheckboxProps, ControlDuplicateProps> {}

export function CheckboxControl({
  fieldType,
  ...restProps
}: CheckboxControlProps) {
  return (
    <FormField<CheckboxControlProps>
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
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Checkbox
                id={id}
                ref={ref}
                type={type}
                required={!!required}
                value={fieldState.value as string}
                checked={fieldState.value as boolean}
                onCheckedChange={value => {
                  userProps?.onCheckedChange?.(value);
                  fieldApi.setTouched(true);
                  fieldApi.setValue(value);
                  fieldApi.setFocused(true);
                }}
                {...restUserProps}
              />
              {hasHelpers && (
                <FormItem.Helpers>
                  <FormItem.Description>{description}</FormItem.Description>
                  <FormItem.HelperText>{helperText}</FormItem.HelperText>
                </FormItem.Helpers>
              )}
              <FormItem.Error>{error}</FormItem.Error>
            </FormItem.Content>
          </FormItem.Root>
        );
      }}
      {...restProps}
    />
  );
}
