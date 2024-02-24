import { twOverrides } from '@/overrides';

/**
 * Style definition for command components
 */
export const commandDef = twOverrides(
  {
    command:
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-fg',
    empty: 'py-6 text-center text-sm',
    group:
      'overflow-hidden p-1 text-fg [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-fg',
    search: {
      wrapper: 'flex items-center border-b border-separator px-3',
      icon: 'mr-2 h-4 w-4 shrink-0',
      input:
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-fg disabled:cursor-not-allowed disabled:opacity-50',
    },
    item: 'transition-all cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    separator: '-mx-1 h-px bg-separator',
    shortcut: 'ml-auto text-xs tracking-widest text-muted-fg',
  },
  'command',
);
