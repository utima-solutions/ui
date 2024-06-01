import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof Primitive.Description>,
  ComponentPropsWithoutRef<typeof Primitive.Description>
>(function AlertDialogDescription({ className, ...restProps }, ref) {
  return (
    <Primitive.Description
      ref={ref}
      className={cn(alertDialogDef.description, className)}
      {...restProps}
    />
  );
});
