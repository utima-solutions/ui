import { Input, FormItem } from '@utima/ui';
import type { InputProps } from 'informed';

import {
  type FieldType,
  FormField,
  type ControlProps,
  type ControlDuplicateProps,
} from '@/form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface InputControlProps
  extends ControlProps,
    Omit<InputProps, ControlDuplicateProps> {
  fieldType: FieldType;
}

export function InputControl({
  label,
  description,
  helperText,
  tooltip,
  fieldType,
  ...restProps
}: InputControlProps) {
  const hasHelpers = description || helperText;

  return (
    <FormField
      fieldType={fieldType ?? (fieldType === 'number' ? 'number' : 'text')}
      render={({
        id,
        userProps,
        ref,
        fieldApi,
        fieldState,
        informed,
        error,
      }) => {
        const { required } = userProps as any;
        console.log(userProps);

        return (
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Input id={id} ref={ref} {...informed} {...userProps} />
              {hasHelpers && (
                <FormItem.Helpers>
                  {description && (
                    <FormItem.Description>{description}</FormItem.Description>
                  )}
                  {helperText && (
                    <FormItem.HelperText>{helperText}</FormItem.HelperText>
                  )}
                </FormItem.Helpers>
              )}
              {error && <FormItem.Error>{error}</FormItem.Error>}
            </FormItem.Content>
          </FormItem.Root>
        );
      }}
      {...restProps}
    />
  );
}
