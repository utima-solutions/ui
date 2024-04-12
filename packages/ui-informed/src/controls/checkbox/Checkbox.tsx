import {
  type CheckboxProps as UICheckboxProps,
  Checkbox as UICheckbox,
  Label,
} from '@utima/ui';
import { memo } from 'react';

import {
  FormControl,
  type ConsumeFormControlProps,
} from '../../formControl/FormControl';

export interface CheckboxProps
  extends ConsumeFormControlProps<UICheckboxProps> {
  description?: string;
}

/**
 * CheckboxControl component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export const Checkbox = memo(function Checkbox({
  description,
  onCheckedChange,
  ...restProps
}: CheckboxProps) {
  return (
    <FormControl
      {...restProps}
      type='checkbox'
      render={({ userProps, ref, fieldApi, fieldState }) => (
        <div className='flex gap-2 items-center'>
          <UICheckbox
            ref={ref}
            value={fieldState.value as any}
            onCheckedChange={value => {
              onCheckedChange?.(value);
              fieldApi.setValue(value);
              fieldApi.setTouched(true);
              fieldApi.setFocused(true);
            }}
            variant={fieldState.showError ? 'danger' : 'primary'}
            {...userProps}
          />
          {description && (
            <Label htmlFor={userProps.id} className='font-normal text-sm'>
              {description}
            </Label>
          )}
        </div>
      )}
    />
  );
});
