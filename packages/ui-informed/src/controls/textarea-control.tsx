import { Textarea, FormItem, type TextareaProps } from '@utima/ui';

import {
  FormField,
  type ControlProps,
  type ControlDuplicateProps,
} from '@/form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface TextareaControlProps
  extends ControlProps,
    Omit<TextareaProps, ControlDuplicateProps> {}

export function TextareaControl({
  fieldType,
  ...restProps
}: TextareaControlProps) {
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
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Textarea
                id={id}
                required={!!required}
                ref={ref}
                {...informed}
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
