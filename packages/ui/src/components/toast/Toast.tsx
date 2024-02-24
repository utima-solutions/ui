import type { ComponentProps } from 'react';
import { Toaster, toast } from 'sonner';

import { toastDef } from './Toast.styles';

type ToastProps = ComponentProps<typeof Toaster>;

export function Toast({ className, ...restProps }: ToastProps) {
  return (
    <Toaster
      className='toaster group'
      {...restProps}
      toastOptions={{
        unstyled: true,
        classNames: toastDef,
        ...restProps.toastOptions,
      }}
    />
  );
}

export { toast };
