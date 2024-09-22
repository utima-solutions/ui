import { Content } from '@radix-ui/react-popover';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { popoverDef } from './Popover.styles';

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof Content> {}

export const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, ...restProps }, ref) => (
  <Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(popoverDef.content, className)}
    {...restProps}
  />
));
