import type { ComponentProps } from 'react';
import { Toaster, toast } from 'sonner';

import { toastDef } from './Toast.styles';

type ToastProps = ComponentProps<typeof Toaster>;

export function Toast({ className, ...props }: ToastProps) {
  return (
    <Toaster
      className='toaster group'
      {...props}
      toastOptions={{
        unstyled: true,
        classNames: toastDef,
        ...props.toastOptions,
      }}
    />
  );
}

export { toast };
