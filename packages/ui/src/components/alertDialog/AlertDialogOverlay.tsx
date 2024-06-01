import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof Primitive.Overlay>,
  ComponentPropsWithoutRef<typeof Primitive.Overlay>
>(function AlertDialogOverlay({ className, ...restProps }, ref) {
  return (
    <Primitive.Overlay
      className={cn(alertDialogDef.overlay, className)}
      {...restProps}
      ref={ref}
    />
  );
});
