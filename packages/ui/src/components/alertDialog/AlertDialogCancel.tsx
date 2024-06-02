import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ElementRef,
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Primitive.Cancel>,
  ComponentPropsWithoutRef<typeof Primitive.Cancel>
>(function AlertDialogCancel({ className, ...restProps }, ref) {
  return (
    <Primitive.Cancel
      ref={ref}
      className={cn(alertDialogDef.cancel, className)}
      {...restProps}
    />
  );
});
