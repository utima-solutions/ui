import { twOverrides } from '@/overrides';

/**
 * Style definition for command components
 */
export const commandDef = twOverrides(
  {
    command:
      'flex h-full w-full flex-col overflow-hidden rounded-radius bg-popover text-popover-fg',
    dialog: {
      content: 'overflow-hidden p-0',
      command:
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
    },
    empty: {
      content: 'py-6 text-sm flex items-center justify-center gap-2',
      icon: 'size-5',
    },
    group:
      'overflow-hidden p-1.5 text-fg [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-fg',
    input: {
      wrapper: 'px-1.5 pt-1.5',
      container: 'flex bg-accent/50 rounded-radius items-center px-3',
      icon: 'mr-2 h-4 w-4 shrink-0',
      loader: 'animate-spin transition-opacity opacity-0 ml-2 size-4 shrink-0',
      input:
        'bg-accent flex h-9 w-full rounded-radius bg-transparent py-3 text-sm outline-none placeholder:placeholder disabled:cursor-not-allowed disabled:opacity-50',
    },
    item: 'transition-all cursor-pointer relative flex select-none items-center rounded-radius px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    separator: '-mx-1 h-px bg-separator',
  },
  'command',
);
