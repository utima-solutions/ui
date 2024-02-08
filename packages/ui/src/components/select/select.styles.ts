import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const selectDef = twOverrides(
  {
    item: {
      base: 'relative cur-pointer flex w-full cursor-pointer select-none items-center rounded text-foreground outline-none focus:bg-input-border/35 transition-colors focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      text: 'relative left-5',
      icon: 'absolute left-2 flex size-3.5 items-center justify-center',
    },
    label: 'py-1.5 pl-2 font-semibold text-foreground',
    separator: '-mx-1 my-1 h-px bg-muted',
    trigger:
      'flex w-full transition-colors items-center justify-between rounded-md border border-input-border focus-visible:border-foreground hover:border-foreground bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:border-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    content: {
      base: 'relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-popper-anchor-width)] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      popper:
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
    },
    viewport: {
      base: 'p-1',
    },
    variants: {
      size: {
        sm: 'h-7 px-2 py-1.5 text-xs',
        md: 'h-8 px-3 py-2 text-sm',
        lg: 'h-10 px-3 py-3 text-base',
      },
      variant: {
        default:
          'border-input-border focus-visible:border-foreground hover:border-foreground',
        danger:
          'border-danger focus-visible:border-danger hover:border-danger/30',
        success:
          'border-success focus-visible:border-success hover:border-success/30',
      },
    },
  },
  'select',
);

export const selectStyles = cva('', {
  variants: selectDef.variants,
});
