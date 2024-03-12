import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...restProps }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(commandDef.list, className)}
    {...restProps}
  />
));
