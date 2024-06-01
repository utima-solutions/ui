import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export const AlertDialogContent = forwardRef<
  ElementRef<typeof Primitive.Content>,
  ComponentPropsWithoutRef<typeof Primitive.Content>
>(function AlertDialogContent({ className, ...restProps }, ref) {
  return (
    <Primitive.Content
      ref={ref}
      className={cn(alertDialogDef.content, className)}
      {...restProps}
    />
  );
});
