import { Slider, FormItem, type SliderProps } from '@utima/ui';

import {
  type ControlProps,
  type ControlDuplicateProps,
  FormField,
} from '../form-field/form-field';

export interface SliderControlProps
  extends ControlProps,
    Omit<SliderProps, ControlDuplicateProps | 'onValueChange'> {
  /**
   * Whether the slider should return a single value or an array of values
   * This is determined by the number of defaultValue items
   */
  // defaultValue?: number | number[];
}

export function SliderControl({ fieldType, ...restProps }: SliderControlProps) {
  return (
    <FormField
      fieldType='text'
      render={({
        id,
        userProps,
        ref,
        hasHelpers,
        error,
        fieldState,
        defaultValue,
        fieldApi,
        required,
      }) => {
        const {
          helperText,
          tooltip,
          label,
          description,
          onValueChange,
          ...restUserProps
        } = userProps;

        // Convert field value to array if it's multiple values
        const value = Array.isArray(defaultValue)
          ? (fieldState.value as number[]) || defaultValue
          : [(fieldState.value as number) || (defaultValue as number)];

        return (
          <FormItem.Root>
            <FormItem.Label required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItem.Label>
            <FormItem.Content>
              <Slider
                ref={ref}
                id={id}
                value={value}
                defaultValue={
                  Array.isArray(defaultValue)
                    ? defaultValue
                    : [defaultValue as number]
                }
                onValueChange={value => {
                  // If original defaultValue was a single number, return single value
                  const newValue = Array.isArray(defaultValue)
                    ? value
                    : value[0];
                  fieldApi.setValue(newValue);
                  userProps?.onValueChange?.(newValue as never);
                }}
                onValueCommit={value => {
                  fieldApi.setTouched(true);
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
