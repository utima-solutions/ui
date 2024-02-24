import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandGroupProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...restProps }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(commandDef.group, className)}
    {...restProps}
  />
));
