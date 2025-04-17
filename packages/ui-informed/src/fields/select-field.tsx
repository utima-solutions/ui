import {
  FormItem,
  type SelectProps,
  FormItemLabel,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
  Select,
  SelectContent,
  SelectGroup,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from '@utima/ui';

import {
  type FieldProps,
  type FieldDuplicateProps,
  FormField,
} from '../form-field/form-field';

// TODO handlers for rendering readonly, etc.
export interface SelectFieldProps
  extends FieldProps,
    Omit<SelectProps, FieldDuplicateProps | 'onValueChange'> {}

export function SelectField({ children, ...restProps }: SelectFieldProps) {
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
          <FormItem>
            <FormItemLabel required={required} tooltip={tooltip} htmlFor={id}>
              {label}
            </FormItemLabel>
            <FormItemContent>
              <Select
                value={fieldState.value as string}
                onValueChange={(value) => {
                  fieldApi.setValue(value);
                }}
                onOpenChange={(open) => {
                  fieldApi.setFocused(open);
                }}
                {...restUserProps}
              >
                <SelectTrigger>
                  <SelectValue placeholder='Extra small' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent
                    ref={ref}
                    onCloseAutoFocus={(event) => {
                      fieldApi.setTouched(true);
                    }}
                  >
                    <SelectGroup>{children}</SelectGroup>
                  </SelectContent>
                </SelectPortal>
              </Select>
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
