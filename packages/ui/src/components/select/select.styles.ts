import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

export const selectDef = twOverrides(
  {
    item: {
      base: 'transition-all relative cur-pointer flex w-full cursor-pointer select-none items-center rounded-radius text-input-fg outline-none focus:bg-accent focus:text-accent-fg data-[state=checked]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      text: 'relative',
      icon: 'absolute right-2 flex size-3.5 items-center justify-center',
      size: {
        xs: 'h-6 px-2 text-xs leading-4',
        sm: 'h-7 px-2 text-xs leading-4',
        md: 'h-8 px-3 text-sm leading-4',
        lg: 'h-9 px-3 text-base leading-4',
      },
    },
    label: 'font-semibold text-foreground',
    separator: '-mx-1 my-1 h-px bg-separator',
    trigger: `${globalDef.ring} text-left bg-input ring-input-border flex w-full transition-colors items-center justify-between rounded-radius border border-input-border hover:border-input-fg px-3 py-2 text-sm text-input-fg placeholder:text-placeholder focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
    content: {
      base: 'relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-popper-anchor-width)] overflow-hidden rounded-radius border border-popover-border bg-popover text-popover-fg shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      popper:
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
    },
    viewport: {
      base: 'p-1',
    },
    variants: {
      size: {
        xs: 'h-6 px-2 py-1.5 text-xs leading-4',
        sm: 'h-7 px-2 py-1.5 text-xs leading-4',
        md: 'h-9 px-3 py-2 text-sm leading-4',
        lg: 'h-11 px-3 py-3 text-base leading-4',
      },
      variant: {
        default:
          'border-input-border focus:border-input-fg hover:border-input-fg',
        danger: 'border-danger focus:border-danger hover:border-danger/30',
        success: 'border-success focus:border-success hover:border-success/30',
        warning: 'border-warning focus:border-warning hover:border-warning/30',
        info: 'border-info focus:border-info hover:border-info/30',
      },
    },
  },
  'select',
);

export const selectStyles = cva('', {
  variants: selectDef.variants,
});
