import { Content, Portal } from '@radix-ui/react-popover';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { popoverDef } from './Popover.styles';

export const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, align = 'center', sideOffset = 4, ...restProps }, ref) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverDef.content, className)}
      {...restProps}
    />
  </Portal>
));
