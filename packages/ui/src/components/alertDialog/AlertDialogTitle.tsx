import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof Primitive.Title>,
  ComponentPropsWithoutRef<typeof Primitive.Title>
>(function AlertDialogTitle({ className, ...restProps }, ref) {
  return (
    <Primitive.Title
      ref={ref}
      className={cn(alertDialogDef.title, className)}
      {...restProps}
    />
  );
});
