import { Overlay } from '@radix-ui/react-dialog';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

type DialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay>;

export const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  DialogOverlayProps
>(({ className, ...restProps }, ref) => (
  <Overlay
    ref={ref}
    className={cn(dialogDef.overlay, className)}
    {...restProps}
  />
));
