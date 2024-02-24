import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandInputProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...restProps }, ref) => (
  // eslint-disable-next-line react/no-unknown-property
  <div className={commandDef.search.wrapper} cmdk-input-wrapper=''>
    <Search className={commandDef.search.icon} />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(commandDef.search.input, className)}
      {...restProps}
    />
  </div>
));
