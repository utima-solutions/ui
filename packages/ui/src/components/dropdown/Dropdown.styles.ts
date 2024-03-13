import { twOverrides } from '@/overrides';

export const dropdownDef = twOverrides(
  {
    content:
      'z-50 min-w-[8rem] overflow-hidden rounded-radius border border-popover-border bg-popover p-1 text-popover-fg shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    checkbox: {
      item: 'relative flex cursor-pointer select-none items-center rounded-radius py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
      icon: 'h-4 w-4',
    },
    radio: {
      item: 'relative flex cursor-pointer select-none items-center rounded-radius py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
      icon: 'h-2 w-2 fill-current',
    },
    item: 'relative flex cursor-pointer select-none items-center rounded-radius px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: 'px-2 py-1.5 text-sm font-semibold',
    separator: '-mx-1 my-1 h-px bg-separator',
    subContent:
      'z-50 min-w-[8rem] overflow-hidden rounded-radius border border-popover-border bg-popover p-1 text-popover-fg shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    subTrigger: {
      trigger:
        'flex cursor-pointer select-none items-center rounded-radius px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      icon: 'ml-auto h-4 w-4',
    },
  },
  'dropdown',
);
