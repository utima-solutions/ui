import { Checkbox } from '@utima/ui';
import type { ComponentProps } from 'react';

import { FormControl } from '../FormControl';

type CheckboxControlProps = Omit<ComponentProps<typeof FormControl>, 'render'>;

/**
 * CheckboxControl component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export function CheckboxControl({ ...restProps }: CheckboxControlProps) {
  return (
    <FormControl
      {...restProps}
      render={({ field: { ref, userProps, fieldApi, fieldState } }) => (
        <Checkbox
          ref={ref}
          value={fieldState.value as any} // TODO: correct type
          onCheckedChange={value => {
            fieldApi.setValue(value);
            fieldApi.setTouched(true);
            fieldApi.setFocused(true);
          }}
          variant={fieldState.showError ? 'danger' : 'primary'}
          {...userProps}
          type='button'
        />
      )}
    />
  );
}
