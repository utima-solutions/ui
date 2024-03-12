import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...restProps }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(commandDef.item, className)}
    {...restProps}
  />
));
