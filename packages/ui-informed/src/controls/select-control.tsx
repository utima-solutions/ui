import { Select, FormItem, type SelectRootProps } from '@utima/ui';

import {
  FormField,
  type ControlProps,
  type ControlDuplicateProps,
} from '@/form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface SelectControlProps
  extends ControlProps,
    Omit<SelectRootProps, ControlDuplicateProps | 'onValueChange'> {}

export function SelectControl({ children, ...restProps }: SelectControlProps) {
  return (
    <FormField
      fieldType='text'
      render={({
        id,
        userProps,
        hasHelpers,
        error,
        required,
        ref,
        fieldApi,
        fieldState,
      }) => {
        const {
          helperText,
          tooltip,
          label,
          description,
          onValueChange,
          ...restUserProps
        } = userProps;

        return (
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Select.Root
                value={fieldState.value as string}
                onValueChange={value => {
                  fieldApi.setValue(value);
                }}
                onOpenChange={open => {
                  fieldApi.setFocused(open);
                }}
                {...restUserProps}
              >
                <Select.Trigger>
                  <Select.Value placeholder='Extra small' />
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    ref={ref}
                    onCloseAutoFocus={event => {
                      fieldApi.setTouched(true);
                    }}
                  >
                    <Select.Group>{children}</Select.Group>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
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
