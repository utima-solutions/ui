import { Command as CommandPrimitive } from 'cmdk';
import { Loader, Search } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandInputProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
> & {
  loading?: boolean;
};

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
      <Loader
        className={cn(commandDef.input.loader, loading && 'opacity-100')}
      />
    </div>
  </div>
));
