import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...restProps }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(commandDef.separator, className)}
    {...restProps}
  />
));
