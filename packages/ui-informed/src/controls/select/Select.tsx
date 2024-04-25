import {
  type SelectProps as UISelectProps,
  Select as SelectUI,
  SelectItem,
} from '@utima/ui';
import { memo, type NamedExoticComponent, type ReactNode } from 'react';

import {
  FormControl,
  type ConsumeFormControlProps,
} from '../../formControl/FormControl';

export interface SelectProps extends ConsumeFormControlProps<UISelectProps> {
  renderValue?: (value: string) => ReactNode;
}

// Type fixes for dot notation on memo
interface SelectComponent extends NamedExoticComponent<SelectProps> {
  Item: typeof SelectItem;
}

/**
 * Select component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
// @ts-expect-error SelectItem is defined below
export const Select: SelectComponent = memo(function Select({
  children,
  onOpenChange,
  onCloseAutoFocus,
  onValueChange,
  renderValue,
  ...restProps
}: SelectProps) {
  return (
    <FormControl
      type='select'
      {...restProps}
      render={({ userProps, ref, fieldApi, fieldState }) => {
        const { disabled, readOnly, ...restProps } = userProps;

        if (readOnly && renderValue) {
          return (
            <p className='text-primary'>
              {fieldState.value ? renderValue(fieldState.value as string) : '—'}
            </p>
          );
        }

        return (
          <SelectUI
            ref={ref}
            value={fieldState.value as string}
            variant={fieldState.showError ? 'danger' : 'default'}
            onValueChange={value => {
              fieldApi.setValue(value);
              onValueChange?.(value);
            }}
            onCloseAutoFocus={event => {
              fieldApi.setTouched(true);
              onCloseAutoFocus?.(event);
            }}
            onOpenChange={open => {
              fieldApi.setFocused(open);
              onOpenChange?.(open);
            }}
            disabled={disabled || readOnly}
            {...restProps}
          >
            {children}
          </SelectUI>
        );
      }}
    />
  );
});

// Reexport for convenience
Select.Item = memo(SelectItem) as typeof SelectItem;
