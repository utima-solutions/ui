import { Input, FormItem } from '@utima/ui';
import type { InputProps } from 'informed';

import {
  FormField,
  type ControlProps,
  type ControlDuplicateProps,
} from '@/form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface InputControlProps
  extends ControlProps,
    Omit<InputProps, ControlDuplicateProps> {}

export function InputControl({
  fieldType,
  type,
  ...restProps
}: InputControlProps) {
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
        tooltip,
        label,
        description,
        helperText,
      }) => {
        return (
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Input
                type={type}
                id={id}
                ref={ref}
                {...informed}
                {...userProps}
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
