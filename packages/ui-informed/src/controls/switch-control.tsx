import { Switch, FormItem, type SwitchProps } from '@utima/ui';

import {
  FormField,
  type ControlProps,
  type ControlDuplicateProps,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface SwitchControlProps
  extends ControlProps,
    Omit<SwitchProps, ControlDuplicateProps> {}

export function SwitchControl({ fieldType, ...restProps }: SwitchControlProps) {
  return (
    <FormField<SwitchControlProps>
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
              <Switch
                id={id}
                ref={ref}
                type='button'
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
