import * as Primitive from '@radix-ui/react-alert-dialog';
import { type ElementRef, forwardRef } from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';
import { Button, type ButtonProps } from '../button/Button';

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Primitive.Cancel>,
  ButtonProps
>(function AlertDialogCancel({ className, outline = true, ...restProps }, ref) {
  return (
    <Primitive.Cancel asChild ref={ref}>
      <Button
        className={cn(alertDialogDef.cancel, className)}
        outline={outline}
        {...restProps}
      />
    </Primitive.Cancel>
  );
});
