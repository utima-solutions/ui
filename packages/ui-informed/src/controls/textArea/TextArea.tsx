import {
  TextArea as TextAreaUI,
  type TextareaProps as UITextareaProps,
} from '@utima/ui';
import { memo } from 'react';

import {
  FormControl,
  type ConsumeFormControlProps,
} from '../../formControl/FormControl';

export interface TextAreaProps
  extends ConsumeFormControlProps<UITextareaProps> {}

/**
 * TextArea component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export const TextArea = memo(function TextArea({
  rows = 4,
  ...restProps
}: TextAreaProps) {
  return (
    <FormControl
      type='textArea'
      {...restProps}
      render={({ userProps, ref, informed, fieldState }) =>
        userProps.readOnly ? (
          <p className='text-primary'>{(fieldState.value ?? '-') as string}</p>
        ) : (
          <TextAreaUI
            ref={ref}
            rows={rows}
            variant={fieldState.showError ? 'danger' : 'default'}
            {...userProps}
            {...informed}
          />
        )
      }
    />
  );
});
