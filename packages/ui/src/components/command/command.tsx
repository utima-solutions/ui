import { Command as CommandPrimitive } from 'cmdk';
import { Search, Loader2, PackageSearch } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '../../utils';
import * as Dialog from '../dialog';

/**
 * Style definition for command components
 */
export const commandVariants = tv({
  slots: {
    base: 'bg-popover text-popover-fg flex size-full flex-col overflow-hidden rounded-md',
    dialog:
      '[&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-0 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5',
    empty: 'flex items-center justify-center gap-2 py-6 text-sm',
    emptyIcon: 'size-5',
    group:
      'text-fg [&_[cmdk-group-heading]]:text-muted-fg overflow-hidden p-1.5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
    inputWrapper: 'px-1.5 pt-1.5',
    inputContainer: 'bg-accent/50 flex items-center rounded-md px-3',
    inputIcon: 'mr-2 size-4 shrink-0',
    inputLoader:
      'ml-2 size-4 shrink-0 animate-spin opacity-0 transition-opacity',
    input:
      'bg-accent placeholder:placeholder flex h-9 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
    item: 'aria-selected:bg-accent aria-selected:text-accent-fg relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-all data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    separator: 'bg-separator -mx-1 h-px',
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
