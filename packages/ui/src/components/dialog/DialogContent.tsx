import { Portal, Close, Content } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';
import { DialogOverlay } from './DialogOverlay';

export const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...restProps }, ref) => (
  <Portal>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(dialogDef.content.wrapper, className)}
      {...restProps}
    >
      {children}
      <Close className={dialogDef.content.close}>
        <X className={dialogDef.content.closeIcon} />
        <span className='sr-only'>Close</span>
      </Close>
    </Content>
  </Portal>
));
