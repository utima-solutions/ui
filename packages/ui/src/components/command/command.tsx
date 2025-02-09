import { tv } from 'tailwind-variants';
import { Command as CommandPrimitive } from 'cmdk';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ElementRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';
import * as Dialog from '../dialog';
import { Search, Loader2, PackageSearch } from 'lucide-react';

/**
 * Style definition for command components
 */
export const commandVariants = tv({
  slots: {
    base: 'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-fg',
    dialog:
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 overflow-hidden p-0',
    empty: 'py-6 text-sm flex items-center justify-center gap-2',
    emptyIcon: 'size-5',
    group:
      'overflow-hidden p-1.5 text-fg [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-fg',
    inputWrapper: 'px-1.5 pt-1.5',
    inputContainer: 'flex bg-accent/50 rounded-md items-center px-3',
    inputIcon: 'mr-2 h-4 w-4 shrink-0',
    inputLoader:
      'animate-spin transition-opacity opacity-0 ml-2 size-4 shrink-0',
    input:
      'bg-accent flex h-9 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:placeholder disabled:cursor-not-allowed disabled:opacity-50',
    item: 'transition-all cursor-pointer relative flex select-none items-center rounded-md px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-fg data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    separator: '-mx-1 h-px bg-separator',
  },
});

export const Command = forwardRef<
  ComponentRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <CommandPrimitive
      ref={ref}
      data-uui-command
      className={cn(styles.base(), className)}
      {...restProps}
    />
  );
});

export const CommandDialog = forwardRef<
  ComponentRef<typeof Dialog.Content>,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <Dialog.Content
      ref={ref}
      data-uui-command-dialog
      className={cn(styles.dialog(), className)}
      {...restProps}
    >
      <Command className={styles.base()}>{children}</Command>
    </Dialog.Content>
  );
});

export const CommandSeparator = forwardRef<
  ComponentRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <CommandPrimitive.Separator
      ref={ref}
      data-uui-command-separator
      className={cn(styles.separator(), className)}
      {...restProps}
    />
  );
});

export const CommandList = forwardRef<
  ComponentRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <CommandPrimitive.List
      ref={ref}
      data-uui-command-list
      className={cn(styles.list(), className)}
      {...restProps}
    />
  );
});

export interface CommandInputProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  loading?: boolean;
}

export const CommandInput = forwardRef<
  ComponentRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, loading = false, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <div className={styles.inputWrapper()} data-uui-command-input-wrapper=''>
      <div className={styles.inputContainer()}>
        <Search className={styles.inputIcon()} />
        <CommandPrimitive.Input
          ref={ref}
          data-uui-command-input
          className={cn(styles.input(), className)}
          {...restProps}
        />
        <Loader2
          className={cn(styles.inputLoader(), loading && 'opacity-100')}
        />
      </div>
    </div>
  );
});

export const CommandGroup = forwardRef<
  ComponentRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...restProps }, ref) => {
  const styles = commandVariants();
  return (
    <CommandPrimitive.Group
      ref={ref}
      data-uui-command-group
      className={cn(styles.group(), className)}
      {...restProps}
    />
  );
});

export interface CommandEmptyProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  loading?: boolean;
  hasIcon?: boolean;
  emptyMessage?: ReactNode;
  loadingMessage?: ReactNode;
}

export const CommandEmpty = forwardRef<
  ComponentRef<typeof CommandPrimitive.Empty>,
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
  ) => {
    const styles = commandVariants();
    return (
      <CommandPrimitive.Empty
        ref={ref}
        data-uui-command-empty
        className={cn(styles.empty(), className)}
        {...restProps}
      >
        {children}

        {/* Custom children override default behavior */}
        {!children && loading ? (
          <>
            {hasIcon && (
              <Loader2 className={cn(styles.emptyIcon(), 'animate-spin')} />
            )}
            {loadingMessage}
          </>
        ) : (
          <>
            {hasIcon && <PackageSearch className={cn(styles.emptyIcon())} />}
            {emptyMessage}
          </>
        )}
      </CommandPrimitive.Empty>
    );
  },
);

export const CommandItem = forwardRef<
  ComponentRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...restProps }, ref) => {
  const styles = commandVariants();

  return (
    <CommandPrimitive.Item
      ref={ref}
      data-uui-command-item
      className={cn(styles.item(), className)}
      {...restProps}
    />
  );
});
