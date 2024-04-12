import { Input as InputUI } from '@utima/ui';
import type { ComponentProps } from 'react';

import { FormControl } from '../../formControl/FormControl';

type InputControlProps = Omit<ComponentProps<typeof FormControl>, 'render'>;

/**
 * Input component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export function Input({ type = 'text', ...restProps }: InputControlProps) {
  let formInputType: string;
  switch (type) {
    case 'textArea':
    case 'number':
      formInputType = type;
      break;

    default:
      formInputType = 'text';
  }

  return (
    <FormControl
      {...restProps}
      type={formInputType}
      render={({ field: { ref, userProps, informed, fieldState } }) => (
        <InputUI
          ref={ref}
          variant={fieldState.showError ? 'danger' : 'default'}
          type={type}
          {...userProps}
          {...informed}
        />
      )}
    />
  );
}
