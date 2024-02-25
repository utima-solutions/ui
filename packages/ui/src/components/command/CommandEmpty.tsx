import { Command as CommandPrimitive } from 'cmdk';
import { PackageSearch } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandEmptyProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
> & {
  hasIcon?: boolean;
};

export const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(
  (
    { className, hasIcon = true, children = 'No results found', ...restProps },
    ref,
  ) => (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn(commandDef.empty.content, className)}
      {...restProps}
    >
      {hasIcon && <PackageSearch className={cn(commandDef.empty.icon)} />}
      {children}
    </CommandPrimitive.Empty>
  ),
);
