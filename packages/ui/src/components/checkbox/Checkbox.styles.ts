import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

export const checkboxDef = twOverrides(
  {
    checkbox: `${globalDef.ring} peer transition-all shrink-0 rounded-sm border border-input-border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:bg-input-border/25`,
    indicator: 'flex items-center justify-center text-current',
    icon: '',
    iconSize: {
      xs: 'h-2.5 w-2.5',
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
      xl: 'h-5 w-5',
    },
    variants: {
      variant: {
        primary:
          'hover:data-[state=checked]:bg-primary/80 active:data-[state=checked]:bg-primary/90 data-[state=checked]:bg-primary data-[state=checked]:text-primary-fg data-[state=checked]:border-primary ring-primary',
        secondary:
          'hover:data-[state=checked]:bg-secondary/80 active:data-[state=checked]:bg-secondary/90 data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-fg data-[state=checked]:border-secondary ring-secondary',
        muted:
          'hover:data-[state=checked]:bg-muted/80 active:data-[state=checked]:bg-muted/90 data-[state=checked]:bg-muted data-[state=checked]:text-muted-fg data-[state=checked]border:text-muted ring-muted',
        success:
          'hover:data-[state=checked]:bg-success/80 active:data-[state=checked]:bg-success/90 data-[state=checked]:bg-success data-[state=checked]:text-success-fg data-[state=checked]:border-success ring-success',
        danger:
          'hover:data-[state=checked]:bg-danger/80 active:data-[state=checked]:bg-danger/90 data-[state=checked]:bg-danger data-[state=checked]:text-danger-fg data-[state=checked]:border-danger ring-danger',
        warning:
          'hover:data-[state=checked]:bg-warning/80 active:data-[state=checked]:bg-warning/90 data-[state=checked]:bg-warning data-[state=checked]:text-warning-fg data-[state=checked]:border-warning ring-warning',
        info: 'hover:data-[state=checked]:bg-info/80 active:data-[state=checked]:bg-info/90 data-[state=checked]:bg-info data-[state=checked]:text-info-fg data-[state=border]:text-info ring-info',
      },
      size: {
        xs: 'h-3 w-3',
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6',
      },
    },
  },
  'checkbox',
);

export const checkboxStyles = cva(checkboxDef.checkbox, {
  variants: checkboxDef.variants,
});
