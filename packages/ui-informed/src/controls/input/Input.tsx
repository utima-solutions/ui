import { Input as UIInput, type InputProps as UIInputProps } from '@utima/ui';
import { memo } from 'react';

import {
  FormControl,
  type ConsumeFormControlProps,
} from '../../formControl/FormControl';

export interface InputProps extends ConsumeFormControlProps<UIInputProps> {}

/**
 * Input component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export const Input = memo(function Input({
  type = 'text',
  ...restProps
}: InputProps) {
  return (
    <FormControl
      {...restProps}
      type={type === 'number' ? 'number' : 'text'}
      render={({ userProps, ref, informed, fieldState }) => {
        // Do not render hidden inputs if they are read-only
        if (userProps.readOnly && type === 'hidden') {
          return null;
        }

        return userProps.readOnly ? (
          <p className='text-primary'>{(fieldState.value ?? '-') as string}</p>
        ) : (
          <UIInput
            ref={ref}
            variant={fieldState.showError ? 'danger' : 'default'}
            type={type}
            {...userProps}
            {...informed}
          />
        );
      }}
    />
  );
});
