import { Input, type InputProps } from '@utima/ui';

/**
 * Input component that is just returning siple Input component from @utima/ui
 */
export function InputControl({ type = 'text', ...restProps }: InputProps) {
  return <Input variant='default' type={type} {...restProps} />;
}
