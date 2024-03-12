import { Description } from '@radix-ui/react-dialog';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...restProps }, ref) => (
  <Description
    ref={ref}
    className={cn(dialogDef.description, className)}
    {...restProps}
  />
));
