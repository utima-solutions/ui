import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, ...restProps }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(commandDef.command, className)}
    {...restProps}
  />
));
