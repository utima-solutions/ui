import { TextArea as TextAreaUI } from '@utima/ui';
import type { ComponentProps } from 'react';

import { FormControl } from '../../formControl/FormControl';

export type TextAreaControlProps = Omit<
  ComponentProps<typeof FormControl>,
  'type' | 'render'
> & { rows: number };

/**
 * TextArea component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export function TextArea({ rows = 4, ...restProps }: TextAreaControlProps) {
  return (
    <FormControl
      type='text'
      {...restProps}
      render={({ field: { ref, userProps, informed, fieldState } }) => (
        <TextAreaUI
          ref={ref}
          rows={rows}
          variant={fieldState.showError ? 'danger' : 'default'}
          {...userProps}
          {...informed}
        />
      )}
    />
  );
}