import { Select } from '@utima/ui';
import type { ComponentProps } from 'react';

import { FormControl } from '../FormControl';

type SelectControlProps = Omit<ComponentProps<typeof FormControl>, 'render'>;

/**
 * Select component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export function SelectControl({
  type = 'text',
  children,
  ...restProps
}: SelectControlProps) {
  return (
    <FormControl
      type={type}
      {...restProps}
      render={({ field: { ref, userProps, fieldApi, fieldState } }) => {
        const { type, disabled, readOnly, ...restProps } = userProps;

        return (
          <Select
            ref={ref}
            size='md'
            value={fieldState.value as string}
            variant={fieldState.showError ? 'danger' : 'default'}
            onValueChange={value => fieldApi.setValue(value)}
            onCloseAutoFocus={() => fieldApi.setTouched(true)}
            onOpenChange={open => fieldApi.setFocused(open)}
            disabled={disabled || readOnly}
            {...restProps}
          >
            {children}
          </Select>
        );
      }}
    />
  );
}
