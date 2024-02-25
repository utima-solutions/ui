import { Loader2 } from 'lucide-react';
import { forwardRef, type ComponentProps } from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandLoaderProps = ComponentProps<'div'> & {
  hasIcon?: boolean;
};

export const CommandLoader = forwardRef<HTMLDivElement, CommandLoaderProps>(
  (
    { className, hasIcon = true, children = 'Loading...', ...restProps },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(commandDef.empty.content, className)}
      {...restProps}
    >
      {hasIcon && (
        <Loader2 className={cn(commandDef.empty.icon, 'animate-spin')} />
      )}
      {children}
    </div>
  ),
);
