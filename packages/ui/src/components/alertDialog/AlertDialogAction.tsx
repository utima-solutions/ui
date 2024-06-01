import * as Primitive from '@radix-ui/react-alert-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';
import { Button } from '../button/Button';

export const AlertDialogAction = forwardRef<
  ElementRef<typeof Primitive.Action>,
  ComponentPropsWithoutRef<typeof Primitive.Action>
>(function AlertDialogAction({ className, ...restProps }, ref) {
  return (
    <Primitive.Action asChild ref={ref}>
      <Button className={cn(alertDialogDef.action, className)} {...restProps} />
    </Primitive.Action>
  );
});
