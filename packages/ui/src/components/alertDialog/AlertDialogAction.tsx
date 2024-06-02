import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogAction = forwardRef<
  ElementRef<typeof Primitive.Action>,
  ComponentPropsWithoutRef<typeof Primitive.Action>
>(function AlertDialogAction({ className, ...restProps }, ref) {
  return (
    <Primitive.Action
      ref={ref}
      className={cn(alertDialogDef.action, className)}
      {...restProps}
    />
  );
});
