import { Command as CommandPrimitive } from 'cmdk';
import { Loader2, Search } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export interface CommandInputProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  loading?: boolean;
}

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, loading = false, ...restProps }, ref) => (
  <div className={commandDef.input.wrapper} cmdk-input-wrapper=''>
    <div className={commandDef.input.container}>
      <Search className={commandDef.input.icon} />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(commandDef.input.input, className)}
        {...restProps}
      />
      <Loader2
        className={cn(commandDef.input.loader, loading && 'opacity-100')}
      />
    </div>
  </div>
));
