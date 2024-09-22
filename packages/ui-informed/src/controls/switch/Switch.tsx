import {
  type SwitchProps as UISwitchProps,
  Switch as UISwitch,
  Label,
} from '@utima/ui';
import { memo } from 'react';

import {
  FormControl,
  type ConsumeFormControlProps,
} from '../../formControl/FormControl';

export interface SwitchProps extends ConsumeFormControlProps<UISwitchProps> {
  description?: string;
}

/**
 * SwitchControl component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export const Switch = memo(function Switch({
  description,
  type = 'button',
  onCheckedChange,
  ...restProps
}: SwitchProps) {
  return (
    <FormControl
      {...restProps}
      type='checkbox'
      render={({ userProps, ref, fieldApi, fieldState }) => (
        <div className='flex items-center gap-2'>
          <UISwitch
            ref={ref}
            value={fieldState.value as string}
            checked={fieldState.value as boolean}
            onCheckedChange={value => {
              onCheckedChange?.(value);
              fieldApi.setValue(value);
              fieldApi.setTouched(true);
              fieldApi.setFocused(true);
            }}
            variant={fieldState.showError ? 'danger' : 'primary'}
            {...userProps}
            disabled={userProps.disabled || userProps.readOnly}
            type='button'
          />
          {description && (
            <Label htmlFor={userProps.id} className='text-sm font-normal'>
              {description}
            </Label>
          )}
        </div>
      )}
    />
  );
});
