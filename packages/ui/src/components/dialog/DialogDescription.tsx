import { Description } from '@radix-ui/react-dialog';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

type DialogDescriptionProps = ComponentPropsWithoutRef<typeof Description>;

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  DialogDescriptionProps
>(({ className, ...restProps }, ref) => (
  <Description
    ref={ref}
    className={cn(dialogDef.description, className)}
    {...restProps}
  />
));
