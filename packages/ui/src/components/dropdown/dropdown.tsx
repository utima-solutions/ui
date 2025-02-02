import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { tv } from 'tailwind-variants';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { DropdownContext, type DropdownSize } from './dropdown-context';

export const dropdownVariants = tv({
  slots: {
    content:
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    subContent:
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    checkboxItem:
      'cursor-pointer relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem:
      'cursor-pointer relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: 'px-2 py-1.5 text-sm font-semibold',
    separator: '-mx-1 my-1 h-px bg-muted',
    shortcut: 'ml-auto text-xs tracking-widest opacity-60',
    subTrigger:
      'flex cursor-default select-none gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
  },
  variants: {
    size: {
      sm: {
        content: 'min-w-[6rem]',
        subContent: 'min-w-[6rem]',
        item: 'px-1 py-0.5 text-xs [&>svg]:size-3 [&>svg]:shrink-0',
        checkboxItem: 'py-0.5 pl-6 pr-1.5 text-xs',
        radioItem: 'py-0.5 pl-6 pr-1.5 text-xs',
        label: 'px-1 py-0.5 text-xs',
        subTrigger: 'px-1 py-0.5 text-xs [&>svg]:size-3 [&>svg]:shrink-0',
      },
      md: {
        item: '[&>svg]:size-4 [&>svg]:shrink-0',
        subTrigger: '[&>svg]:size-4 [&>svg]:shrink-0',
        label: 'px-1.5 py-1 text-xs',
      },
      lg: {
        content: 'min-w-[10rem]',
        subContent: 'min-w-[10rem]',
        item: 'px-2.5 py-2 text-sm [&>svg]:size-5 [&>svg]:shrink-0',
        checkboxItem: 'py-2 pl-10 pr-2.5 text-sm',
        radioItem: 'py-2 pl-10 pr-2.5 text-sm',
        label: 'px-2.5 py-2 text-sm',
        subTrigger: 'px-2.5 py-2 text-sm [&>svg]:size-5 [&>svg]:shrink-0',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface DropdownProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {
  size?: DropdownSize;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown({ size = 'md', ...props }, ref) {
    return (
      <DropdownContext.Provider value={{ size }}>
        <DropdownMenuPrimitive.Root {...props} />
      </DropdownContext.Provider>
    );
  },
);
