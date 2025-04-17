import {
  Slider,
  FormItem,
  type SliderProps,
  FormItemLabel,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
} from '@utima/ui';

import {
  type FieldProps,
  type FieldDuplicateProps,
  FormField,
} from '../form-field/form-field';

export interface SliderFieldProps
  extends FieldProps,
    Omit<SliderProps, FieldDuplicateProps | 'onValueChange'> {
  /**
   * Whether the slider should return a single value or an array of values
   * This is determined by the number of defaultValue items
   */
  // defaultValue?: number | number[];
}

export function SliderField({ fieldType, ...restProps }: SliderFieldProps) {
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
          <FormItem>
            <FormItemLabel required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItemLabel>
            <FormItemContent>
              <Slider
                ref={ref}
                id={id}
                value={value}
                defaultValue={
                  Array.isArray(defaultValue)
                    ? defaultValue
                    : [defaultValue as number]
                }
                onValueChange={(value) => {
                  // If original defaultValue was a single number, return single value
                  const newValue = Array.isArray(defaultValue)
                    ? value
                    : value[0];
                  fieldApi.setValue(newValue);
                  userProps?.onValueChange?.(newValue as never);
                }}
                onValueCommit={(value) => {
                  fieldApi.setTouched(true);
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
