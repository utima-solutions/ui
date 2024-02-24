import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const switchDef = twOverrides(
  {
    switch:
      'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus:ring-2 focus:ring-offset-1 ring-input-border disabled:cursor-not-allowed disabled:opacity-65 data-[state=unchecked]:bg-muted hover:data-[state=unchecked]:bg-muted/80',
    thumb:
      'pointer-events-none block rounded-full bg-input ring-0 transition-transform data-[state=unchecked]:translate-x-0',
    thumbSize: {
      xs: 'h-2 w-2 data-[state=checked]:translate-x-3',
      sm: 'h-3 w-3 data-[state=checked]:translate-x-3',
      md: 'h-4 w-4 data-[state=checked]:translate-x-4',
      lg: 'h-5 w-5 data-[state=checked]:translate-x-5',
    },
    variants: {
      variant: {
        primary:
          'data-[state=checked]:bg-primary text-primary-fg hover:data-[state=checked]:bg-primary/80 active:data-[state=checked]:bg-primary/90',
        secondary:
          'data-[state=checked]:bg-secondary text-secondary-fg hover:data-[state=checked]:bg-secondary/80 active:data-[state=checked]:bg-secondary/90',
        muted:
          'data-[state=checked]:bg-default text-default-fg hover:data-[state=checked]:bg-default/80 active:data-[state=checked]:bg-default/90',
        success:
          'data-[state=checked]:bg-success text-success-fg hover:data-[state=checked]:bg-success/80 active:data-[state=checked]:bg-success/90',
        danger:
          'data-[state=checked]:bg-danger text-danger-fg hover:data-[state=checked]:bg-danger/80 active:data-[state=checked]:bg-danger/90',
        warning:
          'data-[state=checked]:bg-warning text-warning-fg hover:data-[state=checked]:bg-warning/80 active:data-[state=checked]:bg-warning/90',
        info: 'data-[state=checked]:bg-info text-info-fg hover:data-[state=checked]:bg-info/80 active:data-[state=checked]:bg-info/90',
      },
      size: {
        xs: 'h-3 w-6',
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
  },
  'switch',
);

export const switchStyles = cva(switchDef.switch, {
  variants: switchDef.variants,
});
