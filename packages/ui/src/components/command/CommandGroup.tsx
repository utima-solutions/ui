import { Command as CommandPrimitive } from 'cmdk';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export const CommandGroup = memo(function CommandGroup({
  className,
  ...restProps
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={cn(commandDef.group, className)}
      {...restProps}
    />
  );
});
