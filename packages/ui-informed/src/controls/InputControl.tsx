import { Input } from '@utima/ui';
import type { ComponentProps } from 'react';

type InputControlProps = Omit<ComponentProps<typeof Input>, 'render'>;

/**
 * Input component that is controlled by Informed. It is a wrapped in the
 * `FormControl` component, which provides the necessary props for Informed to
 * work along with label and error message handling.
 */
export function InputControl({
  type = 'text',
  ...restProps
}: InputControlProps) {
  return <Input variant='default' type={type} {...restProps} />;
}
