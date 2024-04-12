import type { ComponentPropsWithoutRef } from 'react';
import { Toaster, toast } from 'sonner';

import { toastDef } from './Toast.styles';

export interface ToastProps extends ComponentPropsWithoutRef<typeof Toaster> {}

export function Toast({
  className,
  ...restProps
}: ComponentPropsWithoutRef<typeof Toaster>) {
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
