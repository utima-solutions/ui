import { Command as CommandPrimitive } from 'cmdk';
import { Loader2, PackageSearch } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export interface CommandEmptyProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  loading?: boolean;
  hasIcon?: boolean;
  emptyMessage?: ReactNode;
  loadingMessage?: ReactNode;
}

export const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(
  (
    {
      className,
      hasIcon = true,
      loading,
      loadingMessage = 'Loading...',
      emptyMessage = 'No results found',
      children,
      ...restProps
    },
    ref,
  ) => (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn(commandDef.empty.content, className)}
      {...restProps}
    >
      {children}

      {/* Custom children override default behavior */}
      {!children && loading ? (
        <>
          {hasIcon && (
            <Loader2 className={cn(commandDef.empty.icon, 'animate-spin')} />
          )}
          {loadingMessage}
        </>
      ) : (
        <>
          {hasIcon && <PackageSearch className={cn(commandDef.empty.icon)} />}
          {emptyMessage}
        </>
      )}
    </CommandPrimitive.Empty>
  ),
);
